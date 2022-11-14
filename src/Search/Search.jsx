import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const params = useParams();
  const { image } = params;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=28315453-28f1ec9747e8c8cd5b567410e&q=${image}&image_type=photo`
      )
      .then((res) => {
        setData(res.data.hits);
      });
  }, []);

  return (
    <div className="search">
      <div className="row">
        {data &&
          data.map((imgObj) => (
            <div className="col-md-3">
              <div className="card">
                <img
                  className="imageContainer card-img-top"
                  src={imgObj.largeImageURL}
                  alt={imgObj.tags}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
