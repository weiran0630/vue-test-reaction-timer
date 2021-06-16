<template>
	<div class="main">
		<h1 class="title">2021反應測試</h1>

		<button class="button" @click="gameStart" :disabled="isPlaying">
			<span v-show="!isPlaying && !timerStarted">開始</span>
			<span v-show="isPlaying && !timerStarted">準備</span>
			<span v-show="timerStarted">計時中..</span>
		</button>

		<Block
			v-if="isPlaying"
			:delay="delay"
			@imgClicked="gameEnd"
			@started="toggleTimerStarted"
		/>
		<Result v-show="score !== null" :score="score" />
	</div>
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
	name: "App",
	components: { Block, Result },
	data() {
		return {
			isPlaying: false,
			timerStarted: false,
			delay: null,
			score: null,
		};
	},
	methods: {
		gameStart() {
			// 2000ms base delay + 0~5000 additional delay
			this.score = null;
			this.delay = 2000 + Math.random() * 5000;
			this.isPlaying = true;
		},
		gameEnd(reactionTime) {
			this.score = reactionTime;
			this.timerStarted = false;
			this.isPlaying = false;
		},
		toggleTimerStarted() {
			this.timerStarted = true;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.main {
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.main .button {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	padding: 10px 30px;
	background: rgb(0, 128, 85);
	color: #fff;
	border-radius: 10px;
	box-shadow: 0 0.5px 2px 0#2c3e50;
	transition: 0.1s ease-in;
}
.main .button:hover {
	background: rgb(0, 163, 109);
	box-shadow: 0 0.5px 2px 0#778592;
}
.main .button:disabled {
	cursor: not-allowed;
	background: rgb(226, 226, 226);
	color: #b8c5d1;
	box-shadow: 0 0px 2px 0#778592;
}
</style>
