import React, { useState, useEffect } from "react";

const { kakao } = window;

function Map({ drugLat, drugLon }) {
  // make map from kakao map API
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(drugLat, drugLon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // put the pin on the place.
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(drugLat, drugLon),
    });
  }, [drugLat, drugLon]);

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
