export default function IdCard(props) {
//   console.log(props);
  const { lastName, firstName, gender, height, birth, picture } = props;
  const cardStyle = {};
  return (
    <div style={cardStyle}>
      <div>
        <img src={picture} alt="profileImg" />
      </div>
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height:{height / 100}m</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
}
