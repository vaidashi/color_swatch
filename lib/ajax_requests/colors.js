const $ = require('jquery')
const API = "https://color-swatch-api.herokuapp.com";
import {topColorResponse} from '../response_handlers/colors'


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





export function handleError(error) {
  console.log(error.statusText);
  console.log(error.responseText);
}
