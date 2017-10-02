//function generate_year_range(start, end){
 // var years = [];
  // for(var year = start; year <= end; year++){
    //    years.push(year)
    //}
  //return years;
//}
//var my_years = generate_year_range(2000,2009);
//console.log(my_years);
function update(datetime = "2017-01-01 05:11:58") {
  var theevent = new Date(datetime);
  now = new Date();
  var sec_num = (theevent - now) / 1000;
  var days    = Math.floor(sec_num / (3600 * 24));
  var hours   = Math.floor((sec_num - (days * (3600 * 24)))/3600);
  var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
  var seconds = Math.floor(sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60));

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}

  return  days+':'+ hours+':'+minutes+':'+seconds;
}




