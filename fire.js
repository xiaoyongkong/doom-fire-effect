const firePixel = [];
const fireWidth = 2;
const fireHeight = 3;

function start() {
  createFireDataStructure();
  renderFire();
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight;
  for (let i = 0; i < numberOfPixels; i++){
    firePixel[i] = 0
  }
}

function calculateFirePropagation() {
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>';

  for(let row = 0; row < fireHeight; row++){
    html += '<tr>';
    for(let column = 0; column < fireWidth; column++){
      const indexPixel = column + (fireWidth * row);
      html += '<td>';
      html += indexPixel;
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</table>';
  document.querySelector('#fireCanvas').innerHTML = html
}

start()
