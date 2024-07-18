import React from 'react'
import Masonry, { ResponsiveMasonry, gutter } from 'react-responsive-masonry'

const BtsImageGallery = () => {
  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="1.5rem">
                    <img src="../images/bts/bts-image-001.jpg"/>
                    <img src="../images/bts/bts-image-002.jpg"/>
                    <img src="../images/bts/bts-image-003.jpg"/>
                    <img src="../images/bts/bts-image-004.jpg"/>
                    <img src="../images/bts/bts-image-005.jpg"/>
                    <img src="../images/bts/bts-image-006.jpg"/>
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