import Image1 from "../../../assets/interest.jpeg";
import Image2 from "../../../assets/interest-action.jpeg";
import img_basketball from "../../../assets/basketball.jpeg";
import img_dslr from "../../../assets/dslr.jpeg";
import img_guitar from "../../../assets/guitar.webp";
import img_kite from "../../../assets/kitesurfing.avif";
import img_piano from "../../../assets/piano.webp";
import img_snow from "../../../assets/snowboarding.avif";

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
        subtitle: "Action Photography",
      },
      {
        image: img_dslr,
        subtitle: "DSLR Photography",
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
        image: img_piano,
        subtitle: "Piano",
      },
      {
        image: img_guitar,
        subtitle: "Guitar",
      },
    ],
  },
];
