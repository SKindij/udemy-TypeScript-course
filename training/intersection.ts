
type Config = { protocol: "http" | "https"; port: 3000 | 3001 };



const serverConfig:Config = {
	protocol: "https",
	port: 3001
};

const backupConfig:Config = {
	protocol: "http",
	port: 3000
};

const startsServer:(protocol: "http" | "https", port: 3000 | 3001) => string = (
	protocol: "http" | "https", 
	port: 3000 | 3001
  ): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);
	return "Server started";
}

startsServer("https", 3001);


//todo cd training
//todo ts-node intersection.ts