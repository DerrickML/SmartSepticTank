FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '500',
    height: '600',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "",
            "subcaption": "",
            "lowerLimit": "0",
            "upperLimit": "3450",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "1",
            "chartBottomMargin": "45",
            "showValue": "0",
            // "value":"58",
			"dataStreamUrl": "/SmartSepticTank/read_data.php?widget=tank_animation",
			"refreshInterval": "1",
			"refreshInstantly": "1",
			"cylFillColor": "#fff25e",
			"cyloriginx": "225",
			"cyloriginy": "430",
			"cylradius": "180",
			"cylheight": "390"
        },
        "value": "700",
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "id": "range",
                "items": [{
                    "id": "rangeBg",
                    "type": "rectangle",
                    "x": "$canvasCenterX-75",
                    "y": "$chartEndY-40",
                    "tox": "$canvasCenterX +55",
                    "toy": "$chartEndY-80",
                    "fillcolor": "#35d1fd"
                }, {
                    "id": "rangeText",
                    "type": "Text",
                    "fontSize": "20",
                    "fillcolor": "#333333",
                    "text": "Loading...",
                    "x": "$chartCenterX-60",
                    "y": "$chartEndY-60"
                }]
            }]
        }

    },
    "events": {
        "rendered": function(evtObj, argObj) {
            //35d1fc   blue color
            //var fuelVolume = 110;
            evtObj.sender.chartInterval = setInterval(function() {
                //(fuelVolume < 10) ? (fuelVolume = 80) : "";
                //var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                //evtObj.sender.feedData && evtObj.sender.feedData("&value=" + consVolume);
               // fuelVolume = consVolume;
			    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
            }, 2000);
        },
        //Using real time update event to update the annotation
        //showing available volume of Diesel
        "realTimeUpdateComplete": function(evt, arg) {
            var annotations = evt.sender.annotations,
                dataVal = evt.sender.getData(),
                colorVal = (dataVal >= 600) ? "#f8bd1b" : ((dataVal <= 300) ? "#6caa03" : "#e44b02");
            //Updating value
            annotations && annotations.update('rangeText', {
                "text": dataVal + " ltrs"
            });
            //Changing background color as per value
            annotations && annotations.update('rangeBg', {
                "fillcolor": colorVal
            });

        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
);
			chartObj.render();
		});