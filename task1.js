//********************************** Task 2.10.2017 ***********************************/



// node module as a function which does this:
// getCurrencyByDates() :: (startDate, endDate) -> Promise([array of USD/EUR currency results])

// Example:
/*getCurrencyByDates('2017-09-01', '2017-09-05')
    .then(data => /* example: [ {"base":"EUR","date":"2017-05-03","rates":{"USD":1.0919}}, {"base":"EUR","date":"2017-05-04","rates":{"USD":1.0519}}, ... ]*/ /*);



//********************************** /Task End ***********************************/

const fetcher = require('./fetcherCore');

const StartDate = '2017-09-10';
const EndDate = '2017-09-15';

const datesArray = fetcher.getCurrencyByDates(StartDate, EndDate);
console.log(`Dates Array: [${datesArray}]`, "\n Days array length: " + datesArray.length);

const urls = datesArray.map(fetcher.datesToRequestURLs);
console.log(urls);
