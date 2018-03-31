export class doctorAPI {

  constructor(medicalIssue, doctorName) {
    this.medicalIssue = medicalIssue;
    this.doctorName = doctorName;
  }

  getSpecialty(medicalIssue, displaySpecialty) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=or-portland&user_location=45.5231%2C%20-122.6765&sort=best-match-asc&skip=0&limit=25&user_key=${process.env.exports.apiKey}`).then(function(response) {
        displaySpecialty(response);
      })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
  }

  getDoctorName(doctorName, displayDoctors) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=or-portland&user_location=45.5231%2C%20-122.6765&sort=best-match-asc&skip=0&limit=25&user_key=4c7deee526e1bdd9d202c9e28cd0d0ac`).then(function(response) {
        displayDoctors(response);
      })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
  }
}
