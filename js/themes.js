// Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {  //once window loaded
    filterItem.onclick = (selectedItem) => {        // when user click on filterItem div
        if(selectedItem.target.classList.contains("item")) {   // if user click element has .item class
            filterItem.querySelector(".active").classList.remove("active");    // remove the active class which is in the first item
            selectedItem.target.classList.add("active");   // add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name");  // getting data-name value of the user selected item
            filterImg.forEach((image) => {
                let filterImage = image.getAttribute("data-name");    // getting image data-name value
                if ((filterImage == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            })
        }
    }
}