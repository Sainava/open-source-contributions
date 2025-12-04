export default function GSSoC() {
  const prs = [
    { repo: "tensorflow/tensorflow", title: "Add model optimization", url: "https://github.com/tensorflow/tensorflow/pull/1" },
    { repo: "pytorch/pytorch", title: "Fix training loop bug", url: "https://github.com/pytorch/pytorch/pull/2" },
    { repo: "scikit-learn/scikit-learn", title: "Update documentation", url: "https://github.com/scikit-learn/scikit-learn/pull/3" },
    { repo: "keras-team/keras", title: "Add new layer type", url: "https://github.com/keras-team/keras/pull/4" },
    { repo: "pandas-dev/pandas", title: "Fix DataFrame bug", url: "https://github.com/pandas-dev/pandas/pull/5" },
    { repo: "numpy/numpy", title: "Performance improvement", url: "https://github.com/numpy/numpy/pull/6" },
  ];

  const colors = [
    "142, 249, 252",
    "142, 252, 204",
    "142, 252, 157",
    "215, 252, 142",
    "252, 252, 142",
    "252, 208, 142",
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
