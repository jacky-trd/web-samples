function calcDegree(){
	var score = parseInt(document.getElementById("score").value);

	// 错误处理
	if((score>100)||(score<0)){
		alert("请输入0到100之间的数字");
		return;
	}

	// 判断分数等级
	score = Math.floor(score/10);
	switch(score){
		case 10:
		case 9:
			displayResult("一等生");
			break;
		case 8:
			displayResult("二等生");
			break;
		case 7:
			displayResult("三等生");
			break;
		case 6:
			displayResult("四等生");
			break;
		case 5:
			displayResult("五等生");
			break;
		case 4:
			displayResult("六等生");
			break;
		case 3:
			displayResult("七等生");
			break;
		case 2:
			displayResult("八等生");
			break;
		case 1:
			displayResult("九等生");
			break;
		case 0:
			displayResult("十等生");
			break;
		default:
			alert("请输入0到100之间的数字");
			break;
	}
}

function displayResult(degree){
	// 显示结果
	document.getElementById("degree").innerText = degree;
}