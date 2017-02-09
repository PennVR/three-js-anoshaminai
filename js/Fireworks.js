class Fireworks {


    constructor(scene, num) {
        this.fireworks = [];
        this.explosions = [];
        this.num = num;
        this.scene = scene;

        for (var i = 0; i < num; i++) {
            this.fireworks[i] = this.genSparkly();

            scene.add(this.fireworks[i].missile);
        }

    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    genSparkly() {
        var x = Math.floor(Math.random() * 200) + 1;
        x *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        var t = this.getRandomArbitrary(0.5, 1);
        return new Sparkly(x, 10, -(Math.random() * 10 + 30), t);
    }


    lightshow() {

        for (var i = 0; i < this.fireworks.length; i++) {
            var f = this.fireworks[i];
            f.launch();
            
            if (f.explodeStatus) {
                var f_x = f.missile.position.x;
                var f_y = f.missile.position.y;
                var f_z = f.missile.position.z;
                scene.remove(f.missile);
                this.fireworks.splice(i,1);
                f.explode(this.scene, f_x, f_y, f_z);
                this.explosions.push(f);
                console.log(f_x);
                console.log(f_y);
                console.log(f_z);
                console.log("explosion");
                f.explodeStatus = false;
            }
        }

        for (var j = 0; j < this.explosions.length; j++) {
            var ex = this.explosions[j];
            ex.explosionTraj();
            if (ex.sparkleStatus) {
                scene.remove(ex.bits[0]);
                scene.remove(ex.bits[1]);
                scene.remove(ex.bits[2]);
                scene.remove(ex.bits[3]);
                this.explosions.splice(j, 1);
                console.log("explosion complete");
                ex.sparkleStatus = false;
            }
        }

        var newExp = Math.random();
        if (newExp < 0.05 && this.fireworks.length < 8) {
            var f = this.genSparkly();
            this.fireworks.push(f);
            scene.add(f);
        }

    }



}