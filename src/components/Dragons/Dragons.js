import { useSelector } from 'react-redux';
import './Dragons.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragonsReducer.dragons);
  return (
    <div>
      {dragons.map((dragon) => {
        const {
          id, name, type, images,
        } = dragon;
        return (
          <div key={id} className="dragonCard">
            <img src={images} alt="dragon" className="dragonImage" />
            <div className="dragonItems">
              <h3>{name}</h3>
              <p>
                {' '}
                {type}
              </p>
              <button type="button" className="reservation">Reserve Dragon</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dragons;
