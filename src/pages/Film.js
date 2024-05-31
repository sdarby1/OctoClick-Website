import CustomVideoPlayer from "../components/CustomVideoPlayer"

const Film = () => {
  return (
    <div className="film-section-container">
      <div className="film-section">
        <div className="interactive-video-container">
            <h2>Film</h2>
            <CustomVideoPlayer />
        </div>
      </div>
    </div>
  )
}

export default Film