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

  const newReview = reviews.slice(0, 3);
  console.log(newReview);


  return (
    <div className="mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <div className="mt-5 product-show">
            <h1 className="mt-5">Smart Watch</h1>
            <h1 className="my-5 text-primary">Your Everyday Life Assistant</h1>

            <div className="card-body">
              <p className="card-text">
              To make your everyday life easier,Smart Watch supports features like, Heart Rate Measure, Message Notification, Step Count,sleep tracking and  pressure monitoring.
              </p>
            </div>
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
      <h3 className="text-center my-5">
        Our Customer Reviews( {newReview.length})
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-3 home-review">
        {newReview.map((review) => (
          <Review key={review.id} review={review}>
            
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
