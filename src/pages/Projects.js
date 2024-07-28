import { Link } from "react-router-dom"


const Projects = () => {
  return (
    <div className="margin-container">
       <div className="boxed-container">
          <div>
            <h2>Projekte</h2>
            <div class="project-container">
              <h3>Hofgarten</h3>
              <Link to="/hofgarten">Hier klicken</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects