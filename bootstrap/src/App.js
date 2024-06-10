import logo from "./logo.svg";
import "./App.css";
import ReactBs from "./component/reactBs";
import Contain from "./component/container";
import Img from "./component/image";
import Makecard from "./component/card";
import CreateNavbar from "./component/navbar";
import UsingCarousel from "./component/carousel";
function App() {
  return (
    <div>
      <CreateNavbar/>
      <ReactBs />
      <Contain/>
      <Img/>
      <h1 style={{textAlign:"center"}}>CARD MAKING</h1>
      <Makecard/>
      <UsingCarousel/>
      
    </div>
  );
}

export default App;
