let score = 0
let countdown=20
let startIndex=0
 
//  let timer= 100

const questions = [
    { question:"How many times does water expand when changing state from liquid to gas", 
   answers:[
    {choice:"1700", correct : true, index: 0},
    {choice:"45", correct: false, index: 1},
    {choice:"450", correct : false, index: 2}]
    },
    { question:"What is a BTU", 
   answers:[
    {choice:"Basal Test Unit" , correct : false, index: 0},
    {choice:"British Thermal Unit", correct : true, index: 1},
    {choice:"Bil Timing Undulator", correct : false, index: 2}]
    },
    { question:"How many BTU's in a ton of cooling", 
   answers:[
    {choice:"6000" , correct : false, index: 0},
    {choice:"9000", correct : false, index: 1},
    {choice:"12000", correct : true, index: 2}]
    },
    { question:"Who invented the residential air conditioner", 
   answers:[
    {choice:"James Trane" , correct : false, index: 0},
    {choice:"Willis Carrier", correct : true, index: 1},
    {choice:"Edwin Ruud", correct : false, index: 2}]
    },
    { question:"Who is Alice H. Parker", 
   answers:[
    {choice:"The inventor of the gas fired furnace" , correct : true, index: 0},
    {choice:"The inventor of the automatic water heater ", correct : false, index: 1},
    {choice:"The discoverer of the theory of thermal expansion", correct : false, index: 2}]
    },
   
]
let maxIndex = (questions.length)-1
console.log(questions.length)



