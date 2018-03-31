import { doctorAPI } from './js/doctor-api.js';
import './styles.css';

const displaySpecialty = function(response) {
  if (response.data.length == 0) {
    $('#results').append("<h1>There are no doctors specializing in that area.</h1>");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = "<strong>Doctor Name: </strong>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = "<strong>Accepting New Patients: </strong>" + response.data[i].practices[0].accepts_new_patients;
      let address = response.data[i].practices[0].visit_address.street + " " + "<br>" + response.data[i].practices[0].visit_address.city + ", " +  response.data[i].practices[0].visit_address.state + " " + "<br>" + response.data[i].practices[0].visit_address.zip;
      let phone = "<strong>Phone: </strong>" + response.data[i].practices[0].phones[0].number.match(/\d{3}(?=\d{2,3})|\d+/g).join("-");
      console.log(phone);

      let websiteSearch = (website === undefined) ? "No Website Available" : response.data[i].practices[0].website;
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
    $('#results').append("<h1>There are no doctors with that name.</h1>");
    } else {
      for(let i = 0; i < response.data.length; i++) {

      let doctor = "<strong>Doctor Name: </strong>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let newPatients = "<strong>Accepting New Patients: </strong>" + response.data[i].practices[0].accepts_new_patients;
      let address = response.data[i].practices[0].visit_address.street + " " + "<br>" + response.data[i].practices[0].visit_address.city + ", " +  response.data[i].practices[0].visit_address.state + " " + "<br>" + response.data[i].practices[0].visit_address.zip;
      let phone = "<strong>Phone: </strong>" + response.data[i].practices[0].phones[0].number.match(/\d{3}(?=\d{2,3})|\d+/g).join("-");
      console.log(phone);
      let websiteSearch = (website === undefined) ? "No Website Available" : response.data[i].practices[0].website;
      let website = "<strong>Website: </strong>" + websiteSearch;

      $('#results').append(
        `<ol>
        <h3>${doctor}</h3>
        <h3>${newPatients}</h3>
        <p>${address}</p>
        <p>${phone}</p>
        <p>${website}</p>
        </ol>
        <hr>`);
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
