import React from "react";

const DataVisualization = ({data: {visualisation, name, link, hackerspace_id}}) => {
  return (
    <div className="visualization">
      {visualisation ? (
        <img src={"/images/viz/" + visualisation}/>
      ) : null}
      <h1>{name}</h1>
      <p>
        <a href={link} target="_blank">
          Original Data Source
        </a>
      </p>
      <p>
        <a href={hackerspace_id} target="_blank">
          GovHack 2018 Hackerspace Info
        </a>
      </p>
    </div>
  );
};

export default DataVisualization;
