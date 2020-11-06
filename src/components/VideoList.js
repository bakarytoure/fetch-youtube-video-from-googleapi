import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video, index) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
        key={index}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};
export default VideoList;
