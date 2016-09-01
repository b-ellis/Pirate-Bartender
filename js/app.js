/* 1) fix the question/ingredient constructors
	2) define an array of user answers
	3) when user is done with answering, go through all answers and depending on each answer, decide whether u will use the corresponding ingredient object
	4) draw a random ingredient from the object
	5) construct a drink object from all ingredients u randomly chose  this logic should be inside the newDrink function for the Bartender
*/


var Question = function(question){
	this.question = question
}

var strongQuestion = new Question("Do ye like yer drinks strong?");
var saltyQuestion = new Question("Do ye like it with a salty tang?");
var bitterQuestion = new Question("Are ye a lubber who likes it bitter?");
var sweetQuestion = new Question("Would ye like a bit of sweetness with yer poison?");
var fruityQuestion = new Question("Are ye one for a fruity finish?");
var scurvyQuestion = new Question("Do ye have scurvy?");

var cocktailQuestion = [strongQuestion, saltyQuestion, bitterQuestion, sweetQuestion, fruityQuestion, scurvyQuestion];

var Pantry = function(pantryArray) {
	this.pantryArray = pantryArray;
}

var cocktailIngredients = new Pantry([
	["Glug of Rum", "slug of Whisky", "Splash of Gin"],
	["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
	["Shake of bitters", "Splash of tonic", "Twist of lemon peel"],
	["Sugar cube", "Spoonful of honey", "Splash of cola"],
	["Slice of orange", "Dash of cassis", "Cherry on top"],
	["Have an orange with ye drink"]
]);

var currentQuestionIndex = 0;

var userPreferences = [];

var Bartender = function(name) {
	this.name = name;
}

Bartender.prototype.createDrink = function() {
	for (var i = 0 ; i < userPreferences.length ; i++) {
		if (userPreferences[i] === 'yea') {
				var randomIngredient = createRandom(cocktailIngredients.pantryArray[i]);
				showIngredients(randomIngredient);
		}
	}
}

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

var bartender = new Bartender("Bradley");

$(document).ready(function(){

	showQuestion();

	$("button").on("click", function() {
		var answer = $(this).attr("class");
		userPreferences.push(answer);

		currentQuestionIndex++;
		$(".question").html("");
		if(currentQuestionIndex < cocktailQuestion.length) {
			showQuestion();
		}

		if(currentQuestionIndex === cocktailQuestion.length) {
			$(".questions").hide();
			displayDrink();
			bartender.createDrink();
			$(".another").show();
		}
	});

	$(".another").click(function(){
		haveAnother();
	});

});
