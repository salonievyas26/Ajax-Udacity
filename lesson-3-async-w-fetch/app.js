(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;


        function addImage(data) {
    				let htmlContent = '';
    				const firstImage = data.results[0];

    				if (firstImage) {
        								
        								htmlContent = `<figure>
            							<img src="${firstImage.urls.small}" alt="${searchedForText}">
            							<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        								</figure>`;
    								} 
    				else 			{
        								htmlContent = 'Unfortunately, no image was returned for your search.'
    								}

    				responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}

fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,{

	headers:{

		Authorization:'Client-ID 3da45eb357b229d0a38fc29aa9021f380d4c3c80a6d3b212b899c4f8b19b68a1'
	}
}).then(response => response.json()).then(addImage);



    });
})();
