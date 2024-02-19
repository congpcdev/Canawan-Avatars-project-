import { useEffect } from "react";

const GridDot = () => {
  const getDocumentWidth = () => {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  };
  const getDocumentHeight = () => {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  };
  // grid

  // dots
  const drawDots = (context: any, vw: any, vh: any) => {
    const r = 2,
      cw = 30,
      ch = 30;

    for (let x = 20; x < vw; x += cw) {
      for (let y = 20; y < vh; y += ch) {
        context.fillStyle = "#3d3d3f";
        context.fillRect(x - r / 2, y - r / 2, r, r);
      }
    }
  };
  useEffect(() => {
    const canvas: any = document.getElementById("dotCanvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");

    let vw = getDocumentWidth();
    let vh = getDocumentHeight();

    // resize the canvas to fill the browser window
    window.addEventListener("resize", onResize, false);
    function onResize() {
      vw = getDocumentWidth();
      vh = getDocumentHeight();
      resizeCanvas();
    }

    function resizeCanvas() {
      canvas.width = vw;
      canvas.height = vh;
      drawDots(context, vw, vh);
    }
    resizeCanvas();

    // drawGrid();

    drawDots(context, vw, vh);
  }, []);
  return (
    <div>
      {" "}
      <canvas id="dotCanvas"></canvas>
    </div>
  );
};

export default GridDot;
