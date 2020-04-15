import React from "react";
import Video from "react-native-video";

import styles from "./styles";

const VideoView = () => {
  return (
    <Video
      style={styles.backgroundVideo}
      source={{
        uri:
          "https://stream.mux.com/iM02cT9obBHSA5dCVbOXiIH3tiNFImlo2g4KwbrJ1KXU.m3u8",
      }}
    />
  );
};

export default VideoView;
