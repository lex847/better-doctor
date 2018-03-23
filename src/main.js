import { doctorAPI } from './js/doctor-api.js';
import './styles.css' ;

const displaySpecialty = function(response) {
  if (response.data.length == 0) {
    $('.results').text("Sorry, there are no doctors specializing in that area.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
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
      let address = response.data[i].practices[0].visit_address.street + response.data[i].practices[0].visit_address.city + response.data[i].practices[0].visit_address.state + response.data[i].practices[0].visit_address.zip;

      let phone = response.data[i].practices[0].phones;

      let website = (website === undefined) ? "None" : response.data[i].practices[0].website;

      $('#results').append(`<h3>${doctor}</h3><br><p>${address}</p><br><p>${phone[0].number}</p><br><p>${website}</p>`);

    }
  }
}



$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medicalIssue").val();
    const doctorName = $("#doctorName").val();

    $("#user-form").hide();

    let newDoctorAPI = new doctorAPI(medicalIssue, doctorSearch);

    newDoctorAPI.getSpecialty(medicalIssue, displaySpecialty);

    newDoctorAPI.getDoctorName(doctorName, displayDoctors);

    $("#results").show();

  })
});
