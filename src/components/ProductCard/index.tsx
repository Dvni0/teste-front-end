import type { Product } from '../../types/product';
import './style.scss';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article className="product-card" onClick={() => onClick(product)}>
      <img src={product.photo} alt={`Produto: ${product.productName}`} className="product-card__image" />
      <h3 className="product-card__title">{product.productName}</h3>
      <div className="product-card__prices">
        <span className="price-old">R$ 30,90</span> 
        <p className="price-current">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
        </p>
        <span className="installments">ou 2x de R$ 49,95 sem juros</span>
        <span className="shipping">Frete grátis</span>
      </div>
      <button className="product-card__button" aria-label="Comprar">
        COMPRAR
      </button>
    </article>
  );
}