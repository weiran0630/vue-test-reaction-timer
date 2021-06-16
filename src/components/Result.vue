<template>
	<div class="result">
		<h1>{{ comment }}</h1>
		<p>反應時間：{{ score }}ms</p>
	</div>
</template>

<script>
export default {
	props: ["score"],
	computed: {
		comment() {
			if (this.score >= 750) return "  咁撚慢含得啦！再嚟過啦";
			else if (this.score >= 500) return "慢撚過IE，唔撚掂喎";
			else if (this.score >= 300) return "普普通通，叫做合格啦";
			else return "咁撚快做乜鳩🙄";
		},
	},
};
</script>

<style>
.result {
	margin-top: 4rem;
	font-size: 0.8rem;
}
</style>
