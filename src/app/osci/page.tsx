export default function OSCI() {
  const prs = [
    { repo: "GollaBharath/Gamify", title: "Add rate limiting to auth endpoints", url: "https://github.com/GollaBharath/Gamify/pull/73" },
    { repo: "AvishkarPatil/JalWiKi", title: "Enable anonymous read access and pagination", url: "https://github.com/AvishkarPatil/JalWiKi/pull/58" },
    { repo: "Nayanika1402/RuRal-ReTreats", title: "Fix favicon 404 errors across HTML files", url: "https://github.com/Nayanika1402/RuRal-ReTreats/pull/505" },
    { repo: "devayanm/ChatterSpace", title: "Enhanced channel creation with input validation", url: "https://github.com/devayanm/ChatterSpace/pull/22" },
    { repo: "AvishkarPatil/IssueMatch", title: "Add backend .env.example for easier onboarding", url: "https://github.com/AvishkarPatil/IssueMatch/pull/27" },
    { repo: "Sushma-1706/CodeClarity", title: "Add language-specific boilerplate snippets", url: "https://github.com/Sushma-1706/CodeClarity/pull/53" },
    { repo: "Sushma-1706/CodeClarity", title: "Replace Textarea with CodeMirror editor", url: "https://github.com/Sushma-1706/CodeClarity/pull/46" },
    { repo: "priyansh-narang2308/KiddieGPT", title: "Add reusable useDebounce hook for story input", url: "https://github.com/priyansh-narang2308/KiddieGPT/pull/56" },
  ];

  const colors = [
    "142, 249, 252",
    "142, 252, 204",
    "142, 252, 157",
    "215, 252, 142",
    "252, 252, 142",
    "252, 208, 142",
    "252, 142, 142",
    "252, 142, 239",
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
                  "--color-card": colors[index],
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
