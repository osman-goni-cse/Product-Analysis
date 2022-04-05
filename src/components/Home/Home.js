import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [analysisProduct, setAnalysisProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAnalysisProduct(data));
  }, []);

  // console.log(analysisProduct);

  const [reviews, setReviews] = useReviews();

  let count = 0;

  return (
    <div className="mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <h1>Your Next Smart Watch</h1>
            <h1>Your Next Smart Watch</h1>

            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {analysisProduct.map((watch) => (
              <img
                key={watch.id}
                src={watch.img}
                className="card-img-top"
                alt="..."
              />
            ))}
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-2">
        Our Customer Reviews: {reviews.length}{" "}
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-3 home-review">
        {reviews.map((review) => (
          <Review key={review.id} review={review}>
            {" "}
          </Review>
        ))}
        
      </div>
      <Link to="/reviews">
          <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary">See All reviews</button>
          </div>
        </Link>
    </div>
  );
};

export default Home;
