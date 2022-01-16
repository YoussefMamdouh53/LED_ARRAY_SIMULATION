// Letters
const A = [[false, false, false, false, false, false, false, false],
[false, false, true, true, true, true, false, false],
[false, true, true, false, false, true, true, false],
[false, true, true, false, false, true, true, false],
[false, true, true, true, true, true, true, false],
[false, true, true, false, false, true, true, false],
[false, true, true, false, false, true, true, false],
[false, true, true, false, false, true, true, false]];

const B = [[false, true, true, true, true, false, false, false],
[false, true, false, false, true, false, false, false],
[false, true, false, false, true, false, false, false],
[false, true, true, true, false, false, false, false],
[false, true, false, false, true, false, false, false],
[false, true, false, false, false, true, false, false],
[false, true, false, false, false, true, false, false],
[false, true, true, true, true, true, false, false]];

const C = [[false, false, false, false, false, false, false, false],
[false, false, false, true, true, true, true, false],
[false, false, true, false, false, false, false, false],
[false, true, false, false, false, false, false, false],
[false, true, false, false, false, false, false, false],
[false, true, false, false, false, false, false, false],
[false, false, true, false, false, false, false, false],
[false, false, false, true, true, true, true, false]];

const D = [[false, false, false, false, false, false, false, false],
[false, false, true, true, true, false, false, false],
[false, false, true, false, false, true, false, false],
[false, false, true, false, false, false, true, false],
[false, false, true, false, false, false, true, false],
[false, false, true, false, false, true, false, false],
[false, false, true, true, true, false, false, false],
[false, false, false, false, false, false, false, false]];

const E = [[false, false, false, false, false, false, false, false],
[false, false, true, true, true, true, false, false],
[false, false, true, false, false, false, false, false],
[false, false, true, true, true, false, false, false],
[false, false, true, false, false, false, false, false],
[false, false, true, false, false, false, false, false],
[false, false, true, true, true, true, false, false],
[false, false, false, false, false, false, false, false]];

const F = [[false, false, false, false, false, false, false, false],
[false, false, true, true, true, true, false, false],
[false, false, true, false, false, false, false, false],
[false, false, true, true, true, false, false, false],
[false, false, true, false, false, false, false, false],
[false, false, true, false, false, false, false, false],
[false, false, true, false, false, false, false, false],
[false, false, false, false, false, false, false, false]];

