import { useEffect } from "react";

export default function useAutoPlayWhenVisible(videoRef) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Si l’autoplay est bloqué (navigateur), on ne fait rien
          });
        }
      },
      {
        threshold: 0.5, // au moins 50% visible
      }
    );

    observer.observe(video);

    return () => observer.unobserve(video);
  }, [videoRef]);
}
