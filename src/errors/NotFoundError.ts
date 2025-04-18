import { CustomError } from "@/errors/CustomError";

export class NotFoundError extends CustomError {
	constructor(message: string = "Not Found") {
		super(message, 404);
	}
}
