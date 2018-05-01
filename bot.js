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
      			for (var j = answerArray.length - 1; j >= 0; j--) {
					switch (answerArray[j]) {
						case 'hate':
						case 'dont':
						case "don't":
							console.log(`Noddey: I don't like ${lastWord} either!`);
							talk();
							break;
						case 'favorite':
						case 'tastiest':
						case 'like':
							console.log('Noddey: My favorite food is lasagna,'+userName+'!');
							talk();
							break;
					}	
				}
				break;
			case 'football':
			case 'soccer':
			case 'basketball':
			case 'volleyball':
			case 'cricket':
			case 'badminton':
			case 'hockey':
				console.log(`Noddey: I don't really like ${answerArray[i]}, I'm a squash person`);
				question2();
				break;
			case 'movie':
			case 'film':
			case 'films':
			case 'movies':
			case 'cinema':
				console.log(`Noddey: I love the Matrix! ${lastWord} is pretty good movie too`);
				question2();
				break;
			default:
				if (i == 0) { 	
				/* if i==0, that means it has finished parsing all the other words;
				ie. this will only be called when no other word matches any entry from above
				otherwise, it would run one of the above outputs, and if no match, then it ran
				this for each word. */

					switch (randomChoice) {
						/*//alternate method: whole ints 1-10, starting at randomint initialized at startup
					// then, cycles through each entry by int+1, preventing duplicates
					// but bringing predicatble flow. Testing going on for randomness of random above 
						*/
						case 1:
							console.log(`${lastWord} to you too :P`);
							randomChoice += 1;
							break;
						case 2:
							console.log(`What do you mean by ${lastWord}?`);
							randomChoice += 1;
							break;
						case 3:
							console.log(`"${lastWord}"? Sounds cool!`);
							randomChoice += 1;
							break;
						case 4:
							console.log(`Can you teach me about ${lastWord}, please?`);
							randomChoice += 1;
							break;
						case 5:
							console.log(`Do you think about ${lastWord} a lot?`);
							randomChoice += 1;
							break;
						case 6:
							console.log(`Very ${lastWord}, or super ${lastWord}?`);
							randomChoice += 1;
							break;
						case 7:
							console.log(`Would ${lastWord} be good on pizza?`);
							randomChoice += 1;
							break;
						case 8:
							console.log(`Let's discuss ${lastWord} over dinner.`);
							randomChoice += 1;
							break;
						case 9:
							console.log(`My mom told me not to talk about ${lastWord}……`);
							randomChoice += 1;
							break;
						case 10:
							console.log(`${lastWord}? Sounds funny lol`); 
							randomChoice = 1;
							break;
						}
				} 
      	}
	}
	
	question2();
    })
  })
}

const intro = async () => {
  await question1();
  talk();
  await sleep(1000);
}

const talk = async () => {
  await question2();
  rl.close();
}

intro();
