# Technology

eodash is the framework, state manager and component communicator for core and third party widgets. This frame is based on [vue.js](https://vuejs.org/) (version 3).

The core widgets are based around [EOxElements](https://eox-a.github.io/EOxElements/) and extended by how they interact with each other. 

The state management within eodash is based around [SpatioTemporal Asset Catalogs (STAC)](https://stacspec.org), each component can register to a central store, provided by [pinia](https://pinia.vuejs.org/).

eodash can be instantiated by using it either as a [web component](https://www.webcomponents.org/introduction) or as a package that can be build based on [vite](https://vitejs.dev/).

