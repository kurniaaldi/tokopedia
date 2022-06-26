import { CardList } from "components/molecules";
import styled from "@emotion/styled";
import { useCollection } from "store/collection";
import { useNavigate } from "react-router-dom";

const WrapperMain = styled.main({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
  padding: "1rem",
  "@media only screen and (min-width: 420px)": {
    padding: "2rem",
  },
});

const Collections = () => {
  const {
    state: { collections },
  }: any = useCollection();

  const navigate = useNavigate();

  return (
    <WrapperMain>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {Array.from(collections || []).map((item: any) => {
          return (
            <div
              key={item.id}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <h4
                onClick={() => navigate(`/collection/${item.id}`)}
                style={{
                  margin: 0,
                  color: "#007aff",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {item.name}
              </h4>
              {item.collection.map((child: any) => {
                return (
                  <CardList
                    key={child.id}
                    item={child}
                    onClick={() => navigate(`/anime/${child.id}`)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </WrapperMain>
  );
};

export default Collections;
