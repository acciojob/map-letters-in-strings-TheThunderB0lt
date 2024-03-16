//your JS code here. If required.
function mapletters (word) {
	const map = {};
	
	for (let i = 0; i < word.length; i++) {
			const letter = word[i];
			if(!map[letter]) {
				map[letter] = [i];
			} else {
				map[letter].push(i);
			}
		}

	return map;
}

console.log(mapletters("dodo"));