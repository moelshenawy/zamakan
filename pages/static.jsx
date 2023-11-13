import React, { useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import imgs from '../assets/constants/imgs'
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
const Static = () => {
  const staticHTML = `
   


  `;




  return (
    <>


      <div dangerouslySetInnerHTML={{ __html: staticHTML }} />

    </>
  )
}

export default Static