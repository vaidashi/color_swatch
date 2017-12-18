const $ = require('jquery')
import {getTypedColors} from '../ajax_requests/colors'

export function searchColors() {
  $("button").on("click", function(event) {
    event.preventDefault();

    var colorsInForm = $("#textid").value
    var colorsArray  = colorsInForm.split(" ");

    getTypedColors(colorsArray)
  })
}
