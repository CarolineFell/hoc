import React from "react";
import DateTimePretty from "../DateTimePretty/DateTimePretty";

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} title="title" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      <DateTimePretty date={props.date} />
    </div>
  );
};

export default Video;