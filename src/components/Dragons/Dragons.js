import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragonsReducer.dragons);
  return (
    <div>
      {dragons.map((dragon) => {
        const {
          id, name, type, images,
        } = dragon;
        return (
          <div key={id}>
            <img src={images} alt="dragon" />
            <div>
              <h3>{name}</h3>
              <p>
                {' '}
                {type}
              </p>
              <button type="button">Cancel Reservation</button>
              <button type="button">Reserve Dragon</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dragons;
