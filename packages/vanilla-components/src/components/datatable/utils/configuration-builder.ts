import type * as Types from '../config'
import useFetchData from './fetch-data'
import type { Data } from '@/core/types'

export default function configurationBuilder<
  Props extends Types.DatatableConfiguration | Data,
>(props: Props): Types.DatatableConfiguration {
  const defaultPooling = {
    enable: false,
    interval: 5,
    during: 60,
    stopWhenDataChanges: true,
  } as Types.DatatablePooling

  const defaultOptions = {
    selectable: true,
    searchable: true,
    showSettings: true,
    showNumberOfItems: true,
    showPages: false,
    striped: false,
    compact: true,
    refreshable: true,
  } as Types.DatatableOptions

  const defaultTranslations = {
    title: 'Items',
    subtitle: 'Here you can check your latest items',
    resource: 'Item',
    resources: 'Items',

    actionsButton: 'Actions',
    actionsSelectedRows: 'With :rows selected',

    actionConfirmTitle: 'Confirm your action',
    actionConfirmText: 'Are you sure you want to :action on the :itemsSelected item(s) selected? Please confirm',
    actionConfirmButton: 'Yes, I\'v Confirmed',
    actionCancelButton: 'Nah, Cancel',

    search: 'Search',
    searchPlaceholder: 'Search your latest Payments',

    selectRows: 'You currently have :rows payments selected',
    selectedUndo: 'Deselect all',
    selectAllOr: 'Select current page or',
    selectAllMatching: 'Select all records matching filter',
    selectAllMatchingUndo: 'Select only current page',

    filters: 'Filters',
    filtersBarLabel: 'Filters',
    filtersWithEmptyData: 'Oops, seems like there is no records after filtering',
    filtersReset: 'Reset Filters',
    filtersResetOr: 'or',
    filtersCopy: 'Copy Filters Link',
    filtersSaveAndClose: 'Save & Close',
    filtersRemove: 'Remove',

    settings: 'Settings',
    settingsItemsPerPage: 'Items p/ Page',
    settingsVisibility: 'Visibility',
    settingsPersist: 'Persist Settings',
    settingsPersistSelection: 'Save Selected',
    settingsReset: 'Reset to Default Settings',
    settingsSaveAndClose: 'Save & Close',

    refresh: 'Refresh',

    recordsEmpty: 'Seems like there is no records to show you. Please come back later or try inserting some records.',
    recordsEmptyWithFiltersOrSearch: 'Sorry but there is no records matching your search or filters.',
    recordsEmptyWithFiltersOrSearchAction: 'Reset Query',

    settingsPerPage: ':count Items per page',

    showingFrom: 'Showing :from to :to of :total results',
    nextPage: 'Next',
    previousPage: 'Previous',
  } as Types.DatatableTranslations

  const defaultPerPageOptions = [
      { value: 5, text: '5 Items per page' },
      { value: 10, text: '10 Items per page' },
      { value: 50, text: '50 Items per page' },
      { value: 100, text: '100 Items per page' },
      { value: 300, text: '300 Items per page' },
  ] as Types.DatatablePageOptions

  return {
    name: props?.uniqueName || props.config?.name,
    primaryKey: props?.primaryKey || props.config?.primaryKey,
    filtersKey: props?.primaryKey || props.config?.primaryKey || props?.primaryKey || props.config?.primaryKey,
    columns: Object.assign(props?.columns as Types.DatatableColumns, props.config?.columns) as Types.DatatableColumns,
    actions: Object.assign(props?.actions as Types.DatatableAction[], props.config?.actions) as Types.DatatableAction[],
    filters: Object.assign(props?.filters as Types.DatatableFilters, props.config?.filters) as Types.DatatableFilters,

    options: Object.assign(
      defaultOptions,
      props?.options,
      props.config?.options,
    ),

    translations: Object.assign(
      defaultTranslations,
      props?.translations,
      props.config?.translations,
    ),

    perPageOptions: Object.assign(
      defaultPerPageOptions,
      props?.perPageOptions,
      props.config?.perPageOptions,
    ),

    pooling: Object.assign(
      defaultPooling,
      props?.pooling,
      props.config?.pooling,
    ),

    fetchData: props?.fetchData || props.config?.fetchData || useFetchData,
    fetchEndpoint: props?.fetchEndpoint || props?.config?.fetchEndpoint || undefined,
    fetchMethod: props?.fetchMethod || props?.config?.fetchMethod || 'POST',

    actionsEndpoint: props?.actionsEndpoint || props?.config?.fetchEndpoint || undefined,
    actionsMethod: props?.actionsMethod || props.config?.actionsMethod?.method || 'POST',

    onActionExecutedCallback: props?.onActionExecutedCallback || props.config?.onActionExecutedCallback || undefined,
    onExceptionCallback: props?.onExceptionCallback || props.config?.onExceptionCallback || undefined,
  }
}
