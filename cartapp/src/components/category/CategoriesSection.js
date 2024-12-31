import card1 from '../../images/lg.png';
import card8 from '../../images/card8.png';
import kitchen from '../../images/kitchen.png';
import office from '../../images/office.png';
import dining from '../../images/dg.png';
import './CategoriesSection.css'
import { useNavigate } from 'react-router-dom'; 



import bedroom from '../../images/bd.png';

function CategoriesSection() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='title'><h1>CATEGORIES</h1></div>
      <div class="scrollable-container">
    <section id="categories" className="categories-section">
      <div className="category" onClick={() => navigate('/livingroom')} >
        <img src={card1} alt="Living Room" className="category-img" />
        <div className="category-title">Living Room</div>
      </div>
      <div className="category" onClick={() => navigate('/bedroom')}>
        <img src={bedroom} alt="Bedroom" className="category-img" />
        <div className="category-title">Bedroom</div>
      </div>
      <div className="category" onClick={() => navigate('/diningroom')}>
        <img src={dining} alt="Dining Room" className="category-img" />
        <div className="category-title">Dining Room</div>
      </div>
      <div className="category" onClick={() => navigate('/office')}>
        <img src={office} alt="Office" className="category-img" />
        <div className="category-title">Office</div>
      </div>
      <div className="category" onClick={() => navigate('/outdoor')}>
        <img src={card8} alt="Outdoor" className="category-img" />
        <div className="category-title">Outdoor</div>
      </div>
      <div className="category" onClick={() => navigate('/kitchen')}>
        <img src={kitchen} alt="kitchen" className="category-img" />
        <div className="category-title">Kitchen</div>
      </div>
    </section>
    </div>
    </div>
  );
}

export default CategoriesSection;
