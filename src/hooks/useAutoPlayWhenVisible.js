import { useEffect } from "react";

export default function useAutoPlayWhenVisible(videoRef) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    return () => observer.unobserve(video);
  }, [videoRef]);
}
