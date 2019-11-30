//两个大数相乘 AB * CD 可以转换成(AC * (BC + AD) *BD)
function multiply(str1,str2){
    var str1Arrs = [],str2Arrs = [],res = [];
    for(var i = 0; i < str1.length;i++)
    str1Arrs.push(str1[i] - '0');
    for(var i = 0; i < str2.length;i++)
    str2Arrs.push(str2[i] - '0');
    //逐个相乘
   for(var k = 0; k < str1Arrs.length + str2Arrs.length;k++)
   res.push(0);

       for(var i = 0; i < str1Arrs.length;i++){
        for(var j = 0; j < str2Arrs.length;j++){
            res[i + j] += str1Arrs[i] * str2Arrs[j];
        }
    }
    //从后往前满10进位
    for(var i = res.length - 1; i >= 0;i--){
        res[i - 1] += parseInt(res[i] / 10);
        res[i] = res[i] % 10;
    }

    //转换成string并且返回
console.log(res);
console.log(res.join(""));
return res.join("");
}
console.log(multiply("123232323","11212121"));

