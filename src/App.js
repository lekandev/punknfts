import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get("https://cryptic-headland-94862.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x576d3Ff4702bfB4C31Ad710e923DCeC0afA5779E&order_direction=asc")
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
