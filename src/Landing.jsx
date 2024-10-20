import React, { useEffect, useRef } from "react";
import "./Landing.css"; 
import Home from './Home/Home';
import { Link } from 'react-router-dom';

const Landing = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

    const randomNum = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

    function RainDrops(x, y, endy, velocity, opacity) {
      this.x = x;
      this.y = y;
      this.endy = endy;
      this.velocity = velocity;
      this.opacity = opacity;

      this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y - this.endy);
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        c.stroke();
      };

      this.update = function () {
        const rainEnd = window.innerHeight + 100;
        if (this.y >= rainEnd) {
          this.y = this.endy - 100;
        } else {
          this.y += this.velocity;
        }
        this.draw();
      };
    }

    let rainArray = [];
    for (let i = 0; i < 140; i++) {
      let rainXLocation = Math.floor(Math.random() * window.innerWidth);
      let rainYLocation = Math.random() * -500;
      let randomRainHeight = randomNum(10, 2);
      let randomSpeed = randomNum(20, 0.2);
      let randomOpacity = Math.random() * 0.55;
      rainArray.push(
        new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity)
      );
    }

    const animateRain = () => {
      requestAnimationFrame(animateRain);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      rainArray.forEach((rainDrop) => rainDrop.update());
    };

    animateRain();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -0.005}deg`);
      document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * 0.01}deg`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="layers">
      <div className="layers__container">
        <div className="layers__item layer-1" style={{ backgroundImage: `url(./public/img/layer-1.jpg)` }}></div>
        <div className="layers__item layer-2" style={{ backgroundImage: `url(./public/img/layer-2.png)` }}></div>
        <div className="layers__item layer-3">
          <div className="hero-content">
            <h1>Green Track<span></span></h1>
            <div className="hero-content__p"> Environment Sustainability Website </div>
            <Link to="/Home">
              <button className="btn-start">Start Exploring</button>
             </Link>
          </div>
        </div>
        <div className="layers__item layer-4">
          <canvas ref={canvasRef} className="rain"></canvas>
        </div>
        <div className="layers__item layer-5" style={{ backgroundImage: `url(./public/img/layer-5.png)` }}></div>
        <div className="layers__item layer-6" style={{ backgroundImage: `url(./public/img/layer-6.png)` }}></div>
      </div>
    </section>
  );
};

export default Landing;
