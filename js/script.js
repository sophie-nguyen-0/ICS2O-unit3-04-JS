// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit3-04-JS/sw.js", {
    scope: "/ICS2O-unit3-04-JS/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  // input
  const fahrenheit = parseInt(document.getElementById("temperature").value)

  // process
  const temp = ((fahrenheit - 32) * 5.0) / 9.0

  // output
  document.getElementById("celcius").innerHTML =
    "in celcius is: " + temp + " °C"
}
