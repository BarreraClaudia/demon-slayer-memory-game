import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="flame-bg"></div>

      <div className="header-content">
        <p className="japanese-title">鬼滅の刃</p>
        <h1>Demon Slayer Memory Game</h1>
        <p>Click each card once — don't repeat!</p>
      </div>

      <div className="slash"></div>
    </header>
  );
}

export default Header;
