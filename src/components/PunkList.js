import React from "react";

import "./PunkList.css";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punListData }) => {
  return (
    <div className="punkList">
      {punListData.map((punk) => (
        <div className="">
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
