import "./footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="gitLinks">
        <a className="footerLinks" href="https://github.com/NickFerra">Nick </a>
        <a className="footerLinks" href="https://github.com/JoeFoster-cn">Joe </a>
        <a className="footerLinks" href="https://github.com/jthomasw88">Jordan </a>
        <a className="footerLinks" href="https://github.com/SteIddon">Ste </a>
      </div>
        <div className="footerWho">
            <p>This has been created by <a className="footerLinks" href="https://github.com/TheBigFactHunt">TheBigFactHunt</a> organisation</p>
        </div>
    </div>
  );
};

export default Footer;
