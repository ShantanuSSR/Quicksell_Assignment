import React from "react";
import { BsExclamationSquareFill,BsRecordFill } from "react-icons/bs";
import "../styles/Card.css";

const Card = ({ id, title, tags}) => {
  return (
    <div className="container1">
      <div className="cardHeading">
        <span style={{ textTransform: "uppercase", color: "grey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"
            alt="QuickSell"
          />

          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p style={{fontWeight: "bold"}}>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
            <div className="customCard">
                <span className="icon">
                  <BsRecordFill />
                </span>
                <span className="elements">
                  {element}
                </span>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
