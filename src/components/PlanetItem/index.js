import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetItem = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <div className="planet-container" key={eachPlanet.id}>
            <img
              src={eachPlanet.imageUrl}
              alt={`planet ${eachPlanet.name}`}
              className="image"
            />
            <h1 className="planet-name">{eachPlanet.name}</h1>
            <p className="planet-desc">{eachPlanet.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetItem
