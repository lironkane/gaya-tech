import React from 'react';
import { Link } from 'react-router-dom';

const RotatingCubeButton = () => {
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <div className="cube-wrapper group">
        <Link to="/contact" className="absolute inset-0 z-10" />
        <div className="cube">
          <div className="cube-face front">דברו איתנו</div>
          <div className="cube-face back">דברו איתנו</div>
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
          font-family: 'Amatic SC', cursive;
          font-size: 22px;
          font-weight: bold;
          border: 2px solid #0a2a1f;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s;
          user-select: none;
          text-shadow: 1px 1px 0px #000;
        }

        .cube-wrapper:hover .cube-face {
          background: #1a654a;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
          text-shadow: 2px 2px 0px #000;
        }

        .front { transform:  translateZ(30px); }
        .back { transform: rotateX(180deg) translateZ(30px); }
        .right { transform: rotateY(90deg) translateZ(80px) scaleX(-1); }
        .left { transform: rotateY(-90deg) translateZ(80px) scaleX(-1); }
        .top { transform: rotateX(90deg) translateZ(30px); }
        .bottom { transform: rotateX(-90deg) translateZ(30px); }

        @keyframes rotateX {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-360deg); }
        }

        @media (max-width: 640px) {
          .cube-wrapper {
            width: 120px;
            height: 45px;
          }

          .cube-face {
            width: 100%;
            height: 100%;
            font-size: 18px;
          }

          .front { transform: translateZ(22.5px); }
          .back { transform: translateZ(-22.5px) rotateX(180deg); }
          .right { transform: rotateY(90deg) translateZ(60px) scaleX(-1); }
          .left { transform: rotateY(-90deg) translateZ(60px) scaleX(-1); }
          .top { transform: rotateX(90deg) translateZ(22.5px); }
          .bottom { transform: rotateX(-90deg) translateZ(22.5px); }
        }
      `}</style>
    </div>
  );
};

export default RotatingCubeButton;