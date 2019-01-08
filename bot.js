'use strict'

const readline = require('readline');
const chalk = require('chalk');

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
		var userName = answer
		if (userName == '') {
			console.log(`Very nice to meet you, mystery person. Let's talk: `)
		} else {
			console.log(`Very nice to meet you, ${userName}. Let's talk: `)
		}
		resolve();
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    
    rl.question(chalk.cyan(`\nYou: `), (answer) => {
      let answerArray = answer.split(" ");
      for (var i = 0; i <= answerArray.length; i++) {
      	let lastWord = '';
		lastWord = answerArray[answerArray.length - 1];

		switch(answerArray[i]) { //favorite finder
			case '':
				console.log(chalk.blue('Noddey: ')+ 'Say something!');
				break;
			case 'food':
			case 'dish':
			case 'meal':
			case 'eat':
			case 'eating':
			case 'dinner':
			case 'lunch':
			case 'breakfast':
				console.log(chalk.blue('Noddey: ')+ 'My favorite food is lasagna!');
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
			case 'pingpong':
			case 'pool':
			case 'swimming':
			case 'sports':
			case 'sport':
				console.log(chalk.blue('Noddey: ')+`I don't really like ${answerArray[i]}, I'm a squash person`);
				question2();
				break;
			case 'movie':
			case 'film':
			case 'films':
			case 'movies':
			case 'cinema':
			case 'theater':
			case 'theatre':
				console.log(chalk.blue('Noddey: ')+`I love the Matrix!`);
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
				console.log(chalk.blue('Noddey: ')+`My favorite color is cyan! But ${answerArray[i]} is nice!`);
				question2();
				break;	
			case 'happy':
			case 'sad':
			case 'excited':
			case 'depressed':
			case 'anxious':
			case 'lonely':
			case 'grumpy':
				console.log(chalk.blue('Noddey: ')+`I'm feeling melancholic…… :|`);
				question2();
				break;	
			case 'reading':
			case 'dancing':
			case 'playing':
			case 'watching':
			case 'sleeping':
			case 'hobby':
			case 'drawing':
			case 'gaming':
				console.log(chalk.blue('Noddey: ')+`My hobby is to sleep :D`);
				question2();
				break;	
			case 'hate':
			case 'dont':
			case "don't":
			case 'dislike':
				console.log(chalk.blue('Noddey: ')+`I don't like ${lastWord} either!`);
				question2();
				break;
			case 'love':
			case 'adore':
			case 'favorite':
			case 'like':
				console.log(chalk.blue('Noddey: ')+"I love talking to you!")	
				question2();
				break;
			default:
				if (i == answerArray.length - 1) { 	
				/* if i==0, that means it has finished parsing all the other words;
				ie. this will only be called when no other word matches any entry from above
				otherwise, it would run one of the above outputs, and if no match, then it ran
				this for that statement */

					switch (randomChoice) {
						/* this is called 'random' choice but it is actually cycling through it
						so that the user really won't ever get a repeated response till 10 goes*/
						case 1:
							console.log(chalk.blue('Noddey: ')+`${lastWord} to you too :P`);
							randomChoice += 1;
							break;
						case 2:
							console.log(chalk.blue('Noddey: ')+`What do you mean by ${lastWord}?`);
							randomChoice += 1;
							break;
						case 3:
							console.log(chalk.blue('Noddey: ')+`${lastWord}? Sounds cool!`);
							randomChoice += 1;
							break;
						case 4:
							console.log(chalk.blue('Noddey: ')+`Can you teach me about ${lastWord}, please?`);
							randomChoice += 1;
							break;
						case 5:
							console.log(chalk.blue('Noddey: ')+`Do you think about ${lastWord} a lot?`);
							randomChoice += 1;
							break;
						case 6:
							console.log(chalk.blue('Noddey: ')+`Very ${lastWord}, or super ${lastWord}?`);
							randomChoice += 1;
							break;
						case 7:
							console.log(chalk.blue('Noddey: ')+`Would ${lastWord} be good on pizza?`);
							randomChoice += 1;
							break;
						case 8:
							console.log(chalk.blue('Noddey: ')+`Let's talk more about ${lastWord}`);
							randomChoice += 1;
							break;
						case 9:
							console.log(chalk.blue('Noddey: ')+`My mom told me not to talk about ${lastWord}……`);
							randomChoice += 1;
							break;
						case 10:
							console.log(chalk.blue('Noddey: ')+`${lastWord}? Sounds funny lol`); 
							randomChoice = 1;
							break;
						}
				} 
      	}
	}
	
	question2(); //serves as a re-loop for default block only since
				 //other convo paths have their own `question2()` call
    })
  })
}

var favoriteThing = null;

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
