import EOX from "@eox/pages-theme-eox";
import './custom.css';
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vitepress';

export default {
  ...EOX,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });
    if (!import.meta.env.SSR) {
      await import('@eodash/eodash/webcomponent');
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import ("@eox/map");
      await import ("@eox/chart");
      await import ("@eox/map/src/plugins/advancedLayersAndSources");
      await import ("@eox/drawtools");
      await import ("@eox/jsonform");
      await import ("@eox/stacinfo");
      await import ("@eox/layercontrol");
      await import ("color-legend-element");
      await import ("@eox/timecontrol");
      await import ("@eox/ui");
    }
  },
  async setup() {
    const route = useRoute()
    
    const manipulateTargetAttributes = () => {
      document.querySelectorAll('a[target="_self"]').forEach((link) => {
        link.removeAttribute('target')
      });
    }
    watch(route, () => {
      setTimeout(manipulateTargetAttributes, 50)
    })
    return {}
  }
}
