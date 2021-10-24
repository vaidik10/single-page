import "./App.css";
//import travel_01 from "./assets/travel-01.jpg";
//import travel_02 from "./assets/travel-02.jpg";
import building  from "./assets/building.jpg";
import main from "./assets/main.jpg"
import Hero from "./components/Head";
import pyramid from "./assets/layer.jpg"
import Lastslide from './assets/sketch.png'
import Content from "./components/Contentpage";
import Pyramind from "./components/Pyramid";
import Portfolio from "./components/Portfolio";
import LastSlide from "./components/LastSlide";
import TabPanel from "./components/TabPanel";
import "antd/dist/antd.css";
import ContactUs from "./components/ContactUs";

let tabData = [
  {
    title: "this is title one",
    content:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text ok even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text . ",
    imgSrc:"https://picsum.photos/200/300",
  },
  {
    title: "this is title one",
    content:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    imgSrc:"https://picsum.photos/200/300",
  },
  {
    title: "this is title one",
    content:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.ords which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of  ",
    imgSrc:"https://picsum.photos/200/300",
  },
  {
    title: "this is title one",
    content:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    imgSrc:"https://picsum.photos/200/300",
  },
  {
    title: "this is title one",
    content:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    imgSrc:"https://picsum.photos/200/300",
  },
  {
    title: "this is title one",
    content:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    imgSrc:"https://picsum.photos/200/300",
  },
];
function App() {
  
  return (
    <div className="App">
      
      <Hero imageSrc={main} />
      <Content
        imageSrc={building}/>
      <Pyramind imageSrc={pyramid}/>
      <Portfolio imageSrc={main}/>
      <h2 style={{textAlign:"center", fontSize:"30px", margin:"30px 0"}}>Our process</h2>
      <div style={{marginLeft:"10%"}}>
      <TabPanel tabData={tabData} />
  
      </div>
      <ContactUs/>
      <LastSlide imageSrc={Lastslide}/>
    
  </div>)
}

export default App;
