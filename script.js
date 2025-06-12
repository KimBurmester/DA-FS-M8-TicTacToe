let fields = [
    null,
    'circle',
    null,
    null,
    null,
    'cross',
    null,
    null,
    null,
]

function init() {
    render();
}
function render() {
  const containerDiv = document.getElementById('container');

  let tableHtml = '<table>';
  for(let i = 0; i < 3; i++){
    tableHtml += '<tr>';
    for(let j = 0; j < 3; j++){
        const index = i * 3 + j; //NOTE: Berechnet das Feld und deren Index
        let symbol = '';
        if(fields[index] === 'circle'){
            symbol = 'o';
        }else if(fields[index] === 'cross'){
            symbol = 'x';
        }
        tableHtml += `<td>${symbol}</td>`;
    }
    tableHtml += '</tr>';
  }
  tableHtml += '</table>';

  containerDiv.innerHTML = tableHtml;
}