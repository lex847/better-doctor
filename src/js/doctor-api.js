export class doctorAPI {
  constructor(location) {
    this.location = location;
    // this.medicalIssue = medicalIssue;
    // this.doctorName = doctorName;
  }

  getDoctor(location, displayDoctors) {
    const apiKey = process.env.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/practices?location=${location}&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
        displayDoctors(response);
      })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
  }

}
