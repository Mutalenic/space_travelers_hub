import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragonsReducer.dragons);
  return (
    <div>
      {dragons.map((dragon) => {
        console.log(dragon);
        const {
          id, name, description, image, reserved,
        } = dragon;
        return (
          <div key={id}>
            <img src={image} alt="dragon" />
            <div>
              <h3>{name}</h3>
              <p>
                {reserved === true && (
                <span>
                  Reserved
                </span>
                )}
                {' '}
                {description}
              </p>
              {reserved ? (
                <button type="button">
                  Cancel Reservation
                </button>
              ) : (
                <button type="button">Reserve Dragon</button>

              )}

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dragons;
