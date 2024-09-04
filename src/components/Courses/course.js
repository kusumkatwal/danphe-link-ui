import cgi from "../../assets/images/cgi.jpg";
import mern from "../../assets/images/mern.jpg";
import ccna from "../../assets/images/ccna_hacking.jpg";
import df from "../../assets/images/digital_forensic.jpg";

const course = [
    {
        id: 1,
        title: "MERN Stack Development",
        duration: "60 hours",
        image: mern,
        tag: "web development"
    },
    {
        id: 2,
        title: "Digital Forensics",
        duration: "60 hours",
        image: df,
        tag: "cyber security"
    },
    {
        id: 3,
        title: "CCNA + Ethical Hacking Combo",
        duration: "80 hours",
        image: ccna,
        tag: "cyber security"
    },
    {
        id: 4,
        title: "CG + 3D Asset Creation For Films Or Games",
        duration: "64 weeks",
        image: cgi,
        tag: "3d animation"
    }
]

export default course;