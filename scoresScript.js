function showScore(){
    var dispScoresAlpha="";
    //var latestScore= document.cookie;
    var alphaScoresArr = JSON.parse(window.sessionStorage.getItem("alphaScore"));

    console.log(JSON.parse(window.sessionStorage.getItem("alphaScore")));

    if(alphaScoresArr!=null){
        for(var i=0; i<alphaScoresArr.length;i++){
            dispScoresAlpha+='<span><br>'+ alphaScoresArr[i] + '</span>'
        }
    }
    
    
    document.getElementById('abcScore').innerHTML='<b>Alphabet Quiz:</b><br/>'+dispScoresAlpha;
}
