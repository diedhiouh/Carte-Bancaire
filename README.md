# Carte-Bancaire
Verificateur de carte bancaire

Cet exercice consiste à developper un programme de vérification de la validité d’une carte bancaire.
Le programme vérifie si une carte est du type Visa, Master Card ou American en se utilisant l’algorithme de Luhn.

Chacun de ces cartes a des critères :
-Visa compte 15 chiffres et doit être débuté par 40 ou 41
-MasterCard : compte 16 chiffres et doit être débuté dans l'intervalle 51 et 55
-American Express compte 17 chiffres et doit être débuté par 34 ou 37

L’exercice est programmé en base du modèle de conception Strategy
Pattern avec le langage JavaScript ECMAScript 6 (ES6). 

# I. Technologie utilisé
	Le programme comporte:
	-un fichier HTML qui represente l'interface graphique de l'application
	-un fichier CSS qui gere le design du page HTML
	-un fichier JS qui represente le coeur de notre application. Il contient les classes, les fonctions de verification etc.
	
# II. Description des dfferentes classes

	## Banque
	
c'est la classe mere du programme. Le numero de carte est declaré dans cette partie avec ses accesseurs et ses mutateur.

	constructor(NumCarte){
			this._Numcarte=NumCarte;
		}
		get NumCarte(){
			return this._Numcarte;
		}
		set NumCarte(n){
			this._Numcarte=n;
		}
	
	## Verificateur
	
Verificateur est un classe abstrait. Elle ettend la classe Banque. La methode verifier est declaré dans cette partie.

	## les classes Visa, MasterCard et AmericanExp
	
Elles sont tous un type de carte bancaire. Elles implementent la classe Verificateur et la methode verifier.
Dans la fonction verifier, on verifie la correspondance des numeros selon leur longueur et leur commencement avant de le soumettre à l'algorithme de lunh.
Ce dernnier verifie si le numero donné a les critères d'un numéro de carte bancaire. 
	
	## La classe principale
	
Elle se charge de recuperer les données communiquée à travers la page HTML et coordonne le traitement des oprations.
Elle affiche aussi les resultats obtenus dans la page html.

#######################################################################













