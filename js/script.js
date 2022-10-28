// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-02-JS/sw.js", {
    scope: "/ICS2O-Unit3-02-JS/",
  })
}

/**
 * This function displays an alert.
 */
 function solveArea() {
  //input
  const baseA = parseInt(document.getElementById("base-a").value)
  const baseB = parseInt(document.getElementById("base-b").value)
  const height = parseInt(document.getElementById("height").value)

  //process
  const area = ((baseA + baseB) / 2) * height

  //output
  document.getElementById("area").innerHTML = "Area = " + area + " mm²"
}
