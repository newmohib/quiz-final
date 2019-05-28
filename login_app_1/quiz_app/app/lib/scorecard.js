	// $("#timePause").toggleClass("fas fa-play");
 //    $("#timeEvent").attr({"onclick" : "startTimer()"});
 //  var name= document.querySelector('.class'); // id,element



	//if totalQuestion =0 then count into localstorage question length
	var totalQuestions=10;
	window.memoryStorage = {};
	var initializeMemoryStore =  function(key){
    var stringData = localStorage.getItem(key);
	     if(stringData){
	          window.memoryStorage[key]  =JSON.parse(stringData);
	     }
	}

	if(localStorage.getItem('hasData')){
	    initializeMemoryStore('questions');
	}

	var questionsData=memoryStorage.questions;
	var correctAnswers=[];
	var incorrectAnswers=[];
	var unanswered=[];
	var scoreArray=[]
	var totalScore=0;
	var totalTime=0;
	for (i in questionsData) {
		scoreEveryOne=questionsData[i].score;
		scoreArray.push(scoreEveryOne);
		answerStatus=questionsData[i].answerStatus;
		selected=questionsData[i].selected;
		if (answerStatus==true) {
			pushSuccess=correctAnswers.push(answerStatus);
		}
		var selected=selected ? selected : '';
		if (selected.length==0) {
			pushSuccess=unanswered.push(selected);
			//console.log(pushSuccess)
		}
		if(selected.length>0 && answerStatus==false){
			pushSuccess=incorrectAnswers.push(selected);
		}
		
		totalScore +=questionsData[i].score;
		totalTime +=questionsData[i].reviewTime;
	}
//loop cloos	
	var totalCorrects=correctAnswers.length;
	var totalIncorrect=incorrectAnswers.length;
	var totalUnanswered=unanswered.length;
	
	//total question
	//totalQuestions variable set to page top
	if (totalQuestions>1) {

	}else{
		totalQuestions=questionsData.length;
	}
	
	var scorePercentage= (totalCorrects / totalQuestions) * 100 + '%';
	var scoreNumbers= (totalCorrects / totalQuestions) * 100;
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

//calculate average score and time 
  var averageMilliseconds=totalTime / totalQuestions
	// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((averageMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((averageMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((averageMilliseconds % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var averageTime = minutes + ':' + seconds;
  var averageTime2= hours + minutes + seconds;
  var averageScore= totalScore / totalQuestions;

  var avgScoreSelector= document.querySelector('#averageScoreValue');
    	avgScoreSelector.innerHTML=averageScore;
    var scoreForChart= '--value:' + ' ' + averageScore +'%';
    $("#averageScore").attr({"style" : scoreForChart});

    var avgTimeSelector= document.querySelector('#averageTimeValue');
    	avgTimeSelector.innerHTML=averageTime;
    var timeForChart= '--value:' + ' ' + averageTime2 +'%';
    $("#averageTime").attr({"style" : timeForChart});

  console.log(averageScore);
  console.log(averageTime);




	//var correctAnswers = _.find(questionsData,{answerStatus:true});
   // console.log(correctAnswers);

	//for lodesh library

	// var AllQuestions=localStorage.getItem("questions");
 //    var dataParse=JSON.parse(AllQuestions);
 //    var currentQuestion = _.find(dataParse,{answerStatus:false});
 //    console.log(currentQuestion);
	//var questioNumberToform=document.question_form.questionNumber.value;
	
    //var currentQuestion = _.find(dataParse,{id:'2',id:'2'});
    
    // currentQuestion.viewTime = false;
    // currentQuestion.reviewTime = false;
    //currentQuestion.selected = [];

 //    //localStorage.setItem("questions",JSON.stringify(dataParse));