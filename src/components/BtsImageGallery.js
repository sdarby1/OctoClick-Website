import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const BtsImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry gutter="1.5rem">
        <img src="../images/bts/bts-image-01.jpg" alt="Bts scene 1" loading="lazy"/>
        <img src="../images/bts/bts-image-02.jpg" alt="Bts scene 2" loading="lazy"/>
        <img src="../images/bts/bts-image-05.jpg" alt="Bts scene 5" loading="lazy"/>
        <img src="../images/bts/bts-image-06.jpg" alt="Bts scene 6" loading="lazy"/>
        <img src="../images/bts/bts-image-07.jpg" alt="Bts scene 7" loading="lazy"/>
        <img src="../images/bts/bts-image-08.jpg" alt="Bts scene 8" loading="lazy"/>
        <img src="../images/bts/bts-image-09.jpg" alt="Bts scene 9" loading="lazy"/>
        <img src="../images/bts/bts-image-10.jpg" alt="Bts scene 10" loading="lazy"/>
        <img src="../images/bts/bts-image-11.jpg" alt="Bts scene 11" loading="lazy"/>
        <img src="../images/bts/bts-image-12.jpg" alt="Bts scene 12" loading="lazy"/>
        <img src="../images/bts/bts-image-13.jpg" alt="Bts scene 13" loading="lazy"/>
        <img src="../images/bts/bts-image-14.jpg" alt="Bts scene 14" loading="lazy"/>
        <img src="../images/bts/bts-image-15.jpg" alt="Bts scene 15" loading="lazy"/>
        <img src="../images/bts/bts-image-16.jpg" alt="Bts scene 16" loading="lazy"/>
        <img src="../images/bts/bts-image-17.jpg" alt="Bts scene 17" loading="lazy"/>
        <img src="../images/bts/bts-image-18.jpg" alt="Bts scene 18" loading="lazy"/>
        <img src="../images/bts/bts-image-19.jpg" alt="Bts scene 19" loading="lazy"/>
        <img src="../images/bts/bts-image-20.jpg" alt="Bts scene 20" loading="lazy"/>
        <img src="../images/bts/bts-image-21.jpg" alt="Bts scene 21" loading="lazy"/>
        <img src="../images/bts/bts-image-22.jpg" alt="Bts scene 22" loading="lazy"/>
        <img src="../images/bts/bts-image-23.jpg" alt="Bts scene 23" loading="lazy"/>
        <img src="../images/bts/bts-image-24.jpg" alt="Bts scene 24" loading="lazy"/>
        <img src="../images/bts/bts-image-25.jpg" alt="Bts scene 25" loading="lazy"/>
        <img src="../images/bts/bts-image-26.jpg" alt="Bts scene 26" loading="lazy"/>
        <img src="../images/bts/bts-image-27.jpg" alt="Bts scene 27" loading="lazy"/>
        <img src="../images/bts/bts-image-28.jpg" alt="Bts scene 28" loading="lazy"/>
        <img src="../images/bts/bts-image-29.jpg" alt="Bts scene 29" loading="lazy"/>
        <img src="../images/bts/bts-image-30.jpg" alt="Bts scene 30" loading="lazy"/>
        <img src="../images/bts/bts-image-31.jpg" alt="Bts scene 31" loading="lazy"/>
        <img src="../images/bts/bts-image-32.jpg" alt="Bts scene 32" loading="lazy"/>
        <img src="../images/bts/bts-image-33.jpg" alt="Bts scene 33" loading="lazy"/>
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default BtsImageGallery;
