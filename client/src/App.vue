<script setup>
import { ref } from "vue";
import Form from "./components/Form.vue";
import TextDialogs from "./components/TextDialogs.vue";

const dialogueText = ref("");

const onFormSubmit = (value) => {
	dialogueText.value = value;
};
</script>

<template>
	<div class="wrapper">
		<Form @submit="onFormSubmit" />
		<TextDialogs :text="dialogueText" />
	</div>
</template>

<style scoped>
.wrapper {
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;
}
</style>
