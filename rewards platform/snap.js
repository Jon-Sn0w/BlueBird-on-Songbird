const Web3 = require('web3').default;
const fs = require('fs');
const fsPromises = require('fs').promises;

const web3 = new Web3('https://songbird-api.flare.network/ext/C/rpc');

const masterNestABI = [{"type":"constructor","inputs":[{"type":"address","name":"_feather","internalType":"contract FeatherSwapToken"},{"type":"address","name":"_devAddress","internalType":"address"},{"type":"uint256","name":"_tokenPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"_withdrawFeeBP","internalType":"uint16"},{"type":"uint256","name":"_lockTime","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"devRewardPercent","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract FeatherSwapToken"}],"name":"feather","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"featherAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingToken","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accTokenPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"withdrawFeeBP","internalType":"uint16"},{"type":"uint256","name":"lockTime","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"_withdrawFeeBP","internalType":"uint16"},{"type":"uint256","name":"_lockTime","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_dev","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevRewardPercent","inputs":[{"type":"uint256","name":"_rewardPercent","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStartBlock","inputs":[{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalStakedAmount","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_tokenPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMultiplier","inputs":[{"type":"uint256","name":"multiplierNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"},{"type":"uint256","name":"depositTime","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"user","indexed":true},{"type":"address","name":"newAddress","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"goosePerBlock","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"setLockTime","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"lockTime","indexed":false}],"anonymous":false}];
const rewardsContractABI = [
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
		"internalType": "uint256",
		"name": "pid",
		"type": "uint256"
	}
	],
	"name": "withdrawOwedRewards",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
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
}
];

const masterNestAddress = '0x6FBF12d3CEEcd9d77B5fD922cdf483052ad320ab';
const rewardsContractAddress = '0x235C9EaC890e393f107651464388cf9ADd2EE126';

const masterNestContract = new web3.eth.Contract(masterNestABI, masterNestAddress);
const rewardsContract = new web3.eth.Contract(rewardsContractABI, rewardsContractAddress);

const adminPrivateKey = 'private-key'; 
const adminAddress = web3.eth.accounts.privateKeyToAccount(adminPrivateKey).address;

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

async function getRegisteredUsers() {
	try {
		const text = await fsPromises.readFile('./registeredUsers.txt', 'utf8');
		return text.split('\n').filter(Boolean);
	} catch (error) {
		console.error("Error reading registeredUsers.txt:", error);
		return [];
	}
}

async function getSnapshot(userAddress) {
	let balances = {};
	for (const [poolName, pid] of Object.entries(poolIds)) {
		const userInfo = await masterNestContract.methods.userInfo(pid, userAddress).call();
		balances[poolName] = userInfo.amount.toString(); // Convert BigInt to string
	}
	return balances;
}

function bigintReplacer(key, value) {
	if (typeof value === 'bigint') {
		return value.toString() + 'n'; // Convert BigInt to string with 'n' suffix
	}
	return value;
}

async function getTotalRewardsBalance() {
	return await rewardsContract.methods.getRewardsBalance().call();
}

async function performSnapshots() {
	let allSnapshots = [];
	const registeredUsers = await getRegisteredUsers();
	for (let i = 0; i < 3; i++) {
		let snapshot = {};
		for (const user of registeredUsers) {
			snapshot[user] = await getSnapshot(user);
		}
		allSnapshots.push(snapshot);
		// Save the snapshot to a txt file
		const jsonString = JSON.stringify(snapshot, bigintReplacer, 2);
		try {
			fs.writeFileSync(`snapshot_${i + 1}.txt`, jsonString);
		} catch (error) {
			console.error(`Error writing to snapshot_${i + 1}.txt:`, error);
		}
		await new Promise(resolve => setTimeout(resolve, Math.random() * 10 * 1000)); // 1 to 10 seconds delay
	}
	return allSnapshots;
}

async function calculateRewards(allSnapshots) {
	let rewards = {};
	for (const snapshot of allSnapshots) {
		for (const [user, balances] of Object.entries(snapshot)) {
			if (!rewards[user]) rewards[user] = {};
			for (const [poolName, balance] of Object.entries(balances)) {
				if (!rewards[user][poolName]) rewards[user][poolName] = 0;
				rewards[user][poolName] += Number(balance); // Convert string to number for arithmetic
			}
		}
	}
	for (const [user, balances] of Object.entries(rewards)) {
		for (const poolName of Object.keys(balances)) {
			rewards[user][poolName] /= 3; 
		}
	}
	return rewards;
}

async function distributeRewards(averagedRewards) {
	// Fetch the total rewards balance from the rewards contract
	const totalRewardsInContract = BigInt(await getTotalRewardsBalance());
	console.log(`Total rewards in contract: ${totalRewardsInContract}`);
	
	const totalActivePools = BigInt(Object.keys(poolIds).length);
	const rewardsPerPool = totalRewardsInContract / totalActivePools;
	console.log(`Rewards per pool: ${rewardsPerPool}`);
	
	// Calculate total average balances per pool
	let totalAverageBalancesPerPool = {};
	for (const poolName of Object.keys(poolIds)) {
		totalAverageBalancesPerPool[poolName] = 0n;
		for (const user of Object.keys(averagedRewards)) {
			totalAverageBalancesPerPool[poolName] += BigInt(averagedRewards[user][poolName]);
		}
	}
	
	// Calculate individual user rewards
	const users = [];
	const pids = [];
	const amounts = [];
	
	for (const user of Object.keys(averagedRewards)) {
		for (const [poolName, userAverageBalance] of Object.entries(averagedRewards[user])) {
			if (totalAverageBalancesPerPool[poolName] > 0n) {
				users.push(user);
				pids.push(poolIds[poolName]);
				const userReward = (BigInt(userAverageBalance) * rewardsPerPool) / totalAverageBalancesPerPool[poolName];
				amounts.push(userReward.toString());
			}
		}
	}
	
	// Logging the arrays before sending the transaction
	console.log("Users:", users);
	console.log("PIDs:", pids);
	console.log("Amounts:", amounts);
	
	const nonce = await web3.eth.getTransactionCount(adminAddress);
	const gasPrice = await web3.eth.getGasPrice();
	const tx = {
		from: adminAddress,
		to: rewardsContractAddress,
		gas: 2000000,
		gasPrice: gasPrice,
		nonce: nonce,
		data: rewardsContract.methods.forceSnapshot(users, pids, amounts).encodeABI()
	};
	
	try {
		const signedTx = await web3.eth.accounts.signTransaction(tx, adminPrivateKey);
		const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
		console.log("Transaction Receipt:", receipt);
	} catch (error) {
		console.error("Error sending transaction:", error);
	}
}

(async function main() {
	const allSnapshots = await performSnapshots();
	const averagedRewards = await calculateRewards(allSnapshots);
	await distributeRewards(averagedRewards);
})();
