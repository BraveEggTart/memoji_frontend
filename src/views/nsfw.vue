<template>
  <EnReadme v-if="locale === 'en'" />
  <ZhReadme v-else />
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
