import image from "./assets/logo512.png";
import example1 from "./assets/example1.png";
import example2 from "./assets/example2.png";
import firebase from "./assets/firebase.png"
import redux from "./assets/Redux.svg"
import react from "./assets/React.svg"
import figma from "./assets/Figma.svg"
import github from "./assets/Github.png"

const projects = [
  {
    id: 1,
    name: "Slacker Clone",
    shortDescription:
    'RealTime Messaging application',
    description:
    <>
    <p>Project Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam</p>
    <p>et provident. Numquam rerum eaque eos saepe expedita tempora est.</p>
    <br></br>
    <p>Accusamus voluptas minus corporisodit atque veritatis rerum. Aut alias voluptatibus commodi et voluptatibus iste omnis ame</p>
    </>,
    bannerImage: example2,
    images: [image],
    siteLink: "https://myslackerclone.vercel.app/",
    githubRepo: "https://github.com/pvahanian/mySlackerClone",
    roles: "Front-End, Back-End, test, test, test, test",
    technologies: [firebase, redux, react, figma, github],
    color: "purple",
  },
  {
    id: 2,
    name: "Project 2",
    shortDescription:
      "Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam itaque sit et provident. Numquam rerum eaque eos saepe expedita",
    description:
    <>
    <p>Project Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam</p>
    <p>et provident. Numquam rerum eaque eos saepe expedita tempora est.</p>
    <br></br>
    <p>Accusamus voluptas minus corporisodit atque veritatis rerum. Aut alias voluptatibus commodi et voluptatibus iste omnis ame</p>
    </>,    bannerImage: image,
    images: [example1, image],
    siteLink: "https://wunnle.dev/",
    githubRepo: "https://github.com/pvahanian/mySlackerClone",
    roles: "Front-End, Back-End, Design and Development",
    technologies: [firebase, react, figma],
    color: "rose",
  },
];

export default projects;
