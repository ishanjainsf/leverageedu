import React, { useRef, useState, useEffect, useCallback } from "react";
import Images from "./Images";
import "./HeroSection.css";
import * as IoIcons from "react-icons/io";

function ImageContainer() {
  // Speaker images
  const images = [
    "speaker1.jpeg",
    "speaker2.jpeg",
    "speaker3.jpeg",
    "speaker4.jpeg",
    "speaker5.jpeg",
    "speaker6.jpeg",
    "speaker8.jpeg",
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const containerRef = useRef(null);
  const imageWidth = 150; // Adjust the width of each image
  const expandedWidth = 500; // Adjust the width of the expanded image
  const imagesPerContainer = 7; // Adjust the number of images to show per container

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const updateVisibleImages = () => {
    const startIndex = Math.floor(scrollPosition / imageWidth);
    const endIndex = startIndex + imagesPerContainer;
    setVisibleImages(images.slice(startIndex, endIndex));
  };

  useEffect(() => {
    updateVisibleImages();
  }, [scrollPosition]);

  // useEffect(() => {
  //   updateVisibleImages();
  // }, [images]);

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(newPosition);
  };

  const handleChangeSelectedIndex = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }

    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="hero_globalCitizensImgWrapper">
      <div className="image-container" ref={containerRef}>
        <div
          className="images-wrapper"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            width: `${imageWidth * visibleImages.length}px`,
          }}
        >
          {visibleImages.map((img, index) => (
            <Images
              key={index}
              currentIndex={index}
              handleChangeSelectedIndex={handleChangeSelectedIndex}
              selectedIndex={selectedIndex}
              displayImg={img}
              imageWidth={imageWidth}
              expandedWidth={expandedWidth}
              expanded={expandedIndex === index}
            />
          ))}
        </div>
        {scrollPosition > 0 && (
          <div
            className="scroll-button prev"
            onClick={() => handleScroll(-imageWidth)}
          >
            <IoIcons.IoIosArrowDropleftCircle
              // color="rgba(0, 0, 0, 0.3)"
              color="white"
              size="35px"
            />
          </div>
        )}
        {scrollPosition + containerWidth < imageWidth * images.length && (
          <div
            className="scroll-button next"
            onClick={() => handleScroll(imageWidth)}
          >
            <IoIcons.IoIosArrowDroprightCircle
              // color="rgba(0, 0, 0, 0.3)"
              color="white"
              size="35px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageContainer;
