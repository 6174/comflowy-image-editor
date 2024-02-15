"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.finetuneNameToParamInfo=exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_constants=require("./constants"),_getImageSealingParams=_interopRequireDefault(require("./getImageSealingParams")),_mapCropBox2=_interopRequireDefault(require("./mapCropBox")),_mapNumber=_interopRequireDefault(require("./mapNumber")),_rgbaToHexa=_interopRequireDefault(require("./rgbaToHexa")),_toPrecisedFloat=_interopRequireDefault(require("./toPrecisedFloat")),_excluded=["width","height","x","y","opacity","scaleX","scaleY"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var generateCropQuery=function(a,b,c,d){if(a.noEffect)return a.ratio.includes("=")?a.ratio:"gravity=".concat(a.ratio);var e=(d||{}).lockCropAreaAt,f=(0,_mapCropBox2["default"])(a,b,c),g=f.x,h=f.y,i=f.width,j=f.height,k=a.ratio===_constants.ELLIPSE_CROP?"&radius=".concat(Math.max(i,j),"&force_format=png"):"";if(e){var l=e.split("-"),m=(0,_slicedToArray2["default"])(l,2),n=m[0],o=m[1],p="".concat(_constants.EDITOR_TO_CLOUDIMG_POSITIONS[n]).concat(_constants.EDITOR_TO_CLOUDIMG_POSITIONS[o]);return"gravity=".concat(p,"&aspect_ratio=").concat((0,_toPrecisedFloat["default"])("string"==typeof a.ratio?i/j:a.ratio,2)).concat(k)}return"tl_px=".concat(g,",").concat(h,"&br_px=").concat(g+i,",").concat(h+j).concat(k)},generateResizeQuery=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.width,c=a.height;return"w=".concat(b,"&h=").concat(c)},generateRotationQuery=function(a){return"r=".concat(-a)},generateFlipQuery=function(a,b){return"flip=".concat(a?"x":"").concat(b?"y":"")},generateWatermarkQuery=function(a){var b,c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},e=c.width,f=c.height,g=c.x,h=c.y,i=c.opacity,j=c.scaleX,k=void 0===j?1:j,l=c.scaleY,m=void 0===l?1:l,n=(0,_objectWithoutProperties2["default"])(c,_excluded),o=a.width*a.scaledBy,p=a.height*a.scaledBy,q="wat=1&wat_gravity=absolute&wat_pos=".concat(Math.floor(100*((g-(d.x||0))/o),2),"p,").concat(Math.floor(100*((h-(d.y||0))/p),2),"p");if(c.name===_constants.TOOLS_IDS.TEXT){var r,s=(0,_rgbaToHexa["default"])(n.fill),t=s.hex,u=s.opacity;return"".concat(q,"&wat_text=").concat(n.text.replaceAll("\n",""),"&wat_font=").concat(n.fontFamily,"&wat_color=").concat(t,"&wat_opacity=").concat(null!==(r=null!==u&&void 0!==u?u:i)&&void 0!==r?r:1,"&wat_fontsize=").concat(n.fontSize,"max")}var v=(null===(b=n.image)||void 0===b?void 0:b.src)||n.image,w=!v.startsWith("blob:")&&v;return"".concat(q,"&wat_opacity=").concat(i,"&wat_scale=").concat((0,_toPrecisedFloat["default"])(100*(e*k/o),2),"p,").concat((0,_toPrecisedFloat["default"])(100*(f*m/p),2),"p").concat(w?"&wat_url=".concat(encodeURIComponent(w)):"")},finetuneNameToParamInfo=exports.finetuneNameToParamInfo={Brighten:{cloudimage:{name:"bright",min:-100,max:100},internal:{propName:"brightness",min:-1,max:1}},Contrast:{cloudimage:{name:"contrast",min:-100,max:100},internal:{propName:"contrast",min:-100,max:100}},Blur:{cloudimage:{name:"blur",min:0,max:100},internal:{propName:"blurRadius",min:0,max:100}}},generateFinetuneQuery=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=[];return a.forEach(function(a){var d=(a.finetuneName||a.name)&&finetuneNameToParamInfo[a.finetuneName||a.name];if(d){var e=(0,_toPrecisedFloat["default"])((0,_mapNumber["default"])(b[d.internal.propName],d.internal.min,d.internal.max,d.cloudimage.min,d.cloudimage.max),2);c.push("".concat(d.cloudimage.name,"=").concat(e))}}),c.join("&")},operationsToCloudimageUrl=function(a,b,c,d,e){var f=a.token,g=a.domain,h=a.dontPrefixUrl,i=a.version,j=a.imageSealing,k=a.secureProtocol,l=b.imgSrc,m=b.adjustments,n=m.crop,o=m.rotation,p=m.isFlippedX,q=m.isFlippedY,r=b.resize,s=void 0===r?{}:r,t=b.finetunes,u=void 0===t?{}:t,v=b.finetunesProps,w=b.annotations,x=void 0===w?{}:w,y=h?"":"http".concat(k?"s":"","://").concat(f,".").concat(g.replace(/^(https?:\/\/)?(www\.)?|^\.|\/$/g,""),"/").concat(i?"".concat(i,"/"):""),z=[];n.width&&n.height&&(n.x||0===n.x)&&(n.y||0===n.y)&&z.push(generateCropQuery(n,c,d,e)),(s.width||s.height)&&z.push(generateResizeQuery(_objectSpread(_objectSpread({},d),s))),o&&z.push(generateRotationQuery(o)),(p||q)&&z.push(generateFlipQuery(p,q)),0<u.length&&v&&z.push(generateFinetuneQuery(u,v)),x[_constants.WATERMARK_ANNOTATION_ID]&&z.push(generateWatermarkQuery(c,x[_constants.WATERMARK_ANNOTATION_ID],n)),z.push("ci_url_encoded=1");var A=z.join("&");j.enable&&(A=(0,_getImageSealingParams["default"])(A,j,l)),A=A.replaceAll(" ","+");var B=!h&&"?"||-1===l.indexOf("?")?"?":"&";return"".concat(y).concat(h?l:encodeURIComponent(l)).concat(A?"".concat(B).concat(A.replace(/&$/,"")):"")},_default=exports["default"]=operationsToCloudimageUrl;