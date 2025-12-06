import { NextResponse, userAgent, type NextProxy } from "next/server";

const proxy: NextProxy = (request) => {
	const { ua } = userAgent(request);
	if (ua.includes("Bytespider")) {
		console.log(`Got an intruder: ${ua}`);
		return new NextResponse("Get out of here!", { status: 403 });
	}

	return NextResponse.next();
};

export default proxy;
