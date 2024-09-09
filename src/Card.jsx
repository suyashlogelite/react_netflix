import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function Cards(props) {
  return (
    <>
      <div className="card shadow p-3 mb-3">
        <img
          height={"350px"}
          src={props.imgsrc}
          alt="image"
          className="card_img"
        />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button className="btn btn-outline-dark fw-bold">Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
