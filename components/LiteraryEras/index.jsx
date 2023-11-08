import { Container, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import localFont from 'next/font/local'
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import styles from './index.module.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { consts } from 'react-elastic-carousel';
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

const LiteraryEras = () => {

  const [breakPoints] = useState([
    { width: 1, itemsToShow: 3, showArrows: false },
    { width: 300, itemsToShow: 3, showArrows: false },
    { width: 400, itemsToShow: 3, showArrows: false },
    { width: 500, itemsToShow: 3, showArrows: false },
    { width: 800, itemsToShow: 3 },
    { width: 900, itemsToShow: 3.4 },
    { width: 1200, itemsToShow: 4.4 },
  ])


  // Change Arrow in react-elastic-carousel Lirbrary
  function customArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ?
      <div className='left_arrow'>
        <HiChevronLeft />
      </div>

      :
      <div className='right_arrow'>
        <HiChevronRight />

      </div>

      ;
    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }


  const tags = [
    { tag: "كل العصور", link: '' },
    { tag: "عصر ما قبل الإسلام", link: '' },
    { tag: "العصر الإسلامي", link: '' },
    { tag: "العصر الأموي", link: '' },
    { tag: "العصر العباسي", link: '' },
    { tag: "كل العصور", link: '' },
    { tag: "عصر ما قبل الإسلام", link: '' },
    { tag: "العصر الإسلامي", link: '' },
    { tag: "العصر الأموي", link: '' },
    { tag: "العصر العباسي", link: '' },
    { tag: "كل العصور", link: '' },
    { tag: "عصر ما قبل الإسلام", link: '' },
    { tag: "العصر الإسلامي", link: '' },
    { tag: "العصر الأموي", link: '' },
    { tag: "العصر العباسي", link: '' },
  ];




  return (

    < section id='LiteraryEras' className={styles.LiteraryEras} style={...Effra.style}>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container'>
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                العصور الأدبية
              </Typography>
            </div>
          </Container>

          <div className={styles.tags_slider}>
            <Carousel breakPoints={breakPoints}
              pagination={false}
              renderArrow={customArrow}
              itemsToScroll={3}
              transitionMs={500}
              isRTL={true}
            >

              <Link href={"/"} className={styles}>
                <Button>
                  كل العصور
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  العصر الإسلامي
                </Button>
              </Link>

              <Link href={"/"} className={styles.active}>
                <Button>
                  العصر الأموي
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
            </Carousel>
          </div>
        </div>
      </Container>
    </section >
  )
}

export default LiteraryEras