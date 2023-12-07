var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var dc = document.getElementById("dogecoin");
var ltc = document.getElementById("litecoin");
var lastPrice = null;

var liveprice = {
"async": true,
"scroosDomain": true,
"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin&vs_currencies=usd",
"method": "GET",
"headers":{}
}
$.ajax(liveprice).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    dc.innerHTML = response.dogecoin.usd;
    ltc.innerHTML = response.litecoin.usd;

    btc.style.color = !lastPrice || lastPrice === liveprice ? 'black' : liveprice > lastPrice ? 'green': 'red';
    eth.style.color = !lastPrice || lastPrice === liveprice ? 'black' : liveprice > lastPrice ? 'green': 'red';
    dc.style.color = !lastPrice || lastPrice === liveprice ? 'black' : liveprice > lastPrice ? 'green': 'red';
    ltc.style.color = !lastPrice || lastPrice === liveprice ? 'black' : liveprice > lastPrice ? 'green': 'red';
    //  console.log(response);
});