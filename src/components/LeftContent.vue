<template>
  <div class="left-container">
    <img :src="require('@/assets/logo.png')" class="logo" />
    <div class="small-left-container-body">
      <div class="left-header-container">
        <div class="left-header-text">Get The App</div>
      </div>
      <Button
        iconName="cloud-arrow-down"
        title="Download"
        id="Download Button"
      />
      <div class="small-print-container">
        <div class="small-print-text">* small print text</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>
