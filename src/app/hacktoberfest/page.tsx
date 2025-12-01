export default function Hacktoberfest() {
  const prs = [
    { 
      repo: "Heisen47/itinerarly", 
      title: "Centralize Gemini error handling with retry & timeout", 
      url: "https://github.com/Heisen47/itinerarly/pull/170" 
    },
    { 
      repo: "Pritam-nitj/ChatApp", 
      title: "Prevent image upload crash & render messages instantly", 
      url: "https://github.com/Pritam-nitj/ChatApp/pull/50" 
    },
    { 
      repo: "lingdojo/kana-dojo", 
      title: "Import/export user settings and stats (backup/restore)", 
      url: "https://github.com/lingdojo/kana-dojo/pull/65" 
    },
    { 
      repo: "amananandrai/document-editor-with-tiptap", 
      title: "Derive currentPageIndex from functional updates", 
      url: "https://github.com/amananandrai/document-editor-with-tiptap/pull/97" 
    },
    { 
      repo: "RabindranathChanda/Student_Management_System", 
      title: "Add baseline versioned schema scripts with seed placeholder", 
      url: "https://github.com/RabindranathChanda/Student_Management_System/pull/23" 
    },
    { 
      repo: "alirezazim03/OpenUI-Library", 
      title: "Add client-side tag filtering to components list", 
      url: "https://github.com/alirezazim03/OpenUI-Library/pull/74" 
    },
    { 
      repo: "ajaynegi45/Old-School-Game", 
      title: "Add Simon Says memory sequence game", 
      url: "https://github.com/ajaynegi45/Old-School-Game/pull/120" 
    },
  ];

  const colors = [
    "142, 249, 252",
    "142, 252, 204",
    "142, 252, 157",
    "215, 252, 142",
    "252, 252, 142",
    "252, 208, 142",
    "252, 142, 142",
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
