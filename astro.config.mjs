// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://JeongHeonK.github.io',
	base: '/blog',
	integrations: [
		starlight({
			title: 'Heon Blog',
			defaultLocale: 'root',
			locales: {
				root: { label: '한국어', lang: 'ko' },
			},
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/JeongHeonK' },
			],
			customCss: [
				'@fontsource/pretendard/400.css',
				'@fontsource/pretendard/600.css',
				'@fontsource/pretendard/700.css',
				'@fontsource/jetbrains-mono/400.css',
				'@fontsource/jetbrains-mono/600.css',
				'./src/styles/custom.css',
			],
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
			},
			sidebar: [
				{
					label: '⚛ React 디자인 패턴 완전 정복',
					autogenerate: { directory: 'react-design-patterns' },
					collapsed: true,
				},
				{
					label: '⚛ React 내부 동작 이해',
					autogenerate: { directory: 'react-internals' },
					collapsed: true,
				},
				{
					label: '📜 JavaScript 심화',
					autogenerate: { directory: 'javascript-deep-dive' },
					collapsed: true,
				},
				{
					label: '🔷 TypeScript 타입 챌린지',
					autogenerate: { directory: 'typescript-challenges' },
					collapsed: true,
				},
				{
					label: 'λ 함수형 프로그래밍 with JS',
					autogenerate: { directory: 'functional-programming' },
					collapsed: true,
				},
				{
					label: '🏛 OOP & 디자인 패턴',
					autogenerate: { directory: 'oop-design-patterns' },
					collapsed: true,
				},
				{
					label: '▲ Next.js 실전 가이드',
					autogenerate: { directory: 'nextjs-guide' },
					collapsed: true,
				},
				{
					label: '🔄 상태 관리 비교 분석',
					autogenerate: { directory: 'state-management' },
					collapsed: true,
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: '/blog/og-image.png',
					},
				},
			],
		}),
	],
});
