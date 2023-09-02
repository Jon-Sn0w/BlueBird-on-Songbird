const web3 = new Web3(window.ethereum);
let account = null;
let blueBirdContract = null;
const blueBirdContractAddress = '0x29D3dfb4bd040f04Bd0e01C28A4Cb9dE14b47E13'; // Replace with contract address
const blueBirdContractABI = [
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
		"indexed": true,
		"internalType": "address",
		"name": "sender",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "FeeTransferred",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "totalMinedSupply",
		"type": "uint256"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "milestoneTarget",
		"type": "uint256"
	}
	],
	"name": "MilestoneReached",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "nextMilestone",
		"type": "uint256"
	}
	],
	"name": "NextMilestoneUpdated",
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
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}
	],
	"name": "Paused",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "user",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "RewardClaimed",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "sender",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "tokenAmount",
		"type": "uint256"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "rewardAmount",
		"type": "uint256"
	}
	],
	"name": "TokenTransacted",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "sender",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "TokenTransferred",
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
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}
	],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "tokenAddress",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenMiningRate",
		"type": "uint256"
	}
	],
	"name": "addEligibleToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_address",
		"type": "address"
	}
	],
	"name": "addToBlacklist",
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
	"inputs": [],
	"name": "claimReward",
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
	"inputs": [],
	"name": "emergencyPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyUnpause",
	"outputs": [],
	"stateMutability": "nonpayable",
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
	"name": "excludeFromMaxBalance",
	"outputs": [],
	"stateMutability": "nonpayable",
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
	"name": "includeInMaxBalance",
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
	"inputs": [
	{
		"internalType": "address",
		"name": "tokenAddress",
		"type": "address"
	}
	],
	"name": "removeEligibleToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_address",
		"type": "address"
	}
	],
	"name": "removeFromBlacklist",
	"outputs": [],
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
		"internalType": "uint256",
		"name": "newProjectFundsRate",
		"type": "uint256"
	}
	],
	"name": "setProjectFundsRate",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "newPeriod",
		"type": "uint256"
	}
	],
	"name": "setRewardClaimPeriod",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "newTeamAdvisorsRate",
		"type": "uint256"
	}
	],
	"name": "setTeamAdvisorsRate",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "tokenAddress",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "newMiningRate",
		"type": "uint256"
	}
	],
	"name": "setTokenMiningRate",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "tokenAddress",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	},
	{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}
	],
	"name": "transactTokens",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "to",
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
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
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
		"internalType": "address",
		"name": "_projectFunds",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "_teamAdvisors",
		"type": "address"
	}
	],
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
	"name": "currentMilestoneIndex",
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
	"name": "currentMiningRate",
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
	"inputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "eligibleTokenAddresses",
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
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"name": "eligibleTokens",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_address",
		"type": "address"
	}
	],
	"name": "isBlacklisted",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"name": "isExcludedFromMaxBalance",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "MAX_ALLOWED_BALANCE_PERCENTAGE",
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
	"name": "MAX_SUPPLY",
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
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "milestones",
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
	"inputs": [],
	"name": "nextMilestone",
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
	"name": "paused",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "previousMilestone",
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
	"name": "projectFunds",
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
	"name": "projectFundsRate",
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
	"name": "remainingSupply",
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
	"name": "rewardClaimPeriod",
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
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"name": "teamAdvisorAllocations",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "claimed",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "lastClaim",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "teamAdvisors",
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
	"name": "teamAdvisorsRate",
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
		"name": "",
		"type": "address"
	}
	],
	"name": "tokenMiningRates",
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
	"name": "tokensMinedSinceLastMilestone",
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
	"name": "totalMinedSupply",
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
},
{
	"inputs": [],
	"name": "TRANSFER_LIMIT",
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
];// Replace with contract ABI

