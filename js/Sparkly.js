/* A single firework 
Contains all mesh logic 


*/

class Sparkly {

    constructor(x, y, z, t) {

        var sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
		this.missile = new THREE.PointLight( 0xff0040, 2, 50 );
		this.missile.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
        // this.geometry = new THREE.SphereGeometry(0.5, 32, 32);
        // this.material = new THREE.MeshLambertMaterial({color: 0xffe100,  emissive: 0xa4f7f9, emissiveIntensity: 0.3 });
        // this.missile = new THREE.Mesh(this.geometry, this.material);
        this.missile.position.x = x;
        this.missile.position.y = y;
        this.missile.position.z = z;
        this.t = t;
    }

    launch(){

        //smooth this out later
        if (this.missile.position.y < 10*this.t) {
            this.missile.position.y += 1;
            
        } else if (this.missile.position.y < 75*this.t) {
            this.missile.position.y += 0.1;
            console.log(this.missile.position.y);
        } 
        else if (this.missile.position.y < 150*this.t) {
            this.missile.position.y += 0.01;
        } else {
            return true;
        }
        
    }


    explode(scene) {
        this.bits = []
        for (var x = 0; x < 5; x++) {
            var expSphere = new THREE.SphereGeometry( 0.05, 16, 8 );
		    var bit = new THREE.PointLight( 0xf8bf6f9, 2, 50 );
		    bit.add( new THREE.Mesh( expSphere, new THREE.MeshBasicMaterial( { color: 0x8bf6f9 } ) ) );
            bits[x] = bit;
            scene.add(bit);
        }
        return this.bits;  
    }

    explodeTrajectory(particleNum) {


    }


}