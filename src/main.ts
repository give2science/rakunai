import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		sitename: 'rakun.ai'
	}
});

export default app;