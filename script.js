var roboFlag=0, topic="", abcQuestions1=[], prevAudio, done=[], qCount=0, i=0, abcQuestions2=[], score=0;


function roboNextText(){

    if(roboFlag==0){
        document.getElementById("btnLessons").classList.remove('animationBtn');
        document.getElementById("btnLessons").offsetHeight;
        document.getElementById("bubbleText").innerHTML='Click on the Lessons button to start learning';        
        document.getElementById("btnLessons").classList.add('animationBtn');
        roboFlag=1;
    }

    else if(roboFlag==1){
        document.getElementById("btnQuizzes").classList.remove('animationBtn');
        document.getElementById("btnLessons").offsetHeight;
        document.getElementById("bubbleText").innerHTML='or click on the Quizzes button to test your knowledge!';
        document.getElementById("btnQuizzes").classList.add('animationBtn');
        roboFlag=2;
    }
    else if(roboFlag==2){
        document.getElementById("btnScores").classList.remove('animationBtn');
        document.getElementById("btnScores").offsetHeight;
        document.getElementById("bubbleText").innerHTML='To check your recent scores, click on the Scores button.';
        document.getElementById("btnScores").classList.add('animationBtn');
        roboFlag=3;
    }
    else if(roboFlag==3){
        document.getElementById("robo").classList.remove('animationBtn');
        document.getElementById("robo").offsetHeight;
        document.getElementById("bubbleText").innerHTML='Hey there,<br>little learners!<br><br>Welcome to our lab.';
        document.getElementById("robo").classList.add('animationBtn');
        roboFlag=0;
    }
    
}

function roboNextTextQuiz(){

    if(roboFlag==0){
        document.getElementById("bubbleText").innerHTML='Are you ready?';
        roboFlag=1;
    }

    else if(roboFlag==1){
        
        document.getElementById("bubbleText").innerHTML='Click the start button to begin.';

        document.getElementById("start").innerHTML+='<button class="menuButtons" id="btnStart" style="position:absolute; top:600px; left:1000px" onclick="startQuiz()">Start</button>'
        
        roboFlag=2;
    }
    else if(roboFlag==2){
        
        document.getElementById("bubbleText").innerHTML='Hey there, little learners! Welcome to the alphabet quiz.';
        
        roboFlag=0;
    }
    
}

function identifyTopic(){
    var link = window.location.href, fileName = "";
    console.log(link);

    fileName = link.substring(link.lastIndexOf('/')+1);
    console.log(fileName);

    topic=fileName;
}//id topic

function startQuiz(){
    document.getElementById("qContainer").innerHTML="";
    console.log(topic);
    switch(topic){
        case "alphabetQuiz.html": alphabetQuiz(); 
        break;
    }//switch
}//func start

function playAudio(arrQ){
    
    if(prevAudio!=null){
        prevAudio.pause();
        prevAudio.currentTime = 0;
    }//if
    if(arrQ!=null){
        arrQ.Aud[0].play();
        prevAudio = arrQ.Aud[0];
    }
    
}//func playAud

function choiceAudio(choice){
    switch(choice.id){
        case 'choiceA': new Audio('./A.mp3').play(); break;
        case 'choiceB': new Audio('./B.mp3').play(); break;
        case 'choiceC': new Audio('./C.mp3').play(); break;
        case 'choiceD': new Audio('./D.mp3').play(); break;
    }//switch
}//func choice aud

function PlayChoice(aud){
    aud.play();
}// func play

