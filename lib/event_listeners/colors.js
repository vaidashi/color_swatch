const $ = require('jquery')
import {getTypedColors} from '../ajax_requests/colors'
import COLORS from '../data/colors'
import {postEnteredColors} from '../ajax_requests/colors'

$(document).ready(function() {

    $("button").on("click", function(event) {
      addSwatches()
    })
})


//refactor below to helpers folder
function addSwatches() {
  var colorsArray = getSearchParams()
  var a = getInputColors(colorsArray)

  appendSwatches(a)
}

function getSearchParams() {
  var colorsInForm = $("#textid").val()

  return colorsInForm.split(" ")
}

function getInputColors(colors) {
  var colorBase = Object.keys(COLORS)
  var includedColors = []

  $.each(colors, function(i, color){
    if (colorBase.includes(color)) {
      includedColors.push(color)
    }
  })
  sendEnteredColors(includedColors)
  return $.unique(includedColors)
}

function appendSwatches(uniqueKeys) {
  $.each(uniqueKeys, function(i, uniqueKey) {
    var swatchColor = COLORS[uniqueKey]
    $("article.colorized-text").append(`<div class="swatch" style="background-color:${swatchColor};"></div>`)
  })
}

function sendEnteredColors(colors) {
  $.each(colors, function(i, color) {
    postEnteredColors(color)
  })
}
