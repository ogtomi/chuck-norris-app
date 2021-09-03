import React, { useEffect, useState } from "react";
import "../index.css";

const URL = "https://api.chucknorris.io/jokes/random";

const Card = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();

      setJoke(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="card" key={joke.id} >
      {joke.value}
    </div>
  );
};

export default Card;
