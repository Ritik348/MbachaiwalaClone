import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import freshTopicImg from "./assets/academy.png";
import data from "./data/data.json";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg  from "./assets/in-the-news.gif";
import franchiseImg  from "./assets/franchise.gif";
import mapImg  from "./assets/locations.png";
import coursesImg  from "./assets/image2.png";
import albumImg  from "./assets/mba-cares.gif";
import baratImg  from "./assets/image1.png";
import chaiwalaImg  from "./assets/image3.png";
import Footer from "./components/Footer";



import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
// $yellow:#fff100;
// $pink:#ed1e79;
// $red:#d20120;
// $white:#fff;
// $brown:#6d3d0f;

const yellow = "#fff100", pink="#ed1e79", white="#fff", brown="#6d3d0f";



function App() {

  const{freshTopic, freshTopic2, tedTalks,franchise, map,courses,album,barat,chaiwala } = data;
  return (
  <>
  
  <IntroVideo />
{/* FreshTopic */}
  <Section h3={freshTopic.heading} text={freshTopic.text} btnTxt={freshTopic.btn} imgSrc={freshTopicImg}
  backgroundColor ={pink}
  headingColor = {yellow}
  textColor = {yellow}
  btnBgColor = {yellow}
  btnColor = {pink}
  
  />        {/* FreshTopic 2 */}
  <Section h3={freshTopic2.heading} text={freshTopic2.text} btnTxt={freshTopic2.btn} imgSrc={freshTopic2Img}
  backgroundColor ={pink}
  headingColor = {yellow}
  textColor = {yellow}
  btnBgColor = {yellow}
  btnColor = {pink}
  
  /> 
   {/* Ted Talks */}
   <Section 
   h3={tedTalks.heading} 
   text={tedTalks.text} 
   btnTxt={tedTalks.btn} 
   imgSrc={tedTalksImg}
  backgroundColor ={yellow}
  headingColor = {pink}
  textColor = {pink}
  btnBgColor = {pink}
  btnColor = {yellow}
  
  />

  {/* Franchise */}
  <Section 
   h3={franchise.heading} 
   text={franchise.text} 
   btnTxt={franchise.btn} 
   imgSrc={franchiseImg}
  backgroundColor ={white}
  headingColor = {pink}
  textColor = {brown}
  btnBgColor = {brown}
  btnColor = {yellow}
  
  />
  {/* Map */}
  <Section 
   h3={map.heading} 
   text={map.text} 
    imgSrc={mapImg}
  backgroundColor ={pink}
  headingColor = {yellow}
  textColor = {yellow}
     btnBgColor = {brown}
  btnColor = {yellow}
  hasBtn={false}
  
  />
  {/* Courses */}
  <Section 
   h3={courses.heading} 
   text={courses.text} 
   btnTxt={courses.btn} 
   imgSrc={coursesImg}
   imgSize={"30%"}
  backgroundColor ={yellow}
  headingColor = {pink}
  textColor = {pink}
  btnBgColor = {pink}
  btnColor = {yellow}
  
  />
  {/* Album */}
  <Section 
   h3={album.heading} 
   text={album.text} 
   btnTxt={album.btn} 
   imgSrc={albumImg}
   backgroundColor ={white}
  headingColor = {pink}
  textColor = {brown}
  btnBgColor = {pink}
  btnColor = {yellow}
  
  />
  {/* Barat */}
  <Section 
   h3={barat.heading} 
   text={barat.text} 
   btnTxt={barat.btn} 
   imgSrc={baratImg}
   backgroundColor ={pink}
  headingColor = {yellow}
  textColor = {yellow}
  btnBgColor = {yellow}
  btnColor = {pink}
  
  />

  {/* Chaiwala */}
  <Section 
   h3={chaiwala.heading} 
   text={chaiwala.text} 
   btnTxt={chaiwala.btn} 
   imgSrc={chaiwalaImg}
   backgroundColor ={white}
  headingColor = {pink}
  textColor = {brown}
  btnBgColor = {brown}
  btnColor = {yellow}
  
  />
  
  <Footer />
  </>
  ); 
}

export default App;
