var t=parseInt(prompt("Введите температуру по Цельсию"));
t=(9/5)*t+32;
alert("По Фаренгейту это "+t+" градусов");

var x=parseInt(prompt("Введите первое число"));
var y=parseInt(prompt("Введите второе число"));
x=x+y;
y=x-y;
x=x-y;
alert("x="+x+" y="+y);

var name="Василий";
var admin;
admin=name;
alert(admin);

//Чему будет равно JS-выражение 1000 + "108";
//Выражение будет равно 1000108,
//потому что 108 - строка, поэтому программа "слепит" их как строку.