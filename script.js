document.addEventListener('contextmenu', event => event.preventDefault());
const FPS = 5;
const width = 1920;
const height = 512;
const rows = 8;
const cols = 30;
const LEDSIZE = 64;
let msgArray;

const msg = "hello world";

function getCharArray(c) {
    switch (c) {
        case 'A':
            return A;
            break;
        case 'B':
            return B;
            break;
        case 'C':
            return C;
            break;
        case 'D':
            return D;
            break;
        case 'E':
            return E;
            break;
        case 'F':
            return F;
            break;
        case 'G':
            return G;
            break;
        case 'H':
            return H;
            break;
        case 'I':
            return I;
            break;
        case 'J':
            return J;
            break;
        case 'K':
            return K;
            break;
        case 'L':
            return L;
            break;
        case 'M':
            return M;
            break;
        case 'N':
            return N;
            break;
        case 'O':
            return O;
            break;
        case 'P':
            return P;
            break;
        case 'Q':
            return Q;
            break;
        case 'R':
            return R;
            break;
        case 'S':
            return S;
            break;
        case 'T':
            return T;
            break;
        case 'U':
            return U;
            break;
        case 'V':
            return V;
            break;
        case 'W':
            return W;
            break;
        case 'X':
            return X;
            break;
        case 'Y':
            return Y;
            break;
        case 'Z':
            return Z;
            break;
        default:
            return space;
    }
}

function setup() {
    createCanvas(width, height);
    background(0);
    frameRate(FPS);
    write(msg);
}

function write(m) {
    msgArray = new Array(rows)
    m = m.toUpperCase();
    const nc = m.length * 8;
    for (let i = 0; i < rows; i++) {
        msgArray[i] = new Array(nc);
        let k = 0;
        for (let j = 0; j < m.length; j++) {
            for (let z = 0; z < 8; z++) {
                msgArray[i][k] = getCharArray(m[j])[i][z];
                k++;
            }
        }
    }
}

let shift = 0;

function draw() {
      for (let x = 0; x < msgArray.length; x++) {
        for (let y = 0; y + shift < msgArray[0].length && y < cols; y++) {
            if (msgArray[x][y+shift]) {
                fill(255, 0, 0);
            }
            else {
                fill(40, 40, 40);
            }
            rect(LEDSIZE * y, LEDSIZE * x, LEDSIZE, LEDSIZE, 5);
        }
    }
    shift+=1;
    if (shift > msgArray[0].length) shift = 0;
}