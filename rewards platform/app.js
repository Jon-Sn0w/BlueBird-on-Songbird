const web3 = new Web3(window.ethereum);

const masterNestABI = [{"type":"constructor","inputs":[{"type":"address","name":"_feather","internalType":"contract FeatherSwapToken"},{"type":"address","name":"_devAddress","internalType":"address"},{"type":"uint256","name":"_tokenPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"_withdrawFeeBP","internalType":"uint16"},{"type":"uint256","name":"_lockTime","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"devRewardPercent","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract FeatherSwapToken"}],"name":"feather","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"featherAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingToken","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accTokenPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"withdrawFeeBP","internalType":"uint16"},{"type":"uint256","name":"lockTime","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"_withdrawFeeBP","internalType":"uint16"},{"type":"uint256","name":"_lockTime","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_dev","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevRewardPercent","inputs":[{"type":"uint256","name":"_rewardPercent","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStartBlock","inputs":[{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalStakedAmount","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_tokenPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMultiplier","inputs":[{"type":"uint256","name":"multiplierNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"},{"type":"uint256","name":"depositTime","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"user","indexed":true},{"type":"address","name":"newAddress","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"goosePerBlock","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"setLockTime","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"lockTime","indexed":false}],"anonymous":false}];


const rewardsContractABI = [
{
	"inputs": [
	{
		"internalType": "address",
		"name": "_masterNest",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "_administrator",
		"type": "address"
	}
	],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "newAdministrator",
		"type": "address"
	}
	],
	"name": "AdministratorChanged",
	"type": "event"
},
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
	"name": "OwnerWithdrawn",
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
		"internalType": "uint256",
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "PoolAdded",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "PoolRemoved",
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
		"name": "pid",
		"type": "uint256"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "RewardsClaimed",
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
	"name": "RewardsDeposited",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "admin",
		"type": "address"
	}
	],
	"name": "RewardsWiped",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "admin",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "uint256",
		"name": "timestamp",
		"type": "uint256"
	}
	],
	"name": "SnapshotTaken",
	"type": "event"
},
{
	"inputs": [],
	"name": "REWARDS_TOKEN",
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
	"name": "activePools",
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
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "addPool",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "administrator",
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
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "depositRewards",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address[]",
		"name": "users",
		"type": "address[]"
	},
	{
		"internalType": "uint256[]",
		"name": "pids",
		"type": "uint256[]"
	},
	{
		"internalType": "uint256[]",
		"name": "amounts",
		"type": "uint256[]"
	}
	],
	"name": "forceSnapshot",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "getRewardsBalance",
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
	"name": "isPoolActive",
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
	},
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "isUserRegisteredForPool",
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
	"name": "lastClaimed",
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
	"name": "masterNest",
	"outputs": [
	{
		"internalType": "contract IMasterNest",
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
	},
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"name": "owedRewards",
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
	"inputs": [
	{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}
	],
	"name": "ownerWithdrawAll",
	"outputs": [],
	"stateMutability": "nonpayable",
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
	"name": "poolRewards",
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
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "registerForPool",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "user",
		"type": "address"
	}
	],
	"name": "registerUserForAllPools",
	"outputs": [],
	"stateMutability": "nonpayable",
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
	"name": "registeredUsers",
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
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "removePool",
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
		"internalType": "address",
		"name": "_administrator",
		"type": "address"
	}
	],
	"name": "setAdministrator",
	"outputs": [],
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
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "unregisterFromPool",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "user",
		"type": "address"
	}
	],
	"name": "unregisterUserFromAllPools",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"name": "userPoolBalances",
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
	"name": "wipeOwedRewards",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "withdrawOwedRewards",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}
];

const domainAddressABI = {
	"type": "function",
	"stateMutability": "view",
	"outputs": [
	{
		"type": "string",
		"name": "",
		"internalType": "string"
	}
	],
	"name": "defaultNames",
	"inputs": [
	{
		"type": "address",
		"name": "",
		"internalType": "address"
	}
	]
};

const masterNestAddress = '0x6FBF12d3CEEcd9d77B5fD922cdf483052ad320ab';
const rewardsContractAddress = '0x235C9EaC890e393f107651464388cf9ADd2EE126';
const domainAddress = "0xBDACF94dDCAB51c39c2dD50BffEe60Bb8021949a";

const masterNestContract = new web3.eth.Contract(masterNestABI, masterNestAddress);
const rewardsContract = new web3.eth.Contract(rewardsContractABI, rewardsContractAddress);

const poolIds = {
	"fthr_wsgb": 2,
	"bbx_wsgb": 12,
	"xac_wsgb": 11,
	"sphx_wsgb": 6,
	"fthr_sphx": 3,
	"fthr_bbx": 5,
	"fthr_xac": 4,
	"bbx_sphx": 9,
	"bbx_xac": 15
};

let registeredUsers = []; // List to store registered user addresses

async function getUserInfo(pid, userAddress) {
	try {
		const userInfo = await masterNestContract.methods.userInfo(pid, userAddress).call();
		return userInfo;
	} catch (error) {
		console.error('Error fetching user info:', error);
	}
}

async function getSGNameForAddress(address) {
	try {
		const domainContract = new web3.eth.Contract([domainAddressABI], domainAddress);
		const domainName = await domainContract.methods.defaultNames(address).call();
		if (domainName && domainName !== '') {
			return `${domainName}.sgb`;
		}
		return null;
	} catch (error) {
		console.error("Error fetching SGB name", error);
		return null;
	}
}

