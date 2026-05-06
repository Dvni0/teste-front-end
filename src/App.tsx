import { useEffect, useState } from 'react';
import { fetchProducts } from './services/api';
import type { Product } from './types/product';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { Vitrine } from './components/Vitrine';
import { Partners } from './components/Partners';
import { Brands } from './components/Brands';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import './styles/globals.scss';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      if (data && data.products) {
        setProducts(data.products);
      }
    };
    loadProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200); 
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryNav />

        {/* 1ª VITRINE: Com as abas (Celular, Tablets, etc.) */}
        <Vitrine 
          products={products} 
          onProductClick={handleProductClick} 
          showTabs={true} 
        />

        <Partners />

        {/* 2ª VITRINE: Apenas com o link "Ver todos" abaixo do título */}
        <Vitrine 
          products={products} 
          onProductClick={handleProductClick} 
          showTabs={false} 
        />

        {/* Repetição dos Banners conforme a imagem Home(2) */}
        <Partners />

        <Brands />

        {/* 3ª VITRINE: Logo abaixo das marcas, também com "Ver todos" */}
        <Vitrine 
          products={products} 
          onProductClick={handleProductClick} 
          showTabs={false} 
        />
      </main>
      
      <Footer />

      <Modal 
        isOpen={isModalOpen} 
        product={selectedProduct} 
        onClose={handleCloseModal} 
      />
    </>
  );
}

export default App;