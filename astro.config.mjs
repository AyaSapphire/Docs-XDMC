// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'XDUCraft Docs',
				zh: 'XDUCraft文档站'
			},
			favicon: '/images/favicon.png',
			logo: {
				src: './src/assets/logo.jpg'
			},
			tableOfContents: {
				maxHeadingLevel: 3,
				minHeadingLevel: 1
			},			
			description: '这是一个存放XDUCraft各种技术文档的网站',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ayasapphire/Docs-XDMC' },
				{ icon: 'bilibili', label: 'Bilibili', href: 'https://space.bilibili.com/500642753'},
				{ icon: 'QQ', label: 'QQ', href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=GF4Ej90Dz5BJpIEGFs4DjkHIouVGD0hR&authKey=hEzyZX6lIOTEk4jwmvZDSQZCD2MV24xiIexe%2BaI9yM9Meo%2Bu0P9TvBukIDFKH5hT&noverify=0&group_code=684941112'}
			],
			editLink: {
				baseUrl: 'https://github.com/ayasapphire/Docs-XDMC/edit/main/'
			},
			sidebar: [
				// 总览页面
				{
					label: '总览',
					items: [
						{ label: '总览页面', slug: 'general/intro'}
					],
				},
				// XDUCraft 入门图文教程
				{
					label: 'XDUCraft 入门图文教程',
					autogenerate: { directory: 'join-server'}
				},
				// 整合包食用指南
				{
					label: '整合包食用指南',
					items: [
						{ label: '整合包食用指南', slug: 'modpack_tutorial'}
					]
				}
			],
		}),
	],
});
