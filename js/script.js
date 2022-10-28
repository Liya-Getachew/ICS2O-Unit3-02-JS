// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-02-JS/sw.js", {
    scope: "/ICS2O-Unit3-02-JS/",
  })
}

/**
 * This function solves volume of a pyramid.
 */
function solveVolume() {
  //input
  const length = parseFloat(document.getElementById("length-of-pyramid").value)
  const width = parseFloat(document.getElementById("width-of-pyramid").value)
  const height = parseFloat(document.getElementById("height-of-pyramid").value)

  //process
  const volume = (length * width * height) / 3

  //output
  document.getElementById("volume").innerHTML = `Volume = ${volume.toFixed(2)} cm³`
}
