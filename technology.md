# Technology

eodash is intended as frame and component communicator for core and third party widgets.

The core widgets are based around [EOxElements](https://eox-a.github.io/EOxElements/) and extended by how they interact with each other. 

The state management within eodash is based around [SpatioTemporal Asset Catalogs (STAC)](https://stacspec.org), each component can register to a central store, supported by [pinia](https://pinia.vuejs.org/).

The eodash framework is based on [vue.js](https://vuejs.org/) 