import React, { useState, useEffect } from "react";

const { kakao } = window;

function Map({ searchPlace }) {
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

  // make map from kakao map API
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // put the pin on the place.
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(latitude, longitude),
    });
  }, [latitude, longitude]);

  return (
    <div
      id="map"
      style={{
        display: "flex",
        width: "600px",
        height: "400px",
        margin: "auto",
        marginTop: "10px",
        justifyContent: "center",
        border: "2px solid #00bfff",
        borderRadius: "20px",
      }}
    ></div>
  );
}

export default Map;
