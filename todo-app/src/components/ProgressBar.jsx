import "./ProgressBar.css";

export default function ProgressBar({ total, completed }) {
  if (total === 0) return null;
  const pct = Math.round((completed / total) * 100);

  return (
    <div className="progress-bar" aria-label={`${pct}% complete`}>
      <div className="progress-bar__meta">
        <span>Progress</span>
        <span>{pct}%</span>
      </div>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
