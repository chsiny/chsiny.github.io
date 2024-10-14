function StarsBackground() {
    const starsArray = new Array(100).fill(0);
    return (
      <div className="stars">
        {starsArray.map((_, i) => (
          <div key={i} className="star" style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${Math.random() * 2 + 1}s`
          }} />
        ))}
      </div>
    );
  }
  
  export default StarsBackground;