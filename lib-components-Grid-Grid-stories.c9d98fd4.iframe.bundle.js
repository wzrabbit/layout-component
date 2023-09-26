/*! For license information please see lib-components-Grid-Grid-stories.c9d98fd4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamethyst_layout=self.webpackChunkamethyst_layout||[]).push([[188],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/lib/components/Grid/Grid.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Grid_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),stringifySize=__webpack_require__("./src/lib/utils/stringifySize.ts"),Grid_module_grid="Grid_grid__IxeHs",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["rows","columns","verticalPadding","horizontalPadding","width","height","children"],Grid=function Grid(props){var _props$gap,_props$columnGap,_props$rowGap,rows=props.rows,columns=props.columns,_props$verticalPaddin=props.verticalPadding,verticalPadding=void 0===_props$verticalPaddin?0:_props$verticalPaddin,_props$horizontalPadd=props.horizontalPadding,horizontalPadding=void 0===_props$horizontalPadd?0:_props$horizontalPadd,_props$width=props.width,width=void 0===_props$width?"100%":_props$width,_props$height=props.height,height=void 0===_props$height?"auto":_props$height,children=props.children,rest=(0,objectWithoutProperties.Z)(props,_excluded),gridSizes={width:(0,stringifySize.w)(width),height:(0,stringifySize.w)(height)},gridStyles=(0,objectSpread2.Z)({gridTemplateRows:"repeat(".concat(rows,", 1fr)"),gridTemplateColumns:"repeat(".concat(columns,", 1fr)"),paddingTop:"".concat(verticalPadding,"px"),paddingBottom:"".concat(verticalPadding,"px"),paddingLeft:"".concat(horizontalPadding,"px"),paddingRight:"".concat(horizontalPadding,"px")},rest),gapStyles="gap"in props?{gap:(0,stringifySize.w)(null!==(_props$gap=props.gap)&&void 0!==_props$gap?_props$gap:0)}:"columnGap"in props?{columnGap:(0,stringifySize.w)(null!==(_props$columnGap=props.columnGap)&&void 0!==_props$columnGap?_props$columnGap:0),rowGap:(0,stringifySize.w)(null!==(_props$rowGap=props.rowGap)&&void 0!==_props$rowGap?_props$rowGap:0)}:{};return(0,jsx_runtime.jsx)("div",{className:Grid_module_grid,style:(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({},gridSizes),gridStyles),gapStyles),role:"grid",children:children})},Grid_Grid=Grid;try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"Size"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"Size"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Size"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Size"}},verticalPadding:{defaultValue:null,description:"",name:"verticalPadding",required:!1,type:{name:"Size"}},horizontalPadding:{defaultValue:null,description:"",name:"horizontalPadding",required:!1,type:{name:"Size"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Size"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Size"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"Size"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"src/lib/components/Grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}var Grid_stories={title:"Grid",component:Grid_Grid,argTypes:{children:{description:"The children to display"},verticalPadding:{description:"The vertical padding of the grid"},horizontalPadding:{description:"The horizontal padding of the grid"},rows:{description:"The number of rows of the grid"},columns:{description:"The number of columns of the grid"},gap:{description:"The gap between cells of the grid."},rowGap:{description:"The row gap between cells of the grid. This property overwrites the `gap` property."},columnGap:{description:"The column gap between cells of the grid. This property overwrites the `gap` property."},width:{description:"The width of the grid. It is automatically set to px if the type of the width is `number`. If not specified, it defaults to `100%.`"},height:{description:"The height of the grid. It is automatically set to px if the type of the height is `number`. If not specified, it defaults to `auto.`"}},parameters:{docs:{description:{component:"The `Grid` component is designed for effortless grid element implementation, typically used in fixed layouts."}}}},itemStyles={display:"block",height:"60px",background:"linear-gradient(45deg, #61215d, #b779af)",color:"#eddfeb",border:"1px solid #ce9cc7",borderRadius:"5px",textAlign:"center",fontSize:"20px",lineHeight:"60px"},Default={args:{rows:3,columns:4,gap:5,children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array.from({length:12}).map((function(){return(0,jsx_runtime.jsx)("div",{style:itemStyles,children:"Grid Item"})}))})}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    rows: 3,\n    columns: 4,\n    gap: 5,\n    children: <>\r\n        {Array.from({\n        length: 12\n      }).map(() => <div style={itemStyles}>Grid Item</div>)}\r\n      </>\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/lib/utils/stringifySize.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w:function(){return stringifySize}});var stringifySize=function stringifySize(size){return"number"==typeof size?"".concat(size,"px"):size}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);