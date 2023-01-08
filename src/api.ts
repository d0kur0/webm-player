function request(path: string, args?: RequestInit) {
	return fetch(`${import.meta.env.API_URL}/${path}`, args);
}

export type SchemaElement = {
	vendor: string;
	boards: string[];
};

export type Schema = SchemaElement[];

export async function getSchema(): Promise<Schema> {
	const response = await request("schema");
	return await response.json();
}

export type File = {
	file: {
		name: string;
		path: string;
		preview: string;
		threadId: number;
	};
	boardName: string;
	vendorName: string;
	sourceThread: string;
};

export type Files = File[];

export async function getFiles(): Promise<Files> {
	const response = await request("files");
	return await response.json();
}

export type GetFilesCondition = { "2ch"?: string[]; "4chan"?: string[] };

export async function getFilesByCondition(condition: GetFilesCondition): Promise<File[]> {
	const response = await request("files", {
		body: JSON.stringify(condition),
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});
	return await response.json();
}
