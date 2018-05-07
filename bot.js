'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomChoice =  Math.floor((Math.random() * 10) + 1); 				
//used in switch at line ~84, defined here so only changes on startup

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Hi, my name is Noddy… whats ur name? ', (answer) => {
	  var userName = answer;
      console.log(`Very nice to meet you, ${answer}. Let's talk: `)
      resolve();
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    
    rl.question(`\nYou: `, (answer) => {
      let answerArray = answer.split(" ");
      for (var i = answerArray.length - 1; i >= 0; i--) {
      	let lastWord = '';
		lastWord = answerArray[answerArray.length - 1];

      	switch(answerArray[i]) { //favorite finder
      		case 'food':
      		case 'dish':
      		case 'meal':
      		case 'eat':
				console.log('Noddey: My favorite food is lasagna!');
				question2();
				break;
			case 'football':
			case 'soccer':
			case 'basketball':
			case 'volleyball':
			case 'cricket':
			case 'badminton':
			case 'hockey':
			case 'tennis':
				console.log(`Noddey: I don't really like ${answerArray[i]}, I'm a squash person`);
				question2();
				break;
			case 'movie':
			case 'film':
			case 'films':
			case 'movies':
			case 'cinema':
				console.log(`Noddey: I love the Matrix!`);
				question2();
				break;
			case 'color':
			case 'red':
			case 'blue':
			case 'green':
			case 'yellow':
			case 'purple':
			case 'magenta':
			case 'white':
			case 'black':
				console.log(`Noddey: My favorite color is cyan! But ${answerArray[i]} is nice!`);
				question2();
				break;		
			case 'hate':
			case 'dont':
			case "don't":
				console.log(`Noddey: I don't like ${lastWord} either!`);
				question2();
				break;		
				
			default:
				if (i == 0) { 	
				/* if i==0, that means it has finished parsing all the other words;
				ie. this will only be called when no other word matches any entry from above
				otherwise, it would run one of the above outputs, and if no match, then it ran
				this for each word. */

					switch (randomChoice) {
						case 1:
							console.log(`Noddey: ${lastWord} to you too :P`);
							randomChoice += 1;
							break;
						case 2:
							console.log(`Noddey: What do you mean by ${lastWord}?`);
							randomChoice += 1;
							break;
						case 3:
							console.log(`Noddey: "${lastWord}"? Sounds cool!`);
							randomChoice += 1;
							break;
						case 4:
							console.log(`Noddey: Can you teach me about ${lastWord}, please?`);
							randomChoice += 1;
							break;
						case 5:
							console.log(`Noddey: Do you think about ${lastWord} a lot?`);
							randomChoice += 1;
							break;
						case 6:
							console.log(`Noddey: Very ${lastWord}, or super ${lastWord}?`);
							randomChoice += 1;
							break;
						case 7:
							console.log(`Noddey: Would ${lastWord} be good on pizza?`);
							randomChoice += 1;
							break;
						case 8:
							console.log(`Noddey: Let's discuss ${lastWord} over dinner.`);
							randomChoice += 1;
							break;
						case 9:
							console.log(`Noddey: My mom told me not to talk about ${lastWord}……`);
							randomChoice += 1;
							break;
						case 10:
							console.log(`Noddey: ${lastWord}? Sounds funny lol`); 
							randomChoice = 1;
							break;
						}
				} 
      	}
	}
	
	question2(); //serves as a re-loop for switch (randomChoice)
    })
  })
}

const intro = async () => {
  await question1();
  await sleep(1000);
  talk();
}

const talk = async () => {
  await question2();
  rl.close();
}

intro();
