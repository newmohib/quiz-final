
	
//   window.memoryStorage = {};
//   var setToStore = function(key,value){
//     window.memoryStorage[key] = value;
//     //localStorage.setItem(key,JSON.stringify(value));

// }

// var getFromStore = function(key){
//     return window.memoryStorage[key];
// }

//if data stor in localstorage then the data store in memory
// var initializeMemoryStore =  function(key){
//      var stringData = localStorage.getItem(key);
//      if(stringData){
//           window.memoryStorage[key]  =JSON.parse(stringData);
//      }
// }

// for data initialize
// if(localStorage.getItem('oldSolution')){
//     initializeMemoryStore('oldSolution');
//     initializeMemoryStore('userId');
// }

//memoryStorage.oldSolution
// for (i in memoryStorage.oldSolution) {
// optionsArray=memoryStorage.oldSolution[i].options;
// }

	 // document.getElementById("historyLength").innerHTML = arrayLength;
	 // var historyArrayLength=document.getElementById("historyLength").innerHTML;

	 var stringData = localStorage.getItem("oldSolution");
	 var parseData=JSON.parse(stringData);
	 var stringUserId = localStorage.getItem("userId");
	 var userId=JSON.parse(stringUserId);
	 var currentHistory = _.find(parseData,{"userId":userId});

	 //data store from localStorage
	 var averageScore,date,questionId,subjectId,totalScore,totalTime,totalMilliseconds,totalCorrects,totalIncorrect ,totalUnanswered ,scoreArray;

	function startHistary() {

		var arrayLength=(currentHistory.oldData.length-1);
	 	if (currentHistory !=undefined) {
		 for (var i = (currentHistory.oldData.length-1); i>=0; i--){
			if (i==arrayLength) {
			  var singleData=currentHistory.oldData[i];
			  averageScore=singleData.averageScore;
			  questionId=singleData.questionId;
			  subjectId=singleData.subjectId;
			  totalScore=singleData.totalScore;
			  totalTime=singleData.totalTime;
			  totalMilliseconds=singleData.totalMilliseconds;
			  totalCorrects=singleData.correct; 
			  totalIncorrect=singleData.incorrect; 
			  totalUnanswered=singleData.unanswered;
			  scoreArray=singleData.score;
			  date=singleData.date;

			  document.getElementById("historyLength").innerHTML = i;

			  var hours = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60)) / 1000);

			  hours = (hours < 10) ? "0" + hours : hours;
			  minutes = (minutes < 10) ? "0" + minutes : minutes;
			  seconds = (seconds < 10) ? "0" + seconds : seconds;

			  var averageTime = minutes + ':' + seconds;
			  var averageTime2= hours + minutes + seconds;
			  var averageScore= totalScore / questionId.length;

			    var scorePercentage= (totalCorrects / questionId.length) * 100 + '%';
				var scoreNumbers= (totalCorrects / questionId.length) * 100;
			    var scorePercentageSelector= document.querySelector('#scorePercentage');
			    	scorePercentageSelector.innerHTML=scorePercentage;
			    var scoreNumbersForChart= '--value:' + ' ' + scorePercentage;
			    $("#scoreNumbersForChart").attr({"style" : scoreNumbersForChart});

			    var totalCorrectSelector= document.querySelector('#correctNumbers');
			    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
			    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
			    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
			    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
			    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

			    var avgScoreSelector= document.querySelector('#averageScoreValue');
				    	avgScoreSelector.innerHTML=averageScore;
				var scoreForChart= '--value:' + ' ' + (averageScore * 10) +'%';
				    $("#averageScore").attr({"style" : scoreForChart});

				var avgTimeSelector= document.querySelector('#averageTimeValue');
				    	avgTimeSelector.innerHTML=averageTime;
				var timeForChart= '--value:' + ' ' + averageTime2 +'%';
				    $("#averageTime").attr({"style" : timeForChart});
				var dateViewSelector= document.querySelector('#dateView');
			    	dateViewSelector.innerHTML=date;

		       
			}
		 }
	    }else{
	    console.log('userId not found');
	   }
	 document.getElementById("historyLength").innerHTML = arrayLength;
	 historyChart();
	 console.log(arrayLength);
	}


	//defautl function
	startHistary();
 //currentHistory.oldData.length


	function nextHistary() {
		$("#removeIframe").find("iframe").remove();
		var historyArrayLength=document.getElementById("historyLength").innerHTML;
		var arrayLength=parseInt(historyArrayLength) - 1;
	 	if (currentHistory !=undefined) {
		 for (var i = (currentHistory.oldData.length-1); i>=0; i--) {
			if (i==arrayLength && currentHistory.oldData.length>=0) {
			  var singleData=currentHistory.oldData[i];
			  //console.log(singleData.score);
			  averageScore=singleData.averageScore;
			  
			  
			  
			  questionId=singleData.questionId;
			  
			  subjectId=singleData.subjectId;
			  totalScore=singleData.totalScore;
			  totalTime=singleData.totalTime;
			  totalMilliseconds=singleData.totalMilliseconds;

			  totalCorrects=singleData.correct; 
			  totalIncorrect=singleData.incorrect; 
			  totalUnanswered=singleData.unanswered;
			  scoreArray=singleData.score;
			  date=singleData.date;

			  document.getElementById("historyLength").innerHTML = i;

			  var hours = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60)) / 1000);

			  hours = (hours < 10) ? "0" + hours : hours;
			  minutes = (minutes < 10) ? "0" + minutes : minutes;
			  seconds = (seconds < 10) ? "0" + seconds : seconds;

			  var averageTime = minutes + ':' + seconds;
			  var averageTime2= hours + minutes + seconds;
			  var averageScore= totalScore / questionId.length;

			    var scorePercentage= (totalCorrects / questionId.length) * 100 + '%';
				var scoreNumbers= (totalCorrects / questionId.length) * 100;
			    var scorePercentageSelector= document.querySelector('#scorePercentage');
			    	scorePercentageSelector.innerHTML=scorePercentage;
			    var scoreNumbersForChart= '--value:' + ' ' + scorePercentage;
			    $("#scoreNumbersForChart").attr({"style" : scoreNumbersForChart});

			    var totalCorrectSelector= document.querySelector('#correctNumbers');
			    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
			    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
			    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
			    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
			    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

			    var avgScoreSelector= document.querySelector('#averageScoreValue');
				    	avgScoreSelector.innerHTML=averageScore;
				var scoreForChart= '--value:' + ' ' + (averageScore * 10) +'%';
				    $("#averageScore").attr({"style" : scoreForChart});

				var avgTimeSelector= document.querySelector('#averageTimeValue');
				    	avgTimeSelector.innerHTML=averageTime;
				var timeForChart= '--value:' + ' ' + averageTime2 +'%';
				    $("#averageTime").attr({"style" : timeForChart});
				var dateViewSelector= document.querySelector('#dateView');
			    	dateViewSelector.innerHTML=date;
		       
			}
		 }
	    }else{
	    console.log('userId not found');
	   }
	    if (arrayLength>=0) {
	    	document.getElementById("historyLength").innerHTML = arrayLength;
	    	console.log(arrayLength);
	    }
	 

	 historyChart()
	}


		function previusHistary() {
		var historyArrayLength=document.getElementById("historyLength").innerHTML;
		var arrayLength=parseInt(historyArrayLength) + 1;
	 	if (currentHistory !=undefined) {
		 for (var i = (currentHistory.oldData.length-1); i>=0; i--) {
			if (i==arrayLength) {
			  var singleData=currentHistory.oldData[i];
			  //console.log(singleData.score);
			  averageScore=singleData.averageScore;
			  
			  
			  
			  questionId=singleData.questionId;
			  
			  subjectId=singleData.subjectId;
			  totalScore=singleData.totalScore;
			  totalTime=singleData.totalTime;
			  totalMilliseconds=singleData.totalMilliseconds;

			  totalCorrects=singleData.correct; 
			  totalIncorrect=singleData.incorrect; 
			  totalUnanswered=singleData.unanswered;
			  scoreArray=singleData.score;
			  date=singleData.date;

			  document.getElementById("historyLength").innerHTML = i;

			  var hours = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60)) / 1000);

			  hours = (hours < 10) ? "0" + hours : hours;
			  minutes = (minutes < 10) ? "0" + minutes : minutes;
			  seconds = (seconds < 10) ? "0" + seconds : seconds;

			  var averageTime = minutes + ':' + seconds;
			  var averageTime2= hours + minutes + seconds;
			  var averageScore= totalScore / questionId.length;

			    var scorePercentage= (totalCorrects / questionId.length) * 100 + '%';
				var scoreNumbers= (totalCorrects / questionId.length) * 100;
			    var scorePercentageSelector= document.querySelector('#scorePercentage');
			    	scorePercentageSelector.innerHTML=scorePercentage;
			    var scoreNumbersForChart= '--value:' + ' ' + scorePercentage;
			    $("#scoreNumbersForChart").attr({"style" : scoreNumbersForChart});

			    var totalCorrectSelector= document.querySelector('#correctNumbers');
			    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
			    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
			    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
			    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
			    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

			    var avgScoreSelector= document.querySelector('#averageScoreValue');
				    	avgScoreSelector.innerHTML=averageScore;
				var scoreForChart= '--value:' + ' ' + (averageScore * 10) +'%';
				    $("#averageScore").attr({"style" : scoreForChart});

				var avgTimeSelector= document.querySelector('#averageTimeValue');
				    	avgTimeSelector.innerHTML=averageTime;
				var timeForChart= '--value:' + ' ' + averageTime2 +'%';
				    $("#averageTime").attr({"style" : timeForChart});
				var dateViewSelector= document.querySelector('#dateView');
			    	dateViewSelector.innerHTML=date;
		       
			}
		 }
	    }else{
	    console.log('userId not found');
	   }

	 // if (currentHistory.oldData.length<=arrayLength) {
	 //    	document.getElementById("historyLength").innerHTML = arrayLength;
	 //    	console.log(arrayLength);
	 //    }
	 if (arrayLength<currentHistory.oldData.length) {
	    	document.getElementById("historyLength").innerHTML = arrayLength;
	    	console.log(arrayLength);
	    }

	 historyChart();

	}

	
	//historyChart();



