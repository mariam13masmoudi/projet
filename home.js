var likes=document.querySelectorAll('.like')
var panier=document.querySelectorAll('.panier')
var plus=document.querySelectorAll('.plus');
var price=document.querySelectorAll('.price');
var minus=document.querySelectorAll('.minus');
var total=document.querySelector('#total');
function changeColor(e){
    var cible=e.target;
    console.log(cible);
    if(cible.style.color=="red"){
      cible.style.color="black"
    }
    else{
      cible.style.color="red"
    }
  }
  for(var i=0;i<likes.length;i++){
    likes[i].addEventListener("click",changeColor);
  }
function add(e){
    var cible=e.target
    console.log(cible)
    var span=cible.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log(span)
    var s=span.querySelector('.quantity')
    console.log(s)
  var value = Number(s.innerHTML)
    value++
    s.innerHTML=value
}
  for(var i=0;i<panier.length;i++){
    panier[i].addEventListener("click",add);
  }
  function incr(e){
    var cible=e.target
    console.log(cible)
    var div = cible.parentElement
    var P=div.querySelector('p')
  var value = Number(P.innerHTML)
    value++
    P.innerHTML=value
    //price
    var prix=div.parentElement
    console.log(prix)
    var unitPrice=prix.querySelector('.unitPrice')
    var price=prix.querySelector('.price')
    price.innerHTML=Number(unitPrice.innerHTML*value)
       som();
}
  for(var i=0;i<plus.length;i++){
    plus[i].addEventListener("click",incr);
  }
  //
  function dec(e){
    var cible=e.target
    console.log(cible)
    var div = cible.parentElement
    var P=div.querySelector('p')
  var value = Number(P.innerHTML)
  if(value>0){
    value--
    P.innerHTML=value
  }
    //price
    var prix=div.parentElement
    console.log(prix)
    var unitPrice=prix.querySelector('.unitPrice')
    var price=prix.querySelector('.price')
    price.innerHTML=Number(unitPrice.innerHTML*value)
       som();
}
  for(var i=0;i<minus.length;i++){
    minus[i].addEventListener("click",dec);
  }
  function som(){
  
    var s=0;
    for (var i= 0; i< price.length; i++) {
        s+=Number(price[i].innerHTML);
    }
    total.innerHTML=s;
  }



