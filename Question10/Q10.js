

function countDown() {
    let start = 10;
    alert('Can i start the count down') 
    const counting = setInterval(function(){
        start--;
        document.getElementById('count').value = start;

        if (start === 0)
        {
            clearInterval(counting);
            alert('Time over');
        }
    },1000)
};   