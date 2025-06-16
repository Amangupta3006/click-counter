let counts = 0;

//selecting buttons
const clickbtn = document.getElementById('clickbtn');
const resetbtn = document.getElementById('resetbtn');
const countdisplay = document.getElementById('counts');

clickbtn.addEventListener('click', () => { 
    counts++;
    countdisplay.textContent = counts;  
})
resetbtn.addEventListener('click', () =>  {  
    counts = 0;
    countdisplay.textContent = counts;
})