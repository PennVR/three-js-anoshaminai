/*
Perlin Noise implementation based on http://flafla2.github.io/2014/08/09/perlinnoise.html


*/
var p;
class PerlinNoise {

    //initialize random array of 0-255 inclusive + allow for repeat value in case of tiling
    // default repeat set to -1 - no tiling
    constructor(repeat = -1) {
        p = [151,160,137,91,90,15,
		131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,	
		190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
		88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
		77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
		102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
		135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
		5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
		223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
		129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
		251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
		49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
		138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];

        this.repeat = repeat;

    }

    //implement perlin noise
    perlin(x, y, z) {
        if (this.repeat > 0) {
            x = x % this.repeat;
            y = y % this.repeat;
            z = z % this.repeat;
        }

        var xint = Math.floor(x) & 255;
        var yint = Math.floor(y) & 255;
        var zint = Math.floor(z) & 255;

        var xdec = x - Math.floor(x);
        var ydec = y - Math.floor(y);
        var zdec = z - Math.floor(z);

        var u = this.fade(xdec);
        var v = this.fade(ydec);
        var w = this.fade(zdec);

        // calculate hash values for each cube corner 
        var aaa = p[p[p[xint] + this.inc(yint)] + zint];
        var aab = p[p[p[this.inc(xint)] + this.inc(yint)] + zint];

        var aba = p[p[p[xint] + yint] + zint];
        var abb = p[p[p[this.inc(xint)] + yint] + zint];
        
        var baa = p[p[p[xint] + yint] + this.inc(zint)];
        var bab = p[p[p[this.inc(xint)] + yint] + this.inc(zint)];

        var bba = p[p[p[xint] + this.inc(yint)] + this.inc(zint)];
        var bbb = p[p[p[this.inc(xint)] + this.inc(yint)] + this.inc(zint)];

        var ltop = this.lerp( this.grad(aaa, xdec, ydec - 1, zdec), this.grad(aab, xdec - 1, ydec - 1, zdec), u);

        var lbottom = this.lerp ( this.grad(aba, xdec, ydec, zdec), this.grad(abb, xdec - 1, ydec, zdec), u);
        var front = this.lerp(ltop, lbottom, v);

        var ltop2 = this.lerp( this.grad(bba, xdec, ydec - 1, zdec - 1), this.grad(bbb, xdec - 1, ydec - 1, zdec - 1), u);
        var lbottom2 = this.lerp ( this.grad(baa, xdec, ydec, zdec - 1), this.grad(bab, xdec - 1, ydec, zdec - 1), u);
        var back = this.lerp(ltop2, lbottom2, v);

       var fin = this.lerp(front, back, w);
       return (fin + 1) / 2;
    }

    // perlin noise fade function 
    fade(val) {
        return (6 * Math.pow(val, 5)) - (15 * Math.pow(val, 4)) + (10 * Math.pow(val,3));
    }

    // increment val + wraparound in case of tiling 
    inc(num) {
        num++;
        if (this.repeat > 0) {
            num = num % this.repeat;
        }
        return num;
    }

    //choose psuedorandom gradient vector and find dot product with input vector (x, y, z)
    grad(hash, x, y, z) {
        switch(hash & 0xF) {
            case 0x0: return x + y;
            case 0x1: return x + z;
            case 0x2: return -x + y;
            case 0x3: return -x + z;
            case 0x4: return x - y;
            case 0x5: return x - z;
            case 0x6: return -x - y;
            case 0x7: return -x - z;
            case 0x8: return y + z;
            case 0x9: return -y + z;
            case 0xA: return y - z;
            case 0xB: return -y - z;
            case 0xC: return x + y;
            case 0xD: return y - z;
            case 0xE: return -x - z;
            case 0xF: return y - x;
            default: return x + y;
        }
    }

    // linear interpolation function
    lerp(v1, v2, s) {
        return v1 + s * (v2 - v1);
    }

}

