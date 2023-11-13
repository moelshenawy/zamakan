import React, { useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { Button } from '@mui/base'
import localFont from 'next/font/local'
import imgs from '../../assets/constants/imgs';
import SaudiMap from "@/components/SaudiMap";

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const PoetryIn = () => {
  const [isLoadMoreActive, setIsLoadMoreActive] = useState(false)

  const [activeLand, setActiveLand] = useState(null);

  const handlePClick = (landIndex) => {
    setActiveLand(landIndex);
  };




  return (
    <section id='PoetryIn' className={styles.PoetryIn} style={...Effra.style}>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_container}>

          <div className={styles.text_container}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                الشعر في العصر الأموي ٦٦٣-٧٥٠ م
              </Typography>
            </div>
            <div className={styles.sec_info}>
              <Typography>
                من أكثر عصور الشعر ازدهاراً، إذ تمازج صفاء السليقة العربية مع بيئات جديدة كالشام والعراق ومصر وخراسان مما جعل هذا الأدب يتلون بألوان هذه البيئات المتنوعة، فيثمر إبداعاً عربياً ثرياً في المقاصد والتوجهات، وكان لاهتمام الخلفاء الأمويين تأثير عظيم في تجويد الشعر..
              </Typography>

              {isLoadMoreActive &&
                <>
                  <Typography>
                    من أكثر عصور الشعر ازدهاراً، إذ تمازج صفاء السليقة العربية مع بيئات جديدة كالشام والعراق ومصر وخراسان مما جعل هذا الأدب يتلون بألوان هذه البيئات المتنوعة، فيثمر إبداعاً عربياً ثرياً في المقاصد والتوجهات، وكان لاهتمام الخلفاء الأمويين تأثير عظيم في تجويد الشعر..
                  </Typography>
                  <Typography>
                    من أكثر عصور الشعر ازدهاراً، إذ تمازج صفاء السليقة العربية مع بيئات جديدة كالشام والعراق ومصر وخراسان مما جعل هذا الأدب يتلون بألوان هذه البيئات المتنوعة، فيثمر إبداعاً عربياً ثرياً في المقاصد والتوجهات، وكان لاهتمام الخلفاء الأمويين تأثير عظيم في تجويد الشعر..
                  </Typography>
                </>
              }
            </div>

            <div className={styles.more_btn}>
              <Button onClick={() => setIsLoadMoreActive((prev) => !prev)}>
                {isLoadMoreActive ?
                  <>
                    اقرأ أقل
                  </>
                  :
                  <>
                    اقرأ
                    المزيد
                  </>
                }

              </Button>
            </div>


            <div className={styles.sec_title}>
              <Typography variant='h3'>
                مناطق المملكة
              </Typography>
            </div>
          </div>

        </div>
        <SaudiMap activeLand={activeLand} />



      </Container>

    </section >
  )
}

export default PoetryIn 