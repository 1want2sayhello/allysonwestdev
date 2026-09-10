import { useEffect, useRef, useState } from "react";

const DemoPreview = ({ demo }) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            setShouldLoad(true);
          } else {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    video.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? demo.preview : undefined}
      muted
      loop
      playsInline
      preload="none"
    />
  );
};

export default DemoPreview;
