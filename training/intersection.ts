
type ConfigType = { 
	protocol: "http" | "https"; port: 3000 | 3001 
};
interface ConfigInterface {
	protocol: "http" | "https"; port: 3000 | 3001
};

type Role = { role: string};

type ConfigWithRole = ConfigType & Role;

const serverConfig1:ConfigType = {
	protocol: "https",
	port: 3001
};
const serverConfig2:ConfigInterface = {
	protocol: "https",
	port: 3001
};

const backupConfig:ConfigWithRole = {
	protocol: "http",
	port: 3000,
	role: 'admin'
};

const startsServer:(protocol: "http" | "https", port: 3000 | 3001) => string = (
	protocol: "http" | "https", 
	port: 3000 | 3001
  ): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);
	return "Server started";
}

startsServer("https", 3001);
startsServer(serverConfig1.protocol, serverConfig1.port);
startsServer(backupConfig.protocol, backupConfig.port);


//todo cd training
//todo ts-node intersection.ts