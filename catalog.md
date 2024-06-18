# Catalog backend

Let's start with the [catalog-template](https://github.com/eodash/catalog-template), navigate there and click on the "Use this template" button on the top right to create a new repository instance controlled by you. Once your instance is created follow the [How-to](https://github.com/eodash/catalog-template?tab=readme-ov-file#how-to) to enable github pages to automatically generate and host your catalog.

A very basic catalog example with one collection is already setup, so you can make sure your instance is correctly configured by going to `https://<organization>.github.io/<repository>/<catalog_name>/catalog.json`

To further understand configuration options for data collections have a look at the [data configuration](./data) section. 

The generation of the catalog which the catalog-template utilizes is based on the [eodash_catalog](https://github.com/eodash/eodash_catalog) python package. For further information please have a look at the repository and documentation.

Please have a look at how to setup an eodash instance in the next section [eodash instance](./eodash).