import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Modal from 'react-modal';

const BtsImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const images = [
    "../images/bts/bts-image-01.jpg",
    "../images/bts/bts-image-02.jpg",
    "../images/bts/bts-image-03.jpg",
    "../images/bts/bts-image-05.jpg",
    "../images/bts/bts-image-06.jpg",
    "../images/bts/bts-image-07.jpg",
    "../images/bts/bts-image-08.jpg",
    "../images/bts/bts-image-09.jpg",
    "../images/bts/bts-image-10.jpg",
    "../images/bts/bts-image-11.jpg",
    "../images/bts/bts-image-12.jpg",
    "../images/bts/bts-image-13.jpg",
    "../images/bts/bts-image-14.jpg",
    "../images/bts/bts-image-15.jpg",
    "../images/bts/bts-image-16.jpg",
    "../images/bts/bts-image-17.jpg",
    "../images/bts/bts-image-18.jpg",
    "../images/bts/bts-image-19.jpg",
    "../images/bts/bts-image-20.jpg",
    "../images/bts/bts-image-21.jpg",
    "../images/bts/bts-image-22.jpg",
    "../images/bts/bts-image-23.jpg",
    "../images/bts/bts-image-24.jpg",
    "../images/bts/bts-image-25.jpg",
    "../images/bts/bts-image-26.jpg",
    "../images/bts/bts-image-27.jpg",
    "../images/bts/bts-image-28.jpg",
    "../images/bts/bts-image-29.jpg",
    "../images/bts/bts-image-30.jpg",
    "../images/bts/bts-image-31.jpg",
    "../images/bts/bts-image-32.jpg",
    "../images/bts/bts-image-33.jpg",
    "../images/bts/bts-image-34.jpg"
  ];

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1.5rem">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Bts scene ${index + 1}`}
              loading="lazy"
              onClick={() => openModal(src)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-modal"
        overlayClassName="image-overlay"
      >
        <button onClick={closeModal} className="modal-close-btn">Close</button>
        <img src={currentImg} alt="Enlarged BTS scene" className="modal-image" />
      </Modal>
    </div>
  );
}

export default BtsImageGallery;
