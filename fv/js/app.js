var submitBtn = document.getElementById('calculate');
submitBtn.onclick = function(e)
{
    e.stopPropagation();
    console.debug('Hey there!');
}
