
const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
	// now only specified value is possible for given variables
	protocol: "http" | "https",
	port: 3000 | 3001
  // we can strictly fix value returned from function
  ): "Server started" {
	if (port === port3000 || port === port3001) {
		console.log(`Server started on ${protocol}://server:${port}`);
	} else {
		console.error("Invalid port");
	}

	return "Server started";
}

startServer("https", 3001);


function createAnimation(
	id: string | number,
	animName: string,
	timingFunc: "ease" | "ease-out" | "ease-in" = "ease",
	duration: number,
	iterCount: "infinite" | number
): void {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if (elem) {
	console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
	// elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
	// }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");
