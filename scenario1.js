function showProjectDetails(details) {
    document.getElementById('popup-text').innerText = details;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
