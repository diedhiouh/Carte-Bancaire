//La Classe Banque
class Banque{
	constructor(NumCarte){
		this._Numcarte=NumCarte;
	}
	get NumCarte(){
		return this._Numcarte;
	}
	set NumCarte(n){
		this._Numcarte=n;
	}
}

//La Classe Verificateur qui verifie les cartes
class Verificateur extends Banque{
	constructor(NumCarte){
		super(NumCarte);
	}
		verifier(){
			throw new Error('You must implement this method');
		  }
	}
	
//Classe Visa verifie si la carte est du type visa
class Visa extends Verificateur{
	constructor(NumCarte){
		super(NumCarte);
	}
	verifier () {
		console.log("Je suis un Visa");
	}
}

//Classe MasterCard verifie si la carte est du type MasterCard
class MasterCard extends Verificateur{
	constructor(NumCarte){
		super(NumCarte);
	}
	verifier () {
		console.log("Je suis un Master");
		  }
}

//Classe AmericanExp verifie si la carte est du type AmericanExpress
class AmericanExp extends Verificateur{
	constructor(NumCarte){
		super(NumCarte);
	}
	verifier () {
		console.log("Je suis un American"+this.NumCarte);
	}
}

//LA CLASSE PRINCIPALE
let banq=new Banque("568985696");
banq=new Visa("8498989");
banq.verifier();