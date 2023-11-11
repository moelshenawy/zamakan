import { Container, Typography, } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
const Verses = () => {
  return (
    <section id='Verses'>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className="sec_container">
          <div className="info_sec">
            <div className="boxes_container">

              <div className="box">
                <div className="title">
                  <Typography >الاسم السابق</Typography>
                </div>
                <div className="name">
                  <Typography>وجرة</Typography>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <Typography>الاسم الحالي</Typography>
                </div>
                <div className="name">
                  <Typography>ركبه</Typography>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <Typography>أسماء أخرى</Typography>
                </div>
                <div className="name">
                  <Typography>سهل ركبه</Typography>
                </div>
              </div>
              <hr />
              <div className="box">
                <div className="title">
                  <Typography>المنطقة الإدراية</Typography>
                </div>
                <div className="name">
                  <Typography>مكة المكرمة</Typography>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <Typography>قيمة المكان</Typography>
                </div>
                <div className="name">
                  <Typography>مكان مناسب قديمًا للرعي لوفرة مائه وأشجاره</Typography>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <Typography>وصف المكان حديثًا</Typography>
                </div>
                <div className="name">
                  <Typography>غير موجود وهو ضمن سهل ركبة</Typography>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <Typography>الموقع</Typography>
                </div>
                <div className="name">
                  <Typography>شمال الطائف</Typography>
                </div>
              </div>

            </div>
          </div>

          <div className="slider_sec"></div>
        </div>
      </Container>
    </section>
  )
}

export default Verses