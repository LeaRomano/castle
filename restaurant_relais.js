const fetch = require('node-fetch');
var cheerio = require('cheerio');
var tab = new Array();
var compt =0;

var getRelaisArray = async function(callback){
    try{
        for(var i = 1; i < 8; i++){
            const response = await fetch("https://www.relaischateaux.com/fr/update-destination-results", 
            {"credentials":"include","headers":{"accept":"/","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with":"XMLHttpRequest"},
            "referrer":"https://www.relaischateaux.com/fr/destinations/europe/france","referrerPolicy":"origin-when-cross-origin",
            "body":"page="+i+"&areaId=78","method":"POST","mode":"cors"});
           
            const value = await response.json();

            rep_html = cheerio.load(value.html);
            rep_html('h3').each(function(i,element){
                var a = rep_html(this);
                tab.push(a.children().attr('href'));

                if(compt == 3){
                    callback(tab);
                }
            });
            tab.forEach(ele => console.log(ele));
        }
    }
    catch{
        console.log("Error in getRelaisArray()");
    }
}
module.exports = getRelaisArray;

