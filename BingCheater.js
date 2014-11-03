javascript:
var bingArray1 = new Array();
bingArray1[0] = 'red ';
bingArray1[1] = 'blue ';
bingArray1[2] = 'yellow ';
bingArray1[3] = 'orange ';
bingArray1[4] = 'cyan ';
var bingArray2 = new Array();
bingArray2[0] = 'flying ';
bingArray2[1] = 'running ';
bingArray2[2] = 'sneaking ';
bingArray2[3] = 'epic ';
bingArray2[4] = 'genius ';
var bingArray3 = new Array();
bingArray3[0] = 'bird ';
bingArray3[1] = 'dog ';
bingArray3[2] = 'fish ';
bingArray3[3] = 'pig ';
bingArray3[4] = 'owl ';
for(i = 0; i < 15; i++){
    var bingSelector1 = Math.floor(Math.random() * bingArray1.length);
    var bingScriptMain = bingArray1[bingSelector1];
    var bingSelector2 = Math.floor(Math.random() * bingArray2.length);
    var bingScriptTwo = bingArray2[bingSelector2];
    var bingSelector3 = Math.floor(Math.random() * bingArray3.length);
    var bingScriptThree = bingArray3[bingSelector3];  
    window.open('http://www.bing.com/search?q=' + bingScriptMain + bingScriptTwo + bingScriptThree);
}
