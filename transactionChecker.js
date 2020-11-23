const Web3=require('web3');

class TransactionChecker{
    web3;
    account;

    constructor(projectId,account){  //projectID is from infura.io, account whatever account you choose
        this.web3=new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + projectId)); //infura endpoint id
        this.account = account.toLowerCase();
    }

    async checkBlock(){
        let block = await this.web3.eth.getBlock('latest'); //get latest block
        let number = block.number;
        console.log('Searching block ' + number);

        if (block != null && block.transactions != null){
            for (let txHash of block.transactions){
                let tx=await this.web3.eth.getTransaction(txHash);
                if(this.account == tx.to.toLowerCase()){
                    console.log('Transaction found on block');
                    console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value,éther),timestamp: new Date()});
                }
            }
        }
    }
}


let txChecker=new TransactionChecker('1fa377d7c3a642ff8f4a8ffb75340189','0x033eF6db9FBd0ee60E2931906b987Fe0280471a0') 
txChecker.checkBlock();