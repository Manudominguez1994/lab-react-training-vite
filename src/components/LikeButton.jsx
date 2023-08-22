import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikeValue] = useState(0);
  const handleClick = () => {
    setLikeValue(likes + 1);
  };
  return (
    <div>
      
      <button onClick={handleClick}>{likes}</button>
    </div>
  );
}
