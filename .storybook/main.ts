import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@chromatic-com/storybook',
		'@storybook/experimental-addon-test',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',

		options: {},
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	docs: {
		autodocs: true,
	},
	viteFinal: (config, { configType }) => {
		if (configType === 'PRODUCTION') {
			config.base = '/ignite-lab-design-system/';
		}

		return config;
	},
};
export default config;
