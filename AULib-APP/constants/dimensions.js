import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default {
  screenWidth,
  screenHeight,
  chartHeight: 220,
  cardWidth: "48%",
};
