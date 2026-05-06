import './style.scss';
import logo from '../../assets/29_logo.jpg'; 

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="newsletter-content">
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>Assine nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <div className="newsletter-form-wrapper">
          <form className="newsletter-form">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">INSCREVER</button>
          </form>
          <div className="newsletter-terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__info">
          <img src={logo} alt="Econverse" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-icons">
             {/* Você pode usar SVG inline aqui ou importar imagens sociais se tiver */}
             <span>IG</span> <span>FB</span> <span>IN</span>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Termos</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}