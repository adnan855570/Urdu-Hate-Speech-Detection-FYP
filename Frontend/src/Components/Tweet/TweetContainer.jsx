import Tweet from "./Tweet";
import "./tweet.css";
import React, { useState } from "react";
import Arrow from "../../assets/Arrow.png"

const sampleData = [1, 2, 3, 4];

export const TweetContainer = () => {
  const [tweets, setTweets] = useState(sampleData);

  return (
    <div className="tweet_main">
      <p className="tweet_heading">Tweets</p>
      <div className="tweet_cont">
        {tweets.map((tweet, key) => (
          <Tweet tweet={tweet} key={key} />
        ))}
      </div>
      <div className="tweet_btn">
        <p>Predict</p>
        <button className="tweet_btn">
          <img src={Arrow} alt="" className="arrow_img" />
        </button>
      </div>
    </div>
  );
};
