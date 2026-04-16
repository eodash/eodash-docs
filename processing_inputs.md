---
layout: docs
---
# Input definition

This section provides examples giving further explanations and we collect some typical use cases which can help as handy sources to get you started in the definition.

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

This example shows the use of the [eox-drawtools](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-drawtools--docs) widget logic to select a geometry or feature on an eodash map. It provides an intuitive way for users to choose input data.

`feature_id` defines the property. Type and title can be configured in the object.

The format defines what handler/widget will be used. In this case, the custom `feature` format is used. It allows defining special options for the drawtools widget. 

The first one is which EOxElement map will be used. In eodash, this will always be `eox-map#main`. The layerId specifies which layer contains selectable features.
The `featureProperty` is the property identifier that should be extracted from the feature - in this case the id. The property type defines the output type - in this case string.
 
The additional execute options at the end are for endpoint calls that are not expensive and can be queried as soon as a selection has been done (e.g.) on the map. If this is not set, the user will have to click on the execute button when he is done with the input configuration.

## Formats

Depending on what data you need to send to the endpoint/process, you can use various helper formats: 

* Feature(s)
* Bbox(es)
* Point(s)
* Polygon(s)

For geo-formats, you can also define the map projection.


### Multiselection

All formats have a plural version. This means that the form value will return an array which can be used for cases like comparing data from multiple features. In the definition presented below, if feature is used in the EndPoint definition, it will trigger a request for every feature id that is in the selection array, will merge the data in an object and pass it along to the vega chart so it can be used for rendering.

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


