# Processing / API integration

The eodash ecosystem allows integration of nearly limitless custom endpoints and APIs to further enrich the information that can be provided to the user.

Typical use cases are fetching time series or statistics for an area that can be either selected from already existing features on the map or allow the user to create a custom geometry that will be passed to the endpoint.

The three main configuration blocks can be seen in the figure below. They are basically definition of:

* **Input**: what inputs are required for the call
* **Process call**: where is the endpoint and how will the inputs be passed
* **Output**: how should the result be presented to the user 

This means that in principle the whole definition can be done with two json files and the references in the STAC collection definition.

![processing diagram](./assets/process_definition.jpg)

## Input

The inputs needed for the endpoint to be queried can be configured through a **eodash:jsonform** definition. A url to this file needs to be included in the root of the STAC collection definition or configured in the eodash_catalog collection definition.

This in principle allows a broad spectrum of input fields as well as even custom widgets for helping the user select correct values. The component used in eodash to render the form is the [eox-jsonform](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-jsonform--docs) from the EOxElements. Which is in turn based on the [json-editor](https://github.com/json-editor/json-editor) software.

A typical json-form configuration file could look like this:

```json
{
    "type": "object",
    "properties": {
        "feature_id": {
            "type": "string",
            "title": "Select feature on the map",
            "format": "feature",
            "options": {
                "drawtools": {
                    "for": "eox-map#main",
                    "layerId": "collection_layer_id"
                },
                "featureProperty": "id",
                "type": "string"
            }
        }
    },
    "options": {
        "execute": true
    }
}
```

This configuration allows the user to click on a feature on the map, and the endpoint will only need the `id` of that feature as a string.

The drawtool widget integrations is very customizable, allowing custom point/bbox/area selection and other options, a more in depth explanation and further examples can be found in the [Input definition](/processing_inputs) section.

## Process call

Once the inputs have been configured it is possible to define how they should be applied into the request.
The usual RESTful interfaces allow to send a GET request to retrieve the relevant information. For example this could be a typical endpoint:

```
https://greatapi.com/v1/feature/timeseries/austria
```

By using templatig language it is possible to utilize the properties that have been defined in the inputs. For example we can use the `feature_id` in the GET request. The definition in the eodash_catalog collection would be:

```yaml
Process:
    Name: "timeseries",
    JsonForm: "https://url.to/jsonform.json"
    VegaDefinition: "https://url.to/vega_chart.json"
    EndPoints:
        - Identifier: "timeseries"
          Url: "https://greatapi.com/v1/feature/timeseries/{{feature_id}}"
          Type: "application/json"
          Method: "GET"
```

or directly in STAC collection as service link:

```json
{
    "rel": "service",
    "href": "https://greatapi.com/v1/feature/timeseries/{{feature_id}}",
    "type": "application/json",
    "id": "timeseries",
    "method": "GET"
},
```

## Output

The request to the endpoint will then return some data. eodash foresees two types of outputs:

* tabular or similar 
* or georeferenced data

### Tabular data

For tabular data it is possible to specify a VEGA Chart definition. [Vega](https://vega.github.io/vega/) is a well established Visualization Grammar. Through this a completely custom visualization of the data can be configured for the user.

Here is a screenshot of just a few examples (https://vega.github.io/vega/examples/) showing what is possible with VEGA definitions:

![vega examples](./assets/vega_examples.jpg)

An example definition could look like this, it can be tried out directly in the [online editor](https://vega.github.io/editor/) as well:

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      { "x": 1, "y": 3 },
      { "x": 2, "y": 5 },
      { "x": 3, "y": 2 }
    ]
  },
  "mark": "point",
  "encoding": {
    "x": { "field": "x", "type": "quantitative" },
    "y": { "field": "y", "type": "quantitative" }
  }
}
```
The main change that is needed is to remove the **data** content and only leave a name property inside, e.g.:
```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "name": "timeseries"
  },
  ...
}
```
The data section will be filled by eodash.

### Georeferenced data

For georeferenced data such as Cloud optimized **Geotiffs (COGs), GeoJSON or FlatGeobuf** an **eodash:style** definition file can be specified.
More information on the style definition can be found under [Styling](/styling).

It is also possible to specify multiple endpoints, for example, one that provides a timeseries and another that provides a GeoJSON with some location data, this can be seen in the following image:

![multi endpoints screenshot](./assets/processing_results.jpg)

