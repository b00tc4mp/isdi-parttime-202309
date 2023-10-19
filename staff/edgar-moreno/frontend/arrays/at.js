

var countries = ['France', 'Japan', 'Vietnam', 'United States', 'Germany'];

function at (array, index){
if (index < 0){
    index = array.length + index;
}
return array[index];

}