const $ = require('jquery')
const API = "https://color-swatch-api.herokuapp.com";

export function topColorResponse(data) {
  $("span.top-color").append(data.value)
}
