import Background from "../../assets/bg-desktop-light.jpg";
import BackgroundMobile from "../../assets/bg-mobile-light.jpg";

export default {
  title: 'light',
  images: {
    imageUrl: `url(${Background})`,
    imageMobileUrl: `url(${BackgroundMobile})`,
  },
  colors: {
    background: "hsl(236, 33%, 92%)",
    backgroundContainer: "hsl(0, 0%, 98%)",
    text: "hsl(235, 19%, 35%)",
    grayLight: "hsl(236, 9%, 61%)",
    border: "hsl(233, 11%, 84%)",
    filter: ""
  }
}