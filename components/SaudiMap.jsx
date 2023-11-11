import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import imgs from '../assets/constants/imgs';
import { Typography } from '@mui/material';
import Svg from './SVGParts/Svg';
import Image from 'next/image';

const SaudiMap = () => {
  const { smallMap, SaudiMap } = imgs;




  const containerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.land');
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "animate" class to the elements when the container is in the viewport
            elements.forEach((element) => {
              element.classList.add('animate');
            });
          } else {
            // Remove the "animate" class from the elements when the container is out of the viewport
            elements.forEach((element) => {
              element.classList.remove('animate');
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the container is in the viewport
      }
    );

    // Observe the container
    observer.observe(container);

    return () => {
      // Cleanup when the component unmounts
      observer.disconnect();
    };
  }, []);


  // SVG ZOOM
  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState();

  useEffect(() => {
    // Select all elements with the class name .land
    const elements = document.querySelectorAll('.land');
    setLandElemnts(elements)

    // Add dynamic IDs to the selected elements
    elements.forEach((element, index) => {
      element.setAttribute('id', `land-${index}`);
    });
  }, []);


  const transformComponentRef = useRef(null);
  const handleZoomToLand = (landIndex) => {

    const elementId = `land-${landIndex}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(landIndex); // Set the active index

  };


  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    if (activeLand) {
      activeLand.classList.remove('activeLand');
    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add('activeLand');
    }
  }, [activeIndex, activeLand])

  // "0 0 858 724"
  return (
    <div id='map-boxes' ref={containerRef}>
      {/* <TransformWrapper
        ref={transformComponentRef}
        defaultScale={1}>
        {({ zoomIn, zoomOut, resetTransform }) => (

          <>
            <div className="tools">
              <button onClick={() => zoomIn()}>Zoom In</button>
              <button onClick={() => zoomOut()}>Zoom Out</button>
              <button onClick={() => {
                resetTransform();
                if (activeLand) activeLand.classList.remove('activeLand');
              }}>Reset</button>

              {Array.from({ length: landElments.length }).map((_, index) => (

                <div className={`box ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                  <div className={"img_container"}>
                    <img src={smallMap.src} alt="الرياض" />
                  </div>
                  <div className={"name"}>
                    <Typography>الرياض Zoom to Land {index + 1}</Typography>
                  </div>
                </div>
              ))}
            </div>

            <TransformComponent>
              <Svg />
            </TransformComponent>
          </>
        )}
      </TransformWrapper > */}

      <TransformWrapper
        ref={transformComponentRef}
        defaultScale={1}>
        <TransformComponent>
          <Svg />

        </TransformComponent>

      </TransformWrapper >

    </div >

  )
}

export default SaudiMap