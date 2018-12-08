(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;


    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;




function addImage(){
	let htmlContent = '';
	const data = JSON.parse(this.responseText);
	if(data && data.results && data.results.length > 1)
	{
		htmlContent= data.results.map( img => `<figure> 

			<img src="${img.urls.regular}">
			 <figcaption>${img.user.username} </figcaption>

			<figure>`);
	}

	else
	{
		htmlContent='<div class="error-no-image "> No such Image found</div>';
	}
	console.log(data);

	responseContainer.insertAdjacentHTML('afterbegin',htmlContent);

}

 	const unsplashRequest = new XMLHttpRequest();

	unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
	unsplashRequest.onload = addImage;
	unsplashRequest.setRequestHeader('Authorization', 'Client-ID 3da45eb357b229d0a38fc29aa9021f380d4c3c80a6d3b212b899c4f8b19b68a1');
	unsplashRequest.send();

function addArticles () {

	let htmlContent = '';
	const data = JSON.parse(this.responseText);
	if(data.response&& data.response.docs && data.response.docs.length > 1)
	{
		htmlContent='<ul>'+ data.response.docs.map( article => `<li class="article"> 

			<h2><a href="${article.web_url}">${article.headline.main}</a></h2>
			<p>${article.snippet} </p>
			</li>`).join('')+ '</ul>';
	}

	else
	{
		htmlContent='<div class="error-no-artcle"> No such Article found</div>';
	}
	console.log(data);

	responseContainer.insertAdjacentHTML('beforeend',htmlContent);

}
const articleRequest = new XMLHttpRequest();
articleRequest.onload = addArticles;
articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=fe5b4ec6fb3548f39a5db52c9939953d`);
articleRequest.send();



    });




})();
