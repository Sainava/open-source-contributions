export default function OSCI() {
  const prs = [
    { repo: "django/django", title: "Add middleware support", tag: "Feature", url: "https://github.com/django/django/pull/1" },
    { repo: "flask/flask", title: "Fix session handling", tag: "Bugfix", url: "https://github.com/flask/flask/pull/2" },
    { repo: "expressjs/express", title: "Update routing docs", tag: "Docs", url: "https://github.com/expressjs/express/pull/3" },
    { repo: "rails/rails", title: "Improve ActiveRecord", tag: "Feature", url: "https://github.com/rails/rails/pull/4" },
    { repo: "laravel/laravel", title: "Fix validation bug", tag: "Bugfix", url: "https://github.com/laravel/laravel/pull/5" },
    { repo: "spring-projects/spring", title: "Add security feature", tag: "Feature", url: "https://github.com/spring-projects/spring/pull/6" },
    { repo: "dotnet/aspnetcore", title: "Fix routing issue", tag: "Bugfix", url: "https://github.com/dotnet/aspnetcore/pull/7" },
    { repo: "fastapi/fastapi", title: "Add OpenAPI docs", tag: "Docs", url: "https://github.com/fastapi/fastapi/pull/8" },
    { repo: "nestjs/nest", title: "Add GraphQL support", tag: "Feature", url: "https://github.com/nestjs/nest/pull/9" },
    { repo: "gin-gonic/gin", title: "Fix middleware chain", tag: "Bugfix", url: "https://github.com/gin-gonic/gin/pull/10" },
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
