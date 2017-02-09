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

    genSparkly() {
        var x = Math.floor(Math.random() * 150) + 1;
        x *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        return new Sparkly(x, 10, -(Math.random() * 10 + 30), Math.random());
    }


    lightshow() {

        for (var i = 0; i < this.fireworks.length; i++) {
            var explodeStatus = this.fireworks[i].launch();
            if (explodeStatus) {
                scene.remove(this.fireworks[i].missile);
                this.explosions.push(this.fireworks[i].explode());
            }


        }

        // var newExp = Math.random();
        // if (newExp < 0.3) {
        //     var f = this.genSparkly();
        //     this.fireworks.push(f);
        //      scene.add(f);
        // }

    }



}