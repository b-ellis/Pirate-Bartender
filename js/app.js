/* 1) fix the question/ingredient constructors
	2) define an array of user answers
	3) when user is done with answering, go through all answers and depending on each answer, decide whether u will use the corresponding ingredient object
	4) draw a random ingredient from the object
	5) construct a drink object from all ingredients u randomly chose  this logic should be inside the newDrink function for the Bartender
*/


var Questions = function(question){
	this.question = question
}

var strongQuestion = new Questions("Do ye like yer drinks strong?");
var saltyQuestion = new Questions("Do ye like it with a salty tang?");
var bitterQuestion = new Questions("Are ye a lubber who likes it bitter?");
var sweetQuestion = new Questions("Would ye like a bit of sweetness with yer poison?");
var fruityQuestion = new Questions("Are ye one for a fruity finish?");
var scurvyQuestion = new Questions("Do ye have scurvy?");
var cocktailQuestion = [strongQuestion, saltyQuestion, bitterQuestion, sweetQuestion, fruityQuestion, scurvyQuestion];

var Pantry = function(first, second, third, fourth, fifth, sixth){
	this.first = first,
	this.second = second,
	this.third = third,
	this.fourth = fourth,
	this.fifth = fifth,
	this.sixth = sixth
}

var cocktailIngredients = new Pantry(
	["Glug of Rum", "slug of Whisky", "Splash of Gin"], 
	["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"], 
	["Shake of bitters", "Splash of tonic", "Twist of lemon peel"], 
	["Sugar cube", "Spoonful of honey", "Splash of cola"], 
	["Slice of orange", "Dash of cassis", "Cherry on top"], 
	["Have an orange with ye drink"]
);

var currentQuestionIndex = 0;

var userPreferences = {
	first: "",
	second: "",
	third: "",
	fourth: "",
	fifth: "",
	sixth: "",
}

var Bartender = function(){}

Bartender.prototype.createDrink = function(){
	var yea = $(".yea").on("click");
	if(strongQuestion.question = yea){
		userPreferences.first = cocktailIngredients.first;
		var randomStrong = createRandom(userPreferences.first);
		showIngredients(randomStrong);
	};
	if(saltyQuestion = yea){
		userPreferences.second = cocktailIngredients.second;
		var randomSalty = createRandom(userPreferences.second);
		showIngredients(randomSalty);
	};
	if(bitterQuestion = yea){
		userPreferences.third = cocktailIngredients.third;
		var randomBitter = createRandom(userPreferences.third);
		showIngredients(randomBitter);
	};
	if(sweetQuestion = yea){
		userPreferences.fourth = cocktailIngredients.fourth;
		var randomSweet = createRandom(userPreferences.fourth);
		showIngredients(randomSweet);
	};
	if(fruityQuestion = yea){
		userPreferences.fifth = cocktailIngredients.fifth;
		var randomFruity = createRandom(userPreferences.fifth);
		showIngredients(randomFruity);
	};
	if(scurvyQuestion = yea){
		userPreferences.sixth = cocktailIngredients.sixth;
		var randomScurvy = createRandom(userPreferences.sixth);
		showIngredients(randomScurvy);
	};
};

function showQuestion(){
	var currentQuestion = cocktailQuestion[currentQuestionIndex].question;
	$(".question").html(currentQuestion);
}

function createRandom(array){
	var randomize = array[Math.floor(Math.random() * array.length)];
	return randomize
}

function showIngredients(string){
	$(".drink-ingredients").append("<li>" +string+ "</li>")
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
	currentQuestionIndex = 0;
	$(".drink").remove();
	showQuestion();
	$(".questions").show();
}

$(document).ready(function(){
	
	showQuestion();

	$("button").on("click", function(){
		currentQuestionIndex++
		$(".question").html("");
		if(currentQuestionIndex < cocktailQuestion.length){
			showQuestion();
		};
		if(currentQuestionIndex === cocktailQuestion.length){
			$(".questions").hide();
			displayDrink();
			Bartender.prototype.createDrink();
			$(".another").show();
		};
	});
	$(".another").click(function(){
		haveAnother();
	});
})