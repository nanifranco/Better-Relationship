// Copia la interfaz de ../index.html dentro de la app (novHtml.js).
// Así solo hay una versión de Nov: la que se cambia en index.html.
const fs = require('fs');
const path = require('path');

const origen = path.join(__dirname, '..', '..', 'index.html');
const destino = path.join(__dirname, '..', 'novHtml.js');

// Separadores de línea de Unicode que no pueden ir sueltos dentro de un string de JavaScript.
const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);

const html = fs.readFileSync(origen, 'utf8');
const js = JSON.stringify(html).split(LS).join('\\u2028').split(PS).join('\\u2029');
fs.writeFileSync(
  destino,
  '// Se genera solo a partir de index.html con `npm run sync`. No lo edites a mano.\nexport default ' + js + ';\n'
);
console.log('novHtml.js actualizado (' + Math.round(html.length / 1024) + ' KB)');
