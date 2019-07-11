//dupliquer un element avec un id
function cloneElement(id){
  //-get src object
  var src = document.getElementById(id);

  if(src){
    //-- create clone
    var clone = src.cloneNode(true);
    clone.id = "sub";
    //-- Add the clone
    document.getElementById("subForm").appendChild(clone);
	//increase nb form to check the max set to 5
	 nbForm++;
   console.log(nbForm);
    if (nbForm == 4)
    	document.getElementById("btn").style.display = 'none';
  }
}

let nbForm = 0;
// add event onclick to add new form user
document.getElementById("btn").addEventListener("click", function(){cloneElement("form")}, false); 