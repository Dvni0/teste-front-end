import './style.scss';


import imgTech from '../../assets/imageTec.png';
import imgSuper from '../../assets/8_supermercados_1.png';
import imgDrinks from '../../assets/9_whiskey.png';
import imgTools from '../../assets/10_ferramentas_1.png';
import imgHealth from '../../assets/11_cuidados_de_saude_1.png';
import imgSports from '../../assets/12_corrida_1.png';
import imgFashion from '../../assets/13_moda_1.png';

const categories = [
  { name: 'Tecnologia', image: imgTech, active: true },
  { name: 'Supermercado', image: imgSuper, active: false },
  { name: 'Bebidas', image: imgDrinks, active: false },
  { name: 'Ferramentas', image: imgTools, active: false },
  { name: 'Saúde', image: imgHealth, active: false },
  { name: 'Esportes e Fitness', image: imgSports, active: false },
  { name: 'Moda', image: imgFashion, active: false },
];

export function CategoryNav() {
  return (
    <section className="category-nav">
      {categories.map((category, index) => (
        <div key={index} className={`category-item ${category.active ? 'active' : ''}`}>
          <div className="category-item__icon">
            <img src={category.image} alt={category.name} />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </section>
  );
}