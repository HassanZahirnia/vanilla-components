<script setup lang="ts">
import { provide, watch } from 'vue'
import { useRoute } from 'vitepress'
import { useCloseSidebarOnEscape, useSidebar } from '../composables/sidebar.js'
import VPSkipLink from './VPSkipLink.vue'
import VPBackdrop from './VPBackdrop.vue'
import VPNav from './VPNav.vue'
import VPLocalNav from './VPLocalNav.vue'
import VPSidebar from './VPSidebar.vue'
import VPContent from './VPContent.vue'
import VPFooter from './VPFooter.vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
} = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)
</script>

<template>
  <div class="Layout">
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop
      class="backdrop"
      :show="isSidebarOpen"
      @click="closeSidebar"
    />
    <VPNav>
      <template #nav-bar-title-before>
        <slot name="nav-bar-title-before" />
      </template>
      <template #nav-bar-title-after>
        <slot name="nav-bar-title-after" />
      </template>
      <template #nav-bar-content-before>
        <slot name="nav-bar-content-before" />
      </template>
      <template #nav-bar-content-after>
        <slot name="nav-bar-content-after" />
      </template>
      <template #nav-screen-content-before>
        <slot name="nav-screen-content-before" />
      </template>
      <template #nav-screen-content-after>
        <slot name="nav-screen-content-after" />
      </template>
    </VPNav>
    <VPLocalNav
      :open="isSidebarOpen"
      @open-menu="openSidebar"
    />
    <VPSidebar :open="isSidebarOpen" />

    <VPContent>
      <template #home-hero-before>
        <slot name="home-hero-before" />
      </template>
      <template #home-hero-after>
        <slot name="home-hero-after" />
      </template>
      <template #home-features-before>
        <slot name="home-features-before" />
      </template>
      <template #home-features-after>
        <slot name="home-features-after" />
      </template>

      <template #doc-footer-before>
        <slot name="doc-footer-before" />
      </template>
      <template #doc-before>
        <slot name="doc-before" />
      </template>
      <template #doc-after>
        <slot name="doc-after" />
      </template>

      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
      <template #aside-outline-before>
        <slot name="aside-outline-before" />
      </template>
      <template #aside-outline-after>
        <slot name="aside-outline-after" />
      </template>
      <template #aside-ads-before>
        <slot name="aside-ads-before" />
      </template>
      <template #aside-ads-after>
        <slot name="aside-ads-after" />
      </template>
    </VPContent>

    <VPFooter />
    <slot name="layout-bottom" />
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
