'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
				console.log(`Noddey: I don't really like ${answerArray[i]}, I'm a squash person—`);
				console.log('Noddey: The sport, not the vegetable!');
				talk();
				break;
			case 'movie':
			case 'film':
			case 'films':
			case 'movies':
			case 'cinema':
				console.log(`Noddey: I love the Matrix! ${lastWord} is pretty good movie too`);
				talk();
				break;
			default:
				let randomChoice = Math.random();
				if (i == 0) { 	// if i==0, that means it has finished parsing all the other words;
								// ie. this will only be called when no other word matches any entry from above
								// otherwise, it would run one of the above outputs, and if no match, then it ran
								// this for each word. 
					if (randomChoice < 0.1) {
						console.log(`${lastWord} to you too :P`);
					} else if (randomChoice < 0.2) {
						console.log(`What do you mean by ${lastWord}?`);
					} else if (randomChoice < 0.3) {
						console.log(`"${lastWord}"? Sounds cool!`);
					} else if (randomChoice < 0.5) {
						console.log(`Can you teach me about ${lastWord}, please?`);
					} else if (randomChoice < 0.6) {
						console.log(`What does ${lastWord} mean?`);
					} else if (randomChoice < 0.7) {
						console.log(`Very ${lastWord}, or super ${lastWord}?`);
					} else if (randomChoice < 0.8) {
						console.log(`Would ${lastWord} be good on pizza?`);
					} else if (randomChoice < 0.8) {
						console.log(`Let's discuss ${lastWord} over dinner.`);
					} else if (randomChoice < 0.9) {
						console.log(`My mom told me not to talk about ${lastWord}……`);
					} else {
						console.log(`${lastWord}? Sounds funny lol`);
					}
				} //alternate method: whole ints 1-10, starting at randomint initialized at startup
					// then, cycles through each entry by int+1, preventing duplicates
					// but bringing predicatble flow. Testing going on for randomness of random above
      	}
	}
	
	question2();
    })
  })
}

const intro = async () => {
  await question1();
  talk();
}

const talk = async () => {
  await sleep(1000);
  await question2();
  rl.close();
}

intro();
