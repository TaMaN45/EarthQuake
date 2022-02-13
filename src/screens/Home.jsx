import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";

const Home = () => {
  
  const [data, setData] = useState(null);

  const getData = async () => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20"
    )
      .then((res) => res.json())
      .then(({ features }) => setData(features));
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <h1 >Latest EarthQuackes in the world </h1>
      {data && data.map((item, i) => <CardItem item={item} key={i} />)}
     
    </div>
  );
};

export default Home;
