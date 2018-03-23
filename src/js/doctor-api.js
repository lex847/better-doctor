export class doctorAPI {

  constructor(medicalIssue, doctorName) {
    this.medicalIssue = medicalIssue;
    this.doctorName = doctorName;
  }

  getSpecialty(medicalIssue, displaySpecialty) {
    const apiKey = process.env.exports.apiKey;

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=headache&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
        displayDoctors(response);
      })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
  }

  getDoctorName(doctorName, displayDoctors) {
    const apiKey = process.env.exports.apiKey;

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=lee&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
        displayDoctors(response);
      })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
  }
}
