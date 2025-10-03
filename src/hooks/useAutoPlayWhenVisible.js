import { useEffect } from "react";

export default function useAutoPlayWhenVisible(videoRef) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  // Crée un observer pour détecter si la vidéo est visible à l’écran
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
           
          });
        }
      },
      {
        threshold: 0.5,  /* visibilité 50% mini*/
      }
    );

    observer.observe(video);
  // Arrêter l’observation si le composant est démonté
    return () => observer.unobserve(video);
  }, [videoRef]);
}
