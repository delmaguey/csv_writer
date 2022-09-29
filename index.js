import { writeFileSync } from "fs";

const content = "Test Content";

try {
	writeFileSync("./test.txt", content);
	console.log("Success!");
} catch (err) {
	console.error(err);
}
