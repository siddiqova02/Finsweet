import "./header.css";
import logo from "../../../public/assets/images/finsweet.svg";
export const Header = () => {
  return (
    <header>
        <div className="header-container">
          <img src={logo} alt="" />
          <div className="pages">
            <nav className="header-nav">
              <a className="home" href="/">Home</a>
              <a className="pages" href="/">About us</a>
              <a className="pages" href="/">Features</a>
              <a className="pages" href="/">Pricing</a>
              <a className="pages" href="/">FAQ</a>
              <a className="pages" href="/">Blog</a>
              <button type="submit" className="contact_us">Contact us</button>
            </nav>
          </div>
        </div>
    </header>
  );
};
