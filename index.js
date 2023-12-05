let ptag = document.querySelector(".show_more_p");
let ptagless = document.querySelector(".show_less_p");

// Eventlistner to show all content
ptag.addEventListener("click", () => {
    let showmoreParagrah = document.querySelector(".show_more_para");
    showmoreParagrah.style.display = "block";
    ptag.style.display = "none";
    ptagless.style.display = "block";
});

// Eventlistner to show less content
ptagless.addEventListener("click", () => {
    let showmoreParagrah = document.querySelector(".show_more_para");
    showmoreParagrah.style.display = "none";
    ptag.style.display = "block";
    ptagless.style.display = "none";
});