async function registerUserInRewardsContract(userAddress) {
	if (registeredUsers.includes(userAddress)) {
		alert("User already registered.");
		return;
	}
	try {
		const tx = await rewardsContract.methods.registerUserForAllPools(userAddress).send({ from: userAddress });
		if (tx.status) {
			console.log('User registered successfully.');
			registeredUsers.push(userAddress);
			
			// Send the address to your server
			sendAddressToServer(userAddress);
		} else {
			console.error('Transaction failed.');
		}
	} catch (error) {
		console.error('Error registering user in rewards contract:', error);
	}
}

function sendAddressToServer(address) {
	fetch('/saveAddress.php', {  // Adjust the endpoint if needed
		method: 'POST',
	   headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
	   },
	   body: `address=${address}`
	})
	.then(response => response.json())
	.then(data => {
		console.log('Address saved:', data.message);
	})
	.catch((error) => {
		console.error('Error:', error);
	});
}

// Helper function to format balance
function formatBalance(balance, decimals = 18) {
    // Convert balance to a BigNumber to handle large integers safely
    const balanceBN = new Web3.utils.BN(balance);
    // Convert from Wei (or the smallest unit of the token) to Ether (or the equivalent whole unit)
    const divisor = new Web3.utils.BN(10).pow(new Web3.utils.BN(decimals));
    // Get the balance in Ether as a fixed-point number with two decimal places
    const balanceInEther = balanceBN.div(divisor).toString() + '.' + balanceBN.mod(divisor).toString().padStart(decimals, '0').substring(0, 2);
    return balanceInEther;
}

async function fetchUserBalances(userAddress) {
    for (const [poolName, pid] of Object.entries(poolIds)) {
        const userInfo = await getUserInfo(pid, userAddress);
        // Assuming the token uses 18 decimal places
        const formattedAmount = formatBalance(userInfo.amount, 18);
        document.getElementById(`${poolName}_amount`).innerText = formattedAmount;
    }
}

async function checkEstimatedRewards(userAddress) {
    const rewards = await checkOwedRewards(userAddress);
    let totalEstimatedReward = new Web3.utils.BN('0'); // Use BigNumber for safe addition
    for (const [poolName, amount] of Object.entries(rewards)) {
        totalEstimatedReward = totalEstimatedReward.add(new Web3.utils.BN(amount));
    }
    // Format the total estimated reward for display
    const formattedTotalReward = formatBalance(totalEstimatedReward, 18);
    alert(`Estimated Reward: ${formattedTotalReward} ETH. Note: This is only an estimate. Actual rewards distribution may vary.`);
}


async function checkOwedRewards(userAddress) {
	let rewards = {};
	for (const [poolName, pid] of Object.entries(poolIds)) {
		try {
			const owedReward = await rewardsContract.methods.owedRewards(pid, userAddress).call();
			rewards[poolName] = owedReward;
		} catch (error) {
			console.error(`Error fetching owed rewards for pool ${poolName}:`, error);
		}
	}
	return rewards;
}

async function connectWallet() {
	try {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		connectedEthereumAddress = accounts[0]; // Store the connected Ethereum address globally
		const sgbName = await getSGNameForAddress(connectedEthereumAddress);
		const displayAddress = sgbName || truncateAddress(connectedEthereumAddress); // Display SGB name if available, otherwise truncated address
		document.getElementById('address').innerText = displayAddress;
		
		// Call fetchUserBalances after successfully connecting to the wallet
		await fetchUserBalances(connectedEthereumAddress);
		
	} catch (error) {
		console.error("Error connecting to wallet", error);
	}
}

async function withdrawRewards() {
	const selectedPoolId = document.getElementById("poolDropdown").value;
	
	if (!connectedEthereumAddress) {
		console.error('No connected Ethereum address found. Please connect your wallet first.');
		return;
	}
	
	try {
		// Call the smart contract function with the selected pool ID
		const tx = await rewardsContract.methods.withdrawOwedRewards(selectedPoolId).send({ from: connectedEthereumAddress });
		if (tx.status) {
			console.log('Rewards withdrawn successfully.');
		} else {
			console.error('Transaction failed.');
		}
	} catch (error) {
		console.error('Error withdrawing rewards:', error);
	}
}

document.getElementById('withdrawRewardsButton').addEventListener('click', async () => {
	await withdrawRewards();
});

document.getElementById('connectWallet').addEventListener('click', async () => {
	if (window.ethereum) {
		await connectWallet();
	} else {
		console.error('Ethereum provider not detected');
	}
});

document.getElementById('registerUserButton').addEventListener('click', async () => {
	if (window.ethereum) {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_accounts' });
			const userAddress = accounts[0];
			await registerUserInRewardsContract(userAddress);
		} catch (error) {
			console.error('Error registering user in rewards contract:', error);
		}
	} else {
		console.error('Ethereum provider not detected');
	}
});

document.getElementById('updateBalancesButton').addEventListener('click', async () => {
	if (connectedEthereumAddress) {
		await fetchUserBalances(connectedEthereumAddress);
	} else {
		console.error('User address not found. Please connect your wallet first.');
	}
});

document.getElementById('checkRewardsButton').addEventListener('click', async () => {
	if (connectedEthereumAddress) {
		await checkEstimatedRewards(connectedEthereumAddress);
	} else {
		console.error('User address not found. Please connect your wallet first.');
	}
});
