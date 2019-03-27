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
		if(debut=="40" || debut=="41"){
			
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
				
				return (nCheck % 10) == 0;
		}
		var r=valid_credit_card(this.NumCarte);
		
		//alert(result);
		}
	}
	if(r){
		alert("valide");
		result=true;
	}else{
		result=false;
	}
return result; 
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
		if(debut=="51" || debut=="52" || debut=="53" || debut=="54" || debut=="55"){
			
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

				return (nCheck % 10) == 0;
				}
		var m=valid_credit_card(this.NumCarte);
		//alert(result);
		}
		if(m){
			//alert("valide");
			result=true;
		}else{
			result=false;
		}
		}
		
return result; 
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
	if(value.length==17){
	var debut=value.slice(0,2);
		if(debut=="34" || debut=="37"){
			
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

				return (nCheck % 10) == 0;
		}
		var r=valid_credit_card(this.NumCarte);
		//alert(result);
		}
	}
		if(r){
			//alert("valide");
			result=true;
		}else{
			result=false;
		}
		return result; 
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
	let n=parseInt(recup());
	if(!isNaN(n)){
			//let banq=new Visa("14485275742308327");
		var cart=recup();
		if(cart.length<15 || cart.length>17){
			document.getElementById("message").value="La carte est invalide";	
		}
		//alert(cart);
		let banq=new Visa(cart);
		let banqM=new MasterCard(cart);
		let banqA=new AmericanExp(cart);
		let visaa=banq.verifier();
		let master=banqM.verifier();
		if(visaa){
			
			let mes="La carte est du type Visa";
			document.getElementById("message").value=mes;
		
		}
		
		if(master){
			result=true;
			let mes="La carte est du type MasterCard";
			document.getElementById("message").value=mes;
		
		}
		let americ=banqA.verifier();
		if(americ){
			result=true;
			let mes="La carte est du type American Express";
			document.getElementById("message").value=mes;
		
		}
	}else{
			document.getElementById("message").value="Erreur \n Valeur invalid";	
		}
function recup(){
	var credit=document.getElementById('entrer').value;
	return credit;
}
}
