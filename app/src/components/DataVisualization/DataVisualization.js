import React from "react";

const DataVisualization = ({ data }) => {
  return (
    <div className="visualization">
      {data.visualisation ? (
        <img src={"/images/viz/" + data.visualisation} />
      ) : null}
      <h1>{data.name}</h1>
      <p>
        <a href={data.link} target="_blank">
          Original Data Source
        </a>
      </p>
      <p>
        <a href={data.hackerspace_id} target="_blank">
          GovHack 2018 Hackerspace Info
        </a>
      </p>
    </div>
  );
};

export default DataVisualization;
