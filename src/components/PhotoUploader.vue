<template>
  <div>
    <div class="input-header">
      <p class="body-text">Photo</p>
      <p class="required-text-marker">*</p>
    </div>
    <img
      v-if="image"
      :src="image"
      width="100"
      height="150"
      class="photo-preview"
    />
    <div
      v-else
      class="photo-input"
      @dragover="onDrag"
      @drop="onDrop"
      @dragleave="onDragLeave"
    >
      <div class="photo-input-text">Drop files here to upload</div>
    </div>
    <p class="small-print-text">
      Note: Image formats only e.g. jpg, png, gif, tif
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const image = ref();
const fileTypes = [".jpg", ".png", ".gif", ".tif"];

const onDrop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const fileType = file.name.split(".").pop();
  if (fileTypes.includes(`.${fileType}`))
    image.value = URL.createObjectURL(event.dataTransfer.files[0]);
  else alert("Please enter one of the specified file types");
};
const onDrag = (event) => {
  event.preventDefault();
};

const onDragLeave = (event) => {
  event.preventDefault();
};
</script>
