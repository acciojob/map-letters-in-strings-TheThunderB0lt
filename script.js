//your JS code here. If required.
function mapletters(word){
	const lettermap={};
	for(let i=0;i<word.length;i++)
		{
			const letter=word[i];
			if(!lettermap[letter]){
				lettermap[letter]=[i];
			}
			else{
				lettermap[letter].push(i);
			}
		}
	return lettermap;
}
console.log(mapletters("dodo"));