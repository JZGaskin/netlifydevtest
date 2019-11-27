const request = require("request")

exports.handler = async (event, context) => {
  //sets code to qsp "code" from url
  const code = event.queryStringParameters.code
  //stripe POST to connect a new account -***WORKING***
  const dataString = `client_secret=sk_test_7JJ2Ll7raAGsXJi5W5UMQ75j00QWWNnkgw&code=${code}&grant_type=authorization_code`

  const options = {
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
  //displays on screen
  return {
    statusCode: 200,
    body: `Return Code, ${code}`,
  }
}

//const stripe = require("stripe")("sk_test_7JJ2Ll7raAGsXJi5W5UMQ75j00QWWNnkgw")
// const acct_code = JSON.stringify(return_code)
//stripe.oauth
//.token({
//url: "https://connect.stripe.com/oauth/token",
// method: "POST",
//client_secret: "sk_test_7JJ2Ll7raAGsXJi5W5UMQ75j00QWWNnkgw",
//grant_type: "authorization_code",
//code: `${acct_code}`,
// })
// .then(function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body)
//  }
// asynchronously called
//var connected_account_id = response.stripe_user_id
//  })

//console.log(event)

//not working
// const stripe = require("stripe")("sk_test_7JJ2Ll7raAGsXJi5W5UMQ75j00QWWNnkgw")
// const options = stripe.oauth
//   .token({
//     //     url: "https://connect.stripe.com/oauth/token",
//     method: "POST",
//     //     client_secret: "sk_test_7JJ2Ll7raAGsXJi5W5UMQ75j00QWWNnkgw",
//     grant_type: "authorization_code",
//     code: code,
//   })
//   .then(function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(body)
//     }
//   })
// request(options, callback)
//not working
