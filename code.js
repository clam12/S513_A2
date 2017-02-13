//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
	txt = txt.toLowerCase();
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: palindromes(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: mostFrequentWords(txt),
    };
}

function nChars(txt) {
	var chars = txt.length;
	return chars;
}

function nWords(txt) {
	var newTxt = txt.replace(/\W+/g,' ');
	var words = newTxt.split(" ");
	var counter = words.length;
	
	for (i=0; i < words.length; i++) {
		if(words[i] == "") {
			counter--;
		}
	}
	
	return counter;
}

function nLines(txt) {
	if(txt == "") {
		return 0;
	}
	else {
		var lines = txt.split(/\r\n|\r|\n/).length;
		return lines;
	}
}

function nNonEmptyLines(txt) {
	
	if(txt == "") {
		return 0;
	}
	else {
		var lines = txt.split(/\r\n|\r|\n/);
		var nonEmptyLines = lines.length;
		for (i=0; i < lines.length; i++) {
			if(/\S/.test(lines[i])) {
				nonEmptyLines = nonEmptyLines;
			} else {
				nonEmptyLines--;
			}
		}
		return nonEmptyLines;
	}
}

function averageWordLength(txt) {
	var newTxt = txt.replace(/\W+/g,' ');
	var words = newTxt.split(" ");
	var avg = 0;
	var counter = 0;
	
	for (i=0; i < words.length; i++) {
		if(words[i] != "") {
			avg += words[i].length;
			counter++;
		}
	}
	
	var avgLength = avg/counter;
	return avgLength;
}

function maxLineLength (txt) {
	var lines = txt.split(/\n/);
	var maxLength = 0;
	for (i=0; i < lines.length; i++) {
		if(lines[i].length > maxLength) {
			maxLength = lines[i].length;
		}
	}
	
	return maxLength;
}

function palindromes (txt) {
	var newTxt = txt.replace(/\W+/g,' ');
	var words = newTxt.split(" ");
	var word;
	var checkPalindrome;
	var palindrome = [];

	for (i=0; i < words.length; i++) {
		if(words[i] != "" && words[i].length > 2) {
			word = words[i]
			checkPalindrome = word.split("").reverse().join("");
			if(word === checkPalindrome) {
				palindrome.push(word);
			}
		}
	}
	
	return palindrome;
}

function longestWords (txt) {
	var newTxt = txt.replace(/\W+/g,' ');
	var words = newTxt.split(" ");
	var longestWords = [];
	var wordCounter = 0;
	var wordExist = false;
	
	for (i=0; i < words.length; i++) {
		if(words[i] != "") {
			for(j=0; j < longestWords.length; j++) {
				if(words[i] == longestWords[j]) {
					wordExist = true;
					j = longestWords.length;
				}
			}
			if(wordCounter < 10 && wordExist == false) {
				longestWords.push(words[i]);
				wordCounter++;
				longestWords.sort();
				longestWords.sort(function(a, b){return b.length-a.length});
			} else if(wordCounter = 10 && wordExist == false) {
				if(words[i].length > longestWords[9].length) {
					longestWords[9] = words[i];
					longestWords.sort();
					longestWords.sort(function(a, b){return b.length-a.length});
				}
			}
			
		}
		wordExist = false;
	}
	
	return longestWords.slice(0,10);
}

function mostFrequentWords (txt) {
	var frequentWords = [];
    var entries = {};
    
	var newTxt = txt.replace(/\W+/g,' ');
	var words = newTxt.split(" ");
	var word;
	
    for (i = 0; i < words.length; i++) {
		if(words[i] != "") {
			word = words[i];
			entries[word] || (entries[word] = { word, count:0 }, frequentWords.push(entries[word]));
			entries[word].count += 1;
		}
	}


    frequentWords.sort(function(a, b) {
		return b.count-a.count})  


    return frequentWords.slice(0,10);
	
	
}
