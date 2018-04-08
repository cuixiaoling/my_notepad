(一) 一切都是对象 typeof

function show (x){
    console.log( typeof x); // undifind   ====  值类型 typeof
    console.log( typeof 10); // number
    typeof 'abc' // string
    typeof true // boolean
    
    typeof function (){} // function       ==== 引用类型 instanceof

    typeof [1,'a',true] // object   -- 数组
    typeof {a:1,b:2} // object      -- 对象
    typeof null //object 对象占位符  -- null
    typeof new Number(10) // object -- new 一个对象

}

var obj = {
    a:10,
    b:function(){},
    c:{
        name:'李四',
        year:1899
    }
}
obj 是一个自定义的对象，a,b,c就是它的属性，而且在c的属性值还是一个对象，
它又有name,year 两个属性

$.trim('abc ");
$是一个函数，$.trim(),也是一个函数，
$.trim('abc');
$函数 上加一个trim 属性，属性值是函数

ps: 一切（引用类型）都是对象，对象是属性的集合，

(二) 函数和对象的关系

数组像是对象的一个子集
函数 和对象之间，不仅仅是包含和被包含的关系

var fn = function(){};
fn instanceof Object // true
fn instanceof Function // true

var arr = [1,2,3,4];
arr instanceof Array // true
arr instanceof Object // true

function Fn (){
    this.name ='王福林';
    this.year = 1988;
}
var fn1 = new Fun();

ps:对象可以通过函数来创建

所有对象都是通过函数创建的,是语法糖的一种形式

var obj  = { a:10,b:20};
var arr =[5,'x',true];

如：
var obj = new Object();
obj.a = 10;
obj.b = 20;

var arr = new Array();
arr[0]=5;
arr[1]='x';
arr[2]=true;

typeof Array / Object function

疑问~~~~~~~~ 对象是函数创建出来的，而函数又是一种对象 ============== prototype 原型

(三) prototype 原型

函数也是对象，也是属性的集合，可以对函数进行自定义属性

每个函数都有一个默认的属性，prototype 

prototype 的属性值是一个对象（属性的集合）默认的只有一个constructor的属性，指向这个函数本身

prototype = {} 
属性        属性值 

prototype 既然作为一个对象，属性的集合，可以自定义的增加很多的属性

function Fu(){
    Fu.prototype.name = '王福朋';
    Fu.prototype.getYear = function(){
        return 1988;
    }
}

fn    <--------------------------------
prototype ----------- fn prototype    | 
                    constructor  ------
                    name : '王福朋'
                    getYear: (function)
function Fn(){
    Fn.prototype.name ='王福朋';
    Fn.prototype.getYear = function(){
        return 1998;
    }
}
var fn = new Fn() ;
fn.name;
fn.getYear();

Fn是一个函数，fn对象是从Fn函数new出来的，这样fn对象就可以调用Fn.prototype的属性，
因为每个对象都有一个隐式的属性--- "__proto__",这个属性引用了创建这个对象的函数的prototype。
fn.__proto__ === Fn.prototype
__proto__ 成为 “隐式原型”

(四) ---隐式原型 __proto__

每个函数function 都有一个 prototype，即原型
每个对象都有一个__proto__ ，可成为隐式原型

var obj ={};
obj.__proto__;

obj.__proto__  === Object.prototype;

obj 这个对象是由Object 函数创建的，
因此 obj.__proto__ === Object.prototype

ps:每个对象都有一个__proto__ 属性，指向创建该对象的函数的prototype