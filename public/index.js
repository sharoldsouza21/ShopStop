

var inform;
//Search bar function
$(document).ready(function(){
$(".form-control").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        
        $(".card-title").filter(function(){
          $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
      });
//Server Script----------------------------------------------------
$.getJSON("ListJSONTest.json",function(info){

//Server Script----------------------------------------------------end
	inform = info;
    //Product loop
    for (var key in info.List) {
           
           var ul = document.getElementById('links');
            //Create the elements for bootstrap cards
            var li = document.createElement('li'); 
            var card = document.createElement('div');
            var cardImg = document.createElement('img');
            var cardBody = document.createElement('div');
            var cardTitle = document.createElement('h6');
            var cardPara = document.createElement('p');
            var cardAddButton = document.createElement('button');
            var cardCloseButton = document.createElement('button');
            var cardViewButton = document.createElement('a');
        
            //Assign text values to all elements for the product
            var cardTitleText = document.createTextNode(info.List[key]["caption"]);
            cardTitle.appendChild(cardTitleText);

            var cardParaText = document.createTextNode("$"+info.List[key]["price"]);
            cardPara.appendChild(cardParaText);


            //Button text
            var cardAddText = document.createTextNode("Add to Cart");
            cardAddButton.appendChild(cardAddText);

            var cardViewText = document.createTextNode("View Product");
            cardViewButton.appendChild(cardViewText);


            //Set img src
            cardImg.setAttribute("src",info.List[key]["imageURL"]);
            cardImg.setAttribute("alt",info.List[key]["caption"]);

            //Set View button href
            cardViewButton.setAttribute("href",info.List[key]["productUrl"]);

            //Append all nodes together
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPara);
            cardBody.appendChild(cardAddButton);
            cardBody.appendChild(cardViewButton);

            card.appendChild(cardImg);
            card.appendChild(cardCloseButton);
            card.appendChild(cardBody);

            li.appendChild(card);

            ul.appendChild(li);


            //Add bootstrap classes
            li.setAttribute("class","prod-li");
            card.setAttribute("class","card shadow rounded");
            cardImg.setAttribute("class","card-img-top");
            cardBody.setAttribute("class","card-body");
            cardTitle.setAttribute("class","card-title");
            cardPara.setAttribute("class","card-text");
            cardAddButton.setAttribute("class","btn btn-warning btn-lg btn-block");
            cardViewButton.setAttribute("class","btn btn-primary btn-lg btn-block");
            cardCloseButton.innerHTML = '<i class="fa fa-window-close"></i>';
			cardCloseButton.setAttribute("class","btn btn-dark");
			cardAddButton.setAttribute("onClick","addItem("+key+")");
       
       
        } 


//Server Script----------------------------------------------------

});
});
//Server Script----------------------------------------------------end
//Add Item popUp function
function addItem(i){
	//console.log("Item added : "+info.List[i]["caption"]);
	var textHandle = document.getElementById("confirm-text");
	textHandle.innerHTML = inform.List[i]["caption"];
	var divHandle = document.getElementById("confirm-event");
	divHandle.removeAttribute("class");
	setTimeout(function(){ divHandle.setAttribute("class","invisible"); }, 1500);
	
	
} 


