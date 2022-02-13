import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { eventid } = useParams();
  const [details, setDetails] = useState({
    place: "",
    time: "",
    magnitude: "",
    longitude: "",
    latitude: "",
  });

  const getDetails = async () => {
    fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=${eventid}&format=geojson`)
      .then((res) => res.json())
      .then((data) => {
        setDetails({
          longitude: data.geometry.coordinates[0],
          latitude: data.geometry.coordinates[1],
          magnitude: data.properties.mag,
          place: data.properties.place,
          time: data.properties.time,
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (isLoading) return <p>loading.....</p>;
  return (
    <div className="EarthQuakeDetails">
      <p>PLace: {details.place}</p>
      <p>Time: {details.time}</p>
      <p>Magnitude: {details.magnitude}</p>
      <p>Longitude: {details.longitude}</p>
      <p>Latitude: {details.latitude}</p>
      <Link className="btn" to={"/"}>Back</Link>
    </div>
  );
};

export default Details;
