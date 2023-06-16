<template>
  <div class="doc-preview">
    <div class="component">
      <slot></slot>
    </div>
    <div class="fixed-tools" v-show="visible">
      <div class="tools">
        <div class="item" @click="copyCode">
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="item" @click="toggleCode">
          <svg height="20" viewBox="0 0 512 512"
               width="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="46"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-show="visible" class="code">
      <slot name="code"></slot>
    </div>
    <div class="control-tools">
      <div class="text" @click="toggleCode">{{visible ? '隐藏代码' : '展开代码'}}</div>
      <div class="tools">
        <div class="item" @click="copyCode">
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="item" @click="toggleCode">
          <svg height="20" viewBox="0 0 512 512"
               width="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="46"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

const props = withDefaults(
  defineProps<{
    code: string
  }>(),
  {}
)

const visible = ref(false)
const copyCode = () => {
  try {
    navigator.clipboard.writeText(decodeURIComponent(props.code))
  } catch (err) {
    console.log(err)
  }
}
const toggleCode = () => {
  visible.value = !visible.value
}

</script>

<style scoped>
@import "style.css";
</style>
