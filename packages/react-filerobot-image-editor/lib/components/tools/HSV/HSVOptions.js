import _defineProperty from"@babel/runtime/helpers/defineProperty";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React from"react";import Konva from"konva";import{useFinetune,usePhoneScreen}from"../../../hooks";import Slider from"../../common/Slider";import{StyledHSVOptions,StyledSliderContainer,StyledSliderLabel,StyledSliderInput,StyledSliderWrapper}from"../tools.styled";var DEFAULT_VALUE={hue:0,saturation:0,value:0},MAX_VALUE={hue:259,saturation:10,value:2},sliderStyle={padding:0,margin:0},isPhoneScreen=usePhoneScreen(),HSVOptions=function(a){var b,c,d,e,f,g,h=a.t,i=useFinetune(Konva.Filters.HSV,DEFAULT_VALUE),j=_slicedToArray(i,2),k=j[0],l=j[1],m=function(a,b){l(_defineProperty({},a,b>MAX_VALUE[a]?MAX_VALUE[a]:+b))};return React.createElement(StyledHSVOptions,{isPhoneScreen:isPhoneScreen},React.createElement(StyledSliderContainer,{className:"FIE_hue-option-wrapper"},React.createElement(StyledSliderLabel,{className:"FIE_hue-option-label"},h("hue")),React.createElement(StyledSliderWrapper,null,React.createElement(Slider,{className:"FIE_hue-option",min:0,step:1,max:259,value:null!==(b=k.hue)&&void 0!==b?b:DEFAULT_VALUE.hue,onChange:function onChange(a){return m("hue",a)},style:sliderStyle}),React.createElement(StyledSliderInput,{value:null!==(c=k.hue)&&void 0!==c?c:DEFAULT_VALUE.hue,onChange:function onChange(a){var b=a.target.value;return m("hue",b)}}))),React.createElement(StyledSliderContainer,{className:"FIE_saturation-option-wrapper"},React.createElement(StyledSliderLabel,{className:"FIE_saturation-option-label"},h("saturation")),React.createElement(StyledSliderWrapper,null,React.createElement(Slider,{className:"FIE_saturation-option",min:-2,step:.5,max:10,value:null!==(d=k.saturation)&&void 0!==d?d:DEFAULT_VALUE.saturation,onChange:function onChange(a){return m("saturation",a)},style:sliderStyle}),React.createElement(StyledSliderInput,{value:null!==(e=k.saturation)&&void 0!==e?e:DEFAULT_VALUE.saturation,onChange:function onChange(a){var b=a.target.value;return m("saturation",b)}}))),React.createElement(StyledSliderContainer,{className:"FIE_value-option-wrapper"},React.createElement(StyledSliderLabel,{className:"FIE_value-option-label"},h("value")),React.createElement(StyledSliderWrapper,null,React.createElement(Slider,{className:"FIE_value-option",min:-2,step:.1,max:2,value:null!==(f=k.value)&&void 0!==f?f:DEFAULT_VALUE.value,onChange:function onChange(a){return m("value",a)},style:sliderStyle}),React.createElement(StyledSliderInput,{value:null!==(g=k.value)&&void 0!==g?g:DEFAULT_VALUE.value,onChange:function onChange(a){var b=a.target.value;return m("value",b)}}))))};export default HSVOptions;