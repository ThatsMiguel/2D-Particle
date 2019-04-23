import React from "react";
import ReactDOM from "react-dom";
import ParticleField from "react-particles-webgl";
import "./styles.css";

function App() {
  /**
   * Config Builder: https://timellenberger.now.sh/particles
   *
   * Docs: https://github.com/tim-soft/react-particles-webgl
   */
  const config = {
    showCube: false,
    dimension: "3D",
    velocity: 1.5,
    boundaryType: "bounce",
    antialias: true,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1
    },
    lines: {
      colorMode: "solid",
      color: "#3FB568",
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 300,
      visible: true
    },
    particles: {
      colorMode: "solid",
      color: "#3FB568",
      transparency: 0.9,
      shape: "circle",
      boundingBox: "canvas",
      count: 50,
      minSize: 20,
      maxSize: 50,
      visible: true
    },
    cameraControls: {
      enabled: true,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true
    }
  };

  return (
    <div className="App">
      <ParticleField config={config} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
