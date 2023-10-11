import Image1 from "../../../assets/drone1.jpg";
import Image2 from "../../../assets/gopro.jpg";
import img_basketball from "../../../assets/basketball.jpeg";
import img_landscape from "../../../assets/landscape.jpg";
import img_guitar from "../../../assets/guitar.jpg";
import img_kite from "../../../assets/kite.jpg";
import img_piano from "../../../assets/piano.jpg";
import img_snow from "../../../assets/snow.jpg";

export const interestItems = [
  {
    id: 1,
    title: "Photography",
    icon: "uil uil-camera",
    subItems: [
      {
        image: Image1,
        subtitle: "Drone Photography",
      },
      {
        image: Image2,
        subtitle: "GoPro Photography",
      },
      {
        image: img_landscape,
        subtitle: "Landscape Photography",
      },
    ],
  },
  {
    id: 2,
    title: "Sports",
    icon: "uil uil-basketball",
    subItems: [
      {
        image: img_kite,
        subtitle: "Kitesurfing",
      },
      {
        image: img_snow,
        subtitle: "Snowboarding",
      },
      {
        image: img_basketball,
        subtitle: "Basketball",
      },
    ],
  },
  {
    id: 3,
    title: "Music",
    icon: "uil uil-music",
    subItems: [
      {
        image: img_guitar,
        subtitle: "Guitar",
      },
      {
        image: img_piano,
        subtitle: "Piano",
      },
    ],
  },
];
