import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="map-section">
    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.162384426141!2d9.967496977025103!3d53.55631807235098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f6b16876c0d%3A0xe4547029b9726d08!2sSAE%20Institute%20Hamburg!5e0!3m2!1sde!2sde!4v1723562203560!5m2!1sde!2sde"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Our location on Google Maps"></iframe>    
    </div>

    <div className='margin-container'>
      <div className='boxed-container'>
        <h3 className='contact-headline'>Wie Sie uns erreichen</h3>
        <p><strong>OctoClick Productions</strong></p>
        <p>Feldstraße 66
          <br></br>
          20359 Hamburg
          <br></br>
          <br></br>
          Tel.: +49 1734522130
          <br></br>
          EMail: info@octoclick.de
        </p>
      </div>
    </div>
    </>
  )
}

export default Contact