const G = [[false, false, false, false, false, false, false, false],
 [false, false, true, true, true, true, true, false], 
 [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
   [false, false, true, false, true, true, true, false], 
   [false, false, true, false, false, false, true, false],
    [false, false, true, true, true, true, true, false],
     [false, false, false, false, false, false, false, false]];

const H = [[false, false, false, false, false, false, false, false],
 [false, false, true, false, false, true, false, false], 
 [false, false, true, false, false, true, false, false], 
 [false, false, true, true, true, true, false, false],
  [false, false, true, false, false, true, false, false],
   [false, false, true, false, false, true, false, false],
    [false, false, true, false, false, true, false, false],
     [false, false, false, false, false, false, false, false]];

const I = [[false, false, false, false, false, false, false, false], 
[false, false, true, true, true, false, false, false],
 [false, false, false, true, false, false, false, false],
  [false, false, false, true, false, false, false, false],
   [false, false, false, true, false, false, false, false],
    [false, false, false, true, false, false, false, false],
     [false, false, true, true, true, false, false, false], 
     [false, false, false, false, false, false, false, false]];

const J = [[false, false, false, false, false, false, false, false], 
[false, false, false, true, true, true, false, false],
 [false, false, false, false, true, false, false, false],
  [false, false, false, false, true, false, false, false], 
  [false, false, false, false, true, false, false, false], 
  [false, false, true, false, true, false, false, false], 
  [false, false, true, true, true, false, false, false],
   [false, false, false, false, false, false, false, false]];

const K = [[false, false, false, false, false, false, false, false], 
[false, false, true, false, false, true, false, false],
 [false, false, true, false, true, false, false, false],
  [false, false, true, true, false, false, false, false],
   [false, false, true, false, true, false, false, false], 
   [false, false, true, false, false, true, false, false], 
   [false, false, true, false, false, true, false, false], 
   [false, false, false, false, false, false, false, false]];

const L = [[false, false, false, false, false, false, false, false], 
[false, false, true, false, false, false, false, false],
 [false, false, true, false, false, false, false, false],
 [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
   [false, false, true, false, false, false, false, false], 
   [false, false, true, true, true, true, false, false], 
   [false, false, false, false, false, false, false, false]];

const M = [[false, false, false, false, false, false, false, false],
 [false, false, false, false, false, false, false, false], 
 [false, true, false, false, false, true, false, false], 
 [true, false, true, false, true, false, true, false],
  [true, false, false, true, false, false, true, false], 
  [true, false, false, false, false, false, true, false], 
  [true, false, false, false, false, false, true, false], 
  [false, false, false, false, false, false, false, false]];

const N = [[false, false, false, false, false, false, false, false], 
[false, false, true, false, false, false, true, false],
 [false, false, true, true, false, false, true, false], 
 [false, false, true, false, true, false, true, false], 
 [false, false, true, false, false, true, true, false], 
 [false, false, true, false, false, false, true, false],
  [false, false, false, false, false, false, false, false],
   [false, false, false, false, false, false, false, false]];

const O = [[false, false, false, false, false, false, false, false],
 [false, false, true, true, true, true, false, false], 
 [false, true, false, false, false, false, true, false],
  [false, true, false, false, false, false, true, false],
   [false, true, false, false, false, false, true, false], 
   [false, true, false, false, false, false, true, false], 
   [false, false, true, true, true, true, false, false], 
   [false, false, false, false, false, false, false, false]];

const P = [[false, false, false, false, false, false, false, false],
 [false, false, true, true, true, false, false, false],
  [false, false, true, false, false, true, false, false], 
  [false, false, true, false, false, true, false, false], 
  [false, false, true, true, true, false, false, false],
   [false, false, true, false, false, false, false, false],
    [false, false, true, false, false, false, false, false],
     [false, false, false, false, false, false, false, false]];

const Q = [[false, false, false, false, false, false, false, false], 
[false, false, true, true, true, true, false, false], 
[false, true, false, false, false, false, true, false], 
[false, true, false, false, false, false, true, false], 
[false, true, false, false, false, false, true, false], 
[false, true, false, false, false, true, true, false], 
[false, false, true, true, true, true, true, false],
 [false, false, false, false, false, false, false, true]];

 const R = [[false, false, false, false, false, false, false, false],
  [false, false, true, true, true, false, false, false],
   [false, false, true, false, false, true, false, false],
    [false, false, true, false, false, true, false, false], 
    [false, false, true, true, true, false, false, false], 
    [false, false, true, false, false, true, false, false],
     [false, false, true, false, false, true, false, false],
      [false, false, false, false, false, false, false, false]];
 
const S = [[false, false, false, false, false, false, false, false],
 [false, false, true, true, true, true, false, false], 
 [false, false, true, false, false, false, false, false],
  [false, false, true, true, true, true, false, false], 
  [false, false, false, false, false, true, false, false], 
  [false, false, false, false, false, true, false, false],
   [false, false, true, true, true, true, false, false], 
   [false, false, false, false, false, false, false, false]];

const T = [[false, false, false, false, false, false, false, false],
 [false, true, true, true, true, true, false, false], 
 [false, false, false, true, false, false, false, false],
  [false, false, false, true, false, false, false, false], 
  [false, false, false, true, false, false, false, false], 
  [false, false, false, true, false, false, false, false], 
  [false, false, false, true, false, false, false, false], 
  [false, false, false, false, false, false, false, false]];

const U = [[false, false, false, false, false, false, false, false],
 [false, true, false, false, false, false, true, false], 
 [false, true, false, false, false, false, true, false],
  [false, true, false, false, false, false, true, false], 
  [false, true, false, false, false, false, true, false], 
  [false, false, true, false, false, true, false, false], 
  [false, false, false, true, true, false, false, false], 
  [false, false, false, false, false, false, false, false]];

const V = [[false, false, false, false, false, false, false, false], 
[false, false, true, false, false, false, true, false], 
[false, false, true, false, false, false, true, false], 
[false, false, true, false, false, false, true, false], 
[false, false, false, true, false, true, false, false], 
[false, false, false, true, false, true, false, false], 
[false, false, false, false, true, false, false, false], 
[false, false, false, false, false, false, false, false]];

const W = [[false, false, false, false, false, false, false, false], 
[true, false, false, false, false, false, true, false], 
[true, false, false, true, false, false, true, false],
 [false, true, false, true, false, true, false, false], 
 [false, true, false, true, false, true, false, false],
  [false, false, true, false, true, false, false, false], 
  [false, false, false, false, false, false, false, false],
   [false, false, false, false, false, false, false, false]];

const X = [[false, false, false, false, false, false, false, false],
 [false, true, false, false, false, false, true, false],
  [false, false, true, false, false, true, false, false], 
  [false, false, false, true, true, false, false, false], 
  [false, false, false, true, true, false, false, false], 
  [false, false, true, false, false, true, false, false], 
  [false, true, false, false, false, false, true, false],
   [false, false, false, false, false, false, false, false]];

const Y = [[false, false, false, false, false, false, false, false], 
[false, true, false, false, false, true, false, false], 
[false, false, true, false, true, false, false, false],
 [false, false, false, true, false, false, false, false],
  [false, false, false, true, false, false, false, false],
   [false, false, false, true, false, false, false, false], 
   [false, false, false, true, false, false, false, false],
    [false, false, false, false, false, false, false, false]];

const Z = [[false, false, false, false, false, false, false, false], 
[false, false, true, true, true, true, false, false], 
[false, false, false, false, false, true, false, false], 
[false, false, false, false, true, false, false, false], 
[false, false, false, true, false, false, false, false], 
[false, false, true, false, false, false, false, false], 
[false, false, true, true, true, true, false, false], 
[false, false, false, false, false, false, false, false]];

const space = [[false, false, false, false, false, false, false, false],
 [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
   [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false], 
    [false, false, false, false, false, false, false, false], 
    [false, false, false, false, false, false, false, false], 
    [false, false, false, false, false, false, false, false]];

