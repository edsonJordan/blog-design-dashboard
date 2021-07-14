document.getElementById('ContentSlide').addEventListener('click', (e)=>{
   let check =  document.getElementById('slideThree');
   if(check.checked == false) {
    check.checked = true; 
}
else {
    if(check.checked == true) {
        check.checked = false; 
     }   
}
});