function checkAnswer(ans, chkIndx){
    if(ans.id == chkIndx.Answer){
        switch(Math.floor(Math.random()*3)){
            case 0: new Audio('./spot_on_kid.mp3').play(); break;
            case 1: new Audio('./perfect_kid.mp3').play(); break;
            case 2: new Audio('./great_job_kid.mp3').play(); break;
        }//switch

        document.getElementById(ans.id).style='border: solid #00ff44 5px';
        score=score+1;
        document.getElementById("dispScore").style='visibility:visible';
        document.getElementById("dispScore").innerHTML='Score: '+score;
        
    }//if
    else{
        switch(Math.floor(Math.random()*2)){
            case 0: new Audio('./incorrect_kid.mp3').play(); break;
            case 1: new Audio('./nope_kid.mp3').play(); break;
        }

        document.getElementById(ans.id).style='border: solid #eb3434 5px';
    }//else

    

    setTimeout(alphabetQuiz, 1000);
}//func check



function alphabetQuiz(){
    
    abcQuestions1 = [
        {"ID": "Aa", "Aud": [new Audio('./A_is_for.mp3')], "Question":"A is for...", "Answer": "choiceD", "Image": ["./2x/Aa.png","banana.jpg","mango.jpg","elephant.jpg","apple.jpg"]},
        {"ID": "Ll","Aud": [new Audio('./L_is_for.mp3')], "Question":"L is for...", "Answer": "choiceA", "Image": ["./2x/Ll.png","lion.jpg","cat.jpg","fox.png","kite.png"]},
        {"ID": "Mm","Aud": [new Audio('./M_is_for.mp3')], "Question":"M is for...", "Answer": "choiceC", "Image":["./2x/Mm.png","elephant.jpg","ball.png","mango.jpg","cat.jpg"]},
        {"ID": "Kk","Aud": [new Audio('./K_is_for.mp3')], "Question": "K is for...", "Answer": "choiceB", "Image": ["./2x/Kk.png","banana.jpg","kite.png","lion.jpg","hat.png"]},
        {"ID": "Zz","Aud": [new Audio('./Z_is_for.mp3')], "Question": "Z is for...", "Answer": "choiceC", "Image": ["./2x/Zz.png","cake.png","book.png","zebra.png","chocolate.png"]},
        {"ID": "Ee","Aud": [new Audio('./E_is_for.mp3')], "Question": "E is for...", "Answer": "choiceA", "Image": ["./2x/Ee.png","elephant.jpg","ball.png","chocolate.png","zipper.png"]},
        {"ID": "Tt","Aud": [new Audio('./T_is_for.mp3')],"Question": "T is for...", "Answer": "choiceB", "Image": ["./2x/Tt.png","snake.png","tea.png","pancake.png","dog.png"]},
        {"ID": "Vv","Aud": [new Audio('./V_is_for.mp3')], "Question": "V is for...","Answer": "choiceA","Image": ["./2x/Vv.png","van.png","lake.png","water.png","pencil.png"]},
        {"ID": "Nn","Aud": [new Audio('./N_is_for.mp3')],"Question": "N is for...","Answer": "choiceC", "Image": ["./2x/Nn.png","vase.png","ball.png","notebook.png","candle.png"]},
        {"ID": "Qq","Aud": [new Audio('./Q_is_for.mp3')],"Question": "Q is for...","Answer": "choiceD","Image": ["./2x/Qq.png","elephant.jpg","ball.png","mango.jpg","queen.png"]}
    ];

    abcQuestions2 = [
        {"ID": "Da", "Aud": [new Audio('./Phonics/d__.mp3'), new Audio('./Phonics/b__.mp3'), new Audio('./Phonics/p__.mp3'), new Audio('./Phonics/l__.mp3')], "Question": "D is for ‘dog’, but what is the sound of the letter ‘D’ or ‘d’?", "Answer": "choiceA","Image": ["./2x/Dd.png", "./listen.png"]},
        {"ID": "Ka", "Aud": [new Audio('./Phonics/k__.mp3'), new Audio('./G.mp3'), new Audio('./C.mp3'), new Audio('./Z.mp3'), new Audio('./T.mp3')], "Question": "'ka'-'ka' what letter has this sound?", "Answer": "choiceB","Image": ["./listen.png","./2x/Gg.png", "./2x/Cc.png", "./2x/Zz.png","./2x/Tt.png"]},
        {"ID": "Ha", "Aud": [new Audio('./Phonics/h__.mp3'), new Audio('./P.mp3'), new Audio('./G.mp3'), new Audio('./H.mp3'), new Audio('./N.mp3')], "Question": "'ha'-'ha'", "Answer": "choiceC", "Image": ["./listen.png","./2x/Pp.png", "./2x/Gg.png","./2x/Hh.png","./2x/Nn.png"]},
        {"ID": "Oh", "Aud": [new Audio('./Phonics/o__.mp3'), new Audio('./J.mp3'), new Audio('./I.mp3'), new Audio('./F.mp3'), new Audio('./O.mp3')], "Question": "'oh'-'oh'","Answer": "choiceD", "Image": ["./listen.png","./2x/Jj.png","./2x/Ii.png","./2x/Ff.png","./2x/Oo.png"]},
        {"ID": "Ah", "Aud": [new Audio('./Phonics/a__.mp3'), new Audio('./E.mp3'), new Audio('./I.mp3'), new Audio('./A.mp3'), new Audio('./U.mp3')], "Question": "'ah'-'ah'", "Answer": "choiceC", "Image": ["./listen.png","./2x/Ee.png","./2x/Ii.png","./2x/Aa.png","./2x/Uu.png"]}
    ];

    

    if(qCount<5){
        
        i = Math.floor(Math.random()* abcQuestions1.length);

        while(done.includes(i)){
            i = Math.floor(Math.random()* abcQuestions1.length);
        }//while

        done.push(i);
    
        document.getElementById("choicesDiv").innerHTML="";
        document.getElementById("choicesDiv").style="visibility: visible;";
        document.getElementById("qContainer").innerHTML="<img src='"+abcQuestions1[i].Image[0]+"' id='"+abcQuestions1[i].ID+"' value="+i+" onclick='playAudio(abcQuestions1["+i+"])' onload='setTimeout(playAudio(abcQuestions1["+i+"]),2000)' title='Play Audio'><h1 style='margin:10px;'>"+abcQuestions1[i].Question+"</h1>";
        document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceA' onclick='checkAnswer(this, abcQuestions1["+i+"])' onmouseenter='choiceAudio(this)'> A) "+abcQuestions1[i].Image[1].slice(0,-4)+" <img src='"+abcQuestions1[i].Image[1]+"' height=90% style='margin:auto;'></div>";
        document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceB' onclick='checkAnswer(this, abcQuestions1["+i+"])' onmouseenter='choiceAudio(this)'> B) "+abcQuestions1[i].Image[2].slice(0,-4)+"<img src='"+abcQuestions1[i].Image[2]+"' height=90% style='margin:auto;'></div>";
        document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceC' onclick='checkAnswer(this, abcQuestions1["+i+"])' onmouseenter='choiceAudio(this)'> C) "+abcQuestions1[i].Image[3].slice(0,-4)+"<img src='"+abcQuestions1[i].Image[3]+"' height=90% style='margin:auto;'></div>";
        document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceD' onclick='checkAnswer(this, abcQuestions1["+i+"])' onmouseenter='choiceAudio(this)'> D) "+abcQuestions1[i].Image[4].slice(0,-4)+"<img src='"+abcQuestions1[i].Image[4]+"' height=90% style='margin:auto;'></div>";
    
        qCount++;
    }//if
    else if (qCount>=5 && qCount<10){
        if(qCount==5){
            done=[];
        }

        i = Math.floor(Math.random()* abcQuestions2.length);
        while(done.includes(i)){
            i = Math.floor(Math.random()* abcQuestions2.length);
        }//while

        done.push(i);

        document.getElementById("choicesDiv").innerHTML="";
        document.getElementById("choicesDiv").style="visibility: visible;";

        if(i==0){
            document.getElementById("choicesDiv").innerHTML="";
            document.getElementById("choicesDiv").style="visibility: visible;";
            document.getElementById("qContainer").innerHTML="<img src='"+abcQuestions2[i].Image[0]+"' id='"+abcQuestions2[i].ID+"' value="+i+" onclick='playAudio(null)'><h2 style='margin:8px;'>"+abcQuestions2[i].Question+"</h2>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceA' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[0])'> A) <img src='"+abcQuestions2[i].Image[1]+"' height=70% style='margin:auto;'></div>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceB' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[1])'> B) <img src='"+abcQuestions2[i].Image[1]+"' height=70% style='margin:auto;'></div>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceC' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[2])'> C) <img src='"+abcQuestions2[i].Image[1]+"' height=70% style='margin:auto;'></div>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceD' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[3])'> D) <img src='"+abcQuestions2[i].Image[1]+"' height=70% style='margin:auto;'></div>";
    
        }//if
        else{
            console.log(i);
            document.getElementById("qContainer").innerHTML="<img src='"+abcQuestions2[i].Image[0]+"' id='"+abcQuestions2[i].ID+"' value="+i+" onclick='playAudio(abcQuestions2["+i+"])' onload='setTimeout(playAudio(abcQuestions2["+i+"]),2000)' title='Play Audio' height=200px><h2 style='margin:8px;'>Listen and identify what letter is sounded.</h2>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceA' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[1])'> A) "+abcQuestions2[i].Image[1].slice(5,-4)+" <img src='"+abcQuestions2[i].Image[1]+"' height=70% style='margin:auto;'></div>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceB' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[2])'> B) "+abcQuestions2[i].Image[2].slice(5,-4)+" <img src='"+abcQuestions2[i].Image[2]+"' height=70% style='margin:auto;'></div>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceC' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[3])'> C) "+abcQuestions2[i].Image[3].slice(5,-4)+" <img src='"+abcQuestions2[i].Image[3]+"' height=70% style='margin:auto;'></div>";
            document.getElementById("choicesDiv").innerHTML+="<div class='choiceCard' id='choiceD' onclick='checkAnswer(this, abcQuestions2["+i+"])' onmouseenter='PlayChoice(abcQuestions2["+i+"].Aud[4])'> D) "+abcQuestions2[i].Image[4].slice(5,-4)+" <img src='"+abcQuestions2[i].Image[4]+"' height=70% style='margin:auto;'></div>";

        }//else
        qCount++;
    }//else if
    else{
        document.getElementById("dispScore").innerHTML='';
        document.getElementById("qContainer").innerHTML='<h1 id="alphaScore" data-val='+score+'>Your score is '+score+'</h1>';
        document.getElementById("choicesDiv").innerHTML='';
        
        var tempArr=[];
        var tempArrStr="";
        const d = new Date();
        
        if(JSON.parse(window.localStorage.getItem("alphaScore"))!=null){
            
            tempArr = [JSON.parse(window.localStorage.getItem("alphaScore"))];
        }
        else{
            var latest = 'Quiz: Alphabet | Time: '+d.getDate+'/'+(d.getMonth+1)+'/'+d.getFullYear+' | Score: '+score;
        
            tempArr=[latest];
        }
            //document.cookie='Quiz: Alphabet | Time: '+d.getDate+'/'+(d.getMonth+1)+'/'+d.getFullYear+' | Score: '+score;
            var latest = 'Quiz: Alphabet | Time: '+d.getDate+'/'+(d.getMonth+1)+'/'+d.getFullYear+' | Score: '+score;
        
            if(tempArr!=null){
                tempArr.push(latest);
            }
            else{
                tempArr=[latest];
            }
            
            tempArrStr = JSON.stringify(tempArr);

            localStorage.setItem("alphaScore",tempArrStr);
        
            console.log(localStorage.getItem("alphaScore"));
        
        
        
    }
    
}



