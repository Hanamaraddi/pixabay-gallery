import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [image, setImage] = useState("");

  const onChangeHandler = (e) => {
    setImage(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="background">
      <div>
        <div className="center">
          <h1>Stunning free images & royalty free stock</h1>
          <br />
          <h6>
            Over 2.7 million+ high quality stock images, videos and music shared
            by our talented community.
          </h6>
          <br />

          <div className="inputData">
            <input
              type="text"
              placeholder="Search Images"
              value={image}
              onChange={onChangeHandler}
            />
            <br />
            <br />
            <button
              type="submit"
              className="searchBtn btn btn-info"
              onClick={() => {
                image && navigate(`/search/${image}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
