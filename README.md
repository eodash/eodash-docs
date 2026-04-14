# eodash-docs

> Central point for documentation related to the **eodash ecosystem** — a federated system for Earth Observation data visualization based on [STAC](https://stacspec.org).

[![Documentation](https://img.shields.io/badge/docs-vitepress-blue.svg)](https://eodash.github.io/eodash-docs/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4fc08d.svg)](https://vuejs.org/)

---

## Key Features

- **STAC-Native**: Built entirely around SpatioTemporal Asset Catalogs for data management.
- **Modular Architecture**: Core framework with extensible widgets and state management.
- **Configurable UI**: Easily customizable themes and dashboard layouts.
- **Storytelling**: Integrated interactive and guided experiences for EO data.
- **Agnostic Integration**: Works as a Web Component or a Vite-based package.

## Ecosystem Components

The eodash ecosystem consists of three main pillars:

1. **[eodash](https://github.com/eodash/eodash)**: The core web client dashboard library (Vue 3).
2. **[eodash_catalog](https://github.com/eodash/eodash_catalog)**: A Python helper for generating static STAC catalogs from various EO endpoints.
3. **[storytelling](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-storytelling--docs)**: A component for creating interactive, markdown-based guided stories.

---

## Local Development

To run the documentation locally, follow these steps:

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run docs:dev
# or
npm start
```

The documentation will be available at `http://localhost:5173`.

### 3. Build & Preview

```bash
# Build for production
npm run docs:build

# Preview the production build
npm run docs:preview
```

---

## Contributing

We invite the EO community to collaborate! Whether it's reporting bugs, suggesting features, or contributing code, your input helps grow the eodash ecosystem.

## License

This project is licensed under the [MIT License](LICENSE).
