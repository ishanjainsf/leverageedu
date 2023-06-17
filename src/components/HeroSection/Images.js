import React, { useState } from "react";
import { toAbsoluteUrl } from "../Utils/index";
import * as BsIcons from "react-icons/bs";

function Images({
  selectedIndex,
  currentIndex,
  handleChangeSelectedIndex,
  displayImg,
  imageWidth,
  expandedWidth,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    handleChangeSelectedIndex(currentIndex);
  };

  console.log("selected index, current index : ", selectedIndex, currentIndex);

  return (
    <div
      className={`image-item ${
        selectedIndex === currentIndex ? "selected" : ""
      } ${expanded ? "expanded" : ""}`}
      onClick={handleClick}
      style={{
        width: `${expanded ? expandedWidth : imageWidth}px`,
        height: "500px",
      }}
    >
      <img
        src={toAbsoluteUrl(`./${displayImg}`)}
        alt="Image"
        className={`image ${expanded ? "expanded" : ""}`}
      />
      {expanded && (
        <div className="play-button">
          <BsIcons.BsPlayCircle size="75px" color="white" />
        </div>
      )}
    </div>
  );
}

export default Images;
