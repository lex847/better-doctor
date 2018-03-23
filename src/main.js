import { doctorAPI } from './js/doctor-api.js'

const displayDoctors = function(response) {
  if (response.meta.data.length == 0) {
    console.log(response.meta.data.length);
    $('.results').text("Sorry, there are no doctors that fit the search criteria.");
  } else {
    for (let i = 0; i < response.meta.data.length; i ++) {
      let doctors = response.meta.data[i];
      console.log(response.meta.data[i]);
    $('.results').append(" " + '<li>' + doctors + '</li>');
    }
  }
}

$(document).ready(function() {

  let newDoctorAPI = new doctorAPI(location);

  $("#user-form").submit(function(event) {
    event.preventDefault();

    const location = $("#location").val();
    $("#user-form").hide();

    newDoctorAPI.getDoctor(location, displayDoctors);

    $(".results").show();
  })
});
