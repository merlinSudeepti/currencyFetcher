

// We want to do some asynchronous stuff
const getInfoFromServer = (argument, callback) => {
    request('http://serverURL/getInformation', (err, res, body) => {
        callback(body);
    })
}

const doStuffWithPrevous1 = (body, callback) =>
    setTimeout(() => callback(body2), 5000);

const doStuffWithPrevous2 = (body2, callback) =>
    setTimeout(() => callback(body3), 2500);

// This should take time
getInfoFromServer(ourStuff, body1 =>
    doStuffWithPrevous1(body, body2 =>
        doStuffWithPrevous2(body2, () => console.log)));


// Same thing with promises:
// data -> Promise(result)
const getInfoFromServerWithPromises = argument =>
    new Promise((resolve, reject) => {
        request('http://serverURL/getInformation', (err, res, body) => {
            if (err)
                reject(err);
            else
                resolve(body);
        });
    });

//Promise.then = map

// Promise.then :: Promise(a), (f(a) -> b) -> Promise(b)

//.then function can return either:
// 1) some value
// 2) a new promise

// Promise.then(  )

//Promise.then is a map
// Actually, Promise.then is a flatmap

// Same things:
Promise.resolve().then(() => 5).then(console.log)
Promise.resolve().then(() => Promise.resolve(5)).then(console.log)


const doStuffWithPrevous1 = body =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(body2), 5000)
    );

const doStuffWithPrevous1 = body =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(body3), 5000)
    );

const doSyncStuff = body => [body]

// This should take time
getInfoFromServer(ourStuff, body1 =>
    doStuffWithPrevous1(body, body2 =>
        doStuffWithPrevous2(body2, () => console.log)));

const askDatabaseForData = (dbRequest) => new Promise(/**/);

const dataPromise = askDatabaseForData('random db request');

checkIfDataIsCorrect = (promise) => {
  ...
    // WHATEVER
    return new Promise()
}




getInfoFromServerWithPromises(data)
    .then(doStuffWithPrevous1)
    .then(doStuffWithPrevous2)
    .then(dataFromPrevious2 => doSyncStuff(dataFromPrevious2))
    .then(dataFromSyncStuff => console.log("Data from sync stuff = " + dataFromSyncStuff))


console.log('stuff before promise is done');