function makeid(l) {
  // write your code here
	const lookUp = "abcdefghijklmnop1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";	

	let password = "";

	for(let i=1; i<=l; i++){
		let randomIndex = Math.floor(Math.random()*lookUp.length);
		let randomCharacter = lookUp.charAt(randomIndex);
		password += randomCharacter;
	}
	return password;

	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
