<template>
  <div id="App" class="main-container">
    <div class="body-container">
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
      <div class="main-body">
        <div class="main-element">
          <div class="header">
            <div class="header-text">hp</div>
            <div class="header-text" style="margin: 0 10px">.</div>
            <div class="header-text">coming soon</div>
          </div>
          <div class="body-text">
            Our new location based app is launching soon, please use the form
            below to register your profile for the Hot Places app.
          </div>
          <pre />
          <div class="body-text">
            Lorum Ipsum nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
        </div>
        <form class="toggle-body" @submit.prevent>
          <div class="toggled-element" v-if="showRegistration">
            <div class="upper-form-grid-container">
              <div class="grid-item">
                <div class="input-header">
                  <p class="body-text">First Name</p>
                  <p class="required-text-marker">*</p>
                </div>

                <div class="input-container">
                  <input v-model="firstname" class="text-input" />
                  <fa
                    :color="
                      firstname.length && /^[a-zA-Z]+$/.test(firstname)
                        ? 'green'
                        : 'red'
                    "
                    icon="circle-check"
                    class="icons"
                  />
                </div>
              </div>
              <div class="grid-item">
                <div class="input-header">
                  <p class="body-text">Last Name</p>
                  <p class="required-text-marker">*</p>
                </div>

                <div class="input-container">
                  <input v-model="lastname" class="text-input" />
                  <fa
                    :color="
                      lastname.length && /^[a-zA-Z]+$/.test(lastname)
                        ? 'green'
                        : 'red'
                    "
                    icon="circle-check"
                    class="icons"
                  />
                </div>
              </div>
              <div class="grid-item">
                <div class="input-header">
                  <p class="body-text">Email</p>
                  <p class="required-text-marker">*</p>
                  <p class="validation-text">Please enter a valid email</p>
                </div>

                <div class="input-container">
                  <input v-model="email" class="text-input" type="email" />
                  <fa
                    :color="
                      email.length &&
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        email
                      )
                        ? 'green'
                        : 'red'
                    "
                    icon="circle-check"
                    class="icons"
                  />
                </div>
              </div>
            </div>
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

            <Button
              iconName="user"
              :title="`Hey ${firstname}, Save your Profile`"
              id="Save Button"
            />
          </div>

          <Button
            iconName="user"
            title="Register for our new app"
            v-else
            @click="toggle"
            id="Register Button"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";
const showRegistration = ref(false);
const firstname = ref("");
const lastname = ref("");
const email = ref("");
const image = ref();
const fileTypes = [".jpg", ".png", ".gif", ".tif"];
const toggle = () => {
  showRegistration.value = true;
};
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

<style>
body,
html {
  margin: 0 auto;
  padding: 0;
}
p {
  font-family: Arial;
  font-size: 12px;
}
button {
  padding: 0;
  margin: 0;
}
.main-container {
  background-image: url("./assets/background.jpg");
  height: 50vh;
  background-position: center;
  background-size: cover;
  /* background-size: 100% 65%; */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 25px;
}
.logo {
  width: 6rem;
  height: auto;
}
.left-header-container {
  margin-top: 75px;
  margin-bottom: 25px;
  padding: 15px 0;
  width: 7.5rem;
  border-top: 1px dashed lightgray;
  border-bottom: 1px dashed lightgray;
  display: flex;
  justify-content: center;
}
.left-header-text {
  font-family: Arial;
  font-size: 14px;
  color: lightgray;
}
.small-print-container {
  margin-top: 10px;
  display: flex;
  align-self: flex-start;
  justify-self: center;
  padding-left: 1.3rem;
  width: 7.5rem;
}
.small-print-text {
  font-family: Arial;
  font-size: 10px;
  color: lightgray;
  margin-bottom: 20px;
}
.body-container {
  display: flex;
  flex-flow: row;
  position: absolute;
  top: 10vh;
}

.logo-container {
  background-image: url("./assets/logo.png");
  height: 7.5vh;
  width: 15vh;
  background-repeat: no-repeat;
}
.header {
  display: flex;
  flex-flow: row;
}
.header-text {
  font-style: italic;
  padding-bottom: 1rem;
  font-size: 40px;
  color: lightgray;
  font-weight: 100px;
}
.main-body {
  margin-top: 35px;
  background-color: rgba(6, 73, 91, 0.9);
  width: 52vh;
  height: fit-content;
}
.main-element {
  padding: 1.75rem;
  border-bottom: 1px solid rgba(14, 75, 95, 1);
}
.toggle-body {
  padding: 1.75rem;
  border-top: 1px solid rgba(14, 75, 95, 1);
}
.body-text {
  font-family: Arial;
  font-size: 12px;
  color: lightgray;
}

.grid-item {
  height: fit-content;
}

.upper-form-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 20px;
}
.input-container {
  display: flex;
  background-color: #ffffff;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}
.input-header {
  display: flex;
  flex-flow: row;
}
.validation-text {
  font-family: Arial;
  font-size: 12px;
  color: red;
}
.required-text-marker {
  font-family: Arial;
  font-size: 12px;
  color: red;
  margin-left: 5px;
  margin-right: 5px;
}
.text-input {
  border: none;
  width: 100%;
  height: 1.5rem;
}
.photo-input {
  background-color: #ffffff;
  height: 100px;
  width: stretch;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo-input-text {
  font-family: Arial;
  font-size: 12px;
  color: gray;
}
.photo-preview {
  height: 100px;
  width: 100px;
  object-fit: contain;
}
.button {
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 35px;
  background-color: #006a80;
  border-color: rgba(14, 75, 95, 1);
  border-width: 1px;
  border-style: solid;
  width: fit-content;
}
.button-icon-container {
  height: 35px;
  width: 35px;
  border-right-color: rgba(14, 75, 95, 1);
  border-right-width: 1px;
  border-right-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-icon {
  font-size: 14px;
}
.button-text-container {
  height: 35px;
  border-left-color: rgb(84, 122, 126);
  border-left-width: 1px;
  border-left-style: solid;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-button-text-container {
  height: 35px;
  border-left-color: rgb(84, 122, 126);
  border-left-width: 1px;
  border-left-style: solid;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-text {
  font-family: Arial;
  font-size: 13px;
  font-weight: 100;
  color: #b5ebf2;
}
@media only screen and (max-width: 800px) {
  .body-container {
    display: flex;
    flex-flow: column;
  }
  .left-container {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0;
  }
  .small-left-container-body {
    justify-content: center;
    align-items: center;
    margin-right: 1.75rem;
  }
  .logo {
    margin-left: 1.75rem;
  }
  .left-header-container {
    margin-top: 0px;
  }
  .main-body {
    width: 100%;
  }
  .small-print-container {
    width: 100%;
  }
}
</style>
