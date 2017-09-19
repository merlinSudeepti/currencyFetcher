var request = require("request");

// Returns current date in format of yyyy-mm-dd
function getCurrentDateAsString(daysBefore) {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth()+1; //January is 0!

    let resultDate = new Date(today);
    resultDate.setDate(d - daysBefore);
    console.log(resultDate);
//    if(m < 10)   
//     { 
//         m = "0" + m
//     }    
//     if(d < 10)
//     {
//         d = "0" + d
//     }
//     var y = today.getFullYear();


return "";
    // return y + "-" + m + "-" + d
}

function getCurrentDateApiRequest (daysBefore) {
    return "http://api.fixer.io/" + getCurrentDateAsString(daysBefore) + "?symbols=EUR,USD";
}

request(getCurrentDateApiRequest(10015), function (error, res, body) {
    if (error) {
        console.error(error);
        return;
    }

    console.log("Body is "+ body);
    
});
