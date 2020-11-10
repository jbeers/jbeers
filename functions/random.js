exports.handler = function (event, context, callback) {

    callback(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json'
        },
        statusCode: 200,
        body: JSON.stringify({
            test: "Hello Functions!",
            random: Math.random()
        })
    });
};