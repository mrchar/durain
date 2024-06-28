<script setup>
const { messages } = useMessages();

const currentMessage = ref(null);

function onAddMessage(value) {
  messages.value.push(value);
}

const modal = ref(null);
function onOpenMessageDetail(value) {
  currentMessage.value = value;
  modal.value.showModal();
}

function removeMessage(index) {
  messages.value.splice(index, 1);
}
</script>

<template>
  <div class="flex h-full w-full flex-col gap-2">
    <div
      v-if="messages.length === 0"
      class="h-96 w-full flex-1 rounded-lg border-2 p-2 text-center"
    >
      现在还没有消息
    </div>
    <div
      v-if="messages.length > 0"
      class="flex h-96 w-full flex-1 flex-col gap-2 overflow-y-auto rounded-lg border-2 p-2"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="border-b-2 border-dashed px-4 py-2"
      >
        <div class="flex justify-between">
          <MessageViewer
            :message="message"
            @click="onOpenMessageDetail(message)"
          />
          <div class="flex gap-2">
            <button class="btn btn-primary">编辑</button>
            <button class="btn btn-error" @click="removeMessage(index)">
              删除
            </button>
          </div>
        </div>
      </div>
    </div>
    <MessageEditor class="flex-none" @add="onAddMessage" />
  </div>
  <dialog ref="modal" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <MessageDetail v-if="currentMessage" :message="currentMessage" />
      <div class="modal-action">
        <form class="w-full" method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn w-full">关闭</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
