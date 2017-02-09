/* A single firework 
Contains all mesh logic 


*/

class Sparkly {

    constructor(x, y, z, t, col) {

        // var sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
		// this.missile = new THREE.PointLight( 0xff0040, 2, 50 );
		// this.missile.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );



        this.geometry = new THREE.SphereGeometry(0.5, 16, 8);
        var color;
        if (col) {
            this.color = 0xFF44B1;
         
        } else {
            this.color = 0xFF7B8D;     
        }

        this.material = new THREE.MeshLambertMaterial({color: color,  emissive: color, emissiveIntensity: 0.3 });              
        this.missile = new THREE.Mesh(this.geometry, this.material);

        
        this.missile.position.x = x;
        this.missile.position.y = y;
        this.missile.position.z = z;
        this.t = t;
        this.bits = []
        this.scene;

        this.explodeStatus = false;
        this.sparkleStatus = false;
    }

    launch(){

        //smooth this out later
        if (this.missile.position.y < 10*this.t) {
            this.missile.position.y += 1;
        } else if (this.missile.position.y < 100*this.t) {
            this.missile.position.y += 0.5;
        } else {
            this.explodeStatus = true;
        }
        
    }


    explode(scene, f_x, f_y, f_z) {
        for (var i = 0; i < 4; i++) {
            var bitGeo = new THREE.IcosahedronGeometry(0.25);
            var bitMat = new THREE.MeshLambertMaterial({color: this.color,  emissive: this.color, emissiveIntensity: 0.5 });
            var bit = new THREE.Mesh(bitGeo, bitMat);
            scene.add(bit);
            bit.position.z = f_z;
            bit.position.y = f_y;
            bit.position.x = f_x;
            this.bits[i] = bit;
            console.log(bit.position.x);
        }
        console.log("explode called");
        
    }


    explosionTraj() {
        for (var i = 0; i < this.bits.length; i++) {
            var b = this.bits[i];

            if (i === 0) {
                b.position.x += 0.02
            } else if (i === 1) {
                b.position.x -= 0.025;
            } else if (i === 2) {
                b.position.x += 0.04
            } else {
                b.position.x -= 0.044;
            }

            if (b.position.y > 1) {
                b.position.y -= 0.1;
            } else {
                this.sparkleStatus = true;
            }
        }
    }


}