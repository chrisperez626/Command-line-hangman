var Letter = function(letter){
	this.letter = letter;
	this.guessed = false;

	this.findGuessed = function(){
		if(this.letter = this.guessed){
			return this.letter;
		}

		if(this.letter = !this.guessed){
			return "_";
		}
	};

	this.changeGuess = function(character){
		if(character === this.letter){
			return this.guessed = true;
		}
	};
}