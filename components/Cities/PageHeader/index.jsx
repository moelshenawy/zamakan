import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
import imgs from '../../../assets/constants/imgs'
const PageHeader = () => {

  const { backgroundCity } = imgs;

  return (
    <header id={styles.cities} dir='rtl'>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_container}>
          <div className={styles.img_container}>
            <div className={styles.text_container}>
              <ul>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
              </ul>
            </div>
            <div className={styles.img_box}>
              <img src={backgroundCity.src} />
            </div>
          </div>

          <div className={styles.text_container}>
            <div className={styles.title}>
              <Typography variant='h3'>وجرة</Typography>

              <Typography >صحراء</Typography>

            </div>

            <div className={styles.desc}>
              <Typography >صحراء واسعةٌ ومستوية، تقع في الطرفِ الشَّمالي من سَهل رُكبة في شمال الطائف، فيها أشجارٌ ومياه وأماكن للرعي، وكانت تشتهرُ بكثرة ظِبائها، ولم يعُد <br /> اسم وَجْرة معروفاً اليوم، فقد دخل في المسمَّى العام لسهل رُكبة.</Typography>

            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default PageHeader