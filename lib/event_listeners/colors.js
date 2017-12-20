const $ = require('jquery')
import {getTypedColors} from '../ajax_requests/colors'
import COLORS from '../data/colors'

$(document).ready(function() {

    $("button").on("click", function(event) {
      // event.preventDefault(); // for submitting info in form
      var colorsArray = getSearchParams()
      var a = getInputColors(colorsArray)
      // console.log(a)
      addSwatches(a)
    })


})



function getSearchParams() {
  // console.log($("#textid").val())
  var colorsInForm = $("#textid").val()
  // console.log(colorsInForm)
  return colorsInForm.split(" ")
}

function getInputColors(colors) {
  // get all color keys
  var colorBase = Object.keys(COLORS)
  var includedColors = []

  $.each(colors, function(i, color){
    if (colorBase.includes(color)) {
      includedColors.push(color)
    }
    // see if color matches color key

  })
  return $.unique(includedColors)
}

function addSwatches(uniqueKeys) {
  $.each(uniqueKeys, function(i, uniqueKey) {
    var swatchColor = COLORS[uniqueKey]
    $("article.colorized-text").append(`<div class="swatch" style="background-color:${swatchColor};"></div>`)
  })
}
