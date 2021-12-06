import React from "react";
import { View, Text, ImageBackground } from "react-native";

export default ({ lengthImage }) => {
  let images;
  if (lengthImage === 11) {
    images = require("../assets/11.png");
  } else if (lengthImage === 12) {
    images = require("../assets/12.jpg");
  } else if (lengthImage === 20) {
    images = require("../assets/20.jpg");
  } else if (lengthImage === 5) {
    images = require("../assets/5.jpg");
  } else if (lengthImage === 17) {
    images = require("../assets/17.jpg");
  }
  return (
    <ImageBackground
      source={images}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    />
  );
};
