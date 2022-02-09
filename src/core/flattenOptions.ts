import {
  NormalizedOption,
  NormalizedOptions,
} from '@/core/types';

/**
 * Flatten options
 * @param options
 */
const flattenOptions = (options: NormalizedOptions): NormalizedOptions => options.flatMap((option: NormalizedOption) => {
  if (option.children) {
    return flattenOptions(option.children);
  }

  return option;
});

export default flattenOptions;
