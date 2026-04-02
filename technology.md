---
layout: page
---

# Technology

eodash is the core framework, state manager and component communicator between both core and third-party widgets. It is based on [vue.js](https://vuejs.org/) (version 3).

The core widgets are built using [EOxElements](https://eox-a.github.io/EOxElements/) and are extended through how they interact with each other. 

The state management within eodash is based on [SpatioTemporal Asset Catalogs (STAC)](https://stacspec.org). Each component can register to a central store, provided by [pinia](https://pinia.vuejs.org/).

eodash can be used either as a [web component](https://www.webcomponents.org/introduction) or as a package that can be build based on [vite](https://vitejs.dev/).

