/* global $ */
/* global Console */
/* global answers1 */
var questions= ["Do you feel that your emotions is wrong?", "Will my sexuality affect my future?", "What will my parents think about my decision?"];
var answers1=[
    "If you feel like you understand and accept how you’re feeling, then be happy and celebrate the fact that you have come to terms with who you are. If you’re not completely up to par with how you feel, it’s fine. Don’t try and rush into it head on. Everything takes time, even if you feel like everything has to be done now.",
    "God made everyone a different person for a reason, there is no one exactly like you. If you feel this way it should make you feel special, or at least grateful since you're on of many just like you who are God's great creation.",
    "What type of emotions are you confused about? Why is that? These emotions may include feeling worried, surprised or angry at yourself, but they are the pathways to your new world once you understand them. Your life wasn’t given to you with a plan; you discover things as you grow older. So live your life as you want it, but make sure that you are doing it with good intentions."
];
var answers2=[
    "Your sexuality won’t affect your future as much as you are probably imagining it, mainly because the world will be changing as well, so don’t worry about it. Your future is anything you want it to be, so don’t limit yourself just because you have a preference for a different gender than what is considered normal at the moment (I promise it’s going to change).",
    "Don’t worry about your future because God made you in his creation/image. Just believe you will do well in life and ignore all the negative comments.",
    "Your sexuality does not have to do anything with your future only on who to date. How society is changing you shouldn’t worry too much and focus on being happy and your career."
];
var answers3=[
    "Your parents love you and don’t wish you any harm. So they accept you. Congratulations, you must have had a good relationship with them before you decided to come out to them. Look for others that are still struggling with that and try and help them get to the same place you’re at with their parents.",
    "Your parents may worry spiritually about what may be the consequences for your change or acceptance of preferences. Despite their religion, if they really care about you, then they will find a way to accept who you are. They might try and convince you that you are mistaken, but if you know that you are set on your sexuality, then it is up to you to show them that that is who you really are. It is not a prank you want to pull on them, but the truth.",
    "Did your decisions affect your relationship with someone important? Did they misinform your parents and now they won’t even look at you? They may disagree or say something but at the end of the day parents always want the last word. Use that opportunity to talk to them."];
var ansopp=["A","B", "C"];  
var idx =0;
var allDone = false;
var output= "";

$("#nextQ").click(handleclick);

$("#answer1").click(function(){
    ansopp[idx]= "A";
    idx= idx + 1;
    getOutput();
});

$("#answer2").click(function(){
    ansopp[idx]= "B";
    idx= idx + 1;
    getOutput();
});

$("#answer3").click(function(){
    ansopp[idx]= "C";
    idx= idx + 1;
    getOutput();
});

var numA = 0;
var numB = 0;
var numC = 0;

function getOutput() {
    for(var ans=0 ; ans<=questions.length ; ans=ans + 1 ) {
        if (ansopp[ans] === "A"){
            numA= numA + 1;
        }
    
        if (ansopp[ans] === "B"){
            numB= numB + 1;
        }
        
        if (ansopp[ans] === "C"){
            numC= numC + 1;
        }
    }

    if((numA>=numB && numA>=numC)) {
        output="therapist";
    } else if((numB>=numA && numB>=numC)) {
        output = "counselor";
    } else if((numC>=numA && numC>=numB)) {
        output = "clergy";
    }
}