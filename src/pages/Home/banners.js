import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import {
  code,
  palette,
  rocket,
  lock,
  security,
  render,
  movie,
} from "./Icons";
const Banners = [
  {
    id: 1,
    tag: "Web Development",
    title: "Learn the Essence of",
    coloredtitle: "Web Mastery",
    image: banner1,
    keypoints: [
      {
        id: 1,
        icon: code,
        text: "Master Modern Frameworks",
      },
      {
        id:2,
        icon: palette,
        text: "Create Stunning USer Interfaces",
      },
      {
        id:3,
        icon: rocket,
        text: "Launch your Development Career",
      },
    ],
  },
  {
    id: 2,
    tag: "Cyber Security",
    title: "Uncover the Truth With",
    coloredtitle:" Cyber Security",
    image: banner2,
    keypoints: [
      {
        id:1,
        icon: lock,
        text: "Master Network Security",
      },
      {
        id:2,
        icon: security,
        text: "Learn Ethical Hacking",
      },
      {
        id:3,
        icon: code,
        text: "Explore Digital Forensics",
      },
    ],
  },
  {
    id: 3,
    tag: "Digital Forensic",
    title: "Digital Forensics and",
    coloredtitle: " Crime Investigation",
    image: banner2,
    keypoints: [
      {
        id:1,
        icon: render,
        text: "Analyze digital Evidence",
      },
      {
        id:2,
        icon: movie,
        text: "Secure Digital Crime Scenes",
      },
      {
        id:3,
        icon: palette,
        text: "Master Forensic Tools",
      },
    ],
  },
  {
    id: 4,
    tag: "3D Animations",
    title: "Bring Ideas To Life In",
    coloredtitle: " Masterpieces",
    image: banner3,
    keypoints: [
      {
        id:1,
        icon: render,
        text: "Master 3D Modeling Techniques",
      },
      {
        id:2,
        icon: palette,
        text: "Create Captivating Evidences",
      },
      {
        id:3,
        icon: movie,
        text: "Design Stunning Visual Effects",
      },
    ],
  },
];

export default Banners;