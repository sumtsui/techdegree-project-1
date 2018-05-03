// variable going to hold the setInterval() function.
var refresh;

// the refresh interval in milisecond.
var refreshInterval = 10000;

// DOM element variables
const loadQuoteButton = document.getElementById('loadQuote');
const bodyElement = document.querySelector('body');

// when the page is loaded, printQuote() is called to filled the page with a quote. 
window.addEventListener("load", printQuote);

// when the page is loaded, the refresh feature starts.
window.addEventListener("load", function() { refresh = setInterval(function() { printQuote() }, refreshInterval); });

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuoteButton.addEventListener("click", printQuote, false);

// when user clicks anywhere on the button, ResetInterval() will be called to count the fresh interval from 0 again.
loadQuoteButton.addEventListener("click", resetInterval, false);

// return a random quote object from the Quotes array.
function getRandomQuote(quotes) {
	return quotes[getRandomIndex(quotes)];
}

// convert a quote object to a html string and add to the DOM. 
function printQuote() {
	var quote = getRandomQuote(quotes);
	var htmlString = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
	if (quote.citation) 
		htmlString += `<span class="citation">${quote.citation}</span>`;
	if (quote.year)
		htmlString += `<span class="year">${quote.year}</span>`;
	if (quote.tags)
		htmlString += `<span class="tags">${quote.tags.join(' / ')}</span>`;
	htmlString += `</p>`;
	document.querySelector('#quote-box').innerHTML = htmlString;

	backgroundChange();
}

// change the background color of the body and button elements.
function backgroundChange() {
	var color = colors[getRandomIndex(colors)];
	bodyElement.setAttribute('style', `background: ${color}`);
	loadQuoteButton.setAttribute('style', `background: ${color}`);
}

// get a random index number from an Array.
function getRandomIndex(list) {
	return Math.floor(Math.random() * list.length);
}

// clear interval and then re-assign the refresh varaible to setInterval().
function resetInterval() {
	clearInterval(refresh);
	refresh = setInterval(function() { printQuote() }, refreshInterval);
}
