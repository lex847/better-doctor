import { doctorAPI } from './js/doctor-api.js';
import './styles.css';

const displaySpecialty = function(response) {
  if (response.data.length == 0) {
    $('.results').text("There are no doctors specializing in that area.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = response.data[i].practices[0].accepts_new_patients;

      let address = response.data[i].practices[0].visit_address.street + response.data[i].practices[0].visit_address.city + response.data[i].practices[0].visit_address.state + response.data[i].practices[0].visit_address.zip;
      let phone = response.data[i].practices[0].phones;
      let website = (website === undefined) ? "None" : response.data[i].practices[0].website;

      $('#results').append(
        `<ol>
        <h3>${doctor}</h3>
        <br>
        <h3>Is Accepting New Patients?:</h3>
        <h3>${newPatients}</h3>
        <br>
        <p>${address}</p>
        <br>
        <p>${phone}</p>
        <br>
        <p>${website}</p>
        </ol>`);

    }
  }
}

const displayDoctors = function(response) {
  if (response.data.length == 0) {
    $('.results').text("There are no doctors with that name.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = response.data[i].practices[0].accepts_new_patients;

      let address = response.data[i].practices[0].visit_address.street + response.data[i].practices[0].visit_address.city + response.data[i].practices[0].visit_address.state + response.data[i].practices[0].visit_address.zip;

      let phone = response.data[i].practices[0].phones;
      let website = (website === undefined) ? "None" : response.data[i].practices[0].website;

      $('#results').append(
        `<ol>
        <h3>${doctor}</h3>
        <br>
        <h3>Is Accepting New Patients?:</h3>
        <h3>${newPatients}</h3>
        <br>
        <p>${address}</p>
        <br>
        <p>${phone[0].number}</p>
        <br>
        <p>${website}</p>
        </ol>`);
    }
  }
}



$(document).ready(function() {

// Medical Issue Search Form
  $("#medical-issue-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medicalIssue").val();
    $("#medicalIssue").val();
    $("#medical-issue-form").hide();
    $("#doctor-name-form").hide();

    let newDoctorAPI = new doctorAPI(medicalIssue);
    newDoctorAPI.getSpecialty(medicalIssue, displaySpecialty);
    $("#results").show();
  });

// Doctor Name Search Form
  $("#medical-issue-form").submit(function(event) {
    event.preventDefault();

    const doctorName = $("#doctorName").val();
    $("#doctorName").val();
    $("#medical-issue-form").hide();
    $("#doctor-name-form").hide();

    let newDoctorAPI = new doctorAPI(doctorName);
    newDoctorAPI.getDoctorName(doctorName, displayDoctors);
    $("#results").show();
  });
});
