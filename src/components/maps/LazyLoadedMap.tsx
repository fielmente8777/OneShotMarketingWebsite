"use client";
// components/LazyLoadedMap.jsx
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Loading = () => (
  <p className="text-center font-bold text-3xl text-blue-primary">
    Loading map...
  </p>
);

const EmbeddedMap = dynamic(() => import("./EmbeddedMap"), {
  ssr: false, // This ensures the component is only rendered on the client side
  loading: Loading,
});

/**
 * Mounts the Google Maps iframe only when it is about to scroll into view.
 * (The browser's native iframe lazy-loading starts ~1250px+ early, which
 * pulled ~600KB of Maps JavaScript into the initial page load.)
 */
const LazyLoadedMap: React.FC<{ src: string }> = ({ src }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {visible ? <EmbeddedMap src={src} /> : <Loading />}
    </div>
  );
};

export default LazyLoadedMap;
