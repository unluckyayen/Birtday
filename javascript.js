// toggle class active
const navbarNav=document.querySelector
('.navbar-nav');
// ketika hamburger menu di clik
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active')
}

//klik di luar sidebar untuk mwnghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click',function(ev){
    if(!hamburger.contains(ev.target) && !navbarNav.contains(ev.target)){
        navbarNav.classList.remove('active');
    }
    
});

//discus section
document.getElementById("discuss-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const comment = document.getElementById("comment").value;
    const username = document.getElementById("username").value;

    // Create new comment element
    const newComment = document.createElement("li");
    newComment.innerHTML = `<p><strong>${username}</strong>: ${comment}</p>`;

    // Add new comment to the list
    document.getElementById("comments-list").appendChild(newComment);

    // Clear form inputs
    document.getElementById("comment").value = '';
    document.getElementById("username").value = '';
});