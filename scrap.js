const fetch = require('node-fetch');
const cheerio = require('cheerio');
var tab = [];
var compt =0;

for( var i =0; i < 8; i++)
{

	fetch("https://www.relaischateaux.com/fr/update-destination-results", 
	{"credentials":"include","headers":{"accept":"*/*","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
	"content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with":"XMLHttpRequest"},
	"referrer":"https://www.relaischateaux.com/fr/destinations/europe/france","referrerPolicy":"origin-when-cross-origin",
	"body":"page="+i+"&areaId=78","method":"POST","mode":"cors"})
.then(function(response)
{
	response.json().then(function(value)
	{
		var rep_html = cheerio.load(value.html);
		rep_html('h3').each(function(i,element)
		{
			var a = rep_html(this);
			//console.log(a.text())
			tab[compt] = a.children().attr('href');
			compt++;

		});
		tab.forEach(ele => console.log(ele));


	})
}).catch(err => console.log("ERROR"));

}

