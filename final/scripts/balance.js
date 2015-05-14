/*
Matthew Self
March 10, 2015
CSS166AA
Mr. Anderson
*/

// Estabslihing macro arrays for functions
var balances = [];
var transactions = [];

var $ = function (id) {
    return document.getElementById(id);
}

// Gathering user input
var update_display = function() {
	$("startBal").value = get_startBal(transactions);
	$("totalDep").value = get_totalDep(transactions);
	$("totalWd").value = get_totalWd(transactions);
	$("endBal").value = get_endBal(transactions);
	
	$("date").value = "";
	$("amount").value = "";
	
	$("date").focus();
	
	$("results").value = getResults(transactions);
}

// This function pushes transaction data to "results" textarea
var addTrans_click = function () {
	var trans = [];
	trans["date"] = $("date").value;
	trans["amount"] = parseFloat($("amount").value);
	trans["type"] = $("type").value;
	
	if (trans["date"] == "") return;
	if (isNaN(trans["amount"])) return;
		
	transactions.push(trans);
	update_display(); 
}


// This function estbalishes formating and returns for "results" textarea
var pad_left = function(text, width, pad) { 
	var result = text.toString();
	while (result.length < width) {
		result = pad + result;
	}
	return result; 
}

// More formatting for "results"
var pad_right = function(text, width, pad) { 
	var result = text.toString();
	while (result.length < width) {
		result = result + pad;
	}
	return result;  
}

// Calculation for "results"
var getResults = function(results) { 
	if (results.length == 0) {
		return "";
	}

// Textarea formatting
	var balance = 2000;  
	var list = pad_right("Date", 12, " ");
	list += pad_right("Amount", 12, " ");
	list += pad_right("Running Balance", 15, " ") + "\n";
	list += pad_right("", 11, "-") + " ";
	list += pad_right("", 11, "-") + " ";
	list += pad_right("", 15, "-") + "\n";
	
	for (var i = 0; i < results.length; i++) {  // Balance calculation loop
 		var trans = results[i];
		list += pad_right(trans["date"], 12, " ");
		if(trans["type"] == "withdrawal") // Withdrawal adjustment
		{
			balance -= trans["amount"]
			list += "$" + pad_left( "-" + trans["amount"].toFixed(2), 11, " ") + " ";
		} else { //for Deposits
			balance += trans["amount"]
			list += "$" + pad_left( trans["amount"].toFixed(2), 11, " ") + " ";
		}
				
		list += "$" + pad_left(balance.toFixed(2), 14, " ") + "\n";		
	}
	return list;
}

// This function tracks the running balance
var get_runningBalance = function(results) { 
	var runningBalance = 0, amount;
	for (var i in results) {
		runningBalance =  startBal - "amount" ;
		runningBalance += parseInt(runningBalance.toFixed(2));
	}
	return runningBalance;
}

// Establishes $2,000 starting balance
var get_startBal = function(transactions){ 
	return 2000;
}

// Counting total deposits here
var get_totalDep = function(transactions){  
	var totalDep = 0;
	for(var i = 0; i < transactions.length; i++){
		var trans = transactions[i];
		if(trans["type"] == "deposit")
		{
			totalDep += trans["amount"]
		}
	}
	return totalDep;
}

// Counting total withdrawals here
var get_totalWd = function(transactions){ 
	var totalWd = 0;
	for(var i = 0; i < transactions.length; i++){
		var trans = transactions[i];
		if(trans["type"] == "withdrawal")
		{
			totalWd -= trans["amount"]
		}
	}
	return totalWd;
}

// Calculating ending balance here
var get_endBal = function(transactions){ 
	var balance = 2000;
	for(var i = 0; i < transactions.length; i++){
		var trans = transactions[i];
		if(trans["type"] == "withdrawal")
		{
			balance -= trans["amount"]
		} else { //Is Deposit
			balance += trans["amount"]
		}
	}
	return balance.toFixed(2);
}

// Event handlers to control this beast
window.onload = function () {
	$("addTrans").onclick = addTrans_click;
	$("date").focus();
}