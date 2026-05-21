import "./Header.css";

export default function Header({ active, completed }) {
  return (
    <header className="header">
      <p className="header__eyebrow">My Tasks</p>
      <div className="header__stats">
        <span className="header__count">{active}</span>
        <span className="header__label">
          remaining &middot; {completed} done
        </span>
      </div>
    </header>
  );
}
