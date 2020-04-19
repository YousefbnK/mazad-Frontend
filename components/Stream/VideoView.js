import React from "react";
import Video from "react-native-video";

import styles from "./styles";

const VideoView = () => {
  return (
    <Video
      style={styles.backgroundVideo}
      // source={{
      //   uri:
      //     "https://stream.mux.com/sol9OK802ufu4TWNIdZkVjRJQ02wmaunPAq5UPhMVGab4",
      // }}
      source={{
        uri:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      }}
    />
  );
};

export default VideoView;
