import './style.scss';
import bannerBackground from '../../assets/image_45_Partner.png';

export function Partners() {
  return (
    <section className="partners">
      <div className="partners__card" style={{ backgroundImage: `url(${bannerBackground})` }}>
        <div className="partners__content">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>Confira</button>
        </div>
      </div>

      <div className="partners__card" style={{ backgroundImage: `url(${bannerBackground})` }}>
        <div className="partners__content">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>Confira</button>
        </div>
      </div>
    </section>
  );
}