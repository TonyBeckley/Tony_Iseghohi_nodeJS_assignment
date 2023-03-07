const net = require("node:net");

const blockList = new net.BlockList();
//The BlockList object can be used with some network APIs to specify rules for disabling inbound or outbound access to specific IP addresses, IP ranges, or IP subnets

blockList.addAddress('123.123.123.123');
blockList.addRange('10.0.0.1', '10.0.0.10');
blockList.addSubnet('8592:757c:efae:4e45::', 64, 'ipv6');

console.log(blockList.check('123.123.123.123')); 
console.log(blockList.check('10.0.0.3'));  
console.log(blockList.check('222.111.111.222')); 