import React from "react";
import '../index.css'
function SphereAnimation() {
  return (
    <div className="waveWrapper waveAnimation  dark:bg-black    rounded-full">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
          style={{
            backgroundImage: `url('/wave-top.png')`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url('wave-mid.png')`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage: `url('wave-bot.png')`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default SphereAnimation;