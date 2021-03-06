import sitepreview from "./assets/Slackerpreviews.png";
import firebaseName from './assets/Firebase.svg'
import reactName from './assets/React2svg.svg'
import redux from "./assets/Redux.svg"
import figma from "./assets/Figma.svg"
import materialui from "./assets/MaterialUI.svg"
import ewb from "./assets/211.png"
import figmamobile from "./assets/mobile211.png"
import figmadesktop from "./assets/desktop211.png"
import figmaslack from "./assets/figmaslack.png"
import ClutchMobile from "./assets/ClutchMobile1.png"
import ClutchMobileStats from "./assets/ClutchMobileStats.png"
import ClutchRecording from "./assets/ClutchRecording.png"
import comingSoon from "./assets/ComingSoon.png"

const slackerTechnologyStack=[
  {name:"Firebase",techUsed:firebaseName},
  {name:"React",techUsed:reactName},
  {name:"Figma",techUsed:figma},
  {name:"Material Ui",techUsed:materialui}
]
const clutchTechnologyStack=[
  {name:"Redux","techUsed":redux},
  {name:"Firebase","techUsed":firebaseName},
  {name:"React","techUsed":reactName},
  {name:"Figma","techUsed":figma},
  
]
const ewbTechnologyStack=[
  {name:"Redux","techUsed":redux},
  {name:"React","techUsed":reactName},
  {name:"Figma","techUsed":figma},
  {name:"Material Ui","techUsed":materialui}
]

const projects = [
  {
    id: 1,
    name: <strong className='bold'>S{"</>"}acker</strong>,
    shortDescription:
    'RealTime Messaging application',
    description:
    <>
    <p>S{"</>"}acker is a chat messaging application that was designed with the intention of learning how to use <strong className="bold">Firebase</strong> and
    <strong className="bold"> Firebase Authentication</strong></p>
    <br></br>
    <p>It was created and prototyped in <strong className="bold">Figma</strong>.</p>
    </>,
    bannerImage: sitepreview,
    images: [sitepreview,figmaslack],
    siteLink: "https://myslackerclone.vercel.app/",
    githubRepo: "https://github.com/pvahanian/mySlackerClone",
    roles: <p>Front-End, Back-End and Designer</p>,
    technologies: slackerTechnologyStack,
    color: "grey",
  },
  {
    id: 2,
    name: <strong className='bold'>EWB 211</strong>,
    shortDescription:
    'Update the UX design and accessability',
    description:  
    <>
    <p>The original concept of this design was to allow for realtime tracking of available shelter beds in the greater Portland, OR area. Unfortunately we quickly
      learned that, due to shelters regularly operating at full capacity, we needed to change our project.
    After speaking with 211info.org, we offered to improve their user experience when searching for services online.</p>
    <br></br>
    <p>The goal is to make it easier for people to find the resources they need
    before becoming homeless.
    </p> 
    <br></br><p>It was designed and prototyped in <strong className="bold">Figma</strong>.</p> 
    </>,
    bannerImage: ewb,
    images: [ewb,figmadesktop,figmamobile],
    siteLink: "https://elastic-engelbart-deec3b.netlify.app/",
    githubRepo: "https://github.com/ewb-psu/shelter-project",
    roles: <p>UX and Front-End</p>,
    technologies: ewbTechnologyStack,
    color: "grey",
  },
  {
    id: 3,
    name: <strong className='bold'>Clutch</strong>,
    shortDescription:
    'Interactive sports social media platform',
    description:  
    <>
    <p>The concept of this application revolves around athletes and fans.  Both users of the platform contributing highlights of their favorite athletes.</p>
    <br></br>
    <p>The goal is to reward athletes for their highlights and achievements. While also rewarding the fans that take the best highlights.
    </p> 
    <br></br><p>It was designed and prototyped in <strong className="bold">Figma</strong>.</p> 
    </>,
    bannerImage: comingSoon,
    images: [ClutchMobile,ClutchRecording,ClutchMobileStats],
    siteLink: "https://colorlib.com/etc/cs/comingsoon_04/index.html",
    githubRepo: "https://github.com/pvahanian/clutchpv",
    roles: <p>Front-End</p>,
    technologies: clutchTechnologyStack,
    color: "grey",
  },
];

export default projects;
