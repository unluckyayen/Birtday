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
