const rp = require('request-promise');
var request = require('request');
const cheerio = require('cheerio');
//const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';
var array_michelin= [];
var compt =0;

/*for( var i =0; i < 36; i++)
{
	
	//const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i;
	//rp(url).then(function(value)
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i+'', function (error, response, value) 
{
	var rep_html = cheerio.load(value);
	rep_html('div.poi_card-display-title').each(function(i,element)
		{
			var a = rep_html(this);
			//console.log(a.text())
			array_michelin.push(a.text().trim());
			//compt++;

		});
		//array_michelin.foreach(ele => console.log(ele));
		array_michelin.forEach(function(item, array_michelin) {
  console.log(item);

})






});
}
*/

var getMichelinArray = () => {
  try {
    for (var i = 0; i < 36; i++) {
      //const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i;
      //rp(url).then(function(value)
      request(
        "https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-" +
          i +
          "",
        function(error, response, value) {
          var rep_html = cheerio.load(value);
          rep_html("div.poi_card-display-title").each(function(i, element) {
            var a = rep_html(this);
            //console.log(a.text())
            array_michelin.push(a.text().trim());
            //compt++;
          });
          //array_michelin.foreach(ele => console.log(ele));
          array_michelin.forEach(function(item, array_michelin) {
            //console.log(item);
          });
        }
      );
    }
  } catch {
    console.log("Error in getRelaisArray()");
  }
};
module.exports = getMichelinArray;

