const $ = require('jquery')
const API = "https://color-swatch-api.herokuapp.com";
import {getTopColor} from '../ajax_requests/colors'

$(document).ready(function() {
  getTopColor()
})


export function topColorResponse(data) {
  $("span.top-color").append(data.value)
}
