var date = new Date();

console.log(date.toDateString()); // ans wed may 12 2021

console.log(date.toTimeString()); // ans 00:27:56 GMT+0600

console.log(date.toLocaleString()); // ans 5/12/2021 12:30:12 give local computer date time

console.log(date.toLocaleDateString()); //ans 5/12/2021 give local computer date

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());