import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, Container } from "../App";
const Searchfil = ({ data: items }) => {
  return (
    <Foodcontainer>
      <Container>
        <Foodcards>
          {items?.map((e) => (
            <Foodcard key={e.name}>
              <div className="food-img">
                <img src={BASE_URL + e.image} />
              </div>
              <div className="content">
                <div className="info">
                  <h4>{e.name}</h4>
                  <p>{e.text}</p>
                  <p>Type-{e.type}</p>
                </div>
                <Button>${e.price}.00</Button>
              </div>
            </Foodcard>
          ))}
        </Foodcards>
      </Container>
    </Foodcontainer>
  );
};

export default Searchfil;

const Foodcontainer = styled.section`
  min-height: calc(100vh - 210px);
  background: url("/bg.png");
  background-size: cover;
`;
const Foodcards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 32px;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`;
const Foodcard = styled.div`
  width: 340px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  display: flex;
  padding: 8px;
  .content {
    display: flex;
    align-items: end;
    flex-direction: column;
    justify-content: space-between;
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
  }
  p {
    margin-top: 4px;
    font-size: 12px;
  }
  button {
    font-size: 12px;
  }
`;
