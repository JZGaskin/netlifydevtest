import request from "request";

app.get('/', function (req, res) {
var code = req.param("code")
res.send(code)},

var dataString = `client_secret=sk_test_7JJ2Ll7raAGsXJi5W5UMQ75j00QWWNnkgw&code=${code}&grant_type=authorization_code`

var options = {
  url: "https://connect.stripe.com/oauth/token",
  method: "POST",
  body: dataString,
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
}

request(options, callback)
