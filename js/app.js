var Questions = function(question){
	this.question = question
}

var cocktailQuestion = new Questions([
	"Do ye like yer drinks strong?", 
	"Do ye like it with a salty tang?",
	"Are ye a lubber who likes it bitter?",
	"Would ye like a bit of sweetness with yer poison?",
	"Are ye one for a fruity finish?", 
	"Do ye have scurvy?"
	]);

var currentQuestionIndex = 0;

var Ingredients = function(ingredients){
	this.ingredients = ingredients
}

var cocktailIngredients = new Ingredients([
	["Glug of Rum", "slug of Whisky", "Splash of Gin"],
	["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
	["Shake of bitters", "Splash of tonic", "Twist of lemon peel"],
	["Sugar cube", "Spoonful of honey", "Splash of cola"],
	["Slice of orange", "Dash of cassis", "Cherry on top"]
	]);

function createRandom(array){
	var randomize = array[Math.floor(Math.random() * array.length)];
	return randomize
}

function showQuestion(cocktailQuestion){
	var currentQuestion = cocktailQuestion.question[currentQuestionIndex];
	$(".question").html(currentQuestion);
}
showQuestion(cocktailQuestion);


var yeaClick = 0;
var nayClick = 0;

$(document).ready(function(){
	$("button").click(function(){
		currentQuestionIndex++
		$(".question").html("");
		if(currentQuestionIndex < cocktailQuestion.question.length){
			showQuestion(cocktailQuestion);
		};
	});

	$(".yea").click(function(){
		yeaClick++
		console.log("yeaClick" + yeaClick);
	});
	$(".nay").click(function(){
		nayClick++
		console.log("nayClick" + nayClick);
	});
})