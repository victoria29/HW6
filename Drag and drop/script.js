 var box = document.querySelector('div');
 box.addEventListener("mousedown", function(e) {

     var shiftX = e.clientX - box.getBoundingClientRect().left;
     var shiftY = e.clientY - box.getBoundingClientRect().top;

     box.style.position = 'absolute';
     box.style.zIndex = 999;
     document.body.append(box);

     changePlace(e.pageX, e.pageY);
     function changePlace(pageX, pageY) {
         box.style.left = pageX - shiftX + 'px';
         box.style.top = pageY - shiftY + 'px';
     }

     function mouseMove(e) {
         changePlace(e.pageX, e.pageY);
     }

     document.addEventListener('mousemove', mouseMove);
     box.onmouseup = function() {
         document.removeEventListener('mousemove', mouseMove);
         box.onmouseup = null;
     };
 });

 box.addEventListener('dragstart',  function() {
     return false;
 });