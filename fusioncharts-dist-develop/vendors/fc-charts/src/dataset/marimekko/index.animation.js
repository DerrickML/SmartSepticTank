import{animHelperFN}from'../../../../fc-core/src/lib';export default{"initial.dataset.marimekko":function(){var a=this,b=a.getFromEnv('chart'),c=b.config.yDepth||0,d=a.getFromEnv('yAxis');return{"rect.appearing":function(e){var f,g,h,i,j=d.getPixel(d.getAxisBase())+(b.isBar?-c:c),k=e.attr;return f=k.y,g=k.height,i=Math.sign(f+g/2-j),h=f+g,[{initialAttr:function(){var a={};return a.y=h,a.height=0,a},slot:'plot',startEnd:function(){return animHelperFN.getTimeByValue({start:0,end:.6},{startPx:j,endPx:1===i?a.config.yAxisMaxPixel:a.config.yAxisMinPixel},{startPx:h,endPx:1===i?k.y+k.height:k.y})},effect:'linear'}]},"group.appearing":null,"group.updating":null,"plotLabel.appearing":[{initialAttr:{opacity:0},slot:'final'}],"*":null}}};