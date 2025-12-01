export default function SSOC() {
  const prs = [
    { repo: "tensorflow/tensorflow", title: "Add new optimizer", tag: "Feature", url: "https://github.com/tensorflow/tensorflow/pull/1" },
    { repo: "pytorch/pytorch", title: "Fix CUDA memory leak", tag: "Bugfix", url: "https://github.com/pytorch/pytorch/pull/2" },
    { repo: "scikit-learn/scikit-learn", title: "Update ML algorithms docs", tag: "Docs", url: "https://github.com/scikit-learn/scikit-learn/pull/3" },
    { repo: "pandas-dev/pandas", title: "Add DataFrame method", tag: "Feature", url: "https://github.com/pandas-dev/pandas/pull/4" },
    { repo: "numpy/numpy", title: "Fix array indexing", tag: "Bugfix", url: "https://github.com/numpy/numpy/pull/5" },
    { repo: "opencv/opencv", title: "Add image processing", tag: "Feature", url: "https://github.com/opencv/opencv/pull/6" },
    { repo: "keras-team/keras", title: "Fix model saving", tag: "Bugfix", url: "https://github.com/keras-team/keras/pull/7" },
    { repo: "matplotlib/matplotlib", title: "Update plotting docs", tag: "Docs", url: "https://github.com/matplotlib/matplotlib/pull/8" },
    { repo: "jupyter/notebook", title: "Add cell execution", tag: "Feature", url: "https://github.com/jupyter/notebook/pull/9" },
    { repo: "scipy/scipy", title: "Fix optimization bug", tag: "Bugfix", url: "https://github.com/scipy/scipy/pull/10" },
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
