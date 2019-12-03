const axios = require("axios")

exports.handler = async (event, context) => {
  try {
    const code = event.queryStringParameters.code
    const { SC_URL, SC_CLIENT } = process.env

    axios
      .post(SC_URL, {
        client_secret: SC_CLIENT,
        grant_type: "authorization_code",
        code: `${code}`,
      })

      .then(function(response) {
        console.log(response.data)
      })

    return {
      statusCode: 200,
      body: `Return Code, ${code}`,
    }
  } catch (error) {
    console.log(error)
  }
}
