// Styles
import './styles/fonts.css'
import './styles/vars.css'
import './styles/base.css'
import './styles/utils.css'
import './styles/components/custom-block.css'
import './styles/components/vp-code.css'
import './styles/components/vp-doc.css'
import './styles/components/vp-sponsor.css'
import './styles/tailwind.css'
import './styles/custom.css'
import './styles/v-calendar/v-calendar.pcss'
import './styles/shiki-tags/shiki-tags.pcss'
import './styles/why-frame/whyframe.pcss'
import 'vue-json-pretty/lib/styles.css'

// Plugins
import { Plugin } from '@indigit/vanilla-components'
import { makeServer } from '../../utils/server'

// Vue Templates
import Layout from './components/Layout.vue'
import NotFound from './components/NotFound.vue'
import DynamicLayout from './why-frame/DynamicLayout.vue'
export { default as VPHomeHero } from './components/VPHomeHero.vue'
export { default as VPHomeFeatures } from './components/VPHomeFeatures.vue'
export { default as VPHomeSponsors } from './components/VPHomeSponsors.vue'
export { default as VPDocAsideSponsors } from './components/VPDocAsideSponsors.vue'
export { default as VPTeamPage } from './components/VPTeamPage.vue'
export { default as VPTeamPageTitle } from './components/VPTeamPageTitle.vue'
export { default as VPTeamPageSection } from './components/VPTeamPageSection.vue'
export { default as VPTeamMembers } from './components/VPTeamMembers.vue'

const theme = {
     Layout: DynamicLayout,

    // Layout,
    NotFound,
    enhanceApp({ app }) {
      app.use(Plugin)

      // Auto-register components
      const components = import.meta.glob('../../src/components/*.vue', { eager: true })
      Object.entries(components).forEach(([path, definition]) => {
        const componentName = path.split('/').pop().replace(/\.\w+$/, '')
        app.component(componentName, definition.default)
      })

      if (!import.meta.env.SSR) {
        // Start the fake API server
        makeServer({ environment: 'production' })
      }
    },
}
export default theme
