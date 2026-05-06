import './style.scss';
import brandLogo from '../../assets/29_logo.jpg'; 

export function Brands() {
  const brands = [1, 2, 3, 4, 5]; 

  return (
    <section className="brands">
      <h2>Navegue por marcas</h2>
      <div className="brands__carousel">
        {brands.map((item) => (
          <div key={item} className="brands__item">
            <img src={brandLogo} alt={`Marca ${item}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
