

//function generate_year_range(start, end){
 // var years = [];
  // for(var year = start; year <= end; year++){
    //    years.push(year)
    //}
  //return years;
//}
//var my_years = generate_year_range(2000,2009);
//console.log(my_years);

//var date1 = new Date('1110-01-01 11:10');
//var date2 = new Date();

//console.log('difference in ms', date1 - date2);

// Use Math.abs() so the order of the dates can be ignored and you won't
// end up with negative numbers when date1 is before date2.
//console.log('difference in ms abs', Math.abs(date1 - date2));
//console.log('difference in seconds', Math.abs(date1 - date2) / 1000);

//var diffInSeconds = Math.abs(date1 - date2) / 1000;
//var days = Math.floor(diffInSeconds / 60 / 60 / 24);
//var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
//var minutes = Math.floor(diffInSeconds / 60 % 60);
//var seconds = Math.floor(diffInSeconds % 60);
//var milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);

//console.log('days', days);
//console.log('hours', ('0' + hours).slice(-2));
//console.log('minutes', ('0' + minutes).slice(-2));
//console.log('seconds', ('0' + seconds).slice(-2));
//console.log('milliseconds', ('00' + milliseconds).slice(-3));


//const getRandomValue = (max, callback) =>
//setTimeout(() => 
  //  callback(Math.floor(Math.random() * max)), Math.random() * 1500
//);

// Returns float from 0 to max
const getRandomValue = (max, callback) =>
setTimeout(() => 
    callback(Math.floor(Math.random() * max)), Math.random() * 1500
);

// Fills an array with count amount of random values from 0 to max
// Pure function

 //var date = today.getDate();
 // date.setTime( date.getTime() + days * 86400000 );
//var newDate = new Date(date.setTime( date.getTime() + days * 86400000 ));


// Sync version
const fillArray = (count, max, limit,  callback) => {
const data = [];
let counter = 0;
//var d = new Date();
var today = new Date();
var start = new Date(today.getFullYear(), 07, 15);
var diff = today - start;
var oneDay =  86400000;
var day = Math.floor(diff / oneDay);

console.log("Today's date is " + today);
console.log("Start date is "+ start);
console.log('Days: ' + day);

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
    //console.log(date);
}


fillArray(100, 1000, 5, array => console.log(array, array.length))

