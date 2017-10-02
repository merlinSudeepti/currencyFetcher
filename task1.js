//********************************** Task 2.10.2017 ***********************************/



// node module as a function which does this:
// getCurrencyByDates() :: (startDate, endDate) -> Promise([array of USD/EUR currency results])

// Example:
/*getCurrencyByDates('2017-09-01', '2017-09-05')
    .then(data => /* example: [ {"base":"EUR","date":"2017-05-03","rates":{"USD":1.0919}}, {"base":"EUR","date":"2017-05-04","rates":{"USD":1.0519}}, ... ]*/ /*);



//********************************** /Task End ***********************************/


var srequest = require('node-modules');

const StartDate = '2017-09-01',
    EndDate = '2017-09-05';

const getCurrencyByDates = (startDate, endDate) => {
    const listDate = [];
    let dateMove = new Date(startDate);
    let strDate = startDate;
    while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
    };
    return listDate;
}