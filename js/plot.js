var scaleBackgroundGradient = {
    type: 'linearGradient',
    x0: 0,
    y0: 1,
    x1: 0,
    y1: 0,
    colorStops: [{ offset: 0, color: '#0056f6' },
    { offset: 0.993, color: '#91a3c5' }]
};

var range1Gradient = {
    type: 'linearGradient',
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 1,
    colorStops: [{ offset: 0, color: '#c70000' },
    { offset: 1, color: '#ce7f01' }]
};

var range2Gradient = {
    type: 'linearGradient',
    x0: 0,
    y0: 1,
    x1: 0,
    y1: 0,
    colorStops: [{ offset: 0, color: '#ce7f01' },
    { offset: 1, color: '#c8e643' }]
};

var comparativeMeasureGradient = {
    type: 'linearGradient',
    x0: 0,
    y0: 0,
    x1: 1,
    y1: 0,
    colorStops: [{ offset: 0, color: '#E4E4E4' },
    { offset: 0.552, color: '#FFFFFF' }]
};

var featuredMeasureGradient = {
    type: 'linearGradient',
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 1,
    colorStops: [{ offset: 0, color: '#BABABA' },
    { offset: 0.495, color: '#FFFFFF' }]
};

var state = {
    orientation: 'horizontal',
    border: {
        lineWidth: 0
    },
    // animation: {
    //         enabled: true,
    //         duration: 2,
    //         delayTime: 1
    //     },
    tooltips: {
        disabled: false,
        highlighting: false
    },
    quantitativeScale: {
        name: 'Main Scale',
        minimum: 0,
        maximum: 410,
        background: scaleBackgroundGradient,
        labels: {
            offset: 0.95
        },
        qualitativeRanges:
            [
                {
                    value: 47,
                    fillStyle: range1Gradient
                },
                {
                    value: 70,
                    fillStyle: range2Gradient
                }
            ]
    },
    comparativeMeasures:
        [
            {
                title: 'Comparative Measure',
                value: 80,
                fillStyle: comparativeMeasureGradient
            }
        ],
    featuredMeasures:
        [
            {
                title: 'Featured Measure',
                value: 70,
                innerOffset: 0.4,
                outerOffset: 0.6,
                fillStyle: featuredMeasureGradient
            }
        ]
};

var bulletGraph = new DataViz.BulletGraph(state);
bulletGraph.write('container');

updateGraph();

function updateGraph() {
    $.post("data2.php",
        function (data2) {
            var septic1 = [];
            var septic2 = [];

            for (var i in data2) {
                // state.comparativeMeasures[0].value = Math.round(20 + Math.random() * 80);
                septic1.push(data2[i].Septic_Level);
                // state.featuredMeasures[0].value = Math.round(20 + Math.random() * 80);
                septic2.push(data2[i].Septic_Level);
                bulletGraph.setState(state);
            }
            state.comparativeMeasures[0].value = septic1;
            state.featuredMeasures[0].value = septic2;

            if (septic1 > 300) {
                state.quantitativeScale.maximum = 410;
            }
            // else if (septic1>300){
            // 	state.quantitativeScale.maximum = 300;
            // }
            else if (septic1 > 200) {
                state.quantitativeScale.maximum = 350;
            }
            else if (septic1 > 100) {
                state.quantitativeScale.maximum = 250;
            }
            else if (septic1 > 0) {
                state.quantitativeScale.maximum = 150;
            }
            else {
                state.quantitativeScale.maximum = 410;
            }

            setTimeout('updateGraph()', 400);
        });


}