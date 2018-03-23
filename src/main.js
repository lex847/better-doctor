import { doctorAPI } from './js/doctor-api.js';
import './styles.css' ;

const displaySpecialty = function(response) {
  if (response.data.length == 0) {
    $('.results').text("Sorry, there are no doctors specializing in that area.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = response.data[i].profile.first_name + " " + response.data[i].profile.last_name + " " + response.data[i].profile[i].specialties;
      console.log(response.data[i].profile[i].specialties);
      let newPatients = response.data[i].practices[i].accepts_new_patients;

      $('#results').append(" " + '<li>' + doctor + ": is accepting new patients: " + newPatients + '</li>');

    }
  }
}

const displayDoctors = function(response) {
  if (response.data.length == 0) {
    $('.results').text("Sorry, there are no doctors with that name.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = response.data[i].practices[i].accepts_new_patients;

      $('#results').append(" " + '<li>' + doctor + ": is accepting new patients: " + newPatients + '</li>');

    }
  }
}



$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medicalIssue").val();
    const doctorSearch = $("#doctorSearch").val();

    $("#user-form").hide();

    let newDoctorAPI = new doctorAPI(medicalIssue);

    newDoctorAPI.getSpecialty(medicalIssue, displaySpecialty);

    newDoctorAPI.getDoctorName(doctorSearch, displayDoctors);

    $("#results").show();

  })
});
