import React from "react";
import ReactDom from "react-dom";
import Cards from "./Card";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDom.render(
  <>
    <h1 className="card shadow text-center fw-bold">
      List Of Top Netflix Series in 2024
    </h1>
    <div className="container">
      <h2 className="text-danger text-center fw-bold">Netflix</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <Cards
            imgsrc="https://wallpapercave.com/wp/wp11482775.jpg"
            title="A Netflix Original Series"
            sname="The Sandman"
            link="https://www.netflix.com/in/title/81150303"
          />
          <Cards
            imgsrc="https://wallpapercave.com/wp/wp11370751.jpg"
            title="A Netflix Original Series"
            sname="The Dark Night"
            link="https://www.netflix.com/in/title/70079583"
          />
          <Cards
            imgsrc="https://wallpapercave.com/wp/wp3920147.jpg"
            title="A Netflix Original Series"
            sname="DareDevil"
            link="https://www.netflix.com/in/title/80018294"
          />
        </div>
        <div className="col-md-6">
          <Cards
            imgsrc="https://wallpapercave.com/wp/wp5913975.jpg"
            title="A Netflix Original Series"
            sname="Stranger Things"
            link="https://www.netflix.com/in/title/80057281"
          />
          <Cards
            imgsrc="https://wallpapercave.com/wp/wp8275549.jpg"
            title="A Netflix Original Series"
            sname="Vikings"
            link="https://www.netflix.com/in/title/70301870"
          />
          <Cards
            imgsrc="https://wallpapercave.com/wp/wp12657507.jpg"
            title="A Netflix Original Series"
            sname="Dexter"
            link="https://www.netflix.com/in/title/70136126"
          />
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
