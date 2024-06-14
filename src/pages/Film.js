
const Film = () => {
  return (
    <div className="film-section-container">
      <div className="film-section">
        <div className="interactive-video-container">
            <h2>Projekte</h2>
            <iframe 
              title="Custom Video Player"
              src="https://octoclick.de/videoplayer" 
              width="800" 
              height="450" 
              frameborder="0" 
              allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Film