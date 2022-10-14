// 
// portfolio start
Promise.all([
    fetch('https://modelin.webmcdm.dk/portfolios', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(subPortfolio) {
        for (let i = 0; i < 4; i++){
            if(window.location.href.indexOf(`portfoliosub${i+1}`) != -1){
            
        const subport = document.querySelector(".subportfolio-picture");
        const galleryPhotos = document.querySelector("#subpage-gallery");
        subport.innerHTML += `
        <div class='wrap-subpic'>
            <div class='subpageitems'>
            <h1 class='subtitle'>${subPortfolio[i].title}</h1>
            <i class="fa-solid fa-chevron-down fa-3x"></i>
        </div>
            <img class='subcover' src='${subPortfolio[i].cover}'>
        </div>
        <div class='subtxt'>
        <h1 class='subheadline'>${subPortfolio[i].headline}</h1>
        <p>${subPortfolio[i].description}</p>

        <div class='placement'>
        <h1>Year</h1>
        <p>${subPortfolio[i].placement.year}</p>
        <h1>Area</h1>
        <p>${subPortfolio[i].placement.area}</p>
        <h1>Address</h1>
        <p>${subPortfolio[i].placement.address}</p>
        </div>
        </div>
        `
        for (let k = 0; k < subPortfolio[i].gallery.length; k++) {
            galleryPhotos.innerHTML += 
            `<div class='masonry-grid-item'><a href="#"><img class='gallery-pic' src='${subPortfolio[i].gallery[k].image}'></a></div>`
        }
        }
    }
}
    ),
]);
// portfolio end






