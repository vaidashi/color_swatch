const $ = require('jquery')
const API = "https://color-swatch-api.herokuapp.com";

export function topColorResponse(data) {
  console.log(data.value)
  $("span.top-color").val(data.value)
}
