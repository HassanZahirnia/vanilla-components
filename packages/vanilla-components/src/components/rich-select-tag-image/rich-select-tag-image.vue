<script setup lang="ts">
import type { PropType } from 'vue'
import type { RichSelectTagWithImageProps } from './config'
import { richSelectTagWithImageConfig } from './config'
import { useConfiguration } from '@/core/use'

const props = defineProps({
  name: {
    type: String,
    default: undefined,
  },
  image: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  description: {
    type: [String] as PropType<string | undefined>,
    default: undefined,
  },
  hasErrors: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  parentClasses: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
})

const { configuration } = useConfiguration<RichSelectTagWithImageProps>(richSelectTagWithImageConfig, 'RichSelectTagWithImage')
</script>

<template>
  <div
    :class="[
      parentClasses,
      configuration.classesList.wrapper,
      disabled ? configuration.classesList.disabled : '',
    ]"
  >
    <div :class="[configuration.classesList.labelAndImageWrapper]">
      <div
        :class="[
          selected ? configuration.classesList.labelAndImageContainerSelected : '',
          !selected ? configuration.classesList.labelAndImageContainerRegular : '',
          configuration.classesList.labelAndImageContainer,
        ]"
      >
        <div
          :class="[
            configuration.classesList.image,
          ]"
          :style="{
            backgroundImage: `url(${image})`,
          }"
        />
        <span
          :class="[
            configuration.classesList.label,
          ]"
          v-html="name"
        />
      </div>
    </div>
  </div>
</template>

