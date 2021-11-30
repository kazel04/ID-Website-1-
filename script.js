// animation for mobile version, only if screen width < 600

console.log(screen.width)
if (screen.width < 1366)
{

  //Edited animation from Marco Dell Anna's original open source Stardust background.
  let particles = [];
  let microparticles = [];

  const c1 = createCanvas({ width: $(window).width(), height: $(window).height() });

  const tela = c1.canvas;
  const canvas = c1.context;

  // $("body").append(tela);
  $("body").append(c1.canvas);


  class Particle {
    constructor(canvas) {
      this.random = Math.random();
      this.random1 = Math.random();
      this.random2 = Math.random();
      this.progress = 0;
      this.canvas = canvas;
      this.life = 1000 + Math.random() * 3000;

      this.x = $(window).width() / 2 + (Math.random() * 20 - Math.random() * 20);
      this.y = $(window).height();
      this.s = 2 + Math.random();
      this.w = $(window).width();
      this.h = $(window).height();
      this.direction = this.random > .5 ? -1 : 1;
      this.radius = 1 + 3 * this.random;
      this.color = "#ff417d";

      this.ID = setInterval(function () {
        microparticles.push(new microParticle(c1.context, {
          x: this.x,
          y: this.y }));

      }.bind(this), this.random * 20);

      setTimeout(function () {
        clearInterval(this.ID);
      }.bind(this), this.life);
    }

    render() {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      // this.canvas.lineWidth = 2;
      this.canvas.shadowOffsetX = 0;
      this.canvas.shadowOffsetY = 0;
      // this.canvas.shadowBlur = 6;
      this.canvas.shadowColor = "#000000";
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }

    move() {
      this.x -= this.direction * Math.sin(this.progress / (this.random1 * 430)) * this.s;
      this.y -= Math.cos(this.progress / this.h) * this.s;

      if (this.x < 0 || this.x > this.w - this.radius) {
        clearInterval(this.ID);
        return false;
      }

      if (this.y < 0) {
        clearInterval(this.ID);
        return false;
      }
      this.render();
      this.progress++;
      return true;
    }}


  class microParticle {
    constructor(canvas, options) {
      this.random = Math.random();
      this.random1 = Math.random();
      this.random2 = Math.random();
      this.progress = 0;
      this.canvas = canvas;

      this.x = options.x;
      this.y = options.y;
      this.s = 2 + Math.random() * 3;
      this.w = $(window).width();
      this.h = $(window).height();
      this.radius = 1 + this.random * 0.5;
      this.color = "#4EFCFE"; //this.random > .5 ? "#a9722c" : "#FFFED7"
    }

    render() {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.canvas.lineWidth = 2;
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }

    move() {
      this.x -= Math.sin(this.progress / (100 / (this.random1 - this.random2 * 10))) * this.s;
      this.y += Math.cos(this.progress / this.h) * this.s;

      if (this.x < 0 || this.x > this.w - this.radius) {
        return false;
      }

      if (this.y > this.h) {
        return false;
      }
      this.render();
      this.progress++;
      return true;
    }}


  var random_life = 1000;


  setInterval(
  function () {
    particles.push(new Particle(canvas));
    random_life = 2000 * Math.random();
  }.bind(this),
  random_life);

  function clear() {
    let grd = canvas.createRadialGradient(tela.width / 2, tela.height / 2, 0, tela.width / 2, tela.height / 2, tela.width);
    grd.addColorStop(0, "rgba(82,42,114,1)");
    grd.addColorStop(1, "rgba(26,14,4,0)");
    // Fill with gradient
    canvas.globalAlpha = 0.16;
    canvas.fillStyle = grd;
    canvas.fillRect(0, 0, tela.width, tela.height);
  }

  function blur(ctx, canvas, amt) {
    // ctx.filter = `blur(${amt}px)`
    // ctx.drawImage(canvas, 0, 0)
    // ctx.filter = 'none'
  }

  function update() {
    clear();
    particles = particles.filter(function (p) {
      return p.move();
    });
    microparticles = microparticles.filter(function (mp) {
      return mp.move();
    });
    requestAnimationFrame(update.bind(this));
  }


  function createCanvas(properties) {
    let canvas = document.createElement('canvas');
    canvas.width = properties.width;
    canvas.height = properties.height;
    let context = canvas.getContext('2d');
    return {
      canvas: canvas,
      context: context };

  }
  update();
}

else{
  //Background from Johan's original open source "Stars with particles JS"

  console.log("Check that this works")
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}