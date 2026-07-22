let balance = 5000;

let pinNumber = "1234";

let statement = [];

function login()
{

let pin = document.getElementById("pin").value;

if(pin===pinNumber)
{

document.getElementById("loginPage").style.display="none";

document.getElementById("atmPage").style.display="block";

}

else
{

document.getElementById("loginMsg").innerHTML="Invalid PIN";

}

}

function updateBalance()
{

document.getElementById("balance").innerHTML=balance;

}

function deposit()
{

let amount=Number(document.getElementById("amount").value);

if(amount<=0)
{

alert("Enter valid amount");

return;

}

balance+=amount;

statement.push("Deposited ₹"+amount);

updateBalance();

}

function withdraw()
{

let amount=Number(document.getElementById("amount").value);

if(amount<=0)
{

alert("Enter valid amount");

return;

}

if(amount>balance)
{

alert("Insufficient Balance");

return;

}

balance-=amount;

statement.push("Withdraw ₹"+amount);

updateBalance();

}

function checkBalance()
{

document.getElementById("output").innerHTML=

"<h3>Current Balance : ₹"+balance+"</h3>";

}

function miniStatement()
{

let text="<h3>Mini Statement</h3>";

for(let i=0;i<statement.length;i++)
{

text+=statement[i]+"<br>";

}

if(statement.length===0)
{

text+="No Transactions";

}

document.getElementById("output").innerHTML=text;

}

function logout()
{

location.reload();

}
