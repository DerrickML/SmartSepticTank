function getTankData() {

    FusionCharts.ready(function () {
        showTank();
    });

    function showTank() {
        $.post("data2.php",
            function (data2) {
                var lvl = [];
                for (var i in data2) {
                    lvl.push(data2[i].septic);
                }

                // var lvl = 100;
                var chartObj = new FusionCharts({
                    type: 'cylinder',
                    dataFormat: 'json',
                    renderAt: 'chart-container',
                    width: '350',
                    height: '370',

                    dataSource: {
                        chart: {
                            "theme": "fusion",
                            "caption": "",
                            "subcaption": "",
                            "lowerLimit": "0",
                            "upperLimit": "3400",
                            "lowerLimitDisplay": "Empty",
                            "upperLimitDisplay": "Full",
                            "numberSuffix": " ltrs",
                            "showValue": "1",
                            "chartBottomMargin": "45",
                            "showValue": "0",
                            "value": "58",
                            // "dataStreamUrl": "/web_host/watertank/read_data.php?widget=tank_animation",
                            "refreshInterval": "1",
                            "refreshInstantly": "1",
                            "cylFillColor": "#fff25e",
                            "cyloriginx": "250",
                            "cyloriginy": "540",
                            "cylradius": "240",
                            "cylheight": "450"
                        },
                        value: lvl,
                        "annotations": {
                            "origw": "400",
                            "origh": "290",
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
                                    "fillcolor": "2e1c00"
                                }, {
                                    "id": "rangeText",
                                    "type": "Text",
                                    "fontSize": "20",
                                    "fillcolor": "#2e1c00",
                                    "text": "Loading...",
                                    "x": "$chartCenterX-60",
                                    "y": "$chartEndY-60"
                                }]
                            }]
                        }

                    },

                    "events": {
                        "rendered": function (evtObj, argObj) {
                            evtObj.sender.chartInterval = setInterval(function () {
                                evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                            }, 2000);
                        },
                        //Using real time update event to update the annotation
                        //showing available volume of septic
                        "realTimeUpdateComplete": function (evt, arg) {
                            var annotations = evt.sender.annotations,
                                dataVal = evt.sender.getData(),
                                colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                            //Updating value
                            annotations && annotations.update('rangeText', {
                                "text": dataVal + " ltrs"
                            });
                            //Changing background color as per value
                            annotations && annotations.update('rangeBg', {
                                "fillcolor": colorVal
                            });

                        },
                        "disposed": function (evt, arg) {
                            clearInterval(evt.sender.chartInterval);
                        }
                    }
                }
                );
                chartObj.render();
            });
    }
    // setInterval(showTank, 5000); //milisecond
};
getTankData();

$("#refreshBtn").click(
    function(){
       getTankData();
    }
);


// chartObj.dataSource.value = 100;