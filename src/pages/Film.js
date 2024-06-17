
const Film = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h2>Film</h2>
      <div className="iframe-section" style={{ height: '100%' }}>
        <iframe 
          title="Custom Video Player"
          src="https://octoclick.de/videoplayer" 
          frameBorder="0" 
          allow="fullscreen"
          allowFullScreen
          style={{ border: 'none', padding: '0', margin: '0', display: 'block', width: '100%', height: '100%' }}
        >
        </iframe>
      </div>
    </div>
  )
}

export default Film