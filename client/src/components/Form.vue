<script setup>
import { ref } from "vue";
import { fetchDialogues } from "../api/fetchDialogues";
import { clearUrls } from "../utils/clearUrls";

const emit = defineEmits(["submit"]);
const urls = ref("");
const error = ref("");
const isLoading = ref(false);

const onSubmit = async () => {
	try {
		isLoading.value = true;

		const clearedUrls = clearUrls(urls.value);
		const dialogueText = await fetchDialogues(clearedUrls);

		emit("submit", dialogueText);

		urls.value = "";
	} catch (e) {
		error.value = e;
	} finally {
		isLoading.value = false;
	}
};
</script>

<template>
	<div class="form-wrapper">
		<form class="form" @submit.prevent="onSubmit">
			<input
				class="form__input"
				placeholder="Введите ссылки (через запятую)"
				v-model="urls"
				@input="error = ''"
			/>
			<button :disabled="isLoading" class="form__button" type="submit">
				Отправить
			</button>
		</form>

		<span class="error-text" v-if="!!error">{{ error }}</span>
	</div>
</template>

<style scoped>
.error-text {
	color: red;
}
.form-wrapper {
	margin: 0 auto;
	margin-top: 60px;
	max-width: 450px;
}
.form {
	display: flex;
}

.form__label {
	line-height: normal;
	flex: 1;
}

.form__input {
	padding: 0px 10px;
	margin-right: 5px;

	height: 40px;
	width: 100%;

	border-radius: 6px;
	outline: 0;
	border: 1px solid black;
}

.form__button {
	outline: 0;
	border-radius: 6px;
	border: 1px solid black;

	cursor: pointer;

	height: 40px;

	padding: 0px 10px;

	background-color: inherit;
	transition: background-color 0.2s;

	display: flex;
	align-items: center;
	justify-content: center;
}
.form__button:hover {
	background-color: rgb(207, 207, 207);
}
</style>
