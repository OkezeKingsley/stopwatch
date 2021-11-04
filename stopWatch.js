let hrs = document.getElementById('hour');

let mins = document.getElementById('minute');

let secs = document.getElementById('second');


let plays = document.getElementById('play');

let pauses = document.getElementById('pause');

let resets = document.getElementById('reset');


//initializing the timer count function 

function count(){

	++secs.innerText;

	if(secs.innerText == 60){

	secs.innerText = 0;

	++mins.innerText;

	
	if(mins.innerText == 60){

	mins.innerText = 0;

	++hrs.innerText
	
		}

	}

}



//initialising the function that makes the app talk

function textVoice(){
	
	let speech = new SpeechSynthesisUtterance();

	speech.lang ='en-US';

	speech.text = 'Your count is' + ' ' + hrs.innerText + ' ' + 'hours' + ' ' + mins.innerText + ' ' + 'minute' + ' ' + secs.innerText + ' ' + 'second';
	speech.volume = 10;
	speech.rate = 1;
	speech.pitch = 2;

	window.speechSynthesis.speak(speech);
	
}


//function that plays the timer

function play(){

 interval = setInterval(count, 1000)

 hrs.style.borderColor = 'red';
 mins.style.borderColor = 'yellow';
 secs.style.borderColor = 'blue';

//this disable the play button when it is activated

 plays.disabled = true;

 }

let interval;


//function that pause the timer

function pause(){

clearInterval(interval)

hrs.style.borderColor = 'white';
mins.style.borderColor = 'white';
secs.style.borderColor = 'white';

//calling the textVoice function

textVoice()

alert('Your count is' + ' ' + hrs.innerText + ' ' + 'hours' + ' ' + mins.innerText + ' ' + 'minute' + ' ' + secs.innerText + ' ' + 'second');


}


//function that resets the timer

function reset(){

	clearInterval(interval)

	secs.innerText = 0;
	mins.innerText = 0;
	hrs.innerText = 0;

	hrs.style.borderColor = 'red';
    mins.style.borderColor = 'yellow';
    secs.style.borderColor = 'blue';

//this enables the play button when it is disabled

    plays.disabled = false;

  }




