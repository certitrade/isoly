/// <reference types="vitest/config" />
import { defineConfig } from "vite"

export default defineConfig({
	test: {
		typecheck: {
			tsconfig: "./tsconfig.json",
		},
		coverage: {
			reporter: ["text", "json", "html"],
			enabled: true,
			all: true,
			cleanOnRerun: true,
			thresholds: {
				statements: 99.9,
				branches: 97,
				functions: 98,
				lines: 99.9,
			},
		},
		globals: true,
		include: ["**/*.spec.[tj]s"],
		testTimeout: 20000,
		isolate: false,
		exclude: ["node_modules", "dist"],
		server: {
			deps: {
				inline: ["isly"],
			},
		},
	},
})
