// State Summary
var vlStateSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      "url": "data/states.csv",
    },
    mark: 'bar',
    encoding: {
      y: {
        field: 'area',
        type: 'quantitative',
        axis: {
          title: 'Area Burnt (ha)'
        }
      },
      x: {
        field: 'State',
        axis: {
          title: 'State'
        }
      }
    }
  };

var vlWholeCountrySpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/worstDay.csv"
  },
  // "transform": [{"calculate": "substring(datum.zip_code, 0, 1)", "as": "digit"}],
  "projection": {
    "type": "mercator"
  },
  "mark": "circle",
  "encoding": {
    "longitude": {
      "field": "longitude",
      "type": "quantitative"
    },
    "latitude": {
      "field": "latitude",
      "type": "quantitative"
    },
    "size": {"value": 1},
    // "color": {"field": "digit", "type": "nominal"}
  }
}

var vlWholeCountrySpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 500,
  "projection": {
    "type": "mercator"
  },
  "layer": [
    {
      "data": {
        "url": "data/au-states-topo.json",
        "format": {
          "type": "topojson",
          "feature": "austates"  // todo
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "lightgray",
        "stroke": "white"
      }
    },
    {
      "data": {
        "url": "data/worstDay.csv"
      },
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {"value": 1},
        "color": {
          "field": "frp",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [3, 60, 200],
            "scheme": "inferno"
          },
          "legend": {
            "title": "Fire Radiation Power"
          }
        }
      },
      "mark": {
        "type": "circle",
      },
    }
  ]
}

var vlKangarooIslandSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 400,
  "projection": {
    "type": "mercator",
    "center": [137.2142, -35.7752],
    "scale": 15000
  },
  "layer": [
    {
      "data": {
        "url": "data/au-states-topo.json",
        "format": {
          "type": "topojson",
          "feature": "austates"  // todo
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "lightgray",
        "stroke": "white"
      }
    },
    {
      "data": {
        "url": "data/kangarooIsland.csv"
      },
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {
          "field": "frp",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [3, 60, 200],
            "range": [3, 6, 9, 12]
          }
        },
        "color": {
          "field": "frp",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [3, 60, 200],
            "scheme": "inferno"
          },
          "legend": {
            "title": "Fire Radiation Power"
          }
        }
        // "color": {"field": "digit", "type": "nominal"}
      },
      "mark": {
        "type": "circle",
        // "color": "red"
        
      },
    }
  ]
}


  vegaEmbed('#stateSummary', vlStateSpec);
  vegaEmbed('#wholeCountryWorst', vlWholeCountrySpec);
  vegaEmbed('#kangarooIsland', vlKangarooIslandSpec);


// places to plot:
// - marysville
// - kangaroo island
