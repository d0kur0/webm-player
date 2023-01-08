import { createSignal } from "solid-js";

import { Schema, getSchema } from "../api";

type SchemaState = {
	schema: Schema;
	isError: boolean;
	isLoading: boolean;
};

const [schemaState, setSchemaState] = createSignal<SchemaState>({
	schema: [],
	isError: false,
	isLoading: false,
});

export { schemaState };

export async function fetchSchema() {
	setSchemaState(state => ({ ...state, isLoading: true }));

	try {
		const schema = await getSchema();
		setSchemaState(state => ({ ...state, schema }));
	} catch (error) {
		setSchemaState(state => ({ ...state, isError: true }));
	}

	setSchemaState(state => ({ ...state, isLoading: false }));
}
