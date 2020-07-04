import React from "react";
import { Card } from "antd";

export const GifGridItem = ({ title, url }) => {
  return (
    <Card
      hoverable
      bordered
      title={title}
      style={{ width: 240, height: 300, marginRight: 20, marginTop: 20 }}
      cover={
        <img
          src={url}
          alt={title}
          className="card-img animate__animated animate__fadeIn"
        />
      }
    ></Card>
  );
};
