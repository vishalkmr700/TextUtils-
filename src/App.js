
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      
      <Navbar title="TextUtils" aboutText="About Us" />
      {/* <Navbar/> */}

      <div className="container">

      <TextForm heading = "Enter your text here to analyze"/>
      </div>
      
    </>
  );
}

export default App;
