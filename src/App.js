import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get("")
      setPunkListData(openseaData.data.assets);
    }

    return getMyNfts();
  }, [])

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
