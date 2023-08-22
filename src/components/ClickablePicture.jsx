import { useState } from "react";

export default function ClickablePicture(props) {
  console.log(props);
  const [enableSecondImg, setenableSecondImg] = useState(false);
  const handleClickPhoto = () => {
    console.log("clickeando la imagen");
    setenableSecondImg(!enableSecondImg);
  };

  return (
    <div>
      <h3>ClickablePicture</h3>
      <div id="styleDiv">
        <img
          src={props.img}
          width="200px"
          alt=""
          onClick={handleClickPhoto}
          id="styleImg"
        />
        {enableSecondImg ? (
          <img
            src={props.imgClicked}
            width="200px"
            alt=""
            onClick={handleClickPhoto}
            id="style1Imgclicked"
          />
        ) : null}
      </div>
    </div>
  );
}
