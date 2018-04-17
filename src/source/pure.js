/**
 * 纯函数就是纯的函数
 * 1. 相同的输入必须返回相同 的输出
 * 2. 不能修改传入的参数
 */
function sum(a,b){
    return a+b+Math.random();
}
let result = sum(1,3);

function deposit(account){
    account.money -=100;
}
let account = {money:1000};
deposit(account);
