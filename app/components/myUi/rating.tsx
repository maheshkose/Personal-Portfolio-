"use client";
import React, { useEffect, useReducer, useRef } from "react";
import { IoStarSharp } from "react-icons/io5";
const Rating = () => {
  type ratingState = {
    rating: number;
    starstyle: string;
    filledStarStyle: string;
    emptyStarStyle: string;
  };
  type ratingAction = { type: "RatingState"; payload: number };
  const initialeState: ratingState = {
    rating: 1,
    starstyle:
      "`m-10 hover:text-amber-300 hover:-rotate-20 hover:scale-125 transition ease-in `",
    filledStarStyle: `text-amber-400`,
    emptyStarStyle: `text-gray-600`,
  };
  const reducer = (state: ratingState, action: ratingAction): ratingState => {
    switch (action.type) {
      case "RatingState":
        return {
          rating: action.payload,
          starstyle: state.starstyle,
          filledStarStyle: state.filledStarStyle,
          emptyStarStyle: state.emptyStarStyle,
        };
      default:
        state;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialeState);
  console.log(state);

  const handleRatingChange = (rating: number) => {
    dispatch({ type: "RatingState", payload: rating });
  };

  const { rating, starstyle, emptyStarStyle, filledStarStyle } = state;

  useEffect(() => {
    console.log("Rating changed:", state.rating);
  }, [state.rating]);
  return (
    <div className="w-full flex justify-around">
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <div key={num}>
            <IoStarSharp
              size={40}
              className={`${starstyle} ${rating >= num ? filledStarStyle : emptyStarStyle} cursor-pointer`}
              id={`star${num}`}
              onClick={() => {
                handleRatingChange(num);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
