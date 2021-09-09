function generateGuestTimes(partyId, userId) {
  const topHtml = `
  <div class="row-default guest-time-wrapper">
    <div class="guest-time-wrapper column-default">
      <span class="guest-time-text">
  `;
  const bottomHtml = `
      </span>
    </div>
    <div class="guest-checkbox column-default">
      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input>
    </div>
  </div>
  `;
  const time1 = "2:00 PM";
  const time2 = "3:00 PM";
  const time3 = "4:00 PM";
  const one = topHtml + time1 + bottomHtml;
  const two = topHtml + time2 + bottomHtml;
  const three = topHtml + time3 + bottomHtml;
  const times = one + two + three;
  return times;
}

function generateSubmit(partyId, userId) {
  const names = ["", "alex", "bob", "john", "nick"];
  const submit = `
  <div class="row-default">
    <button type="submit" name="id" value="${userId}" class="btn btn-primary">
      Submit
    </button>
  </div>
  `;
  return submit;
}

function generateJoinHtml(partyId, userId) {
  const names = ["", "alex", "bob", "john", "nick"];
  const startHtml = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Group Tee Timer</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="assets/stylesheet.css">
    </head>
    <body>
      <div class="container-fluid" id="party-container">
        <div class="row-default">
          <div class="column-default">
            <div class="guest-hello column-default">
              <h3> Hello, ${names[userId]} </h3>
              <h6> Choose the times you're available </h6>
            </div>
            <form action="" method="POST">
  `;
  const endHtml = `
          </form>
          <div>
        </div>
      </div>
    </body>
    <footer>
      <div id="footer-div"></div>
    </footer>
  </html>
  `;
  const times = generateGuestTimes(partyId, userId);
  const submit = generateSubmit(partyId, userId);
  const page = startHtml + times + submit + endHtml;
  return page;
}

module.exports = {
  generateJoinHtml,
};
