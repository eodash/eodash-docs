export default {
  id: "client-side-demo",
  stacEndpoint:
    "https://eoxhub-workspaces.github.io/eoxhub-test-catalog/catalog/catalog.json",
  brand: {
    noLayout: true,
    name: "Client-side rendering EODash Demo",
    theme: {
      colors: {
        primary: "#3333",
        secondary: "#A3A3A3",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.8,
        "primary-opacity": 0.9,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#009E73",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "",
  },
  templates: {
    expert: {
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-expert",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: false,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: false,
              enableSearch: false,
              enableBackToPOIs: false,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/12/12",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Expert Layers",
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 0, w: "4/4/3", h: 12 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                        "--list-padding": "0.5rem",
                      },
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
