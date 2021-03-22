import "./footer.css";
import gitHubLogo from "./githublogo.png";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="gitLinks">
        <a className="footerLinks" href="https://github.com/NickFerra">Nick <img className="footerImg"src={gitHubLogo} alt="GitHub logo" /> </a>
        <a className="footerLinks" href="https://github.com/JoeFoster-cn">Joe <img className="footerImg"src={gitHubLogo} alt="GitHub logo" /> </a>
        <a className="footerLinks" href="https://github.com/jthomasw88">Jordan <img className="footerImg"src={gitHubLogo} alt="GitHub logo" /> </a>
        <a className="footerLinks" href="https://github.com/SteIddon">Ste <img className="footerImg"src={gitHubLogo} alt="GitHub logo" /> </a>
      </div>
        <div className="footerWho">
            <p>This has been created by <a className="footerLinks" href="https://github.com/TheBigFactHunt">TheBigFactHunt</a> organisation</p>
        </div>
    </div>
  );
};

export default Footer;