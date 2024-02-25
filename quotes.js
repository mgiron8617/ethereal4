
// wellness tip API //

const urlForTip = 'https://positivity-tips.p.rapidapi.com/api/positivity/wellness';
const optionsForTip = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c225a0c44emsh1a65f203443a441p1fb862jsn89e1ae26a43d',
		'X-RapidAPI-Host': 'positivity-tips.p.rapidapi.com'
	}
};


async function fetchTipData() {
try {
	const response = await fetch(urlForTip, optionsForTip);
	const result = await response.json();

    const quoteBox = document.getElementById('wellness-tip');
    const quote = quoteBox.querySelector('.tip');

    quote.textContent = result.tip;

	console.log(result);
} catch (error) {
	console.error(error);
}
}




// affirmation API //

const urlForAffirmation = 'https://positivity-tips.p.rapidapi.com/api/positivity/affirmation';
const optionsForAffirmation = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c225a0c44emsh1a65f203443a441p1fb862jsn89e1ae26a43d',
		'X-RapidAPI-Host': 'positivity-tips.p.rapidapi.com'
	}
};



async function fetchAffirmationData() {
try {
	const response = await fetch(urlForAffirmation, optionsForAffirmation);
	const result = await response.json();

    const quoteBox = document.getElementById('affirmation-box');
    const quote = quoteBox.querySelector('.affirmation');

    quote.textContent = result.affirmation;

	console.log(result);
} catch (error) {
	console.error(error);
}
}




// inspirational quote API //

const urlForQuote = 'https://positivity-tips.p.rapidapi.com/api/positivity/quote';
const optionsForQuote = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c225a0c44emsh1a65f203443a441p1fb862jsn89e1ae26a43d',
		'X-RapidAPI-Host': 'positivity-tips.p.rapidapi.com'
	}
};



async function fetchQuoteData() {
try {
	const response = await fetch(urlForQuote, optionsForQuote);
	const result = await response.json();

    const quoteBox = document.getElementById('quote-box');
    const quote = quoteBox.querySelector('.quote');
	const author = quoteBox.querySelector('.author');

    quote.textContent = result.quote;
	author.textContent = result.author;

	console.log(result);
} catch (error) {
	console.error(error);
}
}




// click button //

function fetchButtons() {
	document.getElementById('button-tip').onclick = fetchTipData;
	document.getElementById('button-affirmation').onclick = fetchAffirmationData;
	document.getElementById('button-quote').onclick = fetchQuoteData;
  };

fetchButtons();







