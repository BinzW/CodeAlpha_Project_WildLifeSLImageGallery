//Get the modal
var modal = document.getElementById("modal");

//Get the image and insert it inside the modal
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

//Get all gallery items
var galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.querySelector("img").src;
        captionText.innerHTML = this.querySelector("ïmg").alt;
    });
});

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//Close the modal when click outside of the modal content
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


