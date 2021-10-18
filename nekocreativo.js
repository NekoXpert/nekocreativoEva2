//codigo de chat bot//
var _smartsupp = _smartsupp || {};
_smartsupp.key = '3d6ca561aefc077b28b68c5e808c6e50daab7e29';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);


//deshabilitar menu contextual del navegador//

function inhabilitar(){
    alert ("Cuidadito te vigilo o-o.\n\n Nos vemos, amiguito sera para otra..")
    return false
}

document.oncontextmenu=inhabilitar

 
 // test//
 $(function(){
  $('#logoMenu a').on('click',function(e){
    e.preventDefault();
    var strAncla = $(this).attr('href');
  $('body,html').stop(true,true).animate({scrollTop: $(strAncla).offset().top-60},1000);
  });
});
 