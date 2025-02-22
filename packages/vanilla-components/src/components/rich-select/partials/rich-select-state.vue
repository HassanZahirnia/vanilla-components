<script setup lang="ts">
import type { ComputedRef, Ref } from 'vue'
import { computed, inject } from 'vue'
import type { RichSelectProps } from '../config'
import { richSelectConfig } from '../config'
import { useConfiguration, useInjectsClassesList, useInjectsConfiguration } from '@/core/use'

const props = defineProps({})
const options = inject<ComputedRef<RichSelectProps>>('options')!
const fetchingOptions = inject<Ref<boolean>>('fetchingOptions')!
const needsMoreCharsToFetch = inject<Ref<boolean>>('needsMoreCharsToFetch')!
const needsMoreCharsMessage = inject<ComputedRef<string>>('needsMoreCharsMessage')!
const configuration = useInjectsConfiguration<RichSelectProps>()
const noResults = computed<boolean>((): boolean => options.value.length === 0)
const classesList = useInjectsClassesList()!

const { configuration: ownConfiguration, errors, hasErrors, variant } = useConfiguration<RichSelectProps>(richSelectConfig, 'RichSelect')
</script>

<template>
  <slot
    name="stateFeedback"
    :fetching-options="fetchingOptions"
    :needs-more-chars-to-fetch="needsMoreCharsToFetch"
    :no-results="noResults"
  >
    <div
      v-if="fetchingOptions"
      :class="ownConfiguration.classesList.stateWrapper"
    >
      <svg
        :class="ownConfiguration.classesList.stateLoadingIcon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span
        :class="classesList.searchingText"
        v-text="configuration.searchingText"
      />
    </div>
    <div
      v-else-if="needsMoreCharsToFetch"
      :class="classesList.needsMoreCharsText"
      v-text="needsMoreCharsMessage"
    />
    <div
      v-else-if="noResults"
      :class="classesList.noResultsText"
      v-text="configuration.noResultsText"
    />
  </slot>
</template>
