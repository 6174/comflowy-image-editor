import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}import{useCallback,useEffect,useMemo}from"react";import{SET_FINETUNE}from"../actions";import useStore from"./useStore";var useFinetune=function(a,b){var c=useStore(),d=c.dispatch,e=c.finetunes,f=c.finetunesProps,g=useCallback(function(b){d({type:SET_FINETUNE,payload:{finetune:a,finetuneProps:b}})},[]);return useEffect(function(){e.includes(a)||g(_objectSpread(_objectSpread({},b),f))},[]),useMemo(function(){return[f,g]},[f])};export default useFinetune;