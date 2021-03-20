import React from "react";
import dark1 from './dark.png';

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          {/* <img src="https://i.picsum.photos/id/294/200/300.jpg?hmac=37ZMLugCxZOqrLbLvaJ_09fT_uPfl3zlMkICmkVxobg" alt="myPic" className="card_img" /> */}
          <img src={dark1} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <button>Watch Now </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;