import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="bg-container">
      <div className="content-container">
        <h1 className="heading">PLANETS</h1>
        <PlanetItem planetsList={planetsList} />
      </div>
    </div>
  )
}

export default PlanetsSlider
