<script setup>
const message = ref({});

const emit = defineEmits(["add"]);

function addMessage() {
  if (!message || (!message.value.content && !message.value.image)) {
    return;
  }

  emit("add", message.value);
  message.value = {};
}

const inputting = ref(false);
const dragging = ref(false);

const fileReader = new FileReader();
fileReader.onload = (e) => {
  console.debug("监听到FileReader加载事件", e);
  if (e.target.result) {
    message.value.image = e.target.result;
  }
};

function onDropFile(event) {
  console.debug("监听到Drop事件", event);
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    fileReader.readAsDataURL(files[0]);
  }
  dragging.value = false;
}

const input = ref();
function onClickDropBox() {
  inputting.value = true;
  nextTick(() => {
    input.value.focus();
  });
}
</script>

<template>
  <div class="flex h-28 w-full gap-2 rounded-lg border-2 p-2">
    <div
      v-show="!inputting"
      class="h-24 w-full rounded-lg"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
      @drop.prevent="onDropFile"
      @click="onClickDropBox"
    >
      <p>
        {{ dragging ? "松开鼠标以添加图片" : "拖动文件或输入内容以添加消息" }}
      </p>
      <img
        v-if="message.image"
        :src="message.image"
        class="h-24 w-auto"
        alt="上传的图片"
      />
    </div>
    <input
      ref="input"
      v-show="inputting"
      type="text"
      class="h-24 w-full rounded-lg dark:bg-gray-800"
      v-model="message.content"
      @keyup.enter="addMessage"
      @focusout="inputting = false"
    />
    <button class="btn btn-success h-24 w-24" @click="addMessage">添加</button>
  </div>
</template>
