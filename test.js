var request = require("request");

// Returns current date in format of yyyy-mm-dd
function getCurrentDateAsString(daysBefore) 
{
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth()+1; //January is 0!

    let resultDate = new Date(today);
    resultDate.setDate(d - daysBefore);
    console.log(resultDate);
    return "";

}

function getCurrentDateApiRequest (daysBefore) 
{
    const result = "http://api.fixer.io/"+ getCurrentDateAsString(daysBefore) + "2007-01-03";
    console.log(`getCurrentDateApiRequest output: ${ result }`);
    return result;
}

request(getCurrentDateApiRequest(2000), function (error, res, body) 
{
    if (error) 
    {
        console.error(error);
        return;
    }
    console.log("Body is "+ body); 
});

    
  
