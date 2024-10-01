// set inital count
let count = 0;

// select value and buttons from html id's and classes
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


//add click event to buttons to increae decrease and reset button 
btns.forEach(function(btn) {
   btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
   //  add functionality to decrease number by 1 each time clicked 
    if(styles.contains('decrease')){
      count--;
    }
   //  increasing number by 1 each time clikced 
    else if(styles.contains('increase')){
      count++;
    }
   //  resetting number back to 0
    else{
      count = 0;
    }
    // adding color as number increases with if statement 
    if(count > 0){
    value.style.color ='green';
    }
    //adding color as number decreases with if statement 
    if(count < 0){
      value.style.color ='red';
   }  
//adding reset button back to black
   if(count === 0){
      value.style.color ='black';
    } 

    value.textContent = count;
   })
});