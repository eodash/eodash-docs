import EOX from "@eox/pages-theme-eox";
import './custom.css';
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vitepress';

export default {
  ...EOX,
  setup() {
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
