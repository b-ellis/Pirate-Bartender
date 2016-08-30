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
	["Slice of orange", "Dash of cassis", "Cherry on top"],
	["Have an orange with ye drink"]
	]);

console.log(cocktailIngredients.ingredients[3][1])

function showQuestion(cocktailQuestion){
	var currentQuestion = cocktailQuestion.question[currentQuestionIndex];
	$(".question").html(currentQuestion);
}
showQuestion(cocktailQuestion);

function createRandom(array){
	var randomize = array[Math.floor(Math.random() * array.length)];
	return randomize
}

function drinkName(){
	var adjective = ["Salty", "Drunken", "Golden", "Dead",];
	var noun = ["Dog", "Scallywag", "Clipper", "Gibbet", "Jackstaff", "Land-Lubber"];
	var randomAdjective = createRandom(adjective);
	var randomNoun = createRandom(noun);
	var cocktailName = randomAdjective + " " + randomNoun;
	return cocktailName;
}

function displayDrink(){
	var drink = drinkName();
	$(".drink-mix").html("Here's a " + "<span class='drink-name'>\"" + drink + "\"</span>" + " for Ye!");
};

function haveAnother(){
	$(".another").click(function(){
		currentQuestionIndex = 0;
		showQuestion(cocktailQuestion);
	});
}


var yeaClick = 0;
var nayClick = 0;

$(document).ready(function(){
	$("button").click(function(){
		currentQuestionIndex++
		$(".question").html("");
		if(currentQuestionIndex < cocktailQuestion.question.length){
			showQuestion(cocktailQuestion);
		};
		if(currentQuestionIndex === cocktailQuestion.question.length){
			$(".questions").hide();
			displayDrink();
			$(".another").show();
		};
	});

	$(".yea").click(function(event){
		yeaClick++
		console.log("yeaClick" + yeaClick);
	});
	$(".nay").click(function(){
		nayClick++
		console.log("nayClick" + nayClick);
	});
})