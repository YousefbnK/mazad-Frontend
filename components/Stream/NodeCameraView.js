import React from "react";
import { NodeCameraView } from "react-native-nodemediaclient";

const NodeCamera = () => {
  return (
    <NodeCameraView
      ref={(vb) => {
        this.vb = vb.start();
      }}
      outputUrl={"rtmp://live.mux.com/app/1c26beba-471e-42a2-132f-e33b53dd4978"}
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
