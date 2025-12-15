# Input definition

In this section we go over some examples giving further explanations and we collect some typical use cases which can help as handy sources to get you started in the definition.

## Inital example

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

This first example shows the use of the [eox-drawtools](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-drawtools--docs) widget logic integrated for geometry or feature selection on the eodash map. Which is helpful in handling of features and geometry input information that allows an intuitive selection for the end-user.

Going through the properties object, the key to be used for the property is defined `feature_id`. In the object then the type and title can be configured.

The format defines what handler/widget will be used, in this case the custom `feature` format is used. This allows to define some special options for the drawtools widget. 

The first is which EOxElement map should be used. In eodash this should always be `eox-map#main`, the layerId of the collection that has the features that should be used for selection can be specified.
The `featureProperty` is the identifier of the property that should be extracted from the feature, in this case the id. Then the type of the property can be specified, which in this case is a string.

The additional execute options at the end, is intended for endpoint calls that are not expensive and can be queried as soon as a selection has been done (e.g.) on the map. If this is not set, the user will need to click on the execute button when he is ready with the input configuration.

## Formats

Depending on what geo-information you needs to be passed to the endpoint/process there are a various helper formats that can be utilized: 

* Feature(s)
* Bbox(es)
* Point(s)
* Polygon(s)

For geo-formats it is also possible to specify which projection the coordinates should be retrieved in.


### Multiselection

All formats have a plural variant, this means that the form value will return an array which can be utilized for things like comparing data from multiple features. In the definition presented below, if feature is used in the EndPoint definition it will trigger a request for every feature id that is in the selection array, will merge the data in an object and pass it along to the vega chart, so it can be used for rendering.

```json
{
    "options": {
        "execute": true
    },
    "type": "object",
    "properties": {
        "feature": {
            "type": "array",
            "title": "Select administrative areas on map to compare",
            "options": {
                "drawtools": {
                    "for": "eox-map#main",
                    "layerId": "collection_layer_id",
                    "featureNameKey": "name",
                    "featureStyles" :{
                        "click": {
                          "fill-color": "rgba(51, 153, 204,0.5)",
                          "stroke-color": "#3399CC",
                          "stroke-width": 2.5
                        }
                      }
                },
                "type": "string",
                "featureProperty": "id"
            },
            "format": "features"
        }
    }
}
```

## Other examples

Other typical property types:

```json
"exampleproperty": {
    "title": "Dropdown selection",
    "type": "string",
    "enum": [
        "key1",
        "key2",
        "key3"
    ],
    "options": {
        "enum_titles": [
            "First option",
            "Second option",
            "Third option"
        ]
    },
    "default": "key1"
}
```


