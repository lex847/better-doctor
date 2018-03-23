import { doctorAPI } from './js/doctor-api.js';
import './styles.css' ;

const displayDoctors = function(response) {
  console.log(response);
  if (response.data.length == 0) {
    $('.results').text("Sorry, there are no doctors specializing in that area.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;


      $('.results').append(" " + '<li>' + doctor + '</li>');
    
    }
  }
}



$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medicalIssue").val();
    console.log(medicalIssue);
    $("#user-form").hide();

    let newDoctorAPI = new doctorAPI(medicalIssue);

    newDoctorAPI.getDoctor(medicalIssue, displayDoctors);

  })
});
