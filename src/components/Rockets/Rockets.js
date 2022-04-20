import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
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
                <button type="button" className="cancel-book">
                  Cancel Reservation
                </button>
              ) : (
                <button className="reserveBtn" type="button">Reserve Rocket</button>

              )}

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
