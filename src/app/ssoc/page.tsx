export default function SSOC() {
  const prs = [
    { repo: "alienx5499/SortVision", title: "Add interactive tutorial system", url: "https://github.com/alienx5499/SortVision/pull/251" },
    { repo: "alienx5499/SortVision", title: "Implement Bucket Sort in C", url: "https://github.com/alienx5499/SortVision/pull/447" },
    { repo: "alienx5499/SortVision", title: "Implement Selection Sort in Haskell", url: "https://github.com/alienx5499/SortVision/pull/561" },
    { repo: "alienx5499/SortVision", title: "Implement Bubble Sort in Java", url: "https://github.com/alienx5499/SortVision/pull/177" },
    { repo: "alienx5499/SortVision", title: "Implement Radix Sort in C", url: "https://github.com/alienx5499/SortVision/pull/448" },
    { repo: "alienx5499/SortVision", title: "Implement Quick Sort in R", url: "https://github.com/alienx5499/SortVision/pull/449" },
    { repo: "alienx5499/SortVision", title: "Implement Bubble Sort in C", url: "https://github.com/alienx5499/SortVision/pull/459" },
    { repo: "Saumy1905/PYQFort", title: "Add B.Tech CSE 4th sem pyqs and syllabus", url: "https://github.com/Saumy1905/PYQFort/pull/444" },
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
