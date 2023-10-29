import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		//rollupOptions: {
		// Trying potential workaround for
		// https://github.com/vitejs/vite/issues/10506
		//
		// Still fails with:
		// npm run build
		// mv build build1
		// npm run build
		// diff -qr build build1
		//
		//maxParallelFileOps: 1
		//}
		// Trying workaround from
		// https://github.com/vitejs/vite/issues/13672#issuecomment-1784110536
		//
		// Still fails using test
		commonjsOptions: {
			strictRequires: true
		}
	}
});
