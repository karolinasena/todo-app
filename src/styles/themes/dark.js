import Background from "../../assets/bg-desktop-dark.jpg";
import BackgroundMobile from "../../assets/bg-mobile-dark.jpg";

export default {
  title: 'dark',
  images: {
    imageUrl: `url(${Background})`,
    imageMobileUrl: `url(${BackgroundMobile})`,
  },
  colors: {
    background: "hsl(237,14%,26%)",
    backgroundContainer: "hsl(235,19%,35%)",
    text: "hsl(236, 33%, 92%)",
    smallText: "hsl(234, 39%, 85%)",
    border: "hsl(234, 11%, 52%)",
    filter: "invert(100)"
  }
}