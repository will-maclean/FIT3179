// Assign the specification to a local variable vlSpec.
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

  // Embed the visualization in the container with id `vis`
  vegaEmbed('#stateSummary', vlStateSpec);


// places to plot:
// - marysville
// - kangaroo island
