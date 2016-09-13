var $ = require('jquery');
class Question {
	constructor(question) {
		this.question = question
	}
}

var strongQuestion = new Question("Do ye like yer drinks strong?");
var saltyQuestion = new Question("Do ye like it with a salty tang?");
var bitterQuestion = new Question("Are ye a lubber who likes it bitter?");
var sweetQuestion = new Question("Would ye like a bit of sweetness with yer poison?");
var fruityQuestion = new Question("Are ye one for a fruity finish?");
var scurvyQuestion = new Question("Do ye have scurvy?");

var cocktailQuestion = [strongQuestion, saltyQuestion, bitterQuestion, sweetQuestion, fruityQuestion, scurvyQuestion];

class Pantry {
  constructor(pantryArray) {
    this.pantryArray = pantryArray;
  }
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

class Bartender {
	constructor(name) {
		this.name = name
	}

	createDrink() {
		for (var i = 0 ; i < userPreferences.length ; i++) {
			if (userPreferences[i] === 'yea') {												//marks yea click
				var randomIngredient = createRandom(cocktailIngredients.pantryArray[i]);	//takes the cocktailIngredients array and takes a random ingredient
				showIngredients(randomIngredient);											//shows ingredients for the question with a yea click
			}
		}
	}	
}

function showQuestion() {
	var currentQuestion = cocktailQuestion[currentQuestionIndex].question;
	$(".question").html(currentQuestion);
}

function createRandom(array) {
	var randomize = array[Math.floor(Math.random() * array.length)];						//give a random position within an array
	return randomize
}

function showIngredients(string) {
	$(".drink-ingredients").append("<li>" +string+ "</li>")
}

function drinkName() {
	var adjective = ["Salty", "Drunken", "Golden", "Dead",];
	var noun = ["Dog", "Scallywag", "Clipper", "Gibbet", "Jackstaff", "Land-Lubber"];		//spits out random drink name
	var randomAdjective = createRandom(adjective);
	var randomNoun = createRandom(noun);
	var cocktailName = randomAdjective + " " + randomNoun;
	return cocktailName;
}

function displayDrink() {
	var drink = drinkName();
	$(".drink-mix").html("Here's a " + "<span class='drink-name'>\"" + drink + "\"</span>" + " for Ye!");
};

function haveAnother() {
	currentQuestionIndex = 0;
	userPreferences = [];
	$(".drink-mix").empty();										//resets questions and gets rid of
	$(".drink-ingredients").empty();								//drink name and drink ingredients
	$(".another").hide();
	showQuestion();													
	$(".questions-container").show();
}

var bartender = new Bartender("BlackBeard");

$(document).ready(function() {

	showQuestion();

	$("button").on("click", function() {			
		var answer = $(this).attr("class");							//records which button is clicked
		userPreferences.push(answer);

		currentQuestionIndex++;
		$(".question").html("");
		if(currentQuestionIndex < cocktailQuestion.length) { 		//displays question 
			showQuestion();
		}

		if(currentQuestionIndex === cocktailQuestion.length) {		//at the end of the question array
			$(".questions-container").hide();						//will display your drink and ask for another
			$(".drink").show();
			displayDrink();
			bartender.createDrink();
			$(".another").show();
		}
	});

	$(".another").click(function() {									//restarts the questions
		haveAnother();
	});

});
