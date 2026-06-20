const REPO_URL = "https://github.com/elisemarq/poshmark-lister-web";
const DEPLOY_URL =
  "https://vercel.com/new/clone" +
  "?repository-url=" +
  encodeURIComponent(REPO_URL) +
  "&env=ANTHROPIC_API_KEY,APP_SECRET" +
  "&envDescription=" +
  encodeURIComponent(
    "Your Anthropic API key (from console.anthropic.com) plus any access code to protect the deployed app"
  ) +
  "&envLink=" +
  encodeURIComponent(REPO_URL + "#setup") +
  "&project-name=listing-writer" +
  "&repository-name=listing-writer";
const KOFI_URL = "https://ko-fi.com/focusjournal";

export const metadata = {
  title: "Listing Writer · pondering.life",
  description:
    "A free tool that turns a pile of item photos into ready-to-paste Poshmark listings using Claude.",
};

const labelStyle = {
  fontSize: "10px",
  color: "#6860a0",
  letterSpacing: "3px",
  marginBottom: "10px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(110,231,199,0.15)",
  borderRadius: "16px",
  padding: "24px",
  marginBottom: "18px",
};

const primaryBtn = {
  display: "block",
  width: "100%",
  textAlign: "center",
  background: "linear-gradient(135deg, #6ee7c7, #4ab880)",
  border: "1px solid transparent",
  borderRadius: "10px",
  padding: "14px",
  fontSize: "13px",
  fontFamily: "inherit",
  color: "#0c0c14",
  fontWeight: "bold",
  letterSpacing: "1px",
  textDecoration: "none",
};

const secondaryBtn = {
  display: "block",
  width: "100%",
  textAlign: "center",
  background: "rgba(110,231,199,0.1)",
  border: "1px solid rgba(110,231,199,0.3)",
  borderRadius: "10px",
  padding: "14px",
  fontSize: "13px",
  fontFamily: "inherit",
  color: "#6ee7c7",
  letterSpacing: "1px",
  textDecoration: "none",
};

const stepNum = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  background: "rgba(110,231,199,0.15)",
  color: "#6ee7c7",
  fontSize: "11px",
  marginRight: "12px",
  flexShrink: 0,
};

export default function ListingWriterPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px 60px",
        maxWidth: "520px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <a
          href="/"
          style={{
            fontSize: "11px",
            color: "#6860a0",
            letterSpacing: "1px",
            textDecoration: "none",
          }}
        >
          ← pondering.life
        </a>
      </div>

      <header style={{ marginBottom: "28px" }}>
        <div style={labelStyle}>TOOLS · LISTING WRITER</div>
        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "28px",
            fontWeight: "normal",
            color: "#6ee7c7",
          }}
        >
          Listing Writer
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#a098c8",
            lineHeight: 1.7,
          }}
        >
          Dump a pile of item photos. The app sorts them into separate items,
          writes a polished Poshmark listing for each one, and gives you a
          paste-ready block of title, description, and details.
        </p>
      </header>

      <div style={cardStyle}>
        <div style={labelStyle}>WHAT IT DOES</div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontSize: "13px",
            color: "#ede8ff",
            lineHeight: 2,
          }}
        >
          <li>📸 Upload up to 100 photos at once</li>
          <li>🔀 Auto-groups them into separate items</li>
          <li>🪄 Writes title, description, condition, price for each</li>
          <li>📋 Copy-paste straight into the Poshmark app</li>
          <li>📑 Export everything as CSV or JSON</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <div style={labelStyle}>RUN YOUR OWN COPY · FREE</div>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: "13px",
            color: "#a098c8",
            lineHeight: 1.7,
          }}
        >
          One click deploys your own private copy on Vercel&rsquo;s free tier. You
          bring your own Anthropic API key, so you only pay Anthropic for your own
          usage (usually a few cents per batch). I never see your photos or your
          key.
        </p>
        <a
          href={DEPLOY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={primaryBtn}
        >
          ▲ Deploy to Vercel
        </a>
        <div style={{ height: "10px" }} />
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={secondaryBtn}
        >
          ⌥ View source on GitHub
        </a>
      </div>

      <div style={cardStyle}>
        <div style={labelStyle}>SETUP · 3 STEPS</div>

        <div style={{ display: "flex", marginBottom: "14px" }}>
          <span style={stepNum}>1</span>
          <div style={{ fontSize: "13px", color: "#ede8ff", lineHeight: 1.7 }}>
            Get an Anthropic API key from{" "}
            <a
              href="https://console.anthropic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              console.anthropic.com
            </a>
            .
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "14px" }}>
          <span style={stepNum}>2</span>
          <div style={{ fontSize: "13px", color: "#ede8ff", lineHeight: 1.7 }}>
            Click <em>Deploy to Vercel</em>. When asked for environment variables,
            paste your key as <code style={{ color: "#6ee7c7" }}>ANTHROPIC_API_KEY</code>{" "}
            and pick any access code for{" "}
            <code style={{ color: "#6ee7c7" }}>APP_SECRET</code>.
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <span style={stepNum}>3</span>
          <div style={{ fontSize: "13px", color: "#ede8ff", lineHeight: 1.7 }}>
            Open your new Vercel URL, enter the access code once, and start
            listing.
          </div>
        </div>
      </div>

      <div
        style={{
          background: "rgba(255, 107, 107, 0.05)",
          border: "1px solid rgba(255, 107, 107, 0.25)",
          borderRadius: "16px",
          padding: "24px",
          textAlign: "center",
          marginBottom: "18px",
        }}
      >
        <div style={{ ...labelStyle, color: "#d08c8c" }}>
          IF IT SAVED YOU TIME
        </div>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: "13px",
            color: "#a098c8",
            lineHeight: 1.7,
          }}
        >
          This tool is free and open source. If it helped you list faster, a
          small tip keeps the lights on.
        </p>
        <a
          href={KOFI_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...primaryBtn,
            background: "linear-gradient(135deg, #ff6b6b, #d04040)",
            color: "#fff",
          }}
        >
          ☕ Tip on Ko-fi
        </a>
      </div>
    </main>
  );
}
