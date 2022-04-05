import React from "react";
import './Review.css'

const Review = () => {
  return (
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
                  <strong className="mx-5">Maniruzzaman Akash</strong>
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
                Lorem Ipsum is simply dummy text of the pr make but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
