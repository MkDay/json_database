"use strict";
const quality1 = document.querySelectorAll('.q1-score');
const quality2 = document.querySelectorAll('.q2-score');
const quality3 = document.querySelectorAll('.q3-score');
const quality4 = document.querySelectorAll('.q4-score');
const quality5 = document.querySelectorAll('.q5-score');

const btn = document.querySelector('#submit');
const test = document.querySelector('#test');

let scoreList = [[], [], [], [], []];

let postList = [[], [], [], [], []];



let scores1 = [];
let scores2 = [];
let scores3 = [];
let scores4 = [];
let scores5 = [];

const today = document.querySelector('#today');
const calendar = document.querySelector('#calendar');
const dateName = document.querySelectorAll('.date-name');
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0'); 
let day = String(date.getDate()).padStart(2, '0');

let chosenDate;
let chosenMonth;

const qualityList = ['sakko', 'ujucha', 'sujucha', 'suwachochassa', 'mudu'];

const monthList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const chartLabels = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10', 'Day11', 'Day12', 'Day13', 'Day14', 'Day15', 'Day16', 'Day17', 'Day18', 'Day19', 'Day20', 'Day21', 'Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28', 'Day29', 'Day30', 'Day31'];


/* ============= get month/date ================ */

window.addEventListener('load', (e) => {
 
 today.innerHTML += '<br>' + year + '/' + month + '/' + day;
 calendar.value = String(year) + '-' + month + '-' + day;
 getChosenMonth();
 getChosenDate();
 
});

calendar.addEventListener('change', (e) => {
  getChosenMonth();
  getChosenDate();

});


const getChosenMonth = () => {
  if(calendar.value !== "") {
   chosenMonth = parseInt((calendar.value).slice(5, 7));
   //test.textContent = parseInt(calendar.value.slice(5, 7)); 
    
  } else {
    chosenMonth = date.getMonth();
    //test.textContent = date.getMonth();
  }
};


const getChosenDate = () => {

 if(calendar.value !== "") {
   chosenDate = parseInt((calendar.value).slice(8));
   //test.textContent = chosenDate;
   
 } else {
   chosenDate = date.getDate();
   //test.textContent = 'calendar is empty';
 }
 
 for(let i=0; i<5; i++) {
 
   let qDayClass = '.q' + (i+1) + '-days';
    
   for(let j=0; j<31; j++) { 
       
     if(chosenDate === (j + 1)) {
                     
       let select = document.createElement('select');
       select.class = 'q' + '-score';
       let option0 = document.createElement('option');
       let option1 = document.createElement('option');
       let option2 = document.createElement('option');
       let option3 = document.createElement('option');
       let option4 = document.createElement('option');
       let option5 = document.createElement('option');
       
        option0.value = "0";
        option1.value = "1";
        option2.value = "2";
        option3.value = "3";
        option4.value = "4";
        option5.value = "5";
       
       option0.textContent = 0;
       option1.textContent = 1;
       option2.textContent = 2;
       option3.textContent = 3;
       option4.textContent = 4;
       option5.textContent = 5;
       
       select.appendChild(option0);
       select.appendChild(option1);
       select.appendChild(option2);
       select.appendChild(option3);
       select.appendChild(option4);
       select.appendChild(option5);
       

       document.querySelectorAll(qDayClass)[j].appendChild(select);
       
       select = "";
       option0 = "";
       option1 = "";
       option2 = "";
       option3 = "";
       option4 = "";
       option5 = "";
     } 
   }
 }
 
};




/* ============= load data from the page loading ============ */



const getDatabase = async (chosenMonth) => {
 
  const response = await fetch("https://raw.githubusercontent.com/MkDay/json_database/main/database.json");

  const data = await response.json();

  return data;
};

getDatabase(chosenMonth)
 .then((data) => {

 let m = data[0].scores[monthList[chosenMonth - 1]]; 
 
 scores1 = m.sakko;
 scores2 = m.ujucha;
 scores3 = m.sujucha;
 scores4 = m.suwachochassa;
 scores5 = m.mudu;
 
 scoreList[0] = m.sakko;
 scoreList[1] = m.ujucha;
 scoreList[2] = m.sujucha;
 scoreList[3] = m.suwachochassa;
 scoreList[4] = m.mudu;
 
 //test.textContent = scoreList[0];
 //test.textContent = "resolved! " + scores5;
})
 .catch((err) => {

 test.textContent = "we got an error: " + err;
});



/* ==================== get input ============================= */





quality1.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   //scores1[index] = e.target.value;
   //scoreList[0][index] = e.target.value;
   postList[0][index] = e.target.value;
  });
});


quality2.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   //scores2[index] = e.target.value;
   //scoreList[1][index] = e.target.value;
   postList[1][index] = e.target.value;
  });
});

quality3.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   //scores3[index] = e.target.value;
   //scoreList[2][index] = e.target.value;
   postList[2][index] = e.target.value;
  });
});


quality4.forEach((q) => {

 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   //scores4[index] = e.target.value;
   //scoreList[3][index] = e.target.value;
   postList[3][index] = e.target.value;
  });
});


quality5.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;
   //scoreList[4][index] = e.target.value;   
   postList[4][index] = e.target.value;   
  });
});


/* ============= POST request & create charts ================ */

const postRequest = () => {

 for(let i=0; i<5; i++) {
   for(let j=0; j<31; j++) {
     if((Number.isNaN(postList[i][j])=== false) {
        
        fetch('https://raw.githubusercontent.com/MkDay/json_database/main/database.json', {
          method: 'PUT',
          body: JSON.stringify({
           year: 2022,
           scores: {
             monthList[chosenMonth - 1]: {
               qualityList[i]: postList[i]
             } 
           }
          //data[0].scores[monthList[chosenMonth - 1]] = postList[i][j]
          }),
          headers: { 
            'Content-type': 'application/json' 
            }
                                      
        })
        .then((response) => response.json())
        .then((json) => test.textContent = json //console.log(json))
        .catch((err) => {
          console.log('we have some error: ' + err.message);
        });
     }
   }
 }

};



btn.addEventListener('click', (e) => {
  
  postRequest();
  
  
  let sakko = document.querySelector('#sakko').getContext('2d');
  let ujucha = document.querySelector('#ujucha').getContext('2d');
  let sujucha = document.querySelector('#sujucha').getContext('2d');
  let suwachochassa = document.querySelector('#suwachochassa').getContext('2d');
  let mudu = document.querySelector('#mudu').getContext('2d');
  
  let daily = document.querySelector('#daily');

let sakkoChart = new Chart(sakko, {

 type: 'bar',
 data: {
   labels: chartLabels,
   datasets: [{
     label: 'Sakko',
     data: scoreList[0],
     backgroundColor: 'rgba(255, 99, 132, 0.6)'
   }]
 }, 
 options: {}
 });
 
 let ujuchaChart = new Chart(ujucha, {
  type: 'bar',
  data: {
   labels: chartLabels,
   datasets: [{
     label: 'Ujucha',
     data: scoreList[1],
     backgroundColor: 'rgba(54, 162, 235, 0.6)' 
   }]
 }, 
 options: {} 
 });
 
 let sujuchaChart = new Chart(sujucha, {
   type: 'bar',
   data: {
     labels: chartLabels,
     datasets: [{
       label: 'Sujucha',
       data: scoreList[2],
       backgroundColor: 'rgba(255, 206, 86, 0.6)' 
   }]
 }, 
 options: {}
});

 let suwachochassaChart = new Chart(suwachochassa, {
   type: 'bar',
   data: {
     labels: chartLabels,
     datasets: [{
       label: 'Suwachochassa',
       data: scoreList[3],
       backgroundColor: 'rgba(75, 192, 192, 0.6)' 
   }]
 }, 
 options: {}
});

 let muduChart = new Chart(mudu, {
   type: 'bar',
   data: {
     labels: chartLabels,
     datasets: [{
       label: 'Mudu',
       data: scoreList[4],
       backgroundColor: 'rgba(153, 102, 255, 0.6)' 
   }]
 }, 
 options: {}
});

let dailyChart = new Chart(daily, {

 type: 'bar',
   data: {
     labels: chartLabels,
     datasets: [{
       label: 'Sakko',
       data: scoreList[0],
       backgroundColor: 'rgba(255, 99, 132, 0.6)'
   },
   {
       label: 'Ujucha',
       data: scoreList[1],
       backgroundColor: 'rgba(54, 162, 235, 0.6)' 
   },
   {
       label: 'Sujucha',
       data: scoreList[2],
       backgroundColor: 'rgba(255, 206, 86, 0.6)' 
   },
   {
       label: 'Suwachochassa',
       data: scoreList[3],
       backgroundColor: 'rgba(75, 192, 192, 0.6)' 
   },
   {
       label: 'Mudu',
       data: scoreList[4],
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


●●●●●●●●●●●●●●
(2) work on the calendar

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

●●●●●●●●●●●●
(3) add some cool design to it.
*/
