export default function GSSoC() {
  const prs = [
    { repo: "GollaBharath/Gamify", title: "Fix email case sensitivity in auth", url: "https://github.com/GollaBharath/Gamify/pull/43" },
    { repo: "Richajaishwal0/Trip_assistant", title: "Add keyboard shortcuts to chatbot", url: "https://github.com/Richajaishwal0/Trip_assistant/pull/121" },
    { repo: "PROfESSOR-V/CodeDesk", title: "Fix ESM/CommonJS module inconsistency", url: "https://github.com/PROfESSOR-V/CodeDesk/pull/92" },
    { repo: "ajaynegi45/Old-School-Game", title: "Implement complete Simon Says game", url: "https://github.com/ajaynegi45/Old-School-Game/pull/120" },
  ];

  const colors = [
    "142, 249, 252",
    "142, 252, 204",
    "142, 252, 157",
    "215, 252, 142",
  ];

  return (
    <div className="min-h-screen bg-[#171717] flex items-center justify-center p-4 md:p-8">
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": prs.length } as React.CSSProperties}>
          {prs.map((pr, index) => (
            <a
              key={index}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={
                {
                  "--index": index,
                  "--color-card": colors[index % colors.length],
                } as React.CSSProperties
              }
            >
              <div className="img">
                <div className="card-content">
                  <div className="repo-name">{pr.repo}</div>
                  <div className="pr-title">{pr.title}</div>
                  <button className="github-button">View on GitHub</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
