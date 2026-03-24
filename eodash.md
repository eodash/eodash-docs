# eodash instance

If your catalog endpoint is already set up (see [Catalog backend](./catalog) if not), you can create an eodash instance to point to it.

We provide two example template repositories that show the main two ways of integrating eodash:
*  as a [web component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) in the [eodash-pages-template](https://github.com/eodash/eodash-pages-template) 
*  as a Vite-based application, which is better suited for further development of custom widgets in the [eodash-instance-template](https://github.com/eodash/eodash-instance-template). 

Both examples serve different needs, so please explore both. For example, if you want to extend the core capabilities available, the eodash-instance-template is a good starting point.

Visit the [eodash-instance-template](https://github.com/eodash/eodash-instance-template) and click the "Use this template" button in the top right to create your own repository.

The only change that needs to be made is to point the instance to your catalog endpoint. Go to `/src/main.js`, find the `stacEndpoint`setting, add your endpoint, and commit the changes to your repository. [This](https://github.com/eodash/eodash-instance-template/blob/main/src/main.js#L8) is the location in the example instance repository. If you followed the catalog setup, your URL should look like this: `https://<organization>.github.io/<repository>/<catalog_name>/catalog.json`.

After this change is done, enable GitHub Pages for your repository and point it to the gh-pages branch. The template is deployed the same way and is available at https://eodash.github.io/eodash-instance-template/

For your own project, you can find the url in the deployment section of your GitHub repository. It should look like: `https://<organization>.github.io/<repository>`

You can follow the same approach with the other template repository. The [eodash-pages-template](https://github.com/eodash/eodash-pages-template) uses [vitepress](https://vitepress.dev/) as framework, and integrates the eodash web component variant. It also shows how to create static pages, and include the [storytelling](./storytelling) concept within one static deployment.
