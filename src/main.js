import { doctorAPI } from './js/doctor-api.js'

const displayDoctors = function(response) {
  if (response.data.length == 0) {
    $('.results').text("Sorry, there are no doctors specializing in that area.");
  } else {
    for(let i = 0; i < response.data.length; i++) {
    let doctors = response.data[i].profile;
    let 
    $('.results').append(" " + '<li>' + doctors + '</li>');
  }
}
}




$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();

    let newDoctorAPI = new doctorAPI(medicalIssue);

    const medicalIssue = $("#medicalIssue").val();
    $("#user-form").hide();

    newDoctorAPI.getDoctor(medicalIssue, displayDoctors);

    // $(".results").show();
  })
});
