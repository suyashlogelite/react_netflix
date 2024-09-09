import React from "react";
import ReactDom from "react-dom";
import Cards from "./Card";
import Data from "./Data";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDom.render(
  <>
    {console.log(Data)}
    <h1 className="card shadow text-center fw-bold">
      List Of Top Netflix Series in 2024
    </h1>
    <div className="container">
      <h2 className="text-danger text-center fw-bold">Netflix</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <Cards
            imgsrc={Data[0].imgsrc}
            title={Data[0].title}
            sname={Data[0].sname}
            link={Data[0].link}
          />
          <Cards
            imgsrc={Data[1].imgsrc}
            title={Data[1].title}
            sname={Data[1].sname}
            link={Data[1].link}
          />
          <Cards
            imgsrc={Data[2].imgsrc}
            title={Data[2].title}
            sname={Data[2].sname}
            link={Data[2].link}
          />
        </div>
        <div className="col-md-6">
          <Cards
            imgsrc={Data[3].imgsrc}
            title={Data[3].title}
            sname={Data[3].sname}
            link={Data[3].link}
          />
          <Cards
            imgsrc={Data[4].imgsrc}
            title={Data[4].title}
            sname={Data[4].sname}
            link={Data[4].link}
          />
          <Cards
            imgsrc={Data[5].imgsrc}
            title={Data[5].title}
            sname={Data[5].sname}
            link={Data[5].link}
          />
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
