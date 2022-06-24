import { BOOKMARK } from "assets";
import { Card } from "components/atoms";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const WrapperRoot = styled.div({
  width: "100%",
  height: "100%",
  position: "relative",
});

const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  "&:hover": {
    cursor: "pointer",
    filter: "opacity(85%)",
  },
});

const Icon = styled.div({
  position: "absolute",
  top: "10px",
  right: "10px",
  borderRadius: "50%",
  width: "1rem",
  height: "1rem",
  padding: 7,
  background: "rgba(0,0,0,30%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  "&:hover": {
    cursor: "pointer",
    background: "rgba(255,255,255,50%)",
  },
});

const CardAnime = () => {
  return (
    <Card>
      <WrapperRoot>
        <Icon onClick={() => alert("book")}>
          <BOOKMARK />
        </Icon>
        <Image
          onClick={() => alert("img")}
          src="./dummy1.png"
          alt="dummy.png"
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(transparent, rgba(0,0,0,90%))",
          }}
        >
          <h4
            style={{
              color: "#fff",
              textShadow:
                "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
            }}
          >
            Title
          </h4>
        </div>
      </WrapperRoot>
    </Card>
  );
};

export default CardAnime;
