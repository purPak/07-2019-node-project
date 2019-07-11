//dupliquer un element avec un id
function cloneElement(id){
	//on incremente une var pour bloquer le form a 5 etudiant max
	nbForm++;
  //--Recup l'objet source
  var src = document.getElementById(id);

  if(src){
    //-- Creation d'un clone
    var clone = src.cloneNode(true);
   /* clone.className = "subform";
    clone.style.display = none;*/
    //-- Ajout du clone
    document.appendChild(clone);
    if (nbForm == 4)
    	document.getElementById("btnAdd").style.display = none;
  }
}

let nbForm = 0;

document.getElementById("btnAdd").addEventListener("click", cloneElement); 