import React, { useState } from 'react'
import { motion, useDragControls } from 'framer-motion';
import { Typography } from '@mui/material';
import imgs from '../../assets/constants/imgs'
import styles from './'
const SelectPage = ({ cityNames }) => {
  const controls = useDragControls()
  const textContents = Array.from(cityNames).map((city) => city.textContent);


  const { smallMap } = imgs
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedCity, setSelectedCity] = useState("المملكة");
  const [isTop, setIsTop] = useState(false)
  const openPage = () => {
    setOpenSelect((prev) => !prev)
  };

  const handleBoxClick = (index) => {
    // Assuming index corresponds to the index in cityNames
    const clickedCity = cityNames[index].textContent;
    setSelectedCity(clickedCity);
    setOpenSelect(false);

    // Perform any other actions you need with the clicked city
  };



  console.log(isTop, "isTop")

  const handleDrag = (event, info) => {
    if (info.offset.y < 0) {
      // If dragging upwards, prevent further movement
      info.offset.y = 0;
      console.log(info, "info")

    } else {
      setOpenSelect(true);

    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100) {
      setOpenSelect(false);
    }
  };

  return (
    <div>
      <button onClick={openPage}>Open Page</button>

      {/* Animated Page */}
      {openSelect &&

        <motion.div
          // initial={{ y: '100%' }}
          // animate={{ y: '30%' }}
          // transition={{ type: 'spring', stiffness: 100 }}
          // dragConstraints={{ top: 0, bottom: 0 }}
          // onMouseDown={(e) => e.stopPropagation()}
          // dragControls={controls}
          // drag="y"
          // onDragEnd={handleDragEnd}


          initial={{ y: '100%' }}
          animate={{ y: openSelect ? '30%' : '100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
          onMouseDown={(e) => e.stopPropagation()}
          drag="y"
          // onDrag={(event, info) => {
          //   // Prevent dragging up
          //   if (info.point.y >= 835) {
          //     setIsTop(false)
          //     controls.start('y', info.point.y);
          //   } else {
          //     setIsTop(true)
          //   }
          // }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}

          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'red',
            height: '90%',
            padding: '20px',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            zIndex: 222,
            overflowY: 'auto'
          }}

        >
          <div className="select_container">
            <div className="title">
              <Typography>مناطق المملكة</Typography>
            </div>

            <div className="boxes_container">
              {textContents?.map((city, index) => (

                <div className={`box`} key={index} onClick={() => handleBoxClick(index)}>
                  <div className={"img_container"}>
                    <img src={smallMap.src} alt="الرياض" />
                  </div>
                  <div className={"name"}>
                    <Typography>{city}</Typography>
                  </div>
                </div>

              ))}
            </div>

          </div>

        </motion.div>
      }
    </div>
  );
};

export default SelectPage;
