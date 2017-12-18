const $ = require('jquery')
import {getTypedColors} from '../ajax_requests/colors'

export function searchColors() {
  $("button").on("click", function(event) {
    event.preventDefault();

    var colorsInForm = $("textarea").val()
  })
}
