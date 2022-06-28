import { BOOKMARK } from "assets";
import { Card } from "components/atoms";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const WrapperRoot = styled.div({
  width: "100%",
  height: "100%",
  position: "relative",
  minHeight: "16.5rem",
  background: "transparent",
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
  padding: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  "&:hover": {
    cursor: "pointer",
  },
  "@media only screen and (min-width: 420px)": {
    "&:hover": {
      cursor: "pointer",
      background: "rgba(255,255,255,50%)",
    },
  },
});

interface IPropsCardAnime {
  clickIcon: () => void;
  data: any;
  isAdded: boolean;
  customIcon?: ReactNode;
}

const CardAnime = (props: IPropsCardAnime) => {
  const { clickIcon, data, isAdded, customIcon } = props;

  return (
    <Card>
      <WrapperRoot>
        <Icon onClick={clickIcon}>
          {customIcon ? customIcon : <BOOKMARK color={isAdded && "#FF7D75"} />}
        </Icon>
        <Link to={`/anime/${data?.id}`}>
          <Image
            src={data?.coverImage?.["large" || "medium"]}
            alt={data?.title?.english || data?.title?.romaji}
          />

          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              background: "linear-gradient(to bottom,#00000000,#111)",
              minHeight: "10rem",
            }}
          >
            <h4
              style={{
                color: "#fff",
                textShadow:
                  "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
              }}
            >
              {data?.title?.english || data?.title?.romaji}
            </h4>
          </div>
        </Link>
      </WrapperRoot>
    </Card>
  );
};

export default CardAnime;
