import { useState } from 'react';
import type { Product } from '../../types/product';
import './style.scss';

interface ModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ product, isOpen, onClose }: ModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{product.productName}</h2>
            <p className="modal-price">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            </p>
            <p className="modal-description">
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
            <a href="#" className="modal-link">Veja mais detalhes do produto &gt;</a>

            <div className="modal-actions">
              <div className="quantity-selector">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>−</button>
                <span>{quantity.toString().padStart(2, '0')}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button className="buy-button">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}