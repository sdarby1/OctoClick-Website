import CustomVideoPlayer from "../components/CustomVideoPlayer"

const Film = () => {
  return (
    <div className="film-section-container">
      <div className="film-section">
        <div className="interactive-video-container">
            <h1>Film</h1>
            <CustomVideoPlayer />
        </div>
      </div>
    </div>
  )
}

export default Film