var images = ['./foti.JPG', './ajay.JPG', './omar.JPG'];
var email = ['foti.hatzis+therapist@gmail.com', 'foti.hatzis+clergysecretary@gmail.com ', 'foti.hatzis+counselor@gmail.com'];
var summaries = [
    "Speak to a Therapist",
    "Speak to a Clergy",
    "Speak to a Counselor"
];

function handleclick(){
    console.log('here');
    // If the idx is equal to num questions show results
    if(idx >= questions.length)
    {
        // Hide the questions div
        $("#questions").hide();
        // Show the results div
        $("#results").show();
        // Call our handleResults
        handleResults();
    }
    // else {
    //     var currentId = 'answer' + idx;
    //     var nextId = 'answer'+ (idx+1);
    //     // Hide the question shown
    //     $("#"+currentId).hide();
    //     // Show the next question
    //     $("#"+nextId).show();
    // }
    else {
        $("#question").html(questions[idx]);
        $("#answer1").html(answers1[idx]);
        $("#answer2").html(answers2[idx]);
        $("#answer3").html(answers3[idx]);
    }
}

function handleResults() {
    // Get score first, var score;
    var score = getScore();

    var image =getImage(score);
    var email=getEmail(score);
    var summary=getSummary(score);
    $("#image").attr('src',image);
    $("#email").html(email);
    $("#summary").html(summary);
}

function getScore(){
    //output will equal therapist, counselor, or clergy
    
    output = output || '';
    if(output === "therapist") {
        return 0;
        
    }
    if(output === "clergy") {
        return 1;
    }
    if(output === "counselor") {
        return 2;
    } 
}

function getImage(score){
 var Img=images[score];
 return Img;
}

function getEmail(score){
 var Email=email[score];
 return Email;
}

function getSummary(score){
 var Summary =summaries[score];
 return Summary;
}