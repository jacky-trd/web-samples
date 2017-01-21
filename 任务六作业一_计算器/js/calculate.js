//存储操作数与操作符
var numberQueue = new Array();
//对应存储按钮，本设计中只能存储一个最近数字
var tempSave = new Array();
//输出结果
var textOutput = document.getElementById("output");
//存储指示
var saveIndicator = document.getElementById("save-indicator");
//数字键
var keyOne = document.getElementById("one");
var keyTwo = document.getElementById("two");
var keyThree = document.getElementById("three");
var keyFour = document.getElementById("four");
var keyFive = document.getElementById("five");
var keySix = document.getElementById("six");
var keySeven = document.getElementById("seven");
var keyEight = document.getElementById("eight");
var keyNine = document.getElementById("nine");
var keyZero = document.getElementById("zero");
var keyPoint = document.getElementById("point");
//基本计算键
var keyPlus = document.getElementById("plus");
var keyMinus = document.getElementById("minuse");
var keyMultiply = document.getElementById("multiply");
var keyDivide = document.getElementById("divide");
//等号键
var keyEqual = document.getElementById("equal");
//重置键
var keyReset = document.getElementById("reset");
//清屏键
var keyClearScreen = document.getElementById("clear-screen");
//存储键
var keySave = document.getElementById("save");
//取存键
var keyRestore = document.getElementById("restore");
//取反键
var keyOpposite = document.getElementById("opposite");
//倒数键
var keyReciprocal = document.getElementById("reciprocal");
//开方键
var keyRadic = document.getElementById("radic");
//flag：是否发生错误
var hasError = false;
//flag：最近一次点击基本计算键
var IsLastKeyOperator = false;
//flag：最近一次点击复杂计算键
var IsLastKeyComplexOperator = false;
//flag：最近一次点击等号键
var IsLastKeyEqual = false;

keyOne.onclick = function(){
	pressNumberKey("1");
}

keyTwo.onclick = function(){
	pressNumberKey("2");
}

keyThree.onclick = function(){
	pressNumberKey("3");
}

keyFour.onclick = function(){
	pressNumberKey("4");
}

keyFive.onclick = function(){
	pressNumberKey("5");
}

keySix.onclick = function(){
	pressNumberKey("6");
}

keySeven.onclick = function(){
	pressNumberKey("7");
}

keyEight.onclick = function(){
	pressNumberKey("8");
}

keyNine.onclick = function(){
	pressNumberKey("9");
}

keyZero.onclick = function(){
	pressNumberKey("0");
}

keyPoint.onclick = function(){
	pressNumberKey(".");
}

function pressNumberKey(number){
	//如果当前显示0，或者出错，或者上一次用户点击的是计算键，等号键，则从头开始输入数字
	if((textOutput.innerHTML == "0") || hasError || IsLastKeyOperator || IsLastKeyEqual || IsLastKeyComplexOperator){
		textOutput.innerHTML = number;
	}
	else{
		//否则连接数字字符串
		textOutput.innerHTML = textOutput.innerHTML + number;
	}
	//设置flag
	IsLastKeyOperator = false;
	IsLastKeyEqual = false;
}

keyPlus.onclick = function(){
	pressBasicCalKey("+");
}

keyMinus.onclick = function(){
	pressBasicCalKey("-");
}

keyMultiply.onclick = function(){
	pressBasicCalKey("*");
}

keyDivide.onclick = function(){
	pressBasicCalKey("/");
}

function pressBasicCalKey(operator){
	//如果当前已经出错则直接返回
	if(hasError){
		return
	}

	//如果上一次用户点击的是计算键，则此次不计算，仅仅替换计算键
	if(IsLastKeyOperator){
		var tempNumber = numberQueue.pop();
		numberQueue.pop();
		numberQueue.unshift(tempNumber);
		numberQueue.unshift(operator);
		return;
	}

	if(numberQueue.length == 2){
		//计算上次结果
		var result = calculate();
		
		if(!hasError)
		{
			//上次结果和本次操作符入队列
			numberQueue.unshift(result);
			numberQueue.unshift(operator);
			textOutput.innerHTML = result;
		}
	}
	else{
		//不计算，操作数和操作符入队列
		numberQueue.unshift(Number(textOutput.innerHTML));
		numberQueue.unshift(operator);
	}
	//设置flag
	IsLastKeyOperator = true;
	IsLastKeyEqual = false;
	IsLastKeyComplexOperator = false;
}

keyEqual.onclick = function(){
	pressEqual();
}

function pressEqual(){
	//如果当前已经出错则直接返回
	if(IsLastKeyOperator || hasError){
		return;
	}

	if(numberQueue.length == 2){
		//计算
		var result = calculate();
		//没有错误则显示结果，并设置flag
		if(!hasError){
			textOutput.innerHTML = result;
			numberQueue = [];
			IsLastKeyEqual = true;	
			IsLastKeyComplexOperator = false;
		}		
	}
}

function calculate(){
	//获取操作数和操作符
	var firstNumber = numberQueue.pop();
	var lastOperator = numberQueue.pop();
	var secondNumber = Number(textOutput.innerHTML);
	var result = 0;
	
	//计算
	switch(lastOperator){
		case "+":
			result = firstNumber + secondNumber;
			break;
		case "-":
			result = firstNumber - secondNumber;
			break;
		case "*":
			result = firstNumber * secondNumber;
			break;
		case "/":
			//除数为零则出错
			if(secondNumber == 0){
				reset();
				textOutput.innerHTML = "Err";
				hasError = true;
			}
			else{
				result = firstNumber / secondNumber;
			}			
			break;
		default:
			hasError = true;
			alert("Incorrect operator");
	}

	//结果为NaN则出错
	if(isNaN(result)){
		reset();
		textOutput.innerHTML = "Err";
		hasError = true;
	}

	return result;
}

keyReset.onclick = function(){
	reset();
}

//重置
function reset(){
	hasError = false;
	IsLastKeyOperator = false;
	IsLastKeyComplexOperator = false;
	IsLastKeyEqual = false;
	numberQueue = [];
	tempSave = [];
	saveIndicator.style.visibility = "hidden";
	textOutput.innerHTML = "0"
}

//清屏
keyClearScreen.onclick = function(){
	textOutput.innerHTML = "0"
	hasError = false;
}

//保存当前数字
keySave.onclick = function(){
	if(hasError){
		return;
	}

	tempSave = [];
	var tempNumber = Number(textOutput.innerHTML);
	tempSave.push(tempNumber);
	saveIndicator.style.visibility = "visible";
}

//取出保存的数字
keyRestore.onclick = function(){
	if(hasError){
		return
	}

	var tempNumber = tempSave.pop();
	textOutput.innerHTML = tempNumber;
}

//取反
keyOpposite.onclick = function(){
	if(hasError){
		return
	}

	var tempNumber = Number(textOutput.innerHTML);
	tempNumber = tempNumber * (-1);
	textOutput.innerHTML = tempNumber;
}

//开方
keyRadic.onclick = function(){
	if(hasError){
		return
	}

	var tempNumber = Number(textOutput.innerHTML);
	tempNumber = Math.sqrt(tempNumber);
	textOutput.innerHTML = tempNumber;
	IsLastKeyComplexOperator = true;
}

//倒数
keyReciprocal.onclick = function(){
	if(hasError){
		return
	}

	var tempNumber = Number(textOutput.innerHTML);

	if(tempNumber == 0){
		reset();
		textOutput.innerHTML = "Err";
		hasError = true;
	}

	tempNumber = 1/tempNumber;
	textOutput.innerHTML = tempNumber;
	IsLastKeyComplexOperator = true;
}