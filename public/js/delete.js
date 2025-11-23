const trashCan = document.getElementById('delete');

trashCan.addEventListener('click', (event) => {
    event.preventDefault();
    const endpoint = `/blogs/${trashCan.dataset.doc}`;
    
    fetch(endpoint, { method: 'DELETE' })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch((error) => {console.log(error)})

})
