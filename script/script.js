function showMessage(event) {
    // prevent the default form submission
    event.preventDefault();
    // hide the first page
    document.getElementsByClassName('container')[0].style.display = 'none';
    // show confirmation page;
    document.getElementsByClassName('confirmationMessage')[0].style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function()
{
    let msg = document.getElementById('dismissBtn');
    msg.addEventListener('click', function(event){
        document.getElementsByClassName('confirmationMessage')[0].style.display = 'none';
        let page = document.getElementsByClassName('container')[0];
        page.style.display = 'flex';
    });
    let userEmail = document.getElementById('userEmail');
    userEmail.addEventListener('blur', function(){
        if (!userEmail.validity.valid)
        {
            document.getElementById('errorMsg').style.display = 'block';
        }
        else
        {
            document.getElementById('errorMsg').style.display = 'none';
        }
    });


});




