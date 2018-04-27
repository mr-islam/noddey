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
      console.log(`Very nice to meet you, ${answer}.`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    
    rl.question(`\nTalk to Noddy: `, (answer) => {
      let answerArray = answer.split(" ");
      for (var i = answerArray.length - 1; i >= 0; i--) {
      	switch(answerArray[i]) { //favorite finder
      		case 'food':
      		case 'dish':
      		case 'meal':
      		case 'eat':
      			for (var j = answerArray.length - 1; j >= 0; j--) {
					switch (answerArray[j]) {
						case 'favorite':
						case 'tastiest':
							console.log('Noddy: My favorite food is lasagna!');
							break;
						case 'hate':
						case 'dont':
						case "don't":
							console.log(`Noddy: I don't like ${answer} either!`);
							break;
				break;
					}	
				}
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