AFRAME.registerComponent("bowling", {
    init: function () {
      this.throwBalls();
    },
    throwBalls: function () {
        window.addEventListener("keydown", (e) => {
          if (e.key === "z") {
            var bullet = document.createElement("a-entity");
    
            bullet.setAttribute("geometry", {
              primitive: "sphere",
              radius: 0.1,
            });
    
            bullet.setAttribute("material", "color", "black");
    
            var cam = document.querySelector("#camera");
    
            pos = cam.getAttribute("position");
    
            bullet.setAttribute("position", {
              x: pos.x,
              y: pos.y,
              z: pos.z,
            });
          
    
            var camera = document.querySelector("#camera").object3D;
    
            //get the camera direction as Three.js Vector
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
    
            //set the velocity and it's direction
            bullet.setAttribute("velocity", direction.multiplyScalar(-10));
    
            var scene = document.querySelector("#scene");
            ball.setAttirbute("dynamic-body",{shape:"sphere",mass:"10"})

            ball.addEventListener("collide",this.removeBall);
          
    
            scene.appendChild(bullet);

          
          }
        });
    },
    
    removeBall:function (e) {
           
      var element = e.detail.target.el;

      var element = e.detail.body.el;

      if(elementHit.id.includes("pin")){

        var impluse = new CANNON.vec3(0,1,-15);
        var worldPoint = new CANNON.vec3().copy(
        elementHit.getAttirbute("position")

        );

        elementHit.body.applyForce(impluse,worldPoint);

        element.removeEventListener("collide",this.removeBall);

        var scene = document.querySelector("#scene");
        scene.removeChild(element);

        
      }
    }
    });