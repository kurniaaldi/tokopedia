import React from "react";
import { Link } from "react-router-dom";

interface IPropsEmptyCollections {
  title: string;
}

const EmptyCollections = (props: IPropsEmptyCollections) => {
  const { title } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        border: "1px solid #007aff",
      }}
    >
      <h2 style={{ color: "#007aff" }}>{title}</h2>
      <Link style={{ textDecoration: "none" }} to="/">
        <h4 style={{ color: "#007aff" }}>Go to Anime List</h4>
      </Link>
    </div>
  );
};

export default EmptyCollections;
