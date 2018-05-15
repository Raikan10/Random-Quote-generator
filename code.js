var background=[
  {
    "filename":"assets/background0.jpg",
    "color":"#B14249"
  },
  {
    "filename":"assets/background1.jpg",
    "color":"#5C5C5C"
  },
  {
    "filename":"assets/background2.jpg",
    "color":"#14142F"
  },
  {
    "filename":"assets/background3.png",
    "color":"#FCDE80"
  }
];

var onepiecequotes = [
  {
    "id":0,
    "quote":"I'm gonna be King of the Pirates!",
    "character":"Monkey D. Luffy"
  },
  {
    "id":1,
    "quote":"Only those who have suffered long, can see the light within the shadows.",
    "character":"Roronoa Zorro"
  },
  {
    "id":2,
    "quote":"Men who can't wipe away the tears from a women's eyes, aren't real men.",
    "character":"Vinsmoke Sanji"
  },
  {
    "id":3,
    "quote":"You need to live a life without regrets!",
    "character":"Portgas D. Ace"
  }
];

$(document).ready(function () {

$("button").on("click",function () {
  var x = Math.floor(Math.random()*4);
  //console.log(x);
 var bg = "url("+background[x].filename+")";
 var col = background[x].color;
//  console.log(onepiecequotes[x].quote);
  var q = onepiecequotes[x].quote+"<br> - "+onepiecequotes[x].character;
  var tl = "https://twitter.com/intent/tweet?hashtags=onepiece&related=freecodecamp&text=%22"+onepiecequotes[x].quote+"%22%20"+"- "+onepiecequotes[x].character;

  $("body").css("background",bg);
  $("button").css("color",col);
  $("#quote").html(q);
  $("#tweet_quote").attr("href",tl);
});

});
