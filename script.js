"use strict";
const quality1 = document.querySelectorAll('.q1-score');
const quality2 = document.querySelectorAll('.q2-score');
const quality3 = document.querySelectorAll('.q3-score');
const quality4 = document.querySelectorAll('.q4-score');
const quality5 = document.querySelectorAll('.q5-score');

const btn = document.querySelector('#submit');
const test = document.querySelector('#test');

/*
const getDatabase = async () => {
 
  const response = await fetch("./database.json");
  
  test.textContent = response;

  const data = await response.json();

  return data;
};

getDatabase()
 .then((data) => {

 test.textContent = "resolved! " + data[0];
})
 .catch((err) => {

 test.textContent = "could not fetch data: " + err;
});

*/

fetch('https://github.com/MkDay/json_database/blob/main/meditation_database.json').then((response) => {

  test.textContent = response;

  return response.json();

}).then((data) => {

  test.textContent = data[0];

}).catch((err) => {
  test.textContent = 'error message: ' + err;
});



/* ================================================= */

const scores1 = [0, 0, 0, 0, 0, 0, 0];
const scores2 = [0, 0, 0, 0, 0, 0, 0];
const scores3 = [0, 0, 0, 0, 0, 0, 0];
const scores4 = [0, 0, 0, 0, 0, 0, 0];
const scores5 = [0, 0, 0, 0, 0, 0, 0];



quality1.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   scores1[index] = e.target.value;
   
  });
});


quality2.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   scores2[index] = e.target.value;
   
  });
});

quality3.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   scores3[index] = e.target.value;
   
  });
});


quality4.forEach((q) => {

 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   scores4[index] = e.target.value;
   
  });
});


quality5.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   scores5[index] = e.target.value;
   
  });
});


btn.addEventListener('click', (e) => {
  
  let sakko = document.querySelector('#sakko').getContext('2d');
  let ujucha = document.querySelector('#ujucha').getContext('2d');
  let sujucha = document.querySelector('#sujucha').getContext('2d');
  let suwachochassa = document.querySelector('#suwachochassa').getContext('2d');
  let mudu = document.querySelector('#mudu').getContext('2d');
  
  let daily = document.querySelector('#daily');

let sakkoChart = new Chart(sakko, {

 type: 'bar',
 data: {
   labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
   datasets: [{
     label: 'Sakko',
     data: scores1,
     backgroundColor: 'rgba(255, 99, 132, 0.6)'
   }]
 }, 
 options: {}
 });
 
 let ujuchaChart = new Chart(ujucha, {
  type: 'bar',
  data: {
   labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
   datasets: [{
     label: 'Ujucha',
     data: scores2,
     backgroundColor: 'rgba(54, 162, 235, 0.6)' 
   }]
 }, 
 options: {} 
 });
 
 let sujuchaChart = new Chart(sujucha, {
   type: 'bar',
   data: {
     labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
     datasets: [{
       label: 'Sujucha',
       data: scores3,
       backgroundColor: 'rgba(255, 206, 86, 0.6)' 
   }]
 }, 
 options: {}
});

 let suwachochassaChart = new Chart(suwachochassa, {
   type: 'bar',
   data: {
     labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
     datasets: [{
       label: 'Suwachochassa',
       data: scores4,
       backgroundColor: 'rgba(75, 192, 192, 0.6)' 
   }]
 }, 
 options: {}
});

 let muduChart = new Chart(mudu, {
   type: 'bar',
   data: {
     labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
     datasets: [{
       label: 'Mudu',
       data: scores5,
       backgroundColor: 'rgba(153, 102, 255, 0.6)' 
   }]
 }, 
 options: {}
});

let dailyChart = new Chart(daily, {

 type: 'bar',
   data: {
     labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
     datasets: [{
       label: 'Sakko',
       data: scores1,
       backgroundColor: 'rgba(255, 99, 132, 0.6)'
   },
   {
       label: 'Ujucha',
       data: scores2,
       backgroundColor: 'rgba(54, 162, 235, 0.6)' 
   },
   {
       label: 'Sujucha',
       data: scores3,
       backgroundColor: 'rgba(255, 206, 86, 0.6)' 
   },
   {
       label: 'Suwachochassa',
       data: scores4,
       backgroundColor: 'rgba(75, 192, 192, 0.6)' 
   },
   {
       label: 'Mudu',
       data: scores5,
       backgroundColor: 'rgba(153, 102, 255, 0.6)' 
   }
   ]
 }, 
 options: {}
 });

});




/*
file:///storage/emulated/0/project_folder/meditation_progress/database.json


** json data structure:

** get data from the database: (we have a problem with this)
* fetch api is working.
* json file looks fine (it's validated).
* have tried database.json as the url.
* have tried full url.
* upload json data into github and tried to fetch data from there (this url only leads to the github page).

https://github.com/MkDay/json_database/blob/main/meditation_database.json

* as the next thing try these twos: 
 (1) find out about the error message that we've got.
 (2) also find out how to store our own data somewhere else and fetch from and post into there.



** insert data into arrays:
 scores1 = data[0].scores.jan.sakko

** fetch data when the page is loading from the json file and insert them into proper places. (eg: Day1 is already completed and we can fetch data related Day1)
               Day1 Day2
sakko:          2
ujucha:         4
sujucha:        0
suwachochassa:  5
mudu:           4 

** then we have to generate select options only for the days that haven't completed yet.

** we can use a calandar to focus to the current day.

** also if the user wants to change data of a previous day he can select that date so that the day will be focused and select options will be appeared.

data = [
 {
   year: 2022,
   scores: {
     jan: {
     sakko: [],
     ujucha: [],
     sujucha: [],
     suwachochassa: [],
     mudu: []
    }
  }
 }
]



*/
