import React from "react";
import { Modal, Button } from "antd";

const DataVisualization = ({ data }) => {
  console.log(data);
  return (
    <div className="visualization">
      {data.visualisation ? (
        <img src={"/images/viz/" + data.visualisation} />
      ) : null}

      <p>{data.name}</p>
      <p>
        <a href={data.hackerspace_id} target="_blank">
          Hackerspace dataset
        </a>
      </p>
      <p>
        <a href={data.link} target="_blank">
          Link to data
        </a>
      </p>

      {/* <Modal
        title={null}
        visible={}
        footer={null}
      >IMAGE HERE</Modal> */}
    </div>
  );
};

export default DataVisualization;
