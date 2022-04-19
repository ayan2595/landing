<template>
  <div class="grid-item">
    <div class="input-header">
      <p class="body-text">{{ header }}</p>
      <p class="required-text-marker">*</p>
      <p v-if="!isValid && header == 'Email'" class="validation-text">
        Please enter a valid email
      </p>
    </div>
    <div class="input-container">
      <input
        :value="text"
        @input="$emit('update:text', $event.target.text)"
        class="text-input"
      />
      <fa
        :color="text.length && isValid ? 'green' : 'red'"
        icon="circle-check"
        class="icons"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ text: String, header: String, isValid: Boolean });
</script>
