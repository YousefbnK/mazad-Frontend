import React from "react";
import { NodeCameraView } from "react-native-nodemediaclient";

import styles from "./styles";

const NodeCamera = () => {
  return (
    <NodeCameraView
      style={styles.backgroundVideo}
      // ref={(vb) => {
      //   if (vb == null) {
      //     console.log("hi");
      //   } else {
      //     this.vb = vb.start();
      //   }
      // }}
      outputUrl={"rtmp://live.mux.com/app/69d88339-14d1-865e-75ed-e80f1aa11227"}
      camera={{ cameraId: 1, cameraFrontMirror: true }}
      audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
      video={{
        preset: 12,
        bitrate: 400000,
        profile: 1,
        fps: 15,
        videoFrontMirror: false,
      }}
      autopreview={true}
    />
  );
};

export default NodeCamera;
