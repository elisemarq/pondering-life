// TODO: replace with your actual Focus Journal URL (e.g. https://focus-journal.vercel.app)
const FOCUS_JOURNAL_URL = "https://focus-journal.vercel.app";
const LISTING_WRITER_URL = "https://lister.pondering.life";
const KOFI_URL = "https://ko-fi.com/focusjournal";

const tools = [
  {
    title: "Focus Journal",
    blurb:
      "A tiny interstitial journal. Note what you're switching to, every time your attention shifts.",
    href: FOCUS_JOURNAL_URL,
    external: true,
    emoji: "📓",
  },
  {
    title: "Listing Writer",
    blurb:
      "Dump a pile of item photos. Get ready-to-paste Poshmark listings, one per item.",
    href: LISTING_WRITER_URL,
    external: true,
    emoji: "🪄",
  },
];

const cardStyle = {
  display: "block",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(110,231,199,0.15)",
  borderRadius: "16px",
  padding: "20px 22px",
  marginBottom: "14px",
  textDecoration: "none",
  color: "inherit",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 20px 80px",
        maxWidth: "520px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ marginBottom: "36px" }}>
        <div
          style={{
            fontSize: "10px",
            color: "#6860a0",
            letterSpacing: "3px",
            marginBottom: "10px",
          }}
        >
          PONDERING · LIFE
        </div>
        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "28px",
            fontWeight: "normal",
            color: "#6ee7c7",
          }}
        >
          Small, useful tools.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#a098c8",
            lineHeight: 1.7,
          }}
        >
          Things I built to solve real problems in my own life and figured I&rsquo;d
          share. Free, no signup, your data stays yours.
        </p>
      </header>

      <section>
        {tools.map((t) => (
          <a
            key={t.title}
            href={t.href}
            target={t.external ? "_blank" : undefined}
            rel={t.external ? "noopener noreferrer" : undefined}
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <div style={{ fontSize: "28px", lineHeight: 1, marginTop: "2px" }}>
                {t.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#ede8ff",
                    marginBottom: "6px",
                  }}
                >
                  {t.title}
                  {t.external && (
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: "11px",
                        color: "#6860a0",
                        marginLeft: "8px",
                      }}
                    >
                      ↗
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#a098c8",
                    lineHeight: 1.7,
                  }}
                >
                  {t.blurb}
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>

      <footer
        style={{
          marginTop: "auto",
          paddingTop: "60px",
          textAlign: "center",
          fontSize: "11px",
          color: "#6860a0",
          letterSpacing: "1px",
        }}
      >
        <a
          href={KOFI_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6860a0" }}
        >
          ☕ tip jar
        </a>
      </footer>
    </main>
  );
}
