import "./Header.css";

function Header() {
  return (
    <header>
      <p className="title">My Stopwatch</p>
      <p className="tag">
        By{" "}
        <a href="https://github.com/Shtrust" target="_blank">
          @Shtrust
        </a>
      </p>
    </header>
  );
}

export default Header;
