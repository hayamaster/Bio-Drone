import React, { useEffect, useState } from "react";
import "./DeliveryTime.css";

const DeliveryTime = ({ drugLat, drugLon }) => {
  // get user current position (latitude, longitude)
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  window.addEventListener("load", () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(event) {
      setLatitude(event.coords.latitude);
      setLongitude(event.coords.longitude);
    }

    function error() {
      console.log("Error! to get your current position.");
    }
  });
  console.log(latitude);
  console.log(longitude);

  const dist = getDistance(latitude, longitude, drugLat, drugLon);
  console.log(dist + " kilometer");
  // fastest speed of delivery drone is 54 [km/h]
  const dist2min = (dist * 60) / 54;
  //   const [dist2min, setDist2min] = useState(0);
  //   useEffect(() => {
  //     setDist2min((dist * 60) / 54);
  //   }, [latitude, longitude]);

  let hours = new Date().getHours();
  let minutes = parseInt(new Date().getMinutes() + dist2min + 5);
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }

  return (
    <>
      <div className="title">배달 중...</div>
      <div className="container1">
        <div className="discription">
          <p style={{ fontSize: "50px", margin: "0" }}>바이오 드론이</p>
          <p style={{ margin: "0" }}>안전하고 신속하게 배달 중입니다.</p>
        </div>
        <img className="drone" src="./drone.png" alt="Drone" />
        <div className="time">
          <div className="timeBox">
            <p style={{ fontSize: "25px", margin: "10px" }}>도착 예정 시간</p>
            <p className="clock">
              {dist2min > 10000
                ? dist2min
                : `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`}
            </p>
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

const getDistance = (lat1, lon1, lat2, lon2) => {
  // convert decimal degree to radian
  const deg2rad = (deg) => (deg * Math.PI) / 180.0;

  // convert radian to decimal degree
  const rad2deg = (deg) => (deg * 180) / Math.PI;

  const theta = lon1 - lon2;
  let dist =
    Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.cos(deg2rad(theta));

  dist = Math.acos(dist);
  dist = rad2deg(dist);
  dist = dist * 60 * 1.1515 * 1.609344; // unit : kilometer

  return dist;
};

export default DeliveryTime;
