export class doctorAPI {
  constructor(medicalIssue) {
    this.medicalIssue = medicalIssue;
    // this.doctorName = doctorName;
  }

  getDoctors(name, displayDoctors) {
      const apiKey = process.env.exports.apiKey;

      $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523%2C-122.676%2C500&skip=0&limit=10&user_key=${apiKey}`).then(function(response)
    {
      displayDoctors(response);
    })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`)
      });
    }

  getSpecialties(medicalIssue, displayDoctors) {
    const apiKey = process.env.exports.apiKey;

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?conditions=${medicalIssue}&location=45.523%2C-122.676%2C500&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
        displayDoctors(response);
      })
      .fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
  }

}
