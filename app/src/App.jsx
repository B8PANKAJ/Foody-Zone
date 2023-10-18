import { useEffect, useState } from "react";
import styled from "styled-components";
import Searchfil from "./components/Searchfil";
export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setdata] = useState(null);
  const [filterdata, setfilterdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedbutton, setselectedbutton] = useState("all");
  useEffect(() => {
    const fetchfooddata = async () => {
      setloading(true);
      try {
        const reponse = await fetch(BASE_URL);
        const json = await reponse.json();
        setdata(json);
        setfilterdata(json);
        setloading(false);
      } catch (error) {
        setError("the server isn't wroking");
      }
    };
    fetchfooddata();
  }, []);
  const searchfood = (e) => {
    const searchvalue = e.target.value;
    if (searchvalue == "") {
      setfilterdata(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setfilterdata(filter);
  };
  const filterfood = (type) => {
    if (type == "all") {
      setfilterdata(data);
      setselectedbutton("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilterdata(filter);
    setselectedbutton(type);
  };
  if (error) <div>{error}</div>;
  if (loading) <div>Loading...</div>;
  return (
    <>
      <Container>
        <Topcontainer>
          <div className="logo">
            <img src="./Foody Zone.svg" alt="logo" />
          </div>
          <div className="Search">
            <input placeholder="Search Items...." onChange={searchfood} />
          </div>
        </Topcontainer>
        <Filtercontainer>
          <Button onClick={() => filterfood("all")}>All</Button>
          <Button onClick={() => filterfood("BreakFast")}>BreakFast</Button>
          <Button onClick={() => filterfood("Lunch")}>Lunch</Button>
          <Button onClick={() => filterfood("Dinner")}>Dinner</Button>
        </Filtercontainer>
      </Container>
      <Searchfil data={filterdata} />
    </>
  );
};

export default App;

export const Container = styled.div``;
const Topcontainer = styled.section`
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;

  .Search input {
    border: 2px solid #ff0909;
    border-radius: 5px;
    min-height: 40px;
    background-color: transparent;
    max-width: 285px;
    padding: 0 10px;
    color: white;
    transition: 0.3s all ease-in-out;
  }
  @media (0<width<600px) {
    flex-direction: column;
  }
`;
const Filtercontainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  color: white;
  background-color: #ff4343;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #c22c21;
  }
`;
