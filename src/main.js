import { doctorAPI } from './js/doctor-api.js'

const displayDoctors = function(response) {
  if (response.data.length == 0) {
    $('.results').text("Sorry, there are no doctors that fit the search criteria.");
  } else {
    for (let i = 0; i < response.data.practices.length; i ++) {
      let doctors = response.data.practices.doctors[i];

    $('.results').append(" " + '<li>' + doctors + '</li>');
    }
  }
}

$(document).ready(function() {

  let newDoctorAPI = new doctorAPI();

  $("#user-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medicalIssue").val();
    $("#user-form").hide();

    newDoctorAPI.getDoctor(medicalIssue, displayDoctors);

    $(".results").show();
  })
});