const approveFunctionABI = [
{
	"constant": false,
	"inputs": [
	{
		"name": "_spender",
		"type": "address"
	},
	{
		"name": "_value",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [
	{
		"name": "",
		"type": "bool"
	}
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}
];

document.getElementById('connectButton').addEventListener('click', connect);
document.getElementById('retrieveTokenAddressButton').addEventListener('click', retrieveTokenAddress);
document.getElementById('approveButton').addEventListener('click', approveToken);
document.getElementById('transactButton').addEventListener('click', transactTokens);
document.getElementById('claimRewardButton').addEventListener('click', claimReward);

async function connect() {
	try {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		account = accounts[0];
		document.getElementById('account').innerText = truncateAddress(account);
		blueBirdContract = new web3.eth.Contract(blueBirdContractABI, blueBirdContractAddress);
		populateEligibleTokensDropdown();
	} catch (error) {
		console.error("Error connecting to wallet", error);
	}
}

async function retrieveTokenAddress() {
	try {
		const dropdown = document.getElementById('eligibleTokensDropdown');
		const selectedTokenIndex = dropdown.selectedIndex;
		const tokenName = dropdown.options[selectedTokenIndex].value;
		const tokenAddress = await getTokenAddress(tokenName);
		const truncatedTokenAddress = truncateAddress(tokenAddress);
		
		const approveTokenAddressInput = document.getElementById('approveTokenAddress');
		approveTokenAddressInput.value = `${tokenName} (${truncatedTokenAddress})`;
		approveTokenAddressInput.setAttribute('data-full-address', tokenAddress);
		
		const tokenAddressInput = document.getElementById('tokenAddress');
		tokenAddressInput.value = `${tokenName} (${truncatedTokenAddress})`;
		tokenAddressInput.setAttribute('data-full-address', tokenAddress);
		
	} catch (error) {
		console.error("Error retrieving token address", error);
	}
}

async function approveToken() {
	const spinnerElement = document.getElementById('spinner');
	const approveMessageElement = document.getElementById('approveMessage');
	const successIconElement = document.getElementById('success-icon');
	const failureIconElement = document.getElementById('failure-icon');
	
	try {
		const tokenName = document.getElementById('eligibleTokensDropdown').value;
		const tokenAddress = await getTokenAddress(tokenName);
		const tokenContract = new web3.eth.Contract(approveFunctionABI, tokenAddress);
		
		const approveAmount = document.getElementById('approveAmount').value;
		if (!approveAmount) {
			throw new Error('Approve amount is required');
		}
		const approveAmountInWei = web3.utils.toWei(approveAmount, 'ether');
		
		spinnerElement.style.display = 'block';
		successIconElement.style.display = 'none';
		failureIconElement.style.display = 'none';
		
		await tokenContract.methods.approve(blueBirdContractAddress, approveAmountInWei).send({ from: account });
		
		spinnerElement.style.display = 'none';
		approveMessageElement.innerText = 'Token approved successfully';
		successIconElement.style.display ='block';
		
		setTimeout(() => {
			approveMessageElement.innerText = '';
			successIconElement.style.display = 'none';
		}, 3000);
	} catch (error) {
		console.error("Error approving token", error);
		
		spinnerElement.style.display = 'none';
		approveMessageElement.innerText = 'Failed to approve token';
		failureIconElement.style.display = 'block';
		
		setTimeout(() => {
			approveMessageElement.innerText = '';
			failureIconElement.style.display = 'none';
		}, 3000);
	}
}

async function transactTokens() {
	try {
		const tokenAddressInput = document.getElementById('tokenAddress');
		const fullTokenAddress = tokenAddressInput.getAttribute('data-full-address');
		const recipientInput = document.getElementById('recipient');
		const recipient = web3.utils.toChecksumAddress(recipientInput.value); // Convert recipient address to checksum format
		const tokenAmountString = document.getElementById('tokenAmount').value;
		
		// Convert input to uint256 value
		const tokenAmount = web3.utils.toWei(tokenAmountString, 'ether');
		
		// Check if the recipient is a contract address on Ethereum Mainnet
		const isContractAddressEthereum = await web3.eth.getCode(recipient) !== '0x';
		
		// Check if the recipient is a contract address on Flare Network
		const providerFlare = new Web3.providers.HttpProvider('https://flare-api.flare.network/ext/C/rpc');
		const web3Flare = new Web3(providerFlare);
		const isContractAddressFlare = await web3Flare.eth.getCode(recipient) !== '0x';
		
		if (isContractAddressEthereum || isContractAddressFlare) {
			throw new Error('Sending tokens to contract addresses is not allowed.');
		}
		
		// Debugging: Log the values
		console.log('Full token address:', fullTokenAddress);
		console.log('Recipient:', recipient);
		console.log('Token amount:', tokenAmount);
		
		// Perform the token transaction
		const spinnerElement = document.getElementById('spinner');
		const transactMessageElement = document.getElementById('transactMessage');
		const successIconElement = document.getElementById('success-icon');
		const failureIconElement = document.getElementById('failure-icon');
		
		spinnerElement.style.display = 'block';
		transactMessageElement.innerText = 'Waiting for transaction confirmation...';
		successIconElement.style.display = 'none';
		failureIconElement.style.display = 'none';
		
		const tx = await blueBirdContract.methods.transactTokens(fullTokenAddress, tokenAmount, recipient).send({ from: account });
		
		console.log(tx);
		transactMessageElement.innerText = 'Transaction successful.';
		spinnerElement.style.display = 'none';
		successIconElement.style.display = 'block';
		
		// Clear the input fields
		tokenAddressInput.value = '';
		recipientInput.value = '';
		document.getElementById('tokenAmount').value = '';
		
		setTimeout(() => {
			successIconElement.style.display = 'none';
		}, 3000); // Hide the success icon after 3 seconds
	} catch (error) {
		console.error("Error transacting tokens", error);
		document.getElementById('transactMessage').innerText = 'Transaction failed';
		document.getElementById('failure-icon').style.display = 'block';
		document.getElementById('spinner').style.display = 'none';
		
		setTimeout(() => {
			document.getElementById('failure-icon').style.display = 'none';
		}, 3000); // Hide the failure icon after 3 seconds
	}
}


async function claimReward() {
	const spinnerElement = document.getElementById('spinner');
	const successIconElement = document.getElementById('success-icon');
	const failureIconElement = document.getElementById('failure-icon');
	const rewardMessageElement = document.getElementById('rewardMessage');
	
	try {
		spinnerElement.style.display = 'block';
		rewardMessageElement.innerText = 'Waiting for reward claim...';
		successIconElement.style.display = 'none';
		failureIconElement.style.display = 'none';
		
		const tx = await blueBirdContract.methods.claimReward().send({ from: account });
		console.log(tx);
		
		spinnerElement.style.display = 'none';
		rewardMessageElement.innerText = 'Reward claimed successfully';
		successIconElement.style.display = 'block';
		
		setTimeout(() => {
			rewardMessageElement.innerText = '';
			successIconElement.style.display = 'none';
		}, 3000);
	} catch (error) {
		console.error("Error claiming reward", error);
		
		spinnerElement.style.display = 'none';
		rewardMessageElement.innerText = 'Failed to claim reward';
		failureIconElement.style.display = 'block';
		
		setTimeout(() => {
			rewardMessageElement.innerText = '';
			failureIconElement.style.display = 'none';
		}, 3000);
	}
}

function truncateAddress(address) {
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

async function getTokenAddress(tokenName) {
	// Replace the addresses below with the actual addresses of your tokens

	if (tokenName === 'BLZLP-WSGB/BBX') {
                return '0x3f3f7438c77fA68EbED3DFa752861299CD307110';
        }

        if (tokenName === 'BLZLP-WSGB/XAC') {
                return '0xa49259D33f8bEA503e59F3e75AF9d43A119598C0';
        }

        if (tokenName === 'BLZLP-WSGB/sPHX') {
                return '0x7afDe1497da4AeDecFaf6CC32FB0D83572C10426';
        }

        if (tokenName === 'Canary') {
		return '0xB2cD91b79df296ea181AA5f6d729E5136e1853A4';
	}
	if (tokenName === 'Oracle') {
		return '0xD7565b16b65376e2Ddb6c71E7971c7185A7Ff3Ff';
	}
	if (tokenName === 'WSGB') {
		return '0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED';
	}
	if (tokenName === 'AstralCredits') {
		return '0x61b64c643fCCd6ff34Fc58C8ddff4579A89E2723';
	}
	if (tokenName === 'SPARKS') {
		return '0xfd2a0fD402828fDB86F9a9D5a760242AD7526cC0';
	}
	if (tokenName === 'SFORT') {
		return '0x9E2E6c16803878C18E54Ed74F05AeafCCe464626';
	}
	if (tokenName === 'PSB') {
		return '0xb2987753D1561570f726Aa373F48E77e27aa5FF4';
	}
	if (tokenName === 'CEN') {
		return '0x6E24E3635794D852738877624aaFbe0eba6e1580';
	}
	if (tokenName === 'CARE') {
		return '0xb1D60fA6FABd9A2Ad89960d070350552E47fb0D6';
	}
	if (tokenName === 'BEAST') {
		return '0x0D36197eCFd7332E9E006F5c89b5b4b69091CDff';
	}
	if (tokenName === 'EXFI') {
		return '0xC348F894d0E939FE72c467156E6d7DcbD6f16e21';
	}
	if (tokenName === 'sPHX') {
		return '0x7afDe1497da4AeDecFaf6CC32FB0D83572C10426';
	}
        if (tokenName === 'Sribbits') {
		return '0x399e279c814a3100065fceab8cba1ab114805344';
	}
      
	// You can add more tokens here
	// else if (tokenName === 'Another Token') {
	//     return '0x...';
	// }
}

function showNotification(message, isSuccess) {
	const notificationElement = document.getElementById('notification');
	const messageElement = notificationElement.querySelector('.message');
	
	messageElement.innerText = '';
	
	messageElement.innerText = message;
	
	notificationElement.classList.add('show');
	
	setTimeout(() => {
		notificationElement.classList.remove('show');
		messageElement.innerText = '';
	}, 5000);
}

async function populateEligibleTokensDropdown() {
	try {
		const eligibleTokens = ['BLZLP-WSGB/XAC', 'BLZLP-WSGB/sPHX', 'BLZLP-WSGB/BBX',  'Sribbits', 'Canary', 'Oracle', 'WSGB', 'AstralCredits', 'SPARKS', 'SFORT', 'PSB', 'CEN', 'CARE', 'BEAST', 'EXFI', 'sPHX']; // Add the names of the eligible tokens here
		const dropdown = document.getElementById('eligibleTokensDropdown');
		
		dropdown.innerHTML = '';
		
		eligibleTokens.forEach(token => {
			const option = document.createElement('option');
			option.value = token;
			option.text = token;
			dropdown.appendChild(option);
		});
	} catch (error) {
		console.error("Error populating eligible tokens dropdown", error);
	}
}
