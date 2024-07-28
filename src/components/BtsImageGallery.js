import React from 'react'
import Masonry, { ResponsiveMasonry, gutter } from 'react-responsive-masonry'

const BtsImageGallery = () => {
  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="1.5rem">
                    <img src="../images/bts/bts-image-001.jpg" alt="Bts scene 1"/>
                    <img src="../images/bts/bts-image-002.jpg" alt="Bts scene 2"/>
                    <img src="../images/bts/bts-image-003.jpg" alt="Bts scene 3"/>
                    <img src="../images/bts/bts-image-004.jpg" alt="Bts scene 4"/>
                    <img src="../images/bts/bts-image-005.jpg" alt="Bts scene 5"/>
                    <img src="../images/bts/bts-image-006.jpg" alt="Bts scene 6"/>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                </Masonry>
            </ResponsiveMasonry>
  )
}

export default BtsImageGallery