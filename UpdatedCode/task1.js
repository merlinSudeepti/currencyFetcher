//********************************** Task 2.10.2017 ***********************************/





// node module as a function which does this:
// getCurrencyByDates() :: (startDate, endDate) -> Promise([array of USD/EUR currency results])

// Example:
/*getCurrencyByDates('2017-09-01', '2017-09-05')
    .then(data => /* example: [ {"base":"EUR","date":"2017-05-03","rates":{"USD":1.0919}}, {"base":"EUR","date":"2017-05-04","rates":{"USD":1.0519}}, ... ]*/ /*);



//********************************** /Task End ***********************************/

const fetcher = require('./fetcherCore');

const startdate = '2017-09-20';
const enddate = '2017-09-25';

//const datesArray = fetcher.getCurrencyByDates(startdate, enddate);
//console.log(`Dates Array: [${datesArray}]`, "\n Days array length: " + datesArray.length);

//const urls = datesArray.map(fetcher.datesToRequestURLs);
//console.log(urls);

//const promises = fetcher.GetUrlByDatepromises(urls)
//console.log(promises);

/* fetcher.getPromiseResult(promises)
    .then(result => console.log("The result is: " + result))
    .catch(err => console.error("The error is" + err));*/


fetcher(startdate, enddate)
    .then(result => console.log("The result is: " + result))
    .catch(err => console.error("The error is" + err));

// console.log(fetcher.finalGetCurrencyByDates(startdate, enddate));