import { useImageSlider } from '../hooks/useImageSlider'

export default function Carousel({ images, interval = 4000 }) {
  const { currentImage, next, prev } = useImageSlider(images, interval)

  return (
    <div className="carousel">
      <img src={currentImage} alt="Slide" className="carousel-image" />
      <div className="carousel-controls">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </div>
  )
}
