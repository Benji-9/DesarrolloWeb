'use strict';

// Selección de elementos
const header = $('header');
const h1 = $('header h1');
const intro = $('#intro');
const nudo = $('#nudo');
const fin = $('#fin');

// 1. header: agregar un <div class="overlay">
header.append('<div class="overlay"></div>');

// 2. h1: agregar la clase .titular
h1.addClass('titular');

// 3. intro: antes del párrafo, agregar un <div class="line">
intro.find('p').before('<div class="line"></div>');

// 4. nudo: después del contenido, agregar un <div class="overlay">
nudo.append('<div class="overlay"></div>');

// 5. fin: después de #fin, agregar un <div class="divisor"> y guardar en variable
const divisor = $('<div class="divisor"></div>');
fin.after(divisor);

// 6. A .divisor agregarle un párrafo con tu nombre y apellido
divisor.html('<p>Benjamin Martinez</p>');