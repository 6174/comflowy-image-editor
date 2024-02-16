import styled,{css}from"styled-components";import IconButton from"@scaleflex/ui/core/icon-button";import inputGroup from"@scaleflex/ui/core/input-group";import{Color as PC}from"@scaleflex/ui/utils/types/palette";import{FontVariant as FV}from"@scaleflex/ui/utils/types/typography";var StyledResizeWrapper=styled.div.withConfig({componentId:"sc-17otqpz-0"})(["display:flex;justify-content:",";align-items:flex-end;gap:3px;flex-wrap:",";"],function(a){var b=a.alignment;return b||"center"},function(a){var b=a.disableWrap;return b?"no-wrap":"wrap"}),StyledResizeInput=styled(inputGroup).withConfig({componentId:"sc-17otqpz-1"})(function(a){var b=a.theme;return css(["width:",";margin-top:'4px';span{color:",";",";}"],function(a){var b=a.disableWrap;return b?"100%":"100px"},b.palette[PC.TextSecondary],b.typography.font[FV.LabelMedium])}),StyledRatioLockIcon=styled(IconButton).withConfig({componentId:"sc-17otqpz-2"})(["svg{margin-bottom:1px;}"]),StyledResetButton=styled(IconButton).withConfig({componentId:"sc-17otqpz-3"})(["margin-left:12px;"]);export{StyledResizeWrapper,StyledResizeInput,StyledRatioLockIcon,StyledResetButton};