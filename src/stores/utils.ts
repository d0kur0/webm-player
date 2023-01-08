export function dispatch(fn: () => Promise<unknown>): void {
	fn().catch(console.log);
}
