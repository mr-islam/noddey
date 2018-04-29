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
      console.log(`Very nice to meet you, ${answer}.`)
      resolve()
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
						case 'favorite':
						case 'tastiest':
							console.log('Noddey: My favorite food is lasagna, '+userName+'!');
							break;
						case 'hate':
						case 'dont':
						case "don't":
							console.log(`Noddey: I don't like ${answer} either!`);
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
				console.log('Noddey: The sport, not the vegetable!');
				break;
			case 'movie':
			case 'film':
			case 'films':
			case 'movies':
			case 'cinema':
				console.log(`Noddey: I love the Matrix! ${lastWord} is pretty good too`);
				break;
			default:
				console.log(`${lastWord} to you too :P`);
				break;

      	}
	}
	
	question2();
    })
  })
}

const main = async () => {
  //await question1()
  //await sleep(2000)
  await question2()
  rl.close()
}

main()