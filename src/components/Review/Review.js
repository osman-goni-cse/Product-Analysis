import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, comment } = props.review;
  // console.log(props);

  return (
    <div className="col main-review-container">
      <div className="review-container">
        <strong>{name}</strong>
        <div className="rating">
          <span className="float-right">
            <i className="text-warning fa fa-star"></i>
          </span>
          <span className="float-right">
            <i className="text-warning fa fa-star"></i>
          </span>
          <span className="float-right">
            <i className="text-warning fa fa-star"></i>
          </span>
          <span className="float-right">
            <i className="text-warning fa fa-star"></i>
          </span>
          <span className="float-right">
            <i className="fa fa-star"></i>
          </span>
        </div>
      </div>
      <div className="comment-review">
        <br></br>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;

/*

<div className="col custom">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                className="img img-rounded img-fluid"
              />
            </div>
            <div className="col-md-10">
              <p>
                <a
                  className="float-left"
                  href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                >
                  <strong className="mx-5">{name}</strong>
                </a>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="fa fa-star"></i>
                </span>
              </p>
              <div className="clearfix"></div>
              <p>
                {comment}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
*/
