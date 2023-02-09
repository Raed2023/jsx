import React from "react";
import { MdOutlineDelete } from 'react-icons/md';


const MainVideo = () => {
  return (
    <div>
      <iframe
        width="885"
        height="498"
        src="https://www.youtube.com/embed/w3mVedIXLtU"
        title="2015 summer vibes ~nostalgia playlist"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>2015 summer vibes ~nostalgia playlist</h3>
      <MdOutlineDelete />
    </div>
  );
};

export default MainVideo;
