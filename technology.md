---
layout: page
---

# Technology

eodash is the core framework, state manager and component communicator between both core and third-party widgets. It is based on [vue.js](https://vuejs.org/) (version 3).

The core widgets are built using [EOxElements](https://eox-a.github.io/EOxElements/) and are extended through how they interact with each other. 

The state management within eodash is based on [SpatioTemporal Asset Catalogs (STAC)](https://stacspec.org). Each component can register to a central store, provided by [pinia](https://pinia.vuejs.org/).

eodash can be used either as a [web component](https://www.webcomponents.org/introduction) or as a package that can be build based on [vite](https://vitejs.dev/).

# Components

* [eodash](https://eodash.github.io/eodash)
  - library for eodash client instance creation and web component release
  - extendable and configurable through widgets
* [eodash_catalog](https://github.com/eodash/eodash_catalog)
  - library for creation of STAC catalog supported by eodash
  - supports multiple backends and services
* [eodash-pages-template](https://github.com/eodash/eodash-pages-template)
  - template repo showing how to instantiate eodash as part of a vitepress application
* [eodash-instance-template](https://github.com/eodash/eodash-instance-template)
  - template repo showing how to integrate eodash as package for building and extension of functionality into a vite based application
* [catalog-template](https://github.com/eodash/catalog-template)
  - template repo with example setup for a catalog configuration and deployment as github pages
* [eodash-docs](https://github.com/eodash/eodash-docs)
  - central location for eodash ecosystem documentation
* [eodash-schemas](https://github.com/eodash/eodash-schemas)
  - JSON schemas for eodash catalog configs for purposes of validation - matching [eodash catalog wiki entries](https://github.com/eodash/eodash_catalog/wiki)
* [eodash STAC Extension](https://github.com/eodash/eodash-extension)
* [preview-instance](https://eodash.github.io/preview-instance/) For checking your generated STAC catalog in a minimal eodash preview instance.

# Roadmap

This project will evolve iteratively, shaped by projects and community needs and interactions.

We welcome feedback and inputs through issues in respective components.
If you are unsure where to create an issue, use the [eodash issue board](https://github.com/eodash/eodash/issues).

Check [our eodash project roadmap](https://github.com/orgs/eodash/projects/1) to know about what are we planning next.
