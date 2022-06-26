import styled from "@emotion/styled";
import { BOOKMARK } from "assets";
import { Card } from "components/atoms";
import React from "react";

const WrapCardCollection = styled.div({
  width: "100%",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "#111",
  position: "relative",
  gap: "1rem",
});

const Image = styled.img({
  width: "100%",
  height: "100%",
  maxWidth: "30%",
  margin: 0,
  objectFit: "cover",
});

const ShadowCollection = styled.div({
  position: "absolute",
  bottom: 0,
  width: "30%",
  zIndex: 999999,
  padding: "11px 15px",
  paddingTop: 59,
  paddingLeft: 59,
  background: "linear-gradient(to right, #00000000, #111)",
});

const Icon = styled.div({
  position: "absolute",
  right: "10px",
  borderRadius: "50%",
  padding: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  float: "right",
  zIndex: 10,
});

interface IPropsCardList {
  item: any;
  onClick: () => void;
}

const CardList = (props: IPropsCardList) => {
  const { item, onClick } = props;
  return (
    <Card>
      <WrapCardCollection>
        <Image
          src={item?.coverImage?.["large" || "medium"]}
          alt={item?.title?.english || item?.title?.romaji}
        />
        <ShadowCollection />
        <div style={{ paddingRight: 25 }}>
          <p
            style={{
              color: "#fff",
              textShadow:
                "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
            }}
          >
            {item?.title?.english || item?.title?.romaji}
          </p>
        </div>
        <Icon onClick={onClick}>
          <BOOKMARK />
        </Icon>
      </WrapCardCollection>
    </Card>
  );
};

export default CardList;
