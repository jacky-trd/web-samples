
//数字键点击样式控制
var keyNumbers = document.getElementsByClassName('number-key');

for(var i = 0; i < keyNumbers.length; i++) {
    
    var keyNumber = keyNumbers[i];
   	
   	keyNumber.onmousedown = function(){
		this.style.color = '#FFFFFF';
		this.style.background = '#383838';
	}

	keyNumber.onmouseup = function(){
		this.style.color = '#383838';
		this.style.background = '#D0CFCF';
	}
}

//基本计算键点击样式控制
var keyBasicCalcs = document.getElementsByClassName('basic-calc-key');

for(var i = 0; i < keyBasicCalcs.length; i++) {
    
    var keyBasicCalc = keyBasicCalcs[i];
   	
   	keyBasicCalc.onmousedown = function(){
		this.style.color = '#383838';
		this.style.background = '#D0CFCF';
	}

	keyBasicCalc.onmouseup = function(){
		this.style.color = '#FFFFFF';
		this.style.background = '#999999';
	}
}

//复杂计算键点击样式控制
var keyComplexCalcs = document.getElementsByClassName('complex-calc-key');

for(var i = 0; i < keyComplexCalcs.length; i++) {
    
    var keyComplexCalc = keyComplexCalcs[i];
   	
   	keyComplexCalc.onmousedown = function(){
		this.style.color = '#383838';
		this.style.background = '#D0CFCF';
	}

	keyComplexCalc.onmouseup = function(){
		this.style.color = '#FFFFFF';
		this.style.background = '#383838';
	}
}

//空能键点击样式控制
var keyFuncs = document.getElementsByClassName('func-key');

for(var i = 0; i < keyFuncs.length; i++) {
    
    var keyFunc = keyFuncs[i];
   	
   	keyFunc.onmousedown = function(){
		this.style.color = '#383838';
		this.style.background = '#FAC33D';
	}

	keyFunc.onmouseup = function(){
		this.style.color = '#FFFFFF';
		this.style.background = '#FA9905';
	}
}