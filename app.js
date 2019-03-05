'use strict';

const getArrayFromRelais = require("./relais_url.js");
const getArrayFromMichelin = require ("./srap_michelin.js");
const getRestaurants = require ("./getrestaurants.js");


var michelinArray = new Array();
var relaisArray = new Array();
var restosRelais = new Array();
var map = new Map();

function loadRelais()
{
    var relaisArray = new Array();
    return new Promise(function(resolve, reject){
        getArrayFromRelais(function(response){
            relaisArray = response;
        })
    }).then(function(result){
        //console.log(result);
    })


}


function loadMichelin() {

    return new Promise(function(resolve, reject){
        getArrayFromMichelin(function(response){
            michelinArray = response;
            
        })
    }).then(function(result){
        //console.log(result);
    })
}

function RemplirTabRestoChatName(map1resto, map2resto){
    
   map1resto.forEach(element => {console.log(element);})
   
   map2resto.forEach(element => {console.log(element);})
    
   console.log('taille 2 restos : ' +map2resto.size);
   console.log('taille 1 resto : '+ map1resto.size);
       
   
}

function loadRestRelais() {

    return new Promise(function(resolve, reject){
        getRestaurants(relaisArray,RemplirTabRestoChatName,resolve);})
    
}


async function Main(){

    let promise = new Promise((resolve, reject) =>{getArrayFromRelais(loadRelais, resolve);})
    let re = await promise;
    //console.log(relaisArray.length);
    
    let promise2 = new Promise((resolve, reject)=>{getArrayFromMichelin(loadMichelin,resolve);})
    let re2 = await promise2;
    
    let promise3 = new Promise((resolve, reject)=>{getRestaurants(relaisArray,loadRestRelais,resolve);})
    let re3 = await promise3;
    
}

Main();
  

//loadMichelin();

//loadRelais();

//loadRestRelais();