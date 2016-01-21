// ==UserScript==
// @name Fat Auntie
// @description Increases the size of BBC iPlayer's video player
// @include http://www.bbc.co.uk/iplayer/*
// ==/UserScript==

var container = document.getElementById('player-outer-outer');

container.style.width = 'initial';
container.style.height = 'initial';
container.style.maxHeight = 'initial';
container.style.maxWidth = '1400px';
