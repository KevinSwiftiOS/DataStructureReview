var containsNearbyDuplicate = function(nums, k) {
  
    var str = nums.join("");
    for(var i = 0; i < nums.length;i++){
        if(str.lastIndexOf(nums[i]) != i && str.lastIndexOf(nums[i]) != -1) {
            var last =  str.lastIndexOf(nums[i]);
            if(Math.abs(last - i)<= k)
            return true;
        }

    }
    return false;
};
// console.log(containsNearbyDuplicate([13,23,1,2,3],5));
var firstUniqChar = function(s) {

   for(var i = 0; i < s.length;i++){
       if(s.lastIndexOf(s[i]) == i && s.indexOf(s[i]) == i)
       return i;
       
   }
   return -1;
};
console.log(firstUniqChar("cc"));