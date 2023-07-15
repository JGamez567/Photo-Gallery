// Write a query selector that selects #imageContainer
let imageContainer = document.querySelector(".imageContainer");

let imageUrls = [ "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg"  
                ];

// Write your for of loop using .insertAdjacentHTML below
                 {for (let image of imageUrls) 
                 
                 {
                 imageContainer.insertAdjacentHTML("beforebegin", image +",");
                 }
}