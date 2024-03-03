function calculate(){
    score=0
    var answers={
        q1:"paris",
        q2:"Mars",
        q3:"bluewhale",
    }
    for (var question in answers){
       var useranswer=document.querySelector(`input[name=${question}]:checked`)
   if(useranswer && useranswer.value === answers[question])  {
    score++
   }  


    }
    var quizform=document.getElementById("quizform")
    quizform.style.display="none"
    var result=document.getElementById("quizresult")
    result.innerHTML=`<h2> Your Quiz Result</h2><p>score:${score}</p>`
}