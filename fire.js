const firePixel = [];
const fireWidth = 10;
const fireHeight = 10;

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
      const fireIntensity = firePixel[indexPixel];

      html += '<td>';
      html += `<div class="index-pixel >${indexPixel}</div>`;
      html += fireIntensity
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</table>';
  document.querySelector('#fireCanvas').innerHTML = html
}

start()
