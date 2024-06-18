# eodash instance

If you have already a catalog endpoint set up (if not see [Catalog backend](./catalog)) you can create an eodash instance to point to it.

We have created to example template repositories showcasing the two possible approaches of integrating eodash, this is either:
*  as a [web component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) in the [eodash-pages-template](https://github.com/eodash/eodash-pages-template) 
* or as an vite based application for supporting further development of custom widgets in the [eodash-instance-template](https://github.com/eodash/eodash-instance-template). 

Both examples have their own application areas, so please feel free to explore both. As example here let's say you would potentially like to extend the core capabilities available, so using the eodash-instance-template could be a good candidate.

Visit the [eodash-instance-template](https://github.com/eodash/eodash-instance-template) and use the "Use this template" button at the top right to create your own repository.

The only change that in principle needs to be made is to point the instance to your catalog endpoint. The configuration file is under `/src/main.js`. There in the `stacEndpoint`setting add your endpoint and commit the changes to your repository. [This](https://github.com/eodash/eodash-instance-template/blob/main/src/main.js#L8) is the location in the example instance repository. If you followed the previous section for setting up your catalog your url should look something like this: `https://<organization>.github.io/<repository>/<catalog_name>/catalog.json`.

Once this change is done make sure that github pages are activated for the repository and pointing to the gh-pages branch. For example the instance template is deployed the same way and can be reached through https://eodash.github.io/eodash-instance-template/

For your project you should be able to find the url in the deployment section of your github repository and should look like: `https://<organization>.github.io/<repository>`

The same approach can be used for the other template repository. The [eodash-pages-template](https://github.com/eodash/eodash-pages-template) uses [vitepress](https://vitepress.dev/) as framework in which the eodash web component variant is integrated. It also shows how to additionaly be able to create static pages, as well as integrate the [storytelling](./storytelling) concept all under one static deployment.