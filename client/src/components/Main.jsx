import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [courtList, setCourtList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/courts")
      .then((res) => {
        console.log(res.data);
        setCourtList(res.data);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <h1>Book Your Tennis Court</h1>
      <Link to={'/addcourt'}> Add Court</Link>
        {courtList.map((court, index) => {
            console.log(court)
          return <p key={index}> {court.name} </p>;
        })}
    </div>
  );
};
export default Main;
