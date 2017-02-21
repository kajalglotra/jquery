var data = [
  {'product_name':'Flat-shoes'                , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/shoe/y/g/h/combo-b-461-472-383-7-bersache-blue-original-imaer2aezahauvfh.jpeg?q=70'                    , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'bathroom-slippers'         , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/832/832/slipper-flip-flop/b/z/d/green-sf0532g-sparx-8-original-imaepyta6dwzhxhg.jpeg?q=70'                     , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'Sleeve-Printed-shirt'      , 'category_name': 'Male'      ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/sweatshirt/z/8/h/11greywolverine-sayitloud-3xl-original-imaehwrxkemrmy64.jpeg?q=70'                    , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Men-combo '                , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/apparels-combo/j/r/p/bmn009-bm-fashion-original-imaegsh72uqea9tn.jpeg?q=70'                            , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'Men-shirt'                 , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/shirt/f/c/h/rpl-00543d-rapphael-s-original-imaehaz4hfzqgddv.jpeg?q=70'                                 , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Full-sleeves-T-shirts'     , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/t-shirt/u/c/r/c33solidblackmblackwhitedgreygreynavy-sayitloud-l-original-imaentkpq29ajpzd.jpeg?q=70'   , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'shoes-blue-mens-blue-shoes', 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/merch/400/400/images/1484219115713.jpg?q=70'                                                                         , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Sweator'                   , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/jacket/d/p/q/01hojaryjkt-ico-blue-star-38-original-imaearwhwzt6hdvq.jpeg?q=70'                         , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'sox'                       , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/sock/g/e/w/zach-12-indian-socks-zacharias-l-original-imaegnx3emg9qnwc.jpeg?q=70'                       , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Shirt'                     , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/shirt/b/f/h/tnrcsh-b-top-notch-m-original-imadyqfq5vhhzndx.jpeg?q=70'                                  , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'Flat-shoes'                , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/shoe/y/g/h/combo-b-461-472-383-7-bersache-blue-original-imaer2aezahauvfh.jpeg?q=70'                    , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'bathroom-slippers'         , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/832/832/slipper-flip-flop/b/z/d/green-sf0532g-sparx-8-original-imaepyta6dwzhxhg.jpeg?q=70'                     , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'Sleeve-Printed-shirt'      , 'category_name': 'Male'      ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/sweatshirt/z/8/h/11greywolverine-sayitloud-3xl-original-imaehwrxkemrmy64.jpeg?q=70'                    , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Men-combo '                , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/apparels-combo/j/r/p/bmn009-bm-fashion-original-imaegsh72uqea9tn.jpeg?q=70'                            , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'Men-shirt'                 , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/shirt/f/c/h/rpl-00543d-rapphael-s-original-imaehaz4hfzqgddv.jpeg?q=70'                                 , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Full-sleeves-T-shirts'     , 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/image/312/312/t-shirt/u/c/r/c33solidblackmblackwhitedgreygreynavy-sayitloud-l-original-imaentkpq29ajpzd.jpeg?q=70'   , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
  {'product_name':'shoes-blue-mens-blue-shoes', 'category_name': 'general'   ,  'image_url' : 'https://rukminim1.flixcart.com/merch/400/400/images/1484219115713.jpg?q=70'                                                                         , 'price':29995  , 'discount_price':2199    , 'brand_name':'canon'},
  {'product_name':'Swetor'                   , 'category_name': 'general'   ,   'image_url' : 'https://rukminim1.flixcart.com/image/312/312/jacket/d/p/q/01hojaryjkt-ico-blue-star-38-original-imaearwhwzt6hdvq.jpeg?q=70'                         , 'price':2190   , 'discount_price':949     , 'brand_name':'Sony'},
 
];
var z=0;
var i="<h3>Cart Section</h3>";
$(document).ready(function(){
  var btn1="<button onclick='removeCart()'>Remove From Cart</button>";
  var info=data.map(function(obj)
  {  
     window.obj=obj;
     return "<div class='container'><div class='col-md-4 thumbnail' style=' padding:10px;'><center><img src='"+obj.image_url+"'></center></div><div class='col-md-6 jumbotron' ><center><h3 style='color:#a8c6f7;'>"+obj.brand_name+" "+obj.product_name+"</h3>Category Name:"+obj.category_name+"<br>Rs.<strike style='color:red;'>"+obj.price+"</strike> "+obj.discount_price+"<br><button id='btnn'  value="+obj.product_name+" onclick='addCart(value)'>Add To Cart</button></center></div></div>";
   }).join('</td></tr>')+"</table><br>";
  $("#id").html(info);
  $('.fixed').html(i);
});
function addCart(values){
  
 z=z+1;
 if(z>0)
 {
      var j="<div id='remove'>"+values+"&nbsp;<button id='remove' onclick='removeCart()'>X</button><br>";
       $(".fixed").append(j);
    }
}
 
function removeCart(){
 z=z-1; 
 $("#remove").remove();
 }