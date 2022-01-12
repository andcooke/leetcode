/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    var result = [] ;
    var mostCandies = 0 ;
    
    for (i = 0; i < candies.length; i++){
        if (candies[i] > mostCandies){;
            mostCandies = candies[i];
        };
    };
    
    var withExtraCandies = [];
    
    for (i = 0; i < candies.length; i++){
        withExtraCandies.push(candies[i] + extraCandies);
    }
    
    for (i=0; i < withExtraCandies.length; i++){
        if (withExtraCandies[i] >= mostCandies){
            result.push(true);
        } else {
            result.push(false);
        };
    };
   return result;

    
};

