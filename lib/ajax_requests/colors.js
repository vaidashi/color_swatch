const $ = require('jquery')
const API = "https://color-swatch-api.herokuapp.com";
import {topColorResponse} from '../response_handlers/colors'
import COLORS from '../data/colors'


$(document).ready(function() {
  getTopColor()
})


function getTopColor() {
  $.ajax({
    url: API + '/api/v1/top_color',
    method: 'GET',
  }).then(function (data) {
      topColorResponse(data);
    }).fail(function(){
      handleError();
    })
}


export function getTypedColors(colorsArray) {
  var promiseArray = []
  for (var i = 0; i < colorsArray.length; i ++) {
    promiseArray.push(retrieveColors(colorsArray[i]))
  }
  Promise.all(promiseArray).then(function() {
    //dislay colors if match
  })
}

function retrieveColors(color) {
  var colorBase = COLORS
  var colorNames = Object.keys(colorBase)
  var uniqueColors = color.unique() // check for unique items coming through input

  $.ajax({
    url: API + '/api/v1/colors',
    method: 'GET',
  }).then(function (data) {
      var matches = []
      $.each(data, function(uniqueColors) {
        if (uniqueColors == )
      })
      checkColorResponse(data);
    }).fail(function(){
      handleError();
    })
}

function checkColorResponse(data) {

}

export function handleError(error) {
  console.log(error.statusText);
  console.log(error.responseText);
}
