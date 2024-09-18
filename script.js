function filterProjects() {
    // Get the input value and convert it to lowercase
    var input = document.getElementById('search-input').value.toLowerCase();
    
    // Get all the project cards in the other projects section
    var projectCards = document.getElementsByClassName('small-project-card');

    // Loop through all project cards and hide those that don't match the search query
    for (var i = 0; i < projectCards.length; i++) {

        // Get the data-tags attribute and convert it to lowercase
        var tags = projectCards[i].getAttribute('data-tags').toLowerCase();
        // console.log(tags)

        // If the input value is found in the tags or the project's name, display the card
        if (tags.includes(input) || projectCards[i].innerText.toLowerCase().includes(input)) {
            projectCards[i].style.display = '';
        } else {
            projectCards[i].style.display = 'none';
        }
    }
}
