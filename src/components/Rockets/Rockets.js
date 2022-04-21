import { useSelector, useDispatch } from 'react-redux';
import './Rockets.css';
import { bookRocket, cancelRocket } from '../../redux/Rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();

  return (
    <div className="rocket">
      {rockets.map((rocket) => {
        const {
          id, name, description, image, reserved,
        } = rocket;
        return (
          <div key={id} className="perRocket">
            <img src={image} alt="rocket" className="rocket-image" />
            <div className="rocket-des">
              <h3>{name}</h3>
              <p className="reserve-sect">
                {reserved === true && (
                <span className="reverved">
                  Reserved
                </span>
                )}
                {' '}
                {description}
              </p>
              {reserved ? (
                <button type="button" className="cancel-book" onClick={() => dispatch(cancelRocket(rocket.id))}>
                  Cancel Reservation
                </button>
              ) : (
                <button className="reserveBtn" type="button" onClick={() => dispatch(bookRocket(rocket.id))}>Reserve Rocket</button>

              )}

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
