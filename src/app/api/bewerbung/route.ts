// Route Handler: nimmt die Bewerbung aus dem Karriere-Funnel entgegen und
// verschickt sie serverseitig per E-Mail an info@hsf-dresden.de.
// Versand über die Resend HTTP-API (kein npm-Paket nötig).
//
// Benötigte Umgebungsvariablen (in Vercel setzen):
//   RESEND_API_KEY   – API-Key aus dem Resend-Account
//   BEWERBUNG_FROM   – Absender auf verifizierter Domain,
//                      z. B. "Bewerbung <bewerbung@hsf-dresden.de>"

const EMPFAENGER = "info@hsf-dresden.de";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  stelle?: string;
  name?: string;
  email?: string;
  telefon?: string;
  nachricht?: string;
};

export async function POST(req: Request) {
  let data: Body;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const stelle = (data.stelle || "Initiativbewerbung").trim();
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const telefon = (data.telefon || "").trim();
  const nachricht = (data.nachricht || "").trim();

  if (!name || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BEWERBUNG_FROM;
  if (!apiKey || !from) {
    // Ohne konfigurierten Versand: Client zeigt den mailto-Fallback.
    return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const text =
    `Stelle: ${stelle}\n` +
    `Name: ${name}\n` +
    `E-Mail: ${email}\n` +
    `Telefon: ${telefon || "—"}\n\n` +
    `${nachricht || "(keine Nachricht)"}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: EMPFAENGER,
        reply_to: email,
        subject: `Bewerbung: ${stelle} – ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "network" }, { status: 502 });
  }
}
