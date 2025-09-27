# Data configuration

An eodash instance expects to load its content from a STAC catalog. This catalog can be generated using the [eodash_catalog](https://github.com/eodash/eodash_catalog). As can be seen in the [catalog wiki](https://github.com/eurodatacube/eodash-catalog/wiki/Resource) there are multiple services supported.

We consider eodash to be a data integrator, so we find a "serverless" approach for data integration to be a great opportunity to not require more complex setups when wanting to share your data, apart from making them reachable online. For this we want to give explanations and examples of how this can be done for raster and vector data.
Currently we support Cloud Optimized GeoTIFFs (COGs) for raster and GeoJSON or FlatGeoBuf files for vector data.

For all three types of files, returned [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) on the server side need to be correctly set up in order to let the eodash in a browser access them directly from a different domain than eodash is usually running on. You can use [following CORS validator](https://cors-test.codehappy.dev/) - (not affiliated with eodash project, use at your own discretion) for your resources to check if the response CORS headers are set up correctly for access from the domain where eodash is/will be hosted.

For both data types we wanted to introduce a shared language that gives the user the tools to fully describe how they should be rendered and interacted with. This is achieved by using a style JSON configuration file that utilizes the languages of [OpenLayers flat style](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html) as well as [JSON Form](https://github.com/jsonform/jsonform/wiki#using-json-schema-to-describe-your-data-model) definition language as extended by the EOxElement [eox-jsonform](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-jsonform--docs).
The style reference for STAC as a possible extension is being discussed [here](https://github.com/radiantearth/stac-spec/issues/1284). We currently take the proposed 3B approach.

Following is the catalog structure that would be generated when using the [eodash_catalog](https://github.com/eodash/eodash_catalog) tool.

![STAC catalog structure](./assets/data_definition.png)

Datasets can be referenced as assets within one item (i.e. TimeEntry) and then utilized as part of the style.

## Vector data

Here is an example configuration for the catalog tool to add a GeoJSON file:

```json
{
  "Name": "example_collection",
  "Title": "Example collection for vector data",
  "EodashIdentifier": "exmpl1",
  "Description": "This can be **markdown** text",
  "Resources": [
    {
      "Name": "GeoJSON source",
      "Style": "https://location.of/vector_style.json",
      "Bbox": [
        9.27,
        46.2,
        17.3,
        49.2
      ],
      "TimeEntries": [
        {
          "Time": "2024",
          "Assets": [
            {
              "Identifier": "vector_data",
              "File": "https://location.of/file.json"
            }
          ]
        }
      ]
    }
  ]
}

```

([FlatGeobuf resource](https://github.com/eodash/eodash_catalog/wiki/Resource#raw-sources) would just have a different Resource Name)

Here is a very basic example of how to style vector data:
```json
{
    "fill-color": "red",
    "stroke-color": "black",
    "stroke-width": 1
}
```

![vector data rendering example](./assets/vector_styled_1.png)

For more possibilities of vector data styling, description of parameters and options, please see dedicated [styling guide](./styling#vector-styling).

## Raster data

Here is an example configuration for the catalog tool to add two single band COGs.

```yaml
{
  "Name": "example_collection",
  "Title": "Example collection for raster data",
  "EodashIdentifier": "exmpl2",
  "Description": "This can be **markdown** text",
  "Resources": [
    {
      "Name": "COG source",
      "Style": "https://location.of/raster_style.json",
      "Bbox": [
        9.27,
        46.2,
        17.3,
        49.2
      ],
      "TimeEntries": [
        {
          "Time": "2024",
          "Assets": [
            {
              "Identifier": "cog1",
              "File": "https://location.of/cogfile1.tiff"
            },
            {
              "Identifier": "cog2",
              "File": "https://location.of/cogfile2.tiff"
            }
          ]
        }
      ]
    }
  ]
}

```

In eodash and OpenLayers, each COG contributes with all it's indexed bands in a sequence to the rendering and needs to be accounted for in the style definition.

In this case, the `cogfile1.tiff` would be used as a `[band, 1]` and `cogfile2.tiff` as `[band, 2]`.

The style configuration for raster data functions in exactly the same way as the one described for vector data, but only uses the `color` attribute do define how your raster data is rendered.

Here is a very basic example of grayscale rendering of raster values from 0 to 400 and manually filtering `No Data areas` (value 0) as transparent:
```json
{
  "color": [
    "case",
    [">", ["band", 1], 0],
    [
      "interpolate",
      ["linear"],
      ["band", 1],
      0,
      [0, 0, 0, 1],
      400,
      [255, 255, 255, 1]
    ],
    ["color", 0, 0, 0, 0]
  ]
}
```

For more possibilities of raster data styling, description of parameters and options, please see dedicated [styling guide](./styling#raster-styling).


This covers the basics for "serverless" data integration. Integration of datasets provided through services do not use a style file, each endpoint provides their own configuration options which can be defined in the data definition configuration file. For more information please go to the [resource section](https://github.com/eurodatacube/eodash-catalog/wiki/Resource) of the catalog wiki.
