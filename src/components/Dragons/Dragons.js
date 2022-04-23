import { useDispatch, useSelector } from 'react-redux';
import './Dragons.css';
import { reserveDragons, cancelDragons } from '../../redux/Dragons/Dragons';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragonsReducer.dragons);
  const dispatch = useDispatch();
  return (
    <div>
      {dragons.map((dragon) => {
        const {
          id, name, type, images, reserved,
        } = dragon;
        return (
          <div key={id} className="dragonCard">
            <img src={images} alt="dragon" className="dragonImage" />
            <div className="dragonItems">
              <h3>{name}</h3>
              <p>
                {reserved === true && (<span className="card">reserved</span>)}
                {' '}
                {type}
              </p>
              { reserved ? (

                <button type="button" className="cancel" onClick={() => dispatch(cancelDragons(dragon.id))}>Cancel Reservations</button>
              ) : (

                <button type="button" className="reservation" onClick={() => dispatch(reserveDragons(dragon.id))}>Reserve Dragon</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dragons;
