// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const primaryButton = document.querySelector(".primaryButton");
// const close = document.querySelector(".close");

// const openModal = function () {
//   modal.remove("hidden");
//   overlay.remove("hidden");
// };

// const closeModal = function () {
//   modal.add("hidden");
//   overlay.add("hidden");
// };

// // const openModal = function () {
// //   modal.classList.remove("hidden");
// //   overlay.classList.remove("hidden");
// // };

// // const closeModal = function () {
// //   modal.classList.add("hidden");
// //   overlay.classList.add("hidden");
// // };



// primaryButton.addEventListener("click", openModal);

// close.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);



// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var close = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// close.onclick = function() {
//   modal.style.display = "none";
//   overlay.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// var modal = null
//  function pop() {
//    if(modal === null) {
//      document.getElementById("box").style.display = "block";
//      modal = true
//    } else {
//      document.getElementById("box").style.display = "none";
//      modal = null
//    }
//  }


let modal = document.querySelector(".modal");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
