const request = require('request');

// Pure module

const getCurrencyByDates = (startdate, enddate) => {
    const listdate = [];
    let datemove = new Date(startdate);
    let strdate = startdate;
    while (strdate < enddate) {
        strdate = datemove.toISOString().slice(0, 10);
        listdate.push(strdate);
        datemove.setDate(datemove.getDate() + 1);
    };
    return listdate;
}
//datesArray = getCurrencyByDates(startdate, enddate);

const datesToRequestURLs = arrayOfDates => {
    const requestURLs = [];
    for (let i = 0; i < arrayOfDates.length; i++) {
        const uri = `http://api.fixer.io/${arrayOfDates[i]}?symbols=EUR,USD`;
        requestURLs.push(uri);
    }
    return requestURLs;
}


// [urls] -> [Promises]
const GetUrlByDatepromises = (datesToRequestURLs) =>
    datesToRequestURLs.map(url =>
        new Promise((resolve, reject) =>
            request(url, (err, res, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            })
        )
    );

const getPromiseResult = promisesArray =>
    Promise.all(promisesArray)

// Compose multiple functions
// const func1 = a => b;
// const func2 = b => c;

// const composedFunc = (a) => {
//     return func2(func1(a));
// }

const finalGetCurrencyByDates = (startdate, enddate) =>
    getPromiseResult(GetUrlByDatepromises(datesToRequestURLs(getCurrencyByDates(startdate, enddate))));


module.exports =
    finalGetCurrencyByDates


