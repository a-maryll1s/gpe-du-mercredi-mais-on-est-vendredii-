<script>
    let titre = document.querySelector(".t2");
    let titre1 = document.querySelector(".t1");

    titre1.addEventListener("click", function(){
            titre1.innerHTML = "titre changé";
            
    });

    //console.log(titre.value);
    
    //let curseur = document.getElementById("range");
    //console.log(curseur.value);
    
    let pression = false;

    let bouton = document.getElementById("btn"); 
    bouton.addEventListener("click", function(){

        if(pression == false)
        {titre.style.color = "red";
        titre.style.fontSize = "50px";
         pression = true;   
        }
        else {
        titre.style.color = "blue";
         pression = false;   
        }

    }); 

         
    </script>