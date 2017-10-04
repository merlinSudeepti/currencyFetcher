
// Fills an array with count amount of random values from 0 to max
// Pure function

// Sync version

const request = require('request');

const StartDate = '2017-09-01',
  EndDate = '2017-09-05';


// Returns an array of strings in format "YYYY-MM-DD"
// Pure
const fillDatesArray = (startDate, endDate) => {
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

const datesArray = fillDatesArray(StartDate, EndDate);
console.log(`Dates Array: [${datesArray}]`, "Days array length: " + datesArray.length);

// Pure
// Returns a fixer.io api request URLs
const datesToRequestURLs = arrayOfDates => {
  const requestURLs = [];
  for (let i = 0; i < arrayOfDates.length; i++) {
    const uri = `http://api.fixer.io/${arrayOfDates[i]}?symbols=EUR,USD`;
    requestURLs.push(uri);
  }

  return requestURLs;
}


const urls = datesArray.map(date => `http://api.fixer.io/${date}?symbols=EUR,USD`);
// urls.forEach(url => request(url, (err, res, body) => console.log(url, body)));

// Given an array of urls, return an array of request promises
const promises = urls.map(url =>
  new Promise((resolve, reject) =>
    request(url, (err, res, body) =>
      err ? reject(err) : resolve(body)
    )
  )
);

// Promise.all :: [array of promises] -> Promise([results of each resolved promise in the array])
// async/await

Promise.all(promises)
  .then(result => console.log(result))
  .catch(err => console.error(err));

// (array, method) => for each array element: method(arrayelement) => array

// const urls = datesToRequestURLs(datesArray);


// Given an array of urls and a callback, returns an array of request bodies
const fillUrlArray = (urlsArray, callback) => {
  const resArray = [];

  // Used to count amount of successful responses
  let count = 0;
  let calledCallback = false;
  //let calledCallback = false;

  for (let url of urlsArray) {
    request(url, (err, res, body) => {
      if (err)
        throw err;
      else {
        resArray.push(body);
        count++;
        if ((count >= urlsArray.length) && !calledCallback) {
          callback(resArray);
          calledCallback = true;
        }
      }
    });
  }
}


// fillUrlArray(urls, console.log);


