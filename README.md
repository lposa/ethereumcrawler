# ethereumcrawler
Ethereum Crawler using web3.py (Web3 and Python)

-Make sure you have web3 installed and imported in the project
-You can use my infura.io endpoint, or you can create your own project on Infura and use its endpoint, the code has a comment on where you need to put the endpoint. 
-Run the code, a menu will appear with options you have. Everything will be recorded in text files, so you can check the results there. I know it is not the ideal solution, but it works for now and could be updated to a database in the future. 
-The 4 text files created are balance.txt (which will show the balance of an account the user enters), transactions.txt (which will show info about a transaction which hash has been entered by the user) , blockInfo.txt (which will show info about a block which number a user entered), and latest.txt (which will show the info of the latest block)


Transaction checker using web3.js (Web3 and JavaScript)

-Make sure you have web3 installed and imported in the project
-You can use my infura.io endpoint, or you can create your own project on Infura and use its endpoint, the code has a comment on where you need to put the endpoint. 
-This script doesn’t get user input, but you can change the address in the code if you want to. 
-The code checks all transactions of an address of the latest block in real time, so this works, but only if you manage to get an address that will happen to have a transaction happen in the time you are running the script

The output should something like this: 

Searching block 5359967
Transactions found on block 5359967
{
 address: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'
 value: '0.005',
 timestamp: 2020-11-18T16:17:16.949Z

}
