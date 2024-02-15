"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_core=require("@scaleflex/ui/core"),_Modal=require("./Modal.styled"),Modal=function(a){var b=a.title,c=a.hint,d=a.Icon,f=a.onDone,g=a.onCancel,h=a.doneLabel,i=a.cancelLabel,j=a.isOpened,k=a.doneButtonStyle,l=a.doneButtonColor,m=void 0===l?"basic":l,n=a.cancelButtonColor,o=void 0===n?"basic":n,p=a.children,q=a.areButtonsDisabled,r=a.zIndex,s=a.className,t=a.width,u=a.isWarning;return _react["default"].createElement(_Modal.StyledModal,{className:s,open:j,onClose:g,style:{zIndex:r},onKeyUp:function onKeyUp(a){"Enter"===a.key&&f(a)},width:t},_react["default"].createElement(_Modal.StyledModalTitle,{icon:_react["default"].createElement(d,{size:25}),iconShadow:!0,isWarning:u,onClose:g,primary:b,secondary:c,variant:"with-icon"}),p&&_react["default"].createElement(_core.ModalContent,null,p),_react["default"].createElement(_Modal.StyledModalActions,{align:"center"},_react["default"].createElement(_core.Button,{color:o,onClick:g,size:"md",disabled:q},i),_react["default"].createElement(_core.Button,{color:m,onClick:f,size:"md",warning:u,style:k,disabled:q},h)))};Modal.defaultProps={hint:"",isOpened:!1,doneLabel:"Yes",cancelLabel:"No",doneButtonStyle:void 0,doneButtonColor:"basic",cancelButtonColor:"basic",children:void 0,areButtonsDisabled:!1,zIndex:void 0,className:void 0,width:"",isWarning:!1};var _default=exports["default"]=Modal;