//chart start


function historyChart() {
      
   
var ctx = document.getElementById("acuracy").getContext('2d');

// this variable use to scorecard.js file
var dataArray=[totalCorrects, totalIncorrect, totalUnanswered]
var myPieChart = new Chart(ctx,{
    type: 'doughnut',
       data: {
        //These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Total Correct", "Total Incorrect", "Total Unanswered"],
        datasets: [{
            label: ' Votes',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
                
            ],
            borderWidth: .10
        }]
    },
    options: {
    }
});




var ctx = document.getElementById("indivitufal_score").getContext('2d');


//verticle
var headLineLabelData="Individual Question";
var labelsData=["1","2","3","4","5","6","7","8","9","10"];
var dataValue= scoreArray;
var backgroundColorData= ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)","rgba(255, 205, 86, 0.2)","rgba(201, 203, 207, 0.2)","rgba(75, 192, 192, 0.2)"];
var borderColorData= ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)","rgba(255, 205, 86, 0.2)","rgb(201, 203, 207)","rgb(75, 192, 192)"];
var borderWidthData=1;
var hoverBorderWidthData=1.25;
var hoverBackgroundColorData= ["rgba(255, 99, 132, 0.3)","rgba(255, 159, 64, 0.3)","rgba(255, 205, 86, 0.3)","rgba(75, 192, 192, 0.3)","rgba(54, 162, 235, 0.3)","rgba(153, 102, 255, 0.3)","rgba(201, 203, 207, 0.3)","rgba(255, 159, 64, 0.3)","rgba(255, 205, 86, 0.3)","rgba(201, 203, 207, 0.3)"];
var hoverBorderColorData= ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"];




new Chart(document.getElementById("indivitufal_score"),{
  type:"bar",
  data:{
    labels:labelsData,
    datasets:[{
      label:headLineLabelData,
      data:dataValue,
      fill:false,
      backgroundColor:backgroundColorData,
      borderColor:borderColorData,
      borderWidth:1,
      hoverBorderWidth:borderWidthData,
      //name:[],
      hoverBackgroundColor:hoverBackgroundColorData,
      hoverBorderColor:hoverBorderColorData,
    }]
    },
  options:{
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true

        }
      }]
    }
  }});



}
	