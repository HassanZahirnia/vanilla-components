import type { InputHTMLAttributes } from 'vue'
import type { Data, WithVariantPropsAndClassesList } from '@/core/types'

export const statusIndicatorConfig = {
  fixedClasses: {
    wrapper: 'relative',
    container: 'flex h-3 w-3 flex-shrink-0',
    pulsing: 'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
    regular: 'relative inline-flex rounded-full h-3 w-3',
    background: '',
  },
  classes: {
    wrapper: '',
    container: '',
    pulsing: '',
    regular: '',
    background: 'bg-gray-500',
  },
  variants: {
      green: {
        classes: {
          background: 'bg-green-500',
        },
      },
      indigo: {
        classes: {
          background: 'bg-indigo-500',
        },
      },
      red: {
        classes: {
          background: 'bg-red-500',
        },
      },
      blue: {
        classes: {
          background: 'bg-blue-500',
        },
      },
      orange: {
        classes: {
          background: 'bg-orange-500',
        },
      },
  },
}

export const statusIndicatorClassesKeys = Object.keys(statusIndicatorConfig.classes)

export declare type StatusIndicatorClassesValidKeys = keyof typeof statusIndicatorConfig.classes

export declare type StatusIndicatorProps = WithVariantPropsAndClassesList<{
  pulse?: boolean
} & InputHTMLAttributes & Data, StatusIndicatorClassesValidKeys>

