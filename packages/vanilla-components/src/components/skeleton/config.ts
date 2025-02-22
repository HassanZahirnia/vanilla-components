import type { InputHTMLAttributes } from 'vue'
import type { Data, WithVariantProps } from '@/core/types'

export const skeletonConfig = {
  fixedClasses: {
    wrapper: 'animate-pulse space-y-1',
    class: '',
  },
  classes: {
    wrapper: '',
    class: 'h-5 rounded w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-500 dark:to-gray-700',
  },
  variants: {
    vanilla: {
      classes: {
        class: 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-500 dark:to-gray-700',
      },
    },
    bar: {
      classes: {
        class: 'h-5 rounded w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-500 dark:to-gray-700',
      },
    },
    circle: {
      classes: {
        wrapper: '',
        class: 'h-5 w-5 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-500 dark:to-gray-700',
      },
    },
  },
}

export const skeletonClassesKeys = Object.keys(skeletonConfig.classes)

export declare type SkeletonBarClassesValidKeys = keyof typeof skeletonConfig.classes

export declare type SkeletonBarProps = WithVariantProps<{
  count?: number
  as?: string
} & InputHTMLAttributes & Data>

