// const bodySection = document.querySelector(".body-section");
// const hideDetails = document.querySelector(".hideDetails");
// const plusIcon = document.querySelector(".plusIcon")
// const minusIcon = document.querySelector(".hideMinusIcon")

// plusIcon.addEventListener("click", () => {
//     
//     minusIcon.classList.toggle("hideMinusIcon");

// })

// Traversing the DOM

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const details = e.currentTarget.parentElement.parentElement;
        details.classList.toggle("showDetails");
    })


})