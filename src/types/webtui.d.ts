declare module "@webtui/css" {
	export const base: string;
	export const utils: string;
	export const components: string;
}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		"box-"?: string;
		"is-"?: string;
		"variant-"?: string;
	}
}

declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		"box-"?: string;
		"is-"?: string;
		"variant-"?: string;
	}
}
