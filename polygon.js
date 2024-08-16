// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function polygon(n){
    let sum = (n- 2) * 180
    return sum;
}
console.log(polygon(3));