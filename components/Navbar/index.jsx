import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss'
import { CssBaseline, useScrollTrigger, Slide, AppBar, Toolbar, Button, Container } from '@mui/material';
import imgs from '../../assets/constants/imgs'
import { burgerIcon, Logo, Rectangle, Search } from '../../assets/svgsComponents';

import localFont from 'next/font/local'

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


const Navbar = (props) => {
  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <>

      <main style={...Effra.style}>

        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar style={{ background: '#F6F8FC' }} >

            <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
              <div className={styles.sec_container}
              >
                <Button className={styles.burger_icon} >
                  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39014 1H17.3901M1.39014 7H17.3901M1.39014 13H17.3901" stroke="#11292F" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </Button>


                <div className={styles.logo}>
                  {/* <img src={Logo.src} alt='zamakan_logo' /> */}
                  <Logo />
                </div>


                <div className={styles.discover}>

                  <Button className={styles.search_icon}>
                    <Search />
                  </Button>

                  <div className={styles.btn_container}>
                    <Button>استكشف الشعراء</Button>
                  </div>
                </div>

              </div>
            </Container>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </main>
    </>
  );
};

export default Navbar;
