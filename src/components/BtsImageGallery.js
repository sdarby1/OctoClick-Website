import React from 'react'
import Masonry, { ResponsiveMasonry, gutter } from 'react-responsive-masonry'

const BtsImageGallery = () => {
  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="1.5rem">
                  <img src="../images/bts/bts-image-01.jpg" alt="Bts scene 1"/>
                  <img src="../images/bts/bts-image-02.jpg" alt="Bts scene 2"/>
                  <img src="../images/bts/bts-image-05.jpg" alt="Bts scene 5"/>
                  <img src="../images/bts/bts-image-06.jpg" alt="Bts scene 6"/>
                  <img src="../images/bts/bts-image-07.jpg" alt="Bts scene 7"/>
                  <img src="../images/bts/bts-image-08.jpg" alt="Bts scene 8"/>
                  <img src="../images/bts/bts-image-09.jpg" alt="Bts scene 9"/>
                  <img src="../images/bts/bts-image-10.jpg" alt="Bts scene 10"/>
                  <img src="../images/bts/bts-image-11.jpg" alt="Bts scene 11"/>
                  <img src="../images/bts/bts-image-12.jpg" alt="Bts scene 12"/>
                  <img src="../images/bts/bts-image-13.jpg" alt="Bts scene 13"/>
                  <img src="../images/bts/bts-image-14.jpg" alt="Bts scene 14"/>
                  <img src="../images/bts/bts-image-15.jpg" alt="Bts scene 15"/>
                  <img src="../images/bts/bts-image-16.jpg" alt="Bts scene 16"/>
                  <img src="../images/bts/bts-image-17.jpg" alt="Bts scene 17"/>
                  <img src="../images/bts/bts-image-18.jpg" alt="Bts scene 18"/>
                  <img src="../images/bts/bts-image-19.jpg" alt="Bts scene 19"/>
                  <img src="../images/bts/bts-image-20.jpg" alt="Bts scene 20"/>
                  <img src="../images/bts/bts-image-21.jpg" alt="Bts scene 21"/>
                  <img src="../images/bts/bts-image-22.jpg" alt="Bts scene 22"/>
                  <img src="../images/bts/bts-image-23.jpg" alt="Bts scene 23"/>
                  <img src="../images/bts/bts-image-24.jpg" alt="Bts scene 24"/>
                  <img src="../images/bts/bts-image-25.jpg" alt="Bts scene 25"/>
                  <img src="../images/bts/bts-image-26.jpg" alt="Bts scene 26"/>
                  <img src="../images/bts/bts-image-27.jpg" alt="Bts scene 27"/>
                  <img src="../images/bts/bts-image-28.jpg" alt="Bts scene 28"/>
                  <img src="../images/bts/bts-image-29.jpg" alt="Bts scene 29"/>
                  <img src="../images/bts/bts-image-30.jpg" alt="Bts scene 30"/>
                  <img src="../images/bts/bts-image-31.jpg" alt="Bts scene 31"/>
                  <img src="../images/bts/bts-image-32.jpg" alt="Bts scene 32"/>
                  <img src="../images/bts/bts-image-33.jpg" alt="Bts scene 33"/>

                </Masonry>
            </ResponsiveMasonry>
  )
}

export default BtsImageGallery