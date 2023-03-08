const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;
  
const LetterAGesture = new GestureDescription('letter_a');
const LetterBGesture = new GestureDescription('letter_b');
const LetterCGesture = new GestureDescription('letter_c');
const LetterDGesture = new GestureDescription('letter_d');
const LetterEGesture = new GestureDescription('letter_e');
const LetterFGesture = new GestureDescription('letter_f');
const LetterGGesture = new GestureDescription('letter_g');
const LetterHGesture = new GestureDescription('letter_h');
const LetterIGesture = new GestureDescription('letter_i');
const LetterJGesture = new GestureDescription('letter_j');
const LetterKGesture = new GestureDescription('letter_k');
const LetterLGesture = new GestureDescription('letter_l');
const LetterMGesture = new GestureDescription('letter_m');
  
// Letter A
// -----------------------------------------------------------------------------
  
// thumb: no curled
// accept hallf curl with a bit lower confidence
LetterAGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LetterAGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);
LetterAGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    LetterAGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}
console.log(LetterAGesture)


// Letter B
// -----------------------------------------------------------------------------
  
// thumb: curled
// accept half curl with a bit lower confidence
LetterBGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
LetterBGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
LetterBGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.7);
LetterBGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);

// no finger should be curled except the thumb
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    LetterBGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Letter C
// -----------------------------------------------------------------------------

for(let finger of Finger.all) {
  LetterCGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  LetterCGesture.addCurl(finger, FingerCurl.NoCurl, 0.5);
}

// Letter D
// -----------------------------------------------------------------------------

LetterDGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

LetterDGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LetterDGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LetterDGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterDGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter E
// -----------------------------------------------------------------------------

for(let finger of Finger.all) {
  LetterEGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterEGesture.addCurl(finger, FingerCurl.HalfCurl, 0.5);
}

// Letter F
// -----------------------------------------------------------------------------

LetterFGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
LetterFGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.7);

LetterFGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
LetterFGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.7);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LetterFGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Letter G
// -----------------------------------------------------------------------------

LetterGGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LetterGGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

LetterGGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LetterGGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterGGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter H
// -----------------------------------------------------------------------------

LetterHGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LetterHGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LetterHGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

LetterHGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

for(let finger of [Finger.Ring, Finger.Pinky]) {
  LetterHGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterHGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter I
// -----------------------------------------------------------------------------

LetterIGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
LetterIGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
LetterIGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  LetterIGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterIGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter J
// -----------------------------------------------------------------------------

LetterJGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
LetterJGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

LetterJGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
LetterJGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
LetterJGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
LetterJGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.7);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  LetterJGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterJGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter K
// -----------------------------------------------------------------------------

LetterKGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LetterKGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LetterKGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

LetterKGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
LetterKGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

for(let finger of [Finger.Ring, Finger.Pinky]) {
  LetterKGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterKGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter L
// -----------------------------------------------------------------------------

LetterLGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

LetterLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LetterLGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
LetterLGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.7);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LetterLGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LetterLGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}

// Letter M
// -----------------------------------------------------------------------------

// for(let finger of [Finger.Middle, Finger.Pinky]) {
//   LetterMGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
// }

LetterMGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
LetterMGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
LetterMGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
LetterMGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
LetterMGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

LetterMGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

const knownGestures = [
  LetterAGesture, 
  LetterBGesture,
  LetterCGesture,
  LetterDGesture,
  LetterEGesture,
  LetterFGesture,
  LetterGGesture,
  LetterHGesture,
  LetterIGesture,
  LetterJGesture,
  LetterKGesture,
  LetterLGesture,
  LetterMGesture
]

const gestureStrings = {
  'letter_a': 'A',
  'letter_b': 'B',
  'letter_c': 'C',
  'letter_d': 'D',
  'letter_e': 'E',
  'letter_f': 'F',
  'letter_g': 'G',
  'letter_h': 'H',
  'letter_i': 'I',
}

export {
  knownGestures,
  gestureStrings
}