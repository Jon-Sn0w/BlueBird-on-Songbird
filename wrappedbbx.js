let web3 = new Web3(window.ethereum);

// Replace with wrappedbbx contract ABI
const wrappedbbxABI = [
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "totalValue",
		"type": "uint256"
	}
	],
	"name": "DebugTotalValue",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}
	],
	"name": "addNFTToContract1",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}
	],
	"name": "addNFTToContract2",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}
	],
	"name": "addNFTToContract3",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}
	],
	"name": "decreaseAllowance",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}
	],
	"name": "deposit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address[]",
		"name": "contractsList",
		"type": "address[]"
	}
	],
	"name": "holdsNFTFromList",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}
	],
	"name": "increaseAllowance",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "transfer",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "sender",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}
	],
	"name": "unwrap",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}
	],
	"name": "allowance",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}
	],
	"name": "balanceOf",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "bbxAddress",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "bbxToken",
	"outputs": [
	{
		"internalType": "contract ERC20",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "decimals",
	"outputs": [
	{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [
	{
		"internalType": "string",
		"name": "",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "nftContracts1",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "nftContracts2",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "nftContracts3",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [
	{
		"internalType": "string",
		"name": "",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "tokenIdToValue",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
}
]; // Add ABI here

const bbxABI = [
{
	"inputs": [
	{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}
	],
	"name": "balanceOf",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
}
];

const bbxContractAddress = "0xA82879568427fAdbAE14fD368F894e6CA6dC129E";
const bbxContract = new web3.eth.Contract(bbxABI, bbxContractAddress);

const wrappedbbxAddress = '0x12144c971F275922e4160F48f86E50155DdC13d2';
const wrappedbbxContract = new web3.eth.Contract(wrappedbbxABI, wrappedbbxAddress);

const nftContracts1 = ["0x0D16aCAd2481047972E9ee3a034f6C118615B09d"];
const nftContracts2 = ["0xbD95Ab5c2b06057C2874bE1E12C16D567F29264A"];
const nftContracts3 = ["0x86A06A4634Bccfccdbe8F6eBC37b6c66Ebb83d7D"];

async function verifyNFTAccess() {
	const userAddress = document.getElementById('address').value;
	
	// Log the user address for debugging
	console.log("User Address:", userAddress);
	
	if (!userAddress || userAddress === "0x0000000000000000000000000000000000000000") {
		alert("Please connect a valid wallet.");
		return false; // Return false if no valid wallet is connected
	}
	
	try {
		const hasNFT1 = await wrappedbbxContract.methods.holdsNFTFromList(nftContracts1).call({ from: userAddress });
		console.log("Has NFT1:", hasNFT1); // Log the result
		alert(`PhoenixProject: ${hasNFT1 ? "True" : "False"}`);
		
		const hasNFT2 = await wrappedbbxContract.methods.holdsNFTFromList(nftContracts2).call({ from: userAddress });
		console.log("Has NFT2:", hasNFT2); // Log the result
		alert(`BlueBirdX: ${hasNFT2 ? "True" : "False"}`);
		
		const hasNFT3 = await wrappedbbxContract.methods.holdsNFTFromList(nftContracts3).call({ from: userAddress });
		console.log("Has NFT3:", hasNFT3); // Log the result
		alert(`AstralCredits_RRP=/>2000sgb: ${hasNFT3 ? "True" : "False"}`);
		
		const hasAccess = hasNFT1 && hasNFT2 && hasNFT3;
		console.log("Has Access:", hasAccess); // Log the final access result
		
		return hasAccess;
		
	} catch (error) {
		console.error("Error verifying NFT access:", error);
		alert("An error occurred while verifying NFT access. Please try again.");
		return false;
	}
}
async function getWrappedBBXBalance(address) {
	const wbbxBalanceInWei = await wrappedbbxContract.methods.balanceOf(address).call();
	const wbbxBalanceInEther = web3.utils.fromWei(wbbxBalanceInWei, 'ether');
	
	const bbxBalanceInWei = await bbxContract.methods.balanceOf(address).call();
	const bbxBalanceInEther = web3.utils.fromWei(bbxBalanceInWei, 'ether');
	
	return `WBBX: ${wbbxBalanceInEther}, BBX: ${bbxBalanceInEther}`;
}

function hideIconAfterDelay(iconId) {
	setTimeout(() => {
		document.getElementById(iconId).style.display = 'none';
	}, 3000);
}

async function deposit() {
	document.getElementById('depositSpinner').style.display = 'block';
	try {
		await depositBBX();
		document.getElementById('depositSuccessIcon').style.display = 'block';
		hideIconAfterDelay('depositSuccessIcon');
	} catch (error) {
		document.getElementById('depositFailureIcon').style.display = 'block';
		hideIconAfterDelay('depositFailureIcon');
	} finally {
		document.getElementById('depositSpinner').style.display = 'none';
	}
}

async function unwrap() {
	document.getElementById('unwrapSpinner').style.display = 'block';
	try {
		await unwrapWBBX();
		document.getElementById('unwrapSuccessIcon').style.display = 'block';
		hideIconAfterDelay('unwrapSuccessIcon');
	} catch (error) {
		document.getElementById('unwrapFailureIcon').style.display = 'block';
		hideIconAfterDelay('unwrapFailureIcon');
	} finally {
		document.getElementById('unwrapSpinner').style.display = 'none';
	}
}

async function transfer() {
	document.getElementById('transferSpinner').style.display = 'block';
	try {
		const recipient = document.getElementById('recipient').value;
		const amount = document.getElementById('transferAmount').value;
		await sendWrappedBBX(recipient, amount);
		document.getElementById('transferSuccessIcon').style.display = 'block';
		hideIconAfterDelay('transferSuccessIcon');
	} catch (error) {
		document.getElementById('transferFailureIcon').style.display = 'block';
		hideIconAfterDelay('transferFailureIcon');
	} finally {
		document.getElementById('transferSpinner').style.display = 'none';
	}
}

async function depositBBX() {
	const amountInEther = document.getElementById('depositAmount').value;
	const userAddress = document.getElementById('address').value;
	const amountInWei = web3.utils.toWei(amountInEther, 'ether');
	
	if (!userAddress || userAddress === "0x0000000000000000000000000000000000000000") {
		throw new Error("Please connect a valid wallet.");
	}
	
	const gasEstimate = await wrappedbbxContract.methods.deposit(amountInWei).estimateGas({ from: userAddress });
	await wrappedbbxContract.methods.deposit(amountInWei).send({ from: userAddress, gas: gasEstimate });
}

async function unwrapWBBX() {
	const amountInEther = document.getElementById('unwrapAmount').value;
	const userAddress = document.getElementById('address').value;
	const amountInWei = web3.utils.toWei(amountInEther, 'ether');
	
	if (!userAddress || userAddress === "0x0000000000000000000000000000000000000000") {
		throw new Error("Please connect a valid wallet.");
	}
	
	const gasEstimate = await wrappedbbxContract.methods.unwrap(amountInWei).estimateGas({ from: userAddress });
	await wrappedbbxContract.methods.unwrap(amountInWei).send({ from: userAddress, gas: gasEstimate });
}

async function sendWrappedBBX(toAddress, amount) {
	const accounts = await web3.eth.getAccounts();
	const userAccount = accounts[0];
	
	if (!userAccount) {
		throw new Error("Please connect your wallet.");
	}
	
	const amountInWei = web3.utils.toWei(amount, 'ether');
	const gasEstimate = await wrappedbbxContract.methods.transfer(toAddress, amountInWei).estimateGas({ from: userAccount });
	await wrappedbbxContract.methods.transfer(toAddress, amountInWei).send({ from: userAccount, gas: gasEstimate });
}



