function deroulementMenu() //Déroulement du menu
{
	if (document.getElementById("bouton").classList == "liste_menu") //affichage du menu après premier chargement de la page
	{
		document.getElementById("bouton").classList.toggle("show");
	}
	else if (document.getElementById("bouton").classList == "liste_menu show")	//déroulement du menu s'il est caché
	{
		document.getElementById("bouton").setAttribute("class", "liste_menu hide");
	}
	else if (document.getElementById("bouton").classList == "liste_menu hide")	//enroulement du menu s'il est affiché
	{
		document.getElementById("bouton").setAttribute("class", "liste_menu show");
	}
	
	document.getElementById("roue").classList.toggle("spin");	//rotation forte du logo au clic
	document.getElementById("roue").classList.toggle("image");	//réinitialisation de l'état du logo
}