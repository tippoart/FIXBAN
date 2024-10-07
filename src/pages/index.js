import Navbar from "../components/Navbar";
import Maps from "../components/Maps";
import { useState } from "react";

const Home = () => {

  const [coordinates,setCoordinates] = useState({lat:0, lng:0})


  return (
    <div>
      <header className="p-3 flex justify-center">
        <Navbar />
      </header>

      <div className="p-3">
        <Maps setCoordinates = {setCoordinates} coordinates = {coordinates} />
      </div>
    </div>
  );
};

export default Home;
