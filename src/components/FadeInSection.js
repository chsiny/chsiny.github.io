import React, { useEffect } from "react";

const FadeInSection = (props) => {
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optional: Stop observing once visible
        }
      });
    });

    observer.observe(domRef.current);
    return () => observer.disconnect(); // Clean up
  }, []);

  return (
    <div className="fade-in" ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeInSection;