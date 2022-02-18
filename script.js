"use strict";
const quality1 = document.querySelectorAll('.q1-days');
const quality2 = document.querySelectorAll('.q2-days');
const quality3 = document.querySelectorAll('.q3-days');
const quality4 = document.querySelectorAll('.q4-days');
const quality5 = document.querySelectorAll('.q5-days');

const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');

const btn = document.querySelector('#submit');
const test = document.querySelector('#test');

let scoreList = [[], [], [], [], []];

let postList = [[], [], [], [], []];


const today = document.querySelector('#today');
const calendar = document.querySelector('#calendar');
const dateName = document.querySelectorAll('.date-name');
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0'); 
let day = String(date.getDate()).padStart(2, '0');

let chosenDate;
let chosenMonth;
let prevDate;

const monthList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const qualityList = ['sakko', 'ujucha', 'sujucha', 'suwachochassa', 'mudu'];

const chartLabels = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10', 'Day11', 'Day12', 'Day13', 'Day14', 'Day15', 'Day16', 'Day17', 'Day18', 'Day19', 'Day20', 'Day21', 'Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28', 'Day29', 'Day30', 'Day31'];





/* ============= load date & month ============== */

window.addEventListener('load', (e) => {
 
 today.innerHTML += year + '/' + month + '/' + day;
 calendar.value = String(year) + '-' + month + '-' + day;
 getChosenMonth();
 getChosenDate();
 
});

calendar.addEventListener('change', (e) => {
  removePrev();
  getChosenMonth();
  getChosenDate();

});

const removePrev = () => {

 for(let i=0; i<5; i++) {
 
   let qDayClass = '.q' + (i+1) + '-days';
    
   for(let j=0; j<31; j++) { 
       
     if(prevDate === (j + 1)) {
       document.querySelectorAll(qDayClass)[j].innerHTML = "";
     }
   }
 }
};


const getChosenMonth = () => {
  if(calendar.value !== "") {
   chosenMonth = parseInt((calendar.value).slice(5, 7));
 
    
  } else {
    chosenMonth = date.getMonth();
  }
};


const getChosenDate = () => {

 if(calendar.value !== "") {
   chosenDate = parseInt((calendar.value).slice(8));
   
   
 } else {
   chosenDate = date.getDate();
   
 }
 
 prevDate = chosenDate;
 
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


/* ============= load data ============== */

const getDatabase = async (chosenMonth) => {
 
  const response = await fetch("https://raw.githubusercontent.com/MkDay/meditation_progress_tracker/main/database.json");

  const data = await response.json();

  return data;
};


getDatabase(chosenMonth, chosenDate)
 .then((data) => {

 let m = data[0].scores[monthList[chosenMonth - 1]]; 
 
 scoreList[0] = m.sakko;
 scoreList[1] = m.ujucha;
 scoreList[2] = m.sujucha;
 scoreList[3] = m.suwachochassa;
 scoreList[4] = m.mudu;
 
 for(let i=0; i<31; i++) {
     if(chosenDate - 1 !== i) {
     quality1[i].textContent = scoreList[0][i];
     quality2[i].textContent = scoreList[1][i];
     quality3[i].textContent = scoreList[2][i];
     quality4[i].textContent = scoreList[3][i];
     quality5[i].textContent = scoreList[4][i];
     }
     
     if(chosenDate - 1 === i) {
       quality1[i].querySelector('select').value = scoreList[0][i];
       quality2[i].querySelector('select').value = scoreList[1][i];
       quality3[i].querySelector('select').value = scoreList[2][i];
       quality4[i].querySelector('select').value = scoreList[3][i];
       quality5[i].querySelector('select').value = scoreList[4][i];
     }
   
 }

})
 .catch((err) => {

 test.textContent = "we got an error: " + err;
});

/* ==================== get input ============================= */


quality1.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   /*let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1; */
   let index =  chosenDate - 1;
   postList[0][index] = e.target.value;
  });
});


quality2.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
   /*let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;*/
   let index =  chosenDate - 1;
   postList[1][index] = e.target.value;
  });
});

quality3.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   
  /* let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1;*/
   let index =  chosenDate - 1;
   postList[2][index] = e.target.value;
  });
});


quality4.forEach((q) => {

 q.addEventListener('change', (e) => {
   
   /*let id = q.id;  
   let index = (parseInt(id[id.length - 1])) - 1; */
   let index =  chosenDate - 1;
   postList[3][index] = e.target.value;
  });
});


quality5.forEach((q) => {
 
 q.addEventListener('change', (e) => {
   //q.id = 'q5-day' + chosenDate;
   let index = chosenDate - 1;
   /*
   let id = q.id; 
   let index = (parseInt(id[id.length - 1])) - 1; */ 
   postList[4][index] = e.target.value; 
   test.textContent = postList[4][index];
  });
});


/* ============= POST request & create charts ================ */

const postRequest = () => {

 for(let i=0; i<5; i++) {
   for(let j=0; j<31; j++) {
     if(isNaN(postList[i][j])=== false) {
     
      let ml = '' + monthList[chosenMonth - 1];
      let ql = '' + qualityList[i];
      
      
        fetch('database.json', {
          method: 'POST',
          body: JSON.stringify({
             year: 2022,
             scores: {
               ml: {
                 ql: postList[i]
               }
             }                      
          
          }),
          headers: { 
            'Content-type': 'application/json; charset=UTF-8', 
            },
                                      
        })
        .then((response) => response.json())
        .then((json) => test.textContent += json)
        .catch((err) => {
          //console.log('we have some error: ' + err);
         test.textContent += ' we have some error: ' + err;
        });
     }
   }
 }

};



btn.addEventListener('click', (e) => {
  
  
  postRequest();
  
  
  container1.style.visibility = 'visible';
  container2.style.visibility = 'visible';
  
  let sakko = document.querySelector('#sakko').getContext('2d');
  let ujucha = document.querySelector('#ujucha').getContext('2d');
  let sujucha = document.querySelector('#sujucha').getContext('2d');
  let suwachochassa = document.querySelector('#suwachochassa').getContext('2d');
  let mudu = document.querySelector('#mudu').getContext('2d');
  
  let daily = document.querySelector('#daily');


Chart.defaults.color = 'snow';
Chart.defaults.font.size = 17;

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
* solve the problem with posting data.
* add style to graphs.
* test it.
*/


