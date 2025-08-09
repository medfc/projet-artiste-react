import { useState, useEffect } from 'react'

export function useImageSlider(images, interval = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return {
    currentImage: images[currentIndex],
    currentIndex,
    next,
    prev
  }
}