function startFunction(){
    
    document.getElementById('intro').style.display = 'none';
    document.getElementById('header').style.display = 'inline';
    document.getElementById('questionBox').style.display = 'inline';
    document.getElementById('scoreCard').innerHTML = score;
    let timer= setInterval(function(){
        countdown -=1 ;
        document.getElementById("timer").innerHTML = countdown
        if(countdown <= 0)  {
        clearInterval(timer);
        };
        document.getElementById('timer').innerHTML = countdown;
       }, 1000);
     
       document.getElementById("question").innerHTML = questions[0].question;
       document.getElementById("answer1").innerHTML = questions[0].answers[0].choice
       document.getElementById("answer2").innerHTML = questions[0].answers[1].choice
       document.getElementById("answer3").innerHTML = questions[0].answers[2].choice

       console.log(questions[0].answers[0].correct);
       console.log(localStorage.getItem('lastname'))
    }

   function bttnVerifyA(){
   if(startIndex<maxIndex && countdown>0)  {
   if(questions[startIndex].answers[0].correct.valueOf() == true) {
   startIndex = ++startIndex ;
   score = ++score;
   document.getElementById("question").innerHTML = questions[startIndex].question;
   document.getElementById("answer1").innerHTML = questions[startIndex].answers[0].choice;
   document.getElementById("answer2").innerHTML = questions[startIndex].answers[1].choice;
   document.getElementById("answer3").innerHTML = questions[startIndex].answers[2].choice;
   document.getElementById('scoreCard').innerHTML = score;
  } else if (questions[startIndex].answers[0].correct.valueOf() == false){
    startIndex = ++startIndex ;
    countdown = countdown - 10;
    document.getElementById("question").innerHTML = questions[startIndex].question;
    document.getElementById("answer1").innerHTML = questions[startIndex].answers[0].choice;
    document.getElementById("answer2").innerHTML = questions[startIndex].answers[1].choice;
    document.getElementById("answer3").innerHTML = questions[startIndex].answers[2].choice;
    document.getElementById('scoreCard').innerHTML = score;
  };}
  else  {
    if(questions[startIndex].answers[0].correct.valueOf() == true){
      score = ++score;
    }
    document.getElementById('intro').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('questionBox').style.display = 'none';
    document.getElementById("highScores").style.display= "inline";
    const scoreString =score.toString()
    const initials= prompt("please enter your initials")
    localStorage.setItem(initials, initials+ ": " + scoreString);
    console.log(localStorage.getItem(initials))
    var para = document.createElement("p");
    var t = document.createTextNode(localStorage.getItem(initials));
    para.appendChild(t);
    document.getElementById("highScores").appendChild(para);
    
}
   };
   function bttnVerifyB(){
    if(startIndex<maxIndex && countdown>0)  {
    if(questions[startIndex].answers[1].correct.valueOf() == true) {
    startIndex = ++startIndex ;
    score = ++score;
    document.getElementById("question").innerHTML = questions[startIndex].question;
    document.getElementById("answer1").innerHTML = questions[startIndex].answers[0].choice;
    document.getElementById("answer2").innerHTML = questions[startIndex].answers[1].choice;
    document.getElementById("answer3").innerHTML = questions[startIndex].answers[2].choice;
    document.getElementById('scoreCard').innerHTML = score;
   } else if (questions[startIndex].answers[1].correct.valueOf() == false){
     startIndex = ++startIndex ;
     countdown = countdown - 10;
     document.getElementById("question").innerHTML = questions[startIndex].question;
     document.getElementById("answer1").innerHTML = questions[startIndex].answers[0].choice;
     document.getElementById("answer2").innerHTML = questions[startIndex].answers[1].choice;
     document.getElementById("answer3").innerHTML = questions[startIndex].answers[2].choice;
     document.getElementById('scoreCard').innerHTML = score;
   };}
   else  {
    if(questions[startIndex].answers[1].correct.valueOf() == true){
      score = ++score;
      document.getElementById('scoreCard').innerHTML = score;
    };
     document.getElementById('intro').style.display = 'none';
     document.getElementById('header').style.display = 'none';
     document.getElementById('questionBox').style.display = 'none';
     document.getElementById("highScores").style.display= "inline";
     const scoreString =score.toString()
     const initials= prompt("please enter your initials")
     localStorage.setItem(initials, initials+ ": " + scoreString);
     console.log(localStorage.getItem(initials))
     var para = document.createElement("p");
     var t = document.createTextNode(localStorage.getItem(initials));
     para.appendChild(t);
     document.getElementById("highScores").appendChild(para);
     
 }
    };
    function bttnVerifyC(){
        if(startIndex<maxIndex && countdown>0)  {
        if(questions[startIndex].answers[2].correct.valueOf() == true) {
        startIndex = ++startIndex ;
        score = ++score;
        document.getElementById("question").innerHTML = questions[startIndex].question;
        document.getElementById("answer1").innerHTML = questions[startIndex].answers[0].choice;
        document.getElementById("answer2").innerHTML = questions[startIndex].answers[1].choice;
        document.getElementById("answer3").innerHTML = questions[startIndex].answers[2].choice;
        document.getElementById('scoreCard').innerHTML = score;
       } else if (questions[startIndex].answers[2].correct.valueOf() == false ){
         startIndex = ++startIndex ;
         countdown = countdown - 10;
         document.getElementById("question").innerHTML = questions[startIndex].question;
         document.getElementById("answer1").innerHTML = questions[startIndex].answers[0].choice;
         document.getElementById("answer2").innerHTML = questions[startIndex].answers[1].choice;
         document.getElementById("answer3").innerHTML = questions[startIndex].answers[2].choice;
         document.getElementById('scoreCard').innerHTML = score;
       };}
       else  {
        if(questions[startIndex].answers[2].correct.valueOf() == true){
          score = ++score;
        }
         document.getElementById('intro').style.display = 'none';
         document.getElementById('header').style.display = 'none';
         document.getElementById('questionBox').style.display = 'none';
         document.getElementById("highScores").style.display= "inline";
         const scoreString =score.toString()
         const initials= prompt("please enter your initials")
         localStorage.setItem(initials, initials+ ": " + scoreString);
         console.log(localStorage.getItem(initials))
         var para = document.createElement("p");
         var t = document.createTextNode(localStorage.getItem(initials));
         para.appendChild(t);
         document.getElementById("highScores").appendChild(para);
         
     }
        };