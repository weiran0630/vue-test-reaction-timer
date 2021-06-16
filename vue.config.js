module.exports = {
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "2021反應測驗";
			return args;
		});
	},
};
