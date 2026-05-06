import { useRef } from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard';
import './style.scss';

interface VitrineProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  showTabs?: boolean;
}

export function Vitrine({ products, onProductClick, showTabs = true }: VitrineProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="vitrine">
      {/* Título com as linhas laterais */}
      <div className="vitrine__header">
        <div className="line"></div>
        <h2>Produtos relacionados</h2>
        <div className="line"></div>
      </div>
      
      {/* Abas de categorias (Onde estava o problema da lista vertical) */}
      {showTabs && (
        <nav className="vitrine__tabs">
          <ul>
            <li className="active">CELULAR</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TODOS</li>
          </ul>
        </nav>
      )}

      {!showTabs && (
        <div className="vitrine__view-all">
          <a href="#">Ver todos</a>
        </div>
      )}

      {/* Container do Carrossel */}
      <div className="vitrine__container">
        <button className="nav-arrow left" onClick={() => scroll('left')}>&lt;</button>
        
        <div className="vitrine__grid" ref={carouselRef}>
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={onProductClick} 
            />
          ))}
        </div>

        <button className="nav-arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
}