async function temp(){
    console.log("temp1");
    await temp2();
    console.log(1);
    console.log(2);
    console.log(3);
}
async function temp2() {
    console.log("temp2");
}
temp();
new Promise((resolve,reject) => {
    console.log("promise 1");
    resolve();
}).then(function() {
    console.log("promise 2");
})