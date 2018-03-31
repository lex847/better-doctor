import { doctorAPI } from './js/doctor-api.js';
import './styles.css';

const displaySpecialty = function(response) {
  if (response.data.length == 0) {
    $('.results').text("There are no doctors specializing in that area.");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = "<strong>Doctor Name: </strong>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = "<strong>Accepting New Patients: </strong>" + response.data[i].practices[0].accepts_new_patients;
      let address = response.data[i].practices[0].visit_address.street + " " + "<br>" + response.data[i].practices[0].visit_address.city + ", " +  response.data[i].practices[0].visit_address.state + " " + "<br>" + response.data[i].practices[0].visit_address.zip;
      let phone = response.data[i].practices[0].phones[0].number;
      console.log(phone);

      let websiteSearch = (website === undefined) ? "None" : response.data[i].practices[0].website;
      let website = "<strong>Website: </strong>" + websiteSearch;

      $('#results').append(
        `<ol>
        <h3>${doctor}</h3>
        <h3>${newPatients}</h3>
        <p>${address}</p>
        <p>${phone}</p>
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

      let doctor = "<strong>Doctor Name: </strong>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = "<strong>Accepting New Patients: </strong>" + response.data[i].practices[0].accepts_new_patients;
      let address = response.data[i].practices[0].visit_address.street + " " + "<br>" + response.data[i].practices[0].visit_address.city + ", " +  response.data[i].practices[0].visit_address.state + " " + "<br>" + response.data[i].practices[0].visit_address.zip;
      let phone = response.data[i].practices[0].phones;
      console.log(phone);
      let websiteSearch = (website === undefined) ? "None" : response.data[i].practices[0].website;
      let website = "<strong>Website: </strong>" + websiteSearch;

      $('#results').append(
        `<ol>
        <h3>${doctor}</h3>
        <h3>${newPatients}</h3>
        <p>${address}</p>
        <p>${phone[0].number}</p>
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
    console.log(newDoctorAPI);
    newDoctorAPI.getSpecialty(medicalIssue, displaySpecialty);
    console.log("reached");
    $("#results").show();
  });

// Doctor Name Search Form
  $("#doctor-name-form").submit(function(event) {
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
