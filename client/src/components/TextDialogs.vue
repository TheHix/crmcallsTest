<script setup>
defineProps({
	text: String,
});
</script>

<template>
	<div class="text">{{ text }}</div>
</template>

<style scoped>
.text {
	margin-top: 50px;
}
</style>
