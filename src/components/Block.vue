<template>
	<div v-if="show" class="block" @click="stopTimer">
		<img :src="gifURL.url" alt="hahapy" />
		<h1>點我</h1>
	</div>
</template>

<script>
export default {
	props: ["delay"],
	data() {
		return {
			gifURL: { url: require("../assets/hahapy.gif") },
			show: false,
			timer: null, // setInterval
			reactionTime: 0,
		};
	},
	mounted() {
		setTimeout(() => {
			this.show = true;
			this.startTimer();
			this.$emit("started");
		}, this.delay);
	},
	methods: {
		startTimer() {
			this.timer = setInterval(() => {
				this.reactionTime += 10;
			}, 10);
		},
		stopTimer() {
			clearInterval(this.timer);
			this.$emit("imgClicked", this.reactionTime);
		},
	},
};
</script>

<style>
.block {
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
	width: 70%;
	height: auto;
}
.block img {
	width: 100%;
	height: 100%;
}
.block h1 {
	color: #dbdbd2;
	font-size: 3rem;
	font-weight: 500;
	text-shadow: #fff 1px 0 0.3px;
	-webkit-text-stroke: 1.7px black;
	position: absolute;
}
</style>
