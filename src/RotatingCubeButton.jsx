import React from 'react';

const RotatingCubeButton = () => {
  const handleClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="flex items-center justify-center w-full mt-8">
      <div className="cube-wrapper">
        <div className="cube" onClick={handleClick}>
          <div className="cube-face front">דברו איתנו</div>
          <div className="cube-face back">דברו איתנו</div>
          <div className="cube-face right">דברו איתנו</div>
          <div className="cube-face left">דברו איתנו</div>
          <div className="cube-face top">דברו איתנו</div>
          <div className="cube-face bottom">דברו איתנו</div>
        </div>
      </div>

      <style jsx>{`
        .cube-wrapper {
          perspective: 1000px;
          width: 160px;
          height: 60px;
          position: relative;
          transform-style: preserve-3d;
          filter: drop-shadow(2px 2px 0px #000);
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 8s infinite linear;
          cursor: pointer;
        }

        .cube-face {
          position: absolute;
          width: 160px;
          height: 60px;
          background: #124A36;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Amatic SC', cursive;
          font-size: 22px;
          font-weight: bold;
          border: 2px solid #0a2a1f;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s;
          pointer-events: auto;
          user-select: none;
          text-shadow: 1px 1px 0px #000;
        }

        .cube:hover .cube-face {
          background: #1a654a;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
          text-shadow: 2px 2px 0px #000;
        }

        .front { transform: translateZ(30px); }
        .back { transform: translateZ(-30px) rotateX(180deg); }
        .right { transform: rotateX(90deg) translateZ(30px); }
        .left { transform: rotateX(-90deg) translateZ(30px); }
        .top { transform: translateY(-30px) rotateX(90deg); }
        .bottom { transform: translateY(30px) rotateX(-90deg); }

        @keyframes rotate {
          0% { transform: rotateX(0); }
          100% { transform: rotateX(360deg); }
        }

        @media (max-width: 640px) {
          .cube-wrapper {
            width: 120px;
            height: 45px;
          }
          
          .cube-face {
            width: 120px;
            height: 45px;
            font-size: 18px;
          }

          .front { transform: translateZ(22.5px); }
          .back { transform: translateZ(-22.5px) rotateX(180deg); }
          .right { transform: rotateX(90deg) translateZ(22.5px); }
          .left { transform: rotateX(-90deg) translateZ(22.5px); }
          .top { transform: translateY(-22.5px) rotateX(90deg); }
          .bottom { transform: translateY(22.5px) rotateX(-90deg); }
        }
      `}</style>
    </div>
  );
};

export default RotatingCubeButton;