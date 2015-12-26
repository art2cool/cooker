var arr = [1,3,5,7];

var ingradience = [{name: 'one', arr: [1,34,234,5]},{name: 'two', arr:[1,3,5,7, 9,11]},{name:[45,3,23,1,232], [44,4,22,2], [199,1,3,7]];

for(var i = 0; i < ingradience.length; i++) {
    var sorts = 0;

    for(var j = 0; j < arr.length; j++) {

        if(0 > ingradience[i].indexOf(arr[j])) sorts++;

    }
    ingradience[i].push(sorts);
}

ingradience.sort(function(a,b) {
    if(a[a.length-1] > b[b.length-1]){
        return 1
    } else {
        return -1
    }
});

for(var i = 0; i < ingradience.length; i++) {
    ingradience[i].splice(ingradience[i].length-1, 1);
}

console.log(ingradience);