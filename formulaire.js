//dupliquer un element avec un id
function cloneElement(id){
  //--Recup l'objet source
  var src = document.getElementById(id);

  if(src){
    //-- Creation d'un clone
    var clone = src.cloneNode(true);
    clone.id = "sub";
   /* clone.className = "subform";
    clone.style.display = none;*/
    //-- Ajout du clone
    document.getElementById("subForm").appendChild(clone);
	//on incremente une var pour bloquer le form a 5 etudiant max
	 nbForm++;
   console.log(nbForm);
    if (nbForm == 4)
    	document.getElementById("btn").style.display = 'none';
  }
}

let nbForm = 0;

document.getElementById("btn").addEventListener("click", function(){cloneElement("form")}, false); 