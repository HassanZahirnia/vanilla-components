<script setup lang="ts">
import type { PropType } from 'vue'
import { provide } from 'vue'
import {
    DialogDescription,
    DialogOverlay,
    DialogTitle,
    Dialog as HeadlessDialog,
    TransitionChild, TransitionRoot,
} from '@headlessui/vue'
import DialogFooter from './partials/footer.vue'
import type { DialogClassesValidKeys, DialogProps } from './config'
import { dialogConfig } from './config'
import { useConfiguration, useVModel, useVariantProps } from '@/core/use'
import { hasSlot } from '@/core/helpers'

const props = defineProps({
  ...useVariantProps<DialogProps, DialogClassesValidKeys>(),
  modelValue: {
    type: [Boolean] as PropType<boolean>,
    default: false,
  },
  title: {
    type: [String] as PropType<string | undefined>,
    default: undefined,
  },
  teleport: {
    type: Boolean,
    default: false,
  },
  teleportTo: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },
  overlay: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  closeable: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  closeableOnClickOutside: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  closeableOnPressEscape: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  paddingOnModal: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  bodyDivided: {
    type: [Boolean] as PropType<boolean>,
    default: false,
  },
  bodyDarker: {
    type: [Boolean] as PropType<boolean>,
    default: false,
  },
  bodyWithPadding: {
    type: [Boolean] as PropType<boolean>,
    default: false,
  },
  bodyClasses: {
    type: [String] as PropType<string>,
    default: '',
  },
  divided: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  as: {
    type: [String] as PropType<string>,
    default: 'div',
  },
  size: {
    type: [String] as PropType<string>,
    required: false,
    default: 'default',
    validator(align: string) {
      return ['default', 'small', 'medium', 'large', 'full'].includes(align)
    },
  },
})

const emit = defineEmits([
  'update:modelValue',
  'close',
  'open',
])

const localValue = useVModel(props, 'modelValue')
const { configuration, errors, hasErrors } = useConfiguration<DialogProps>(dialogConfig, 'Dialog', localValue)

const close = () => {
  if (!props.closeable) {
    return
  }

  if (!props.closeableOnClickOutside) {
    localValue.value = true
    return
  }

  setTimeout(() => {
    localValue.value = false
    emit('close')
  }, 50)
}

const open = () => {
  localValue.value = true
  emit('open')
}

provide('configuration_vanilla', configuration)
</script>

<template>
  <TransitionRoot
    appear
    :show="localValue"
    as="template"
  >
    <HeadlessDialog
      :as="as"
      :initial-focus="null"
      @close="close"
    >
      <div :class="configuration.classesList.wrapper">
        <div :class="configuration.classesList.inner">
          <TransitionChild
            as="template"
            :enter="configuration.classesList.overlayEnter"
            :enter-from="configuration.classesList.overlayEnterFrom"
            :enter-to="configuration.classesList.overlayEnterTo"
            :leave="configuration.classesList.overlayLeave"
            :leave-from="configuration.classesList.overlayLeaveFrom"
            :leave-to="configuration.classesList.overlayLeaveTo"
          >
            <DialogOverlay :class="configuration.classesList.overlay" />
          </TransitionChild>

          <span
            :class="configuration.classesList.closeButton"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as="template"
            :enter="configuration.classesList.dialogEnter"
            :enter-from="configuration.classesList.dialogEnterFrom"
            :enter-to="configuration.classesList.dialogEnterTo"
            :leave="configuration.classesList.dialogLeave"
            :leave-from="configuration.classesList.dialogLeaveFrom"
            :leave-to="configuration.classesList.dialogLeaveTo"
          >
            <div
              :class="[
                configuration.classesList.modal,
                paddingOnModal ? configuration.classesList.modalWithPadding : '',
                size === 'default' ? configuration.classesList.sizeDefault : '',
                size === 'small' ? configuration.classesList.sizeSmall : '',
                size === 'medium' ? configuration.classesList.sizeMedium : '',
                size === 'large' ? configuration.classesList.sizeLarge : '',
                size === 'full' ? configuration.classesList.sizeFull : '',
              ]"
            >
              <!-- Trap the focus here, some weird bug with headlessui -->
              <div
                style="width: 0; height: 0; visibility: hidden"
                tabindex="99"
              />

              <!-- Header -->
              <DialogTitle
                v-if="hasSlot($slots.header) || title !== undefined"
                as="div"
                :class="[
                  configuration.classesList.title,
                  divided ? configuration.classesList.titleDivided : '',
                ]"
              >
                <slot
                  :close="close"
                  name="header"
                >
                  <h3
                    :class="configuration.classesList.titleText"
                    v-html="title"
                  />
                </slot>
              </DialogTitle>

              <!-- Body -->
              <DialogDescription
                as="div"
                :class="[
                  bodyDivided ? configuration.classesList.bodyDivided : '',
                  bodyWithPadding ? configuration.classesList.bodyWithPadding : '',
                  bodyWithPadding && (!hasSlot($slots.header) || title === undefined) ? configuration.classesList.bodyWithPaddingTop : '',
                  bodyWithPadding && hasSlot($slots.footer) ? configuration.classesList.bodyWithPaddingBottom : '',
                  bodyDarker ? configuration.classesList.bodyDarker : '',
                  bodyClasses,
                ]"
              >
                <slot
                  v-bind="{
                    close,
                    classes: configuration.classesList.body,
                  }"
                />
              </DialogDescription>

              <!-- Footer -->
              <DialogFooter
                v-if="hasSlot($slots.footer)"
                ref="footer"
                :divided="divided"
              >
                <slot
                  :close="close"
                  name="footer"
                />
              </DialogFooter>
            </div>
          </TransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </TransitionRoot>
</template>
