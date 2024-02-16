import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React from"react";import Konva from"konva";import{useFinetune}from"../../../hooks";import restrictNumber from"../../../utils/restrictNumber";import Slider from"../../common/Slider";import{StyledSliderContainer,StyledSliderInput,StyledSliderLabel,StyledSliderWrapper}from"../tools.styled";var MIN_VALUE=-100,DEFAULT_VALUE={contrast:0},MAX_VALUE=100,sliderStyle={width:150,padding:0,margin:0},ContrastOptions=function(a){var b,c,d=a.t,e=useFinetune(Konva.Filters.Contrast,DEFAULT_VALUE),f=_slicedToArray(e,2),g=f[0],h=f[1],i=function(a){h({contrast:restrictNumber(a,MIN_VALUE,MAX_VALUE)})};return React.createElement(StyledSliderContainer,{className:"FIE_contrast-option-wrapper"},React.createElement(StyledSliderLabel,{className:"FIE_contrast-option-label"},d("contrastTool")),React.createElement(StyledSliderWrapper,null,React.createElement(Slider,{className:"FIE_contrast-option",min:MIN_VALUE,max:MAX_VALUE,width:"124px",value:null!==(b=g.contrast)&&void 0!==b?b:DEFAULT_VALUE.contrast,onChange:i,style:sliderStyle}),React.createElement(StyledSliderInput,{value:null!==(c=g.contrast)&&void 0!==c?c:DEFAULT_VALUE.contrast,onChange:function onChange(a){var b=a.target.value;return i(b)}})))};export default ContrastOptions;