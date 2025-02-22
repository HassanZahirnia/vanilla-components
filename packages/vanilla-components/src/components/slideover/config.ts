import type { InputHTMLAttributes } from 'vue'
import type { Data, WithVariantPropsAndClassesList } from '@/core/types'
import { mergeClasses } from '@/core/helpers'
import { commonClasses } from '@/core/config'

export const slideoverConfig = {
  fixedClasses: {},

  // Default appearance
  classes: {
    wrapper: 'absolute inset-0 z-30 overflow-hidden',
    overlay: 'fixed inset-0 transition-opacity bg-gray-700/50 dark:bg-gray-700/50 backdrop-blur-sm',

    innerLeft: 'fixed inset-y-0 left-0 pr-10 max-w-full flex ',
    innerRight: 'fixed inset-y-0 right-0 pl-10 max-w-full flex',

    slideover: 'pointer-events-auto w-screen',
    slideoverContainer: 'flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-800 shadow-xl',
    slideOverContainerWithPadding: 'py-6',

    sizeDefault: 'max-w-sm',
    sizeSmall: 'max-w-xs',
    sizeMedium: 'max-w-md',
    sizeLarge: 'max-w-lg',
    sizeExtraLarge: 'max-w-2xl',
    sizeFull: ' w-full',

    // Body
    body: 'relative flex-1',
    bodyWithPadding: 'px-4 sm:px-6',
    bodyWithTitle: 'mt-6',

    // Close button
    closeButtonContainer: 'flex h-7 items-center',

    // closeButton: 'rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    closeButton: mergeClasses(
      commonClasses.buttonRadius,
      commonClasses.buttonText,
      commonClasses.buttonRing,
      'focus:ring-primary-600',
      'text-gray-700 focus:text-gray-600 dark:text-white dark:hover:text-white',
      'bg-white dark:bg-gray-700',
      'p-0.5 hover:text-gray-500 dark:hover:text-gray-300',
    ),

    closeButtonIcon: 'h-6 w-6',

    // Title
    titleContainer: 'flex items-start justify-between space-x-3',
    titleWrapper: 'px-4 sm:px-6',
    titleInner: 'space-y-1',
    titleText: 'text-lg font-medium text-gray-900 dark:text-white',

    // Subtitle
    subtitle: 'text-sm text-gray-500 dark:text-gray-400',

    // Transition backdrop
    overlayEnter: 'duration-300 ease-out',
    overlayEnterFrom: 'opacity-0',
    overlayEnterTo: 'opacity-100',
    overlayLeave: 'duration-200 ease-in',
    overlayLeaveFrom: 'opacity-100',
    overlayLeaveTo: 'opacity-0',

    // Transition for Modal from left
    dialogLeftEnter: 'transform transition ease-in-out duration-500 sm:duration-700',
    dialogLeftEnterFrom: '-translate-x-full',
    dialogLeftEnterTo: 'translate-x-0',
    dialogLeftLeave: 'transform transition ease-in-out duration-500 sm:duration-700',
    dialogLeftLeaveFrom: 'translate-x-0',
    dialogLeftLeaveTo: '-translate-x-full',

    // Transition for Modal from left
    dialogRightEnter: 'transform transition ease-in-out duration-500 sm:duration-700',
    dialogRightEnterFrom: 'translate-x-full',
    dialogRightEnterTo: 'translate-x-0',
    dialogRightLeave: 'transform transition ease-in-out duration-500 sm:duration-700',
    dialogRightLeaveFrom: 'translate-x-0',
    dialogRightLeaveTo: 'translate-x-full',
  },
}

export const slideoverClassesKeys = Object.keys(slideoverConfig.classes)

export declare type SlideoverClassesValidKeys = keyof typeof slideoverConfig.classes

export declare type SlideoverValue = boolean

export declare type SlideoverProps = WithVariantPropsAndClassesList<{
  modelValue?: SlideoverValue
  title?: string
  subtitle?: string
  teleport?: boolean
  teleportTo?: string | HTMLElement
  overlay?: boolean
  closeable?: boolean
  closeableOnClickOutside?: boolean
  closeableOnPressEscape?: boolean
  paddingOnBody?: boolean
  paddingOnContainer?: boolean
  showHeader?: boolean
  as?: string
  position?: string | 'left' | 'right'
  size?: string | 'default' | 'small' | 'medium' | 'large' | 'full'
} & InputHTMLAttributes & Data, SlideoverClassesValidKeys>

