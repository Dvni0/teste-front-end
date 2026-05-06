import './style.scss';

// Importação dos assets conforme os nomes identificados
import shieldIcon from '../../assets/20_shieldcheck.jpg';
import truckIcon from '../../assets/22_truck.jpg';
import cardIcon from '../../assets/25_creditcard.jpg';
import logo from '../../assets/29_logo.jpg';
import searchIcon from '../../assets/26_magnifyingglass.jpg';
import boxIcon from '../../assets/boxShipping.png'; // Ícone da caixa (Pedidos)
import heartIcon from '../../assets/7_heart.jpg';
import userIcon from '../../assets/9_usercircle.jpg';
import cartIcon from '../../assets/11_shoppingcart.jpg';
import crownIcon from '../../assets/CrownSimplecrown.png'; // Coroa exclusiva para Assinatura

export function Header() {
  return (
    <header className="main-header">
      {/* Faixa superior com textos em azul evidenciados */}
      <div className="header__benefits">
        <span>
          <img src={shieldIcon} alt="" /> 
          Compra <b className="blue-text">100% segura</b>
        </span>
        <span>
          <img src={truckIcon} alt="" /> 
          <b className="blue-text">Frete grátis</b> acima de R$ 200
        </span>
        <span>
          <img src={cardIcon} alt="" /> 
          <b className="blue-text">Parcele</b> suas compras
        </span>
      </div>

      <div className="header__main">
        <img src={logo} alt="Econverse" className="header__logo" />

        <div className="header__search">
          <input type="text" placeholder="O que você está buscando?" />
          <button type="submit"><img src={searchIcon} alt="Buscar" /></button>
        </div>

        <div className="header__actions">
          {/* Ícone de caixa ao lado do coração */}
          <button title="Meus Pedidos"><img src={boxIcon} alt="Pedidos" /></button>
          <button title="Favoritos"><img src={heartIcon} alt="Favoritos" /></button>
          <button title="Minha Conta"><img src={userIcon} alt="Conta" /></button>
          <button title="Carrinho"><img src={cartIcon} alt="Carrinho" /></button>
        </div>
      </div>

      <nav className="header__nav">
        <ul>
          <li><a href="#">TODAS CATEGORIAS</a></li>
          <li><a href="#">SUPERMERCADO</a></li>
          <li><a href="#">LIVROS</a></li>
          <li><a href="#">MODA</a></li>
          <li><a href="#">LANÇAMENTOS</a></li>
          {/* Classe highlight para a cor rosa correta */}
          <li><a href="#" className="highlight">OFERTAS DO DIA</a></li>
          {/* Link de assinatura com a coroa centralizada */}
          <li>
            <a href="#" className="nav-subscription">
              <img src={crownIcon} alt="" className="crown-icon" />
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}