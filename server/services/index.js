function generateGuestTimes(partyId, userId) {
  const timeOne = `
  <div class="row-default">
    <div>
      <span>
        2:00 PM
      </span>
    <div>
    <div>
      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input>
    </div>
  </div>
  `;
  const times = timeOne + timeOne + timeOne
  return times;
}

function generateSubmit() {
  const submit = `
  <div>
    <button type="button">
      Submit
    </button>
  </div>
  `
  return submit
}

function generateJoinHtml(partyId, userId) {
  const startHtml =
  (`
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
      <div class="container-fluid" id="app">
        <div class="row-default">
          <div class="column-default">
  `);
  const endHtml = (`
          <div>
        </div>
      </div>
    </body>
    <footer>
      <div id="footer-div"></div>
    </footer>
  </html>
  `)
  const times = generateGuestTimes(partyId, userId);
  const submit = generateSubmit();
  const page = startHtml + times + submit + endHtml;
  return page;
}

module.exports = {
  generateJoinHtml
}