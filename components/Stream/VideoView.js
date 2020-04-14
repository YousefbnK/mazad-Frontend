import React from "react";
import Video from "react-native-video";

const VideoView = () => {
  return (
    <Video
      source={{
        uri:
          "https://stream.mux.com/iM02cT9obBHSA5dCVbOXiIH3tiNFImlo2g4KwbrJ1KXU.m3u8",
      }}
      ref={(ref) => {
        this.player = ref;
      }}
      style={styles.backgroundVideo}
    />
  );
};

export default VideoView;
