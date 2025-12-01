export default function Hacktoberfest() {
  const prs = [
    { repo: "facebook/react", title: "Fix useState hook memory leak", tag: "Bugfix", url: "https://github.com/facebook/react/pull/1" },
    { repo: "vercel/next.js", title: "Add new routing feature", tag: "Feature", url: "https://github.com/vercel/next.js/pull/2" },
    { repo: "microsoft/vscode", title: "Update API documentation", tag: "Docs", url: "https://github.com/microsoft/vscode/pull/3" },
    { repo: "nodejs/node", title: "Improve performance", tag: "Feature", url: "https://github.com/nodejs/node/pull/4" },
    { repo: "tailwindlabs/tailwindcss", title: "Fix grid spacing", tag: "Bugfix", url: "https://github.com/tailwindlabs/tailwindcss/pull/5" },
    { repo: "sveltejs/svelte", title: "Add TypeScript support", tag: "Feature", url: "https://github.com/sveltejs/svelte/pull/6" },
    { repo: "angular/angular", title: "Fix form validation", tag: "Bugfix", url: "https://github.com/angular/angular/pull/7" },
    { repo: "vuejs/vue", title: "Update guide", tag: "Docs", url: "https://github.com/vuejs/vue/pull/8" },
    { repo: "webpack/webpack", title: "Add new loader", tag: "Feature", url: "https://github.com/webpack/webpack/pull/9" },
    { repo: "prettier/prettier", title: "Fix formatting issue", tag: "Bugfix", url: "https://github.com/prettier/prettier/pull/10" },
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
    "204, 142, 252",
    "142, 202, 252",
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Bugfix":
        return "bg-red-500";
      case "Feature":
        return "bg-green-500";
      case "Docs":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] flex items-center justify-center p-8">
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
                  <span className={`tag ${getTagColor(pr.tag)}`}>{pr.tag}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
