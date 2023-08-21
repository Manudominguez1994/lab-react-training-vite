import Rating from "./Rating";

export default function DriverCard(props) {
    
  const { name, rating, img } = props;
  const { model, licensePlate } = props.car;

  return (
    <div>
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <img src={img} alt="" width={"100px"} />
      <div>
        <p>{model}</p>
        <p>{licensePlate}</p>
      </div>
    </div>
  );
}
