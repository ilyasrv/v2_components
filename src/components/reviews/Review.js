import React, { useState } from "react";
import people from "./data";
import './review.css';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export const ReviewMy = () => {
  const [index] = useState(0);
  const { name, job, image, text, score } = people[index];

  // const nextvPerson = () => {
  //   setIndex((index) => {
  //     if (index === people.length - 1) return 0;

  //     return index + 1;
  //   });
  // };

  // const prevvPerson = () => {
  //   setIndex((index) => {
  //     if (index === 0) return people.length - 1;

  //     return index - 1;
  //   });
  // };

  return (  
    <article className="review _container">
      <div className="review__box">
      <div className="header-container">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">{score}</span>
          </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <hr className="underline" />
      </div>
      <div className="button-container">
        <p className="info">{text}</p>
      </div>
      </div>
      <div className="review__box">
      <div className="header-container">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">{score}</span>
          </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <hr className="underline" />
      </div>
      <div className="button-container">
        <p className="info">{text}</p>
      </div>
      </div>
      <div className="review__box">
      <div className="header-container">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">{score}</span>
          </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <hr className="underline" />
      </div>
      <div className="button-container">
        <p className="info">{text}</p>
      </div>
      </div>
      <div className="review__box">
      <div className="header-container">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">{score}</span>
          </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <hr className="underline" />
      </div>
      <div className="button-container">
        <p className="info">{text}</p>
      </div>
      </div>
    </article>
  );
};

