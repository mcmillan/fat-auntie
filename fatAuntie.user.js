// ==UserScript==
// @name Fat Auntie
// @description Change the background colour of a page
// @include http://www.bbc.co.uk/iplayer/*
// ==/UserScript==

var container = document.getElementById('player-outer-outer');

container.style.width = 'initial';
container.style.height = 'initial';
container.style.maxHeight = 'initial';
container.style.maxWidth = '1400px';
