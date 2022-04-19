<template>
  <button class="button" :id="id" @click="$emit('click')">
    <div class="button-icon-container">
      <fa :icon="iconName" color="#FFF" class="button-icon" />
    </div>
    <div class="left-button-text-container">
      <div class="button-text">{{ title }}</div>
    </div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ title: String, iconName: String, id: String });
</script>
