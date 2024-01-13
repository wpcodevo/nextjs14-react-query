create-project:
	pnpm create next-app nextjs14-react-query

install-dependencies:
	pnpm add @tanstack/react-query
	pnpm add @tanstack/query-core
	pnpm add -D @tanstack/eslint-plugin-query
	pnpm add -D @tanstack/react-query-devtools