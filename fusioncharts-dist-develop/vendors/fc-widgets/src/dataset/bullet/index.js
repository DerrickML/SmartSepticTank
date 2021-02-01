import{preDefStr,BLANK,pluck,getValidValue,COMMASTRING,getColorCodeString,HUNDREDSTRING,toRaphaelColor,COMMASPACE,getFirstValue,CLICK_THRESHOLD_PIXELS,TOUCH_THRESHOLD_PIXELS,pluckNumber,getFirstDefinedValue,parseUnsafeString,parseTooltext,getDefinedColor,getDashStyle,stubFN,POSITION_TOP,convertColor,getDarkColor,getColumnColor}from'../../../../fc-core/src/lib';import{getDep,addDep}from'../../../../fc-core/src/dependency-manager';import{ComponentInterface}from'../../../../fc-core/src/component-interface';import bulletAnimation from'./index.animation';let UNDEF,Raphael=getDep('redraphael','plugin'),BLANKSTRING=BLANK,showHoverEffectStr=preDefStr.showHoverEffectStr,SETROLLOVERATTR='setRolloverAttr',ROUND=preDefStr.ROUND,miterStr=preDefStr.miterStr,BUTT='butt',PLOTBORDERCOLOR='plotBorderColor',PLOTGRADIENTCOLOR='plotGradientColor',colorStrings=preDefStr.colors,SHOWSHADOW='showShadow',math=Math,mathMax=math.max,mathMin=math.min,mathAbs=math.abs,COLOR_FFFFFF=colorStrings.FFFFFF,noneStr='none',FILLMIXDARK10='{dark-10}',ROLLOVER='DataPlotRollOver',SETROLLOUTATTR='setRolloutAttr',ROLLOUT='DataPlotRollOut',win=window,doc=win.document,hasTouch=doc.documentElement.ontouchstart!==UNDEF,M='M',L='L',DECIDE_CRISPENING={true:UNDEF,false:'crisp'},EVENTARGS='eventArgs',GROUPID='groupId',POSITION_START=preDefStr.POSITION_START,POSITION_MIDDLE=preDefStr.POSITION_MIDDLE,PLOTFILLCOLOR_STR=preDefStr.PLOTFILLCOLOR_STR,HTP=hasTouch?TOUCH_THRESHOLD_PIXELS:CLICK_THRESHOLD_PIXELS;addDep({name:'bulletAnimation',type:'animationRule',extension:bulletAnimation});class BulletDataset extends ComponentInterface{constructor(){super(),this.addData=function(){},this.removeData=function(){},this.components={}}getType(){return'dataset'}getName(){return'bullet'}configure(a){if(!a)return!1;this.config.JSONData=a;var b,c,d,e,f,g,h,i,j,k=this,l=k.getFromEnv('chart'),m=k.config,n=k.config.JSONData,o=l.getFromEnv('dataSource').chart,p=k.getFromEnv('color-manager'),q=m.plotColor=p.getColor(PLOTFILLCOLOR_STR),r=pluckNumber(n.dashed,o.plotborderdashed),s=k.components.data,t=l.isBar,u=l.config.is3D,v=l.isStacked;k.setState('visible',1===pluckNumber(n.visible,1)),m.targetCapStyle=j=pluck(o.targetcapstyle,ROUND).toLowerCase(),j!==BUTT&&j!==ROUND&&'square'!==j&&'inherit'!==j&&(m.targetCapStyle=ROUND),m.upperLimit=pluckNumber(o.upperlimit),m.lowerLimit=pluckNumber(o.lowerlimit),m.initAnimation=!0,b=m.showplotborder=pluckNumber(o.showplotborder,0),m.plotDashLen=c=pluckNumber(o.plotborderdashlen,5),m.plotDashGap=d=pluckNumber(o.plotborderdashgap,4),m.plotfillAngle=pluckNumber(360-o.plotfillangle,t?180:90),m.plotFillAlpha=f=pluck(n.alpha,o.plotfillalpha,HUNDREDSTRING),m.plotColor=q=pluck(o.plotfillcolor,q),m.isRoundEdges=e=pluckNumber(o.useroundedges,0),m.plotRadius=pluckNumber(o.useRoundEdges,m.isRoundEdges?1:0),m.plotFillRatio=pluck(n.ratio,o.plotfillratio),m.plotgradientcolor=getDefinedColor(o.plotgradientcolor,p.getColor(PLOTGRADIENTCOLOR)),m.showPlotBorderOnHover=pluckNumber(o.showplotborderonhover,0),m.plotBorderAlpha=pluck(o.plotborderalpha,f,HUNDREDSTRING),m.plotBorderColor=pluck(o.plotbordercolor,u?COLOR_FFFFFF:p.getColor(PLOTBORDERCOLOR)),m.plotBorderThickness=b?pluckNumber(o.plotborderthickness,0):0,m.plotBorderDashStyle=r?getDashStyle(c,d):noneStr,m.showValue=pluckNumber(n.showvalue,o.showvalue,1),m.valuePadding=pluckNumber(o.valuepadding,2),m.showShadow=e||u?pluckNumber(o.showshadow,1):pluckNumber(o.showshadow,p.getColor(SHOWSHADOW)),m.showHoverEffect=pluckNumber(o.plothovereffect,o.showhovereffect,0),m.showTooltip=pluckNumber(o.showtooltip,1),m.stack100Percent=g=pluckNumber(l.stack100percent,o.stack100percent,0),m.definedGroupPadding=mathMax(pluckNumber(o.plotspacepercent),0),m.plotSpacePercent=mathMax(pluckNumber(o.plotspacepercent,20)%100,0),m.maxColWidth=pluckNumber(t?o.maxbarheight:o.maxcolwidth,50),m.showPercentValues=pluckNumber(o.showpercentvalues,v&&g?1:0),m.showPercentInToolTip=pluckNumber(o.showpercentintooltip,v&&g?1:0),m.plotPaddingPercent=pluckNumber(o.plotpaddingpercent),m.rotateValues=pluckNumber(o.rotatevalues)?270:0,m.placeValuesInside=pluckNumber(o.placevaluesinside,0),m.use3DLighting=pluckNumber(o.use3dlighting,1),s||(s=k.components.data=[]),m.plotAsDot=i=pluckNumber(o.plotasdot,0),m.plotFillPercent=pluckNumber(o.plotfillpercent,i?25:40),m.targetFillPercent=pluckNumber(o.targetfillpercent,60),m.targetThickness=pluckNumber(o.targetthickness,3),h=m.targetalpha=pluckNumber(o.targetalpha,100),m.targetColor=convertColor(pluck(o.targetcolor,p.getColor(PLOTFILLCOLOR_STR)),h),k._setConfigure()}_setConfigure(a){var b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T=this,U=T.getFromEnv('chart'),V=T.config,W=T.config.JSONData,X=a||W.data,Y=X&&X.length,Z=a&&a.data.length||Y,$=U.getFromEnv('dataSource').chart,_=T.getFromEnv('color-manager'),aa=V.showplotborder,ba=V.showPlotBorderOnHover,ca=V.plotColor,da=parseUnsafeString(pluck($.tooltipsepchar,COMMASPACE)),ea=pluckNumber($.seriesnameintooltip,1),fa=V.plotBorderThickness,ga=V.isRoundEdges,ha=V.showHoverEffect,ia=V.plotFillAngle,ja=V.plotBorderAlpha,ka=V.plotBorderDashStyle,la=T.components.data,ma=U.isBar,na=U.config.is3D,oa=-Infinity,pa=1/0,qa=T.getFromEnv('number-formatter'),ra=function(a){var d;return V.showTooltip?null===b?d=!1:a===UNDEF?(ea&&(e=getFirstValue(W&&W.seriesname)),d=e?e+da:BLANK,d+=q.toolTipValue?q.toolTipValue:BLANK):(f=[1,2,3,4,5,6,7,26,27],c={formattedValue:b,targetValue:q.target,targetDataValue:q.toolTipValueTarget},d=parseTooltext(a,f,c,n,$,W)):d=!1,d};for(la||(la=T.components.data=[]),K=0;K<Z;K++)n=a?a&&a.data[K]:X[K],p=la[K],q=p&&p.config,p||(p=la[K]={}),p.config||(q=la[K].config={}),q.showValue=pluckNumber(n.showvalue,V.showValues),q.valuePadding=pluckNumber($.valuepadding,2),q.setValue=o=qa.getCleanValue(n.value),q.target=L=qa.getCleanValue(n.target),q.setLink=pluck(n.link),q.toolTipValue=F=qa.dataLabels(o),q.toolTipValueTarget=qa.dataLabels(L),q.setDisplayValue=G=parseUnsafeString(n.displayvalue),q.displayValue=pluck(n.label,G,F),H=pluckNumber(n.dashed),I=pluckNumber(n.dashlen,h),J=j=pluckNumber(n.dashgap,j),oa=mathMax(oa,o,L),pa=mathMin(pa,o,L),q.plotBorderDashStyle=m=1===H?getDashStyle(I,J):0===H?noneStr:ka,ca=pluck(n.color,V.plotColor),k=pluck(n.alpha,V.plotFillAlpha),0>o&&!ga&&(g=ia,ia=ma?180-ia:360-ia),q.colorArr=r=getColumnColor(ca,k,l,ia,ga,V.plotBorderColor,ja.toString(),ma?1:0,!!na),0!==ha&&(s=pluck(n.hovercolor,W.hovercolor,$.plotfillhovercolor,$.columnhovercolor,ca),t=pluck(n.hoveralpha,W.hoveralpha,$.plotfillhoveralpha,$.columnhoveralpha,k),u=pluck(n.hovergradientcolor,W.hovergradientcolor,$.plothovergradientcolor,V.plotgradientcolor),!u&&(u=BLANK),v=pluck(n.hoverratio,W.hoverratio,$.plothoverratio,l),w=pluckNumber(360-n.hoverangle,360-W.hoverangle,360-$.plothoverangle,ia),x=pluck(n.borderhovercolor,W.borderhovercolor,$.plotborderhovercolor,$.plotfillhovercolor,V.plotBorderColor),y=pluck(n.borderhoveralpha,W.borderhoveralpha,$.plotborderhoveralpha,ja,k),z=pluckNumber(n.borderhoverthickness,W.borderhoverthickness,$.plotborderhoverthickness,fa),A=pluckNumber(n.borderhoverdashed,W.borderhoverdashed,$.plotborderhoverdashed),B=pluckNumber(n.borderhoverdashgap,W.borderhoverdashgap,$.plotborderhoverdashgap,h),C=pluckNumber(n.borderhoverdashlen,W.borderhoverdashlen,$.plotborderhoverdashlen,j),D=A?getDashStyle(C,B):m,1==ha&&s===ca&&(s=getDarkColor(s,90)),E=getColumnColor(s,t,v,w,ga,x,y.toString(),ma?1:0,!1),q.setPlotRolloutAttr={fill:na?[toRaphaelColor(r[0]),!V.use3DLighting]:toRaphaelColor(r[0]),stroke:aa&&toRaphaelColor(r[1]),"stroke-width":fa,"stroke-dasharray":m},q.setPlotRolloverAttr={fill:na?[toRaphaelColor(E[0]),!V.use3DLighting]:toRaphaelColor(E[0]),stroke:toRaphaelColor(E[1]),"stroke-width":ba?z||1:z,"stroke-dasharray":D}),0!==ha&&(ha||$.targethovercolor||$.targethoveralpha||0===$.targethoveralpha||$.targethoverthickness||0===$.targethoverthickness)&&(ha=!0,M={},N={},O=pluckNumber($.targethoverthickness,V.targetThickness+2),V.targetThickness!==O&&(M['stroke-width']=O,N['stroke-width']=V.targetThickness),P=pluck($.targethovercolor,FILLMIXDARK10),Q=pluckNumber($.targethoveralpha,V.targetalpha),O&&(N.stroke=V.targetColor,R=/\{/.test(P),M.stroke=convertColor(R?_.parseColorMix(pluck($.targetcolor,ca),P)[0]:P,Q)),q.tagetHoverAttr=M,q.targetOutAttr=N),b=q.toolTipValue,d=getValidValue(parseUnsafeString(pluck(n.tooltext,W.plottooltext,$.plottooltext))),q.toolText=ra(d),q.setTooltext=q.toolText,g&&(ia=g),S=getValidValue(parseUnsafeString(pluck(n.tooltexttarget,W.targettooltext,$.targettooltext))),q.toolTextTarget=ra(S);V.maxValue=oa,V.minValue=pa}_manageSpace(a){var b,c,d,e=this,f=e.config,g=e.components.data,h=e.getFromEnv('chart'),j=h.config,k=h.getFromEnv('smartLabel'),l=j.dataLabelStyle,m=pluckNumber(parseInt(l.lineHeight,10),12),n=a,o=f.valuePadding,p=0,q=0;for(b=g[q],d=b&&b.config,k.useEllipsesOnOverflow(j.useEllipsesWhenOverflow),k.setStyle(l);1>q;q+=1)f.showValue&&(c=k.getOriSize(d.toolTipValue),d.toolTipValue===BLANK&&(c={height:m}),0<c.height&&(p=c.height+o),p>n&&(p=n));return f.heightUsed=p,{top:0,bottom:p}}_manageSpaceHorizontal(a){var b,c,d,e=this,f=e.config,g=e.components.data,h=e.getFromEnv('chart'),j=h.config,k=h.getFromEnv('smartLabel'),l=j.dataLabelStyle,m=pluckNumber(parseInt(l.lineHeight,10),12),n=a,o=f.valuePadding,p=0,q=0;for(b=g[q],d=b&&b.config,k.useEllipsesOnOverflow(j.useEllipsesWhenOverflow),k.setStyle(l);1>q;q+=1)d&&d.displayValue!==BLANKSTRING&&d.displayValue!==UNDEF&&f.showValue&&(c=k.getOriSize(d.displayValue),d.displayValue===BLANK&&(c={height:m}),0<c.height&&(p=c.width+o+2),p>n&&(p=n));return f.widthUsed=p,{top:0,right:p}}updateData(a,b,c){var d=this,e=d.config,f=e.maxValue,g=e.prevMin,h=d.getFromEnv('chart'),i=d.groupManager||d,j=d.getFromEnv('scale');d._setConfigure(a,b),d.setMaxMin(),(e.maxValue!==f||e.minValue!==g)&&(d.config.maxminFlag=!0),c&&(h._setAxisLimits(),j.draw(),i.draw())}setMaxMin(){var a,b,c=this,d=c.components.data,e=c.config,f=d.length,g=-Infinity,h=+Infinity;for(a=0;a<f;a++)d[a]&&(b=d[a].config,g=mathMax(g,b.setValue,b.target),h=mathMin(h,b.setValue,b.target));e.maxValue=g,e.minValue=h}draw(){var a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=this,z=y.getFromEnv('chart'),A=z.getFromEnv('dataSource').chart,B=z.config,C=z.getChildren('canvas')[0],D=C.config,E=y.getGraphicalElement('backgroundRect')||[],F=B.canvasLeft,G=B.canvasTop,H=B.canvasWidth,I=B.canvasHeight,J=C.getContainer('canvasGroup'),K=y.getFromEnv('scale'),L=K.getLimit().min,M=K.getLimit().max,N=z.isHorizontal,O=function(a,b){if(!N)return{x:F,y:G+(I-b*I/(M-L)),width:H,height:(b-a)*I/(M-L)};return N?{x:F+a*H/(M-L),y:G,width:(b-a)*H/(M-L),height:I}:void 0},P=y.getFromEnv('color-manager'),Q=z.getFromEnv('animationManager');for(b=N?270:180,D.colorRangeFillMix=c=getFirstDefinedValue(A.colorrangefillmix,A.gaugefillmix,z.colorRangeFillMix,'{light-10},{dark-10},{light-10},{dark-10}'),D.colorRangeFillRatio=d=getFirstDefinedValue(A.colorrangefillratio,A.gaugefillratio,z.colorRangeFillRatio,A.gaugefillratio,'0,10,80,10'),D.colorRangeGetter=e=z.getFromEnv('colorRange'),D.colorArray=f=e&&e.getColorRangeArr(L,M),g=pluck(A.colorrangebordercolor,A.gaugebordercolor,'{dark-20}'),h=pluckNumber(A.colorrangeborderalpha,A.gaugeborderalpha,100),j=pluckNumber(A.showshadow,1),k=pluckNumber(A.showgaugeborder,A.showcolorrangeborder,0),D.colorRangeBorderThickness=l=k?pluckNumber(A.colorrangeborderthickness,A.gaugeborderthickness,2):0,p=z.getFromEnv('dataSource').colorrange&&f&&f.length||0,(n=0,o=0);n<p;n+=1)m=f[n],q=O(m.minvalue-L,m.maxvalue-L),m.x=q.x,m.y=q.y,m.width=q.width,m.height=q.height,r=m.code,s=convertColor(getColorCodeString(pluck(m.bordercolor,r),g),pluckNumber(m.borderalpha,h)),t=P.parseColorMix(m.code,c),u=P.parseAlphaList(m.alpha,t.length),v=pluckNumber(m.borderAlpha,h),w=u.split(COMMASTRING),w=mathMax.apply(Math,w),w=mathMax(l&&v||0,w),a={x:q.x,y:q.y,width:q.width,height:q.height,r:0,"stroke-width":l,stroke:s,fill:toRaphaelColor({FCcolor:{color:t.toString(),ratio:d,alpha:u,angle:b}})},x=Q.setAnimation({el:E[n]||'rect',attr:a,container:J,component:y,doNotRemove:!0,label:'backgroundRect'}),E[n]||y.addGraphicalElement('backgroundRect',x,!0),x.show(),x.shadow({apply:j,opacity:w/100}),o++;for(p=E&&E.length;p>o;)E&&E[p-1]&&y.removeGraphicalElement(E[p-1]),p--;y.drawPlot()}drawPlot(){var a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,N,O,P,Q,S=this,T=S.config,U=S.getState('visible'),V=S.getFromEnv('chart'),W=V.getChildren('caption')[0],X=V.getChildren('subCaption')[0],Y=W&&W.config.text&&W.config.height||0,Z=W&&W.config.text&&W.config.captionPadding||0,$=X&&X.config.text&&X.config.height||0,_=S.getFromEnv('toolTipController'),aa=V.config,ba=aa.canvasLeft,ca=aa.canvasRight,da=aa.canvasTop,ea=aa.canvasBottom,fa=aa.canvasHeight,ga=aa.canvasWidth,ha=S.getFromEnv('smartLabel'),ia=S.getFromEnv('scale'),ja=V.getChildContainer().plotGroup,ka=Raphael,R=T.showTooltip,la=S.components.data,ma=T.showShadow,na=T.plotBorderThickness,oa=T.plotRadius,pa=S.getContainer('container'),qa=S.getContainer('targetContainer'),ra=S.getContainer('dataLabelContainer'),sa=S.getContainer('shadowContainer'),ta=S.getContainer('shadowTargetContainer'),ua=!1,va=V.getChildContainer('datalabelsGroup'),wa=V.config.dataLabelStyle,xa=V.getFromEnv('animationManager'),ya=T.heightUsed,za=T.lowerLimit,Aa=T.showHoverEffect,Ba=function(a){var b=this;V.plotEventHandler(b,a)},Ca=function(a){return function(b){var c=this;0!==c.data(showHoverEffectStr)&&a.attr(c.data(SETROLLOVERATTR)),V.plotEventHandler(c,b,ROLLOVER)}},Da=function(a){return function(b){var c=this;0!==c.data(showHoverEffectStr)&&a.attr(c.data(SETROLLOUTATTR)),V.plotEventHandler(c,b,ROLLOUT)}},Ea=function(){this.hide()};for(t=xa.setAnimation({el:pa||'group',attr:{name:'bar'},component:S,container:ja,doNotRemove:!0,label:'group'}),pa||(t=S.addContainer('container',t)),v=xa.setAnimation({el:ra||'group',attr:{name:'datalabel'},component:S,container:va,doNotRemove:!0,label:'labelGroup'}),ra||(v=S.addContainer('dataLabelContainer',v)),u=xa.setAnimation({el:qa||'group',attr:{name:'target'},container:ja,doNotRemove:!0,component:S,label:'group'}),qa||(u=S.addContainer('targetContainer',u)),w=xa.setAnimation({el:sa||'group',attr:{name:'shadow'},component:S,container:ja,doNotRemove:!0,label:'group'}),sa||(w=S.addContainer('shadowContainer',w.toBack()),!U&&w.hide()),x=xa.setAnimation({el:ta||'group',attr:{name:'shadow'},component:S,container:ja,doNotRemove:!0,label:'group'}),ta||(x=S.addContainer('shadowTargetContainer',x.toBack()),!U&&x.hide()),ha.setStyle(wa),b=0;1>b;b++)l=la[b],s=l&&l.config,o=s.setValue,0>o&&(ua=!0),n=s.setLink,y=s.colorArr,K=!1,l.graphics||(la[b].graphics={}),q=s.displayValue,V.isHorizontal?(j=T.plotFillPercent/100*fa,d=mathAbs(da+ea)/2-j/2,T.plotAsDot?(c=ia.getPixel(o)-j/2,G=j):(N=za&&za<=o&&0<=ia.config.axisRange.min?za:0,c=ua?ia.getPixel(o):ia.getPixel(N),G=ua?ia.getPixel(0)-ia.getPixel(o):ia.getPixel(o)-ia.getPixel(N)),e=ka.crispBound(c,d,G,j,na),c=e.x,d=e.y,h=e.width,j=e.height,k=s.toolText===BLANK?s.toolTipValue:s.toolText,z=s.plotBorderDashStyle,a={x:c,y:d,width:h||1,height:j,r:oa,fill:toRaphaelColor(y[0]),stroke:toRaphaelColor(y[1]),"stroke-width":na,"stroke-dasharray":z,"stroke-linejoin":miterStr,visibility:U},null!==o&&(l.graphics.element&&l.graphics.element.show(),(n||R)&&j<HTP&&(d-=(HTP-j)/2,j=HTP)),s.elemCreated=l.graphics.element!==UNDEF,o?m=l.graphics.element=xa.setAnimation({el:l.graphics.element||'rect',attr:a,container:t,component:S,label:'plotRect'}):l.graphics.element&&xa.setAnimation({el:l.graphics.element,component:S,doNotRemove:!0,callback:Ea,label:'plotRect'}),m&&m.shadow({opacity:ma},w).data('BBox',e),s.target&&(k=s.toolTipValueTarget,B=T.targetFillPercent/100*fa,C=D=ia.getPixel(s.target),E=(da+ea)/2-B/2,F=E+B,A=[M,C,E,L,D,F],P={stroke:T.targetColor,"stroke-width":T.targetThickness,"stroke-linecap":T.targetCapStyle,path:A,"shape-rendering":DECIDE_CRISPENING[!1]},l.graphics.targetElement&&l.graphics.targetElement.show()),K=l.graphics.targetElement===UNDEF,Q=l.graphics.targetElement=xa.setAnimation({el:l.graphics.targetElement||'path',attr:P,container:u,component:S,doNotRemove:!0,callback:s.target?stubFN:Ea,label:'path'}),s.target&&(m=l.graphics.targetElement),H=parseInt(wa.lineHeight,10),d=.5*(da+fa),q!==BLANKSTRING&&q!==UNDEF&&T.showValue&&(g=ha.getSmartText(q,T.widthUsed,aa.height),q=g.text,f=g.tooltext,O={text:q,"text-anchor":POSITION_START,x:ca+T.valuePadding+2,y:d,"vertical-align":POSITION_TOP,fill:wa.color,direction:s.textDirection,"text-bound":[wa.backgroundColor,wa.borderColor,wa.borderThickness,wa.borderPadding,wa.borderRadius,wa.borderDash]},l.graphics.label&&l.graphics.label.show()),l.graphics.label=xa.setAnimation({el:l.graphics.label||'text',attr:O,component:S,container:v,doNotRemove:!0,callback:!!q&&T.showValue?stubFN:Ea,label:'text'}),I=l.graphics.label.getBBox(),0>I.x+aa.marginLeft&&(J=I.width-aa.marginLeft,aa.width<J&&(J=aa.width-aa.marginLeft),O.x=J/2,xa.setAnimation({el:l.graphics.label,attr:O,component:S,doNotRemove:!0,callback:!!q&&T.showValue?stubFN:Ea,label:'text'}))):(G=T.plotFillPercent/100*ga,c=mathAbs(ba+ca)/2-G/2,T.plotAsDot?(d=ia.getPixel(o)-G/2,j=G):(T.base=N=za&&za<=o&&0<=ia.config.axisRange.min?za:0,d=ua?ia.getPixel(0):ia.getPixel(o),j=ua?ia.getPixel(o)-ia.getPixel(0):ia.getPixel(za&&za<=o&&0<=ia.config.axisRange.min?za:0)-d),e=ka.crispBound(c,d,G,j,na),c=e.x,d=e.y,h=e.width,j=e.height,k=s.toolText===BLANK?s.toolTipValue:s.toolText,z=s.plotBorderDashStyle,a={x:c,y:d,width:h,height:j||1,r:oa,fill:toRaphaelColor(y[0]),stroke:toRaphaelColor(y[1]),"stroke-width":na,"stroke-dasharray":z,"stroke-linejoin":miterStr,visibility:U},l._xPos=c,l._yPos=d+j,l._height=j,l._width=h,null!==o&&(l.graphics.element&&l.graphics.element.show(),(n||R)&&j<HTP&&(d-=(HTP-j)/2,j=HTP)),s.elemCreated=l.graphics.element!==UNDEF,o?m=l.graphics.element=xa.setAnimation({el:l.graphics.element||'rect',attr:a,container:t,component:S,label:'plotRect'}):l.graphics.element&&xa.setAnimation({el:l.graphics.element,label:'plotRect',doNotRemove:!0,callback:Ea,component:S}),m&&m.shadow({opacity:ma},w).data('BBox',e),s.target&&(k=s.toolTipValueTarget,B=T.targetFillPercent/100*ga,C=(ba+ca)/2-B/2,D=C+B,E=F=ia.getPixel(s.target),A=[M,C,E,L,D,F],P={stroke:T.targetColor,"stroke-width":T.targetThickness,"stroke-linecap":T.targetCapStyle,path:A,"shape-rendering":DECIDE_CRISPENING[!1]},l.graphics.targetElement&&l.graphics.targetElement.show()),K=l.graphics.targetElement===UNDEF,Q=l.graphics.targetElement=xa.setAnimation({el:l.graphics.targetElement||'path',attr:P,container:u,component:S,doNotRemove:!0,callback:s.target?stubFN:Ea,label:'path'}),H=parseInt(wa.lineHeight,10),d=H>ya?aa.height-aa.marginBottom-ya+H/2:aa.height-aa.marginBottom-H/2,d-=aa.borderWidth,d-=(V._manageActionBarSpace&&V._manageActionBarSpace(.225*s.availableHeight)||{}).bottom,0===W.config.isOnTop&&(d-=Y+$+Z),q!==BLANKSTRING&&q!==UNDEF&&T.showValue&&(g=ha.getSmartText(q,aa.width,ya),q=g.text,f=g.tooltext||BLANKSTRING,O={text:q,"text-anchor":POSITION_MIDDLE,x:ga/2+ba,y:d,"vertical-align":POSITION_MIDDLE,fill:wa.color,direction:s.textDirection,"text-bound":[wa.backgroundColor,wa.borderColor,wa.borderThickness,wa.borderPadding,wa.borderRadius,wa.borderDash]},l.graphics.label&&l.graphics.label.show()),l.graphics.label=xa.setAnimation({el:l.graphics.label||'text',attr:O,component:S,container:v,doNotRemove:!0,callback:!!q&&T.showValue?stubFN:Ea,label:'text'}),I=l.graphics.label.getBBox(),0>I.x+aa.marginLeft&&(J=I.width-aa.marginLeft,aa.width<J&&(J=aa.width-aa.marginLeft),O.x=J/2,xa.setAnimation({el:l.graphics.label,attr:O,component:S,doNotRemove:!0,callback:!!q&&T.showValue?stubFN:Ea,label:'text'}))),l.graphics.element&&(l.graphics.element.data(showHoverEffectStr,Aa).data(SETROLLOVERATTR,s.setPlotRolloverAttr||{}).data(SETROLLOUTATTR,s.setPlotRolloutAttr||{}),!s.elemCreated&&l.graphics.element.on('fc-click',Ba).hover(Ca(l.graphics.element),Da(l.graphics.element)),R?(_.enableToolTip(Q,k),_.enableToolTip(l.graphics.element,s.toolText),_.enableToolTip(l.graphics.label,f)):(_.disableToolTip(Q),_.disableToolTip(l.graphics.element),_.disableToolTip(l.graphics.label))),K&&Q.on('fc-click',Ba).hover(Ca(Q),Da(Q)),Q.shadow({opacity:ma},w).data('BBox',e).data(EVENTARGS,p).data(GROUPID,r).data(showHoverEffectStr,Aa).data(SETROLLOVERATTR,s.tagetHoverAttr).data(SETROLLOUTATTR,s.targetOutAttr)}getDataLimits(){var a,b,c,d=this,e=d.config,f=d.pointerArr&&d.pointerArr.pointer,g=d.getFromEnv('chart').getFromEnv('dataSource').colorrange,h=g&&g.color,j=f&&f.length,k=e.upperLimit,l=e.lowerLimit,m=e.maxValue,n=e.minValue;for(j=h&&h.length,a=0;a<j;a++)b=+h[a].maxvalue,c=+h[a].minvalue,k&&b>k&&(b=k),l&&c<l&&(c=l),m=mathMax(m,b),n=mathMin(n,c);return{forceMin:!0,forceMax:!0,max:m,min:n}}}export default BulletDataset;