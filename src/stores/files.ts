import { createSignal } from "solid-js";

import { Files, GetFilesCondition, getFiles, getFilesByCondition } from "../api";

type FilesState = {
	files: Files;
	isError: boolean;
	isLoading: boolean;
};

const [filesState, setFilesState] = createSignal<FilesState>({ files: [], isError: false, isLoading: false });

export { filesState };

export async function fetchFiles() {
	setFilesState(state => ({ ...state, isLoading: true }));

	try {
		const files = await getFiles();
		setFilesState(state => ({ ...state, files }));
	} catch (error) {
		setFilesState(state => ({ ...state, isError: true }));
	}

	setFilesState(state => ({ ...state, isLoading: false }));
}

export async function fetchFilesByCondition(condition: GetFilesCondition) {
	setFilesState(state => ({ ...state, isLoading: true }));

	try {
		const files = await getFilesByCondition(condition);
		setFilesState(state => ({ ...state, files }));
	} catch (error) {
		setFilesState(state => ({ ...state, isError: true }));
	}

	setFilesState(state => ({ ...state, isLoading: false }));
}
