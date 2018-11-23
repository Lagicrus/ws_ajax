/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP857256";
    // e.g. return "UP654321";
}

function fn() {
    return "Sam";
}

function sn() {
    return "Riches";
}

async function showMessage(element, url, startTime = null){
    if (startTime !== null){
        if (new Date().getTime() - startTime > 15000){
            return;
        }
    }
        const response = await fetch(url);
    element.textContent = await response.text();
}

async function showList(element, url){
    const response = await fetch(url);
    const json = await response.json();

    for (const i of json) {
        const li = document.createElement("li");
        li.textContent = i;
        element.appendChild(li);
    }
}

async function startShowingMessage(element, url){
    let startTime = new Date().getTime();
    setInterval(showMessage, 1000, element, url, startTime);
}

async function handleError(element, url){
    const response = await fetch(url);
    if (response.status === 200){
        element.textContent = await response.text();
    }
    else{
        element.textContent = "OH DEAR";
    }
}

async function drawBox(canvas, url) {
    let startTime = new Date().getTime();
    setInterval(drawBoxBox, 1000, canvas, url, startTime);
}

async function drawBoxBox(canvas, url, startTime){
    if (new Date().getTime() - startTime > 15000){
        return;
    }
    const response = await fetch(url);
    const coords = await response.json();
    const c = canvas.getContext("2d");
    c.rect(coords["x"], coords["y"], 5, 5);
    c.stroke();
}