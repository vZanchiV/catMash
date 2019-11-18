
 
export default {
    getOneCats(items) {
        const indexCat = Math.floor(Math.random()*items.length)
        return {item : items[indexCat],index:indexCat} ;
    },
    removeOneCatFromAllCats(items,{item}) { 
        return items.filter(function( obj ) {
            return  obj.id !== item.id;
      });
    },
    sortCats(items) {
       function compare( a, b ) {
            if ( a.like < b.like){
                return 1;
            }   
            if ( a.like > b.like ){
                return -1;
            }
            return 0;
      }
      return items.sort(compare)
    }
}
