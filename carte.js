window.onload=init;
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
		verifier(NumCarte){
			throw new Error('You must implement this method');
		  }
	}
	
//Classe Visa verifie si la carte est du type visa
class Visa extends Verificateur{
	constructor(NumCarte){
		super(NumCarte);
	}
	
verifier (value) {
	var result="";
	var value=this.NumCarte;
	if(value.length==15){
		var debut=value.slice(0,2);
		if(debut=="14" || debut=="15"){
			
			// takes the form field value and returns true on valid number
			function valid_credit_card(value) {
			// accept only digits, dashes or spaces
				if (/[^0-9-\s]+/.test(value)) return false;

			// The Luhn Algorithm. It's so pretty.
				var nCheck = 0, nDigit = 0, bEven = false;
				value = value.replace(/\D/g, "");

				for (var n = value.length - 1; n >= 0; n--) {
					var cDigit = value.charAt(n),
						nDigit = parseInt(cDigit, 10);

					if (bEven) {
						if ((nDigit *= 2) > 9) nDigit -= 9;
					}

					nCheck += nDigit;
					bEven = !bEven;
				}

				if((nCheck % 10) == 0){
					//alert("Valide");
					result=true;
					let mes="La carte est du type VISA";
					document.getElementById("message").value=mes;
				}else{
					//alert("invalide");
					result=false;
					let err="La carte est invalide";
					document.getElementById("message").value=err;
			}
		}
		var r=valid_credit_card(this.NumCarte);
		alert(result);
		}
	}
}
}

//Classe MasterCard verifie si la carte est du type MasterCard
class MasterCard extends Verificateur{
	constructor(NumCarte){
		super(NumCarte);
	}
verifier (value) {
		//console.log("Je suis un Master");
	var result="";
	var value=this.NumCarte;
	if(value.length==16){
		var debut=value.slice(0,2);
		if(debut=="41" || debut=="40"){
			
			// takes the form field value and returns true on valid number
			function valid_credit_card(value) {
			// accept only digits, dashes or spaces
				if (/[^0-9-\s]+/.test(value)) return false;

			// The Luhn Algorithm. It's so pretty.
				var nCheck = 0, nDigit = 0, bEven = false;
				value = value.replace(/\D/g, "");

				for (var n = value.length - 1; n >= 0; n--) {
					var cDigit = value.charAt(n),
						nDigit = parseInt(cDigit, 10);

					if (bEven) {
						if ((nDigit *= 2) > 9) nDigit -= 9;
					}

					nCheck += nDigit;
					bEven = !bEven;
				}

				if((nCheck % 10) == 0){
					//alert("Valide");
					result=true;
					let mes="La carte est du type MasterCard";
					document.getElementById("message").value=mes;
				}else{
					//alert("invalide");
					result=false;
					let err="La carte est invalide";
					document.getElementById("message").value=err;
			}
		}
		var r=valid_credit_card(this.NumCarte);
		alert(result);
		}
	}
}
}

//Classe AmericanExp verifie si la carte est du type AmericanExpress
class AmericanExp extends Verificateur{
	constructor(NumCarte){
		super(NumCarte);
	}
verifier () {
	//console.log("Je suis un American"+this.NumCarte);
	var result="";
	var value=this.NumCarte;
	if(value.length!=17){
	var debut=value.slice(0,2);
		if(debut!="39" || debut!="30"){
			
			// takes the form field value and returns true on valid number
			function valid_credit_card(value) {
			// accept only digits, dashes or spaces
				if (/[^0-9-\s]+/.test(value)) return false;

			// The Luhn Algorithm. It's so pretty.
				var nCheck = 0, nDigit = 0, bEven = false;
				value = value.replace(/\D/g, "");

				for (var n = value.length - 1; n >= 0; n--) {
					var cDigit = value.charAt(n),
						nDigit = parseInt(cDigit, 10);

					if (bEven) {
						if ((nDigit *= 2) > 9) nDigit -= 9;
					}

					nCheck += nDigit;
					bEven = !bEven;
				}

				if((nCheck % 10) == 0){
					//alert("Valide");
					result=true;
					let mes="La carte est du type American Express";
					document.getElementById("message").value=mes;
				}else{
					//alert("invalide");
					result=false;
					let err="La carte est invalide";
					document.getElementById("message").value=err;
			}
		}
		var r=valid_credit_card(this.NumCarte);
		alert(result);
		}
	}
	}
}

/*LA CLASSE PRINCIPALE*/
function init(){
	var n=document.getElementById('valid');
	n.onclick=Affiche;
}
function Affiche(){
	var num=recup();
	//let banq=new Banque("568985696");
	//let banq=new Visa("14485275742308327");
	var cart=recup();
	alert(cart);
	let banq=new Visa(cart);
	let banqM=new MasterCard(cart);
	let banqA=new AmericanExp(cart);
	banq.verifier();
	banqM.verifier();
	banqA.verifier();
}
function recup(){
	var credit=document.getElementById('entrer').value;
	return credit;
}

