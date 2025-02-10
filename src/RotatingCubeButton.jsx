const RotatingCubeButton = () => {
  return (
    <>
      <div 
        className="cube-wrapper group relative" 
        style={{ 
          width: 'clamp(100px, 10vw, 180px)', 
          height: 'clamp(40px, 5vh, 60px)',
          marginRight: '50px',  // הוספת margin קבוע של 50px
          transform: 'translateX(50px)' // הוספת הזזה של 50px ימינה
        }}
      >
        <a href="/contact" className="absolute inset-0 z-20 cursor-pointer" aria-label="Contact us" />
        <div className="cube">
          <div className="cube-face front" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
          <div className="cube-face back" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
          <div className="cube-face top" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
          <div className="cube-face bottom" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
        </div>
      </div>
      <Global
        styles={`
          .cube-wrapper {
            perspective: 1000px;
            transform-style: preserve-3d;
            filter: drop-shadow(2px 2px 0px #000);
          }

          .cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateX 8s infinite linear;
          }

          .cube-face {
            position: absolute;
            width: 100%;
            height: 100%;
            background: black;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border: 2px solid #0a2a1f;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s;
            user-select: none;
            text-shadow: 1px 1px 0px #000;
          }

          .cube-wrapper:hover .cube-face {
            background: #B4B4B4;
            box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
            text-shadow: 2px 2px 0px #000;
          }

          .front { transform: translateZ(20px); }
          .back { transform: rotateX(180deg) translateZ(20px); }
          .right { transform: rotateY(90deg) translateZ(50px); }
          .left { transform: rotateY(-90deg) translateZ(50px); }
          .top { transform: rotateX(90deg) translateZ(20px); }
          .bottom { transform: rotateX(-90deg) translateZ(20px); }

          @keyframes rotateX {
            0% { transform: rotateX(0deg); }
            100% { transform: rotateX(-360deg); }
          }
        `}
      />
    </>
  );
};