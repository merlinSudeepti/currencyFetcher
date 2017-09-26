


// // Instant function
// const instant = a => b

// // To use instant function:
// const result = instant(argument);

// // Deferred function (function that can take some time)
// const deferred = (a, callback) => callback(b)

// // To use deferred function:
// let result;
// deferred(argument, (b) => 
//     result = b
// );


// Returns float from 0 to max
const getRandomValue = (max, callback) =>
    setTimeout(() => 
        callback(Math.floor(Math.random() * max)), Math.random() * 1500
    );


// Fills an array with count amount of random values from 0 to max
// Pure function

// Sync version
const fillArray = (count, max, limit, callback) => {
    const data = [];
    let counter = 0;
    let alreadyCalledCallback = false;
    for(let i = 0; i < count; i++)
        getRandomValue(max, value => {
            if( alreadyCalledCallback ) 
                return;
            data.push(value);
            counter++;
            if(counter >= limit){
                callback(data);
                alreadyCalledCallback = true;
            }
        });
}


fillArray(100, 1000, 10, array => console.log(array, array.length))

// Pure function
// f :: a -> b