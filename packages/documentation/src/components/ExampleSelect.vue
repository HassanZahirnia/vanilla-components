<script setup lang="ts">
import { Select } from '@indigit/vanilla-components'
import { ref } from 'vue'
const value = ref(undefined)
const value2 = ref(undefined)

const options = [
  { value: 'vue', text: 'Vue' },
  { value: 'not_react', text: 'Not React' },
  { value: [{ anotherObject: true, nested: 'deep' }], text: 'Vue?' },
  {
    value: 'seprator',
    text: 'Other Frameworks',
    children: [
      { value: 'not_svelt', text: 'Not Svelt' },
      { value: 'not_angular', text: 'Neither Angular' },
    ],
  },
]

</script>

<template>
  <PreviewWrapper>
    <div class="grid space-y-2">
      <!-- Regular -->
      <Select
        v-model="value"
        placeholder="Please choose your stack"
        feedback="You can add SVGs as addons before & After"
        :options="options"
      >
      </Select>

    </div>
  </PreviewWrapper>
</template>
