import React, { useState } from "react";
import "./DeliveryTime.css";

const DeliveryTime = () => {
  return (
    <>
      <div className="title">배달 중...</div>
      <div className="container1">
        <div className="discription">
          <p style={{ fontSize: "35px" }}>바이오 드론이</p>
          <p>안전하고 신속하게 배달 중입니다.</p>
        </div>
        <img className="drone" src="./drone.png" alt="Drone" />
        <div className="time">
          <div className="timeBox">
            <p>남은시간</p>
            <p className="clock">5분</p>
          </div>
        </div>
      </div>
      <div className="droneBarContainer">
        <div className="droneBar"></div>
        <img className="droneColor" src="./drone_color.png" alt="DroneColor" />
      </div>
    </>
  );
};

export default DeliveryTime;
