"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9462],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5887:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],d={},l="Hudi",s={unversionedId:"connector/source/Hudi",id:"version-2.1.1/connector/source/Hudi",title:"Hudi",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/source/Hudi.md",sourceDirName:"connector/source",slug:"/connector/source/Hudi",permalink:"/docs/2.1.1/connector/source/Hudi",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/source/Hudi.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/docs/2.1.1/connector/source/Http"},next:{title:"Iceberg",permalink:"/docs/2.1.1/connector/source/Iceberg"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hoodie.datasource.read.paths",id:"hoodiedatasourcereadpaths",level:3},{value:"hoodie.file.index.enable",id:"hoodiefileindexenable",level:3},{value:"hoodie.datasource.read.end.instanttime",id:"hoodiedatasourcereadendinstanttime",level:3},{value:"hoodie.datasource.write.precombine.field",id:"hoodiedatasourcewriteprecombinefield",level:3},{value:"hoodie.datasource.read.incr.filters",id:"hoodiedatasourcereadincrfilters",level:3},{value:"hoodie.datasource.merge.type",id:"hoodiedatasourcemergetype",level:3},{value:"hoodie.datasource.read.begin.instanttime",id:"hoodiedatasourcereadbegininstanttime",level:3},{value:"hoodie.enable.data.skipping",id:"hoodieenabledataskipping",level:3},{value:"as.of.instant",id:"asofinstant",level:3},{value:"hoodie.datasource.query.type",id:"hoodiedatasourcequerytype",level:3},{value:"hoodie.datasource.read.schema.use.end.instanttime",id:"hoodiedatasourcereadschemauseendinstanttime",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hudi"},"Hudi"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from Hudi."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,i.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Hudi"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadpaths"},"hoodie.datasource.read.paths")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiefileindexenable"},"hoodie.file.index.enable")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadendinstanttime"},"hoodie.datasource.read.end.instanttime")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcewriteprecombinefield"},"hoodie.datasource.write.precombine.field")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadincrfilters"},"hoodie.datasource.read.incr.filters")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcemergetype"},"hoodie.datasource.merge.type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadbegininstanttime"},"hoodie.datasource.read.begin.instanttime")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodieenabledataskipping"},"hoodie.enable.data.skipping")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#asofinstant"},"as.of.instant")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcequerytype"},"hoodie.datasource.query.type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadschemauseendinstanttime"},"hoodie.datasource.read.schema.use.end.instanttime")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#Read-Options"},"hudi read options")," for configurations."),(0,i.kt)("h3",{id:"hoodiedatasourcereadpaths"},"hoodie.datasource.read.paths"),(0,i.kt)("p",null,"Comma separated list of file paths to read within a Hudi table."),(0,i.kt)("h3",{id:"hoodiefileindexenable"},"hoodie.file.index.enable"),(0,i.kt)("p",null,"Enables use of the spark file index implementation for Hudi, that speeds up listing of large tables."),(0,i.kt)("h3",{id:"hoodiedatasourcereadendinstanttime"},"hoodie.datasource.read.end.instanttime"),(0,i.kt)("p",null,"Instant time to limit incrementally fetched data to. New data written with an instant_time <= END_INSTANTTIME are fetched out."),(0,i.kt)("h3",{id:"hoodiedatasourcewriteprecombinefield"},"hoodie.datasource.write.precombine.field"),(0,i.kt)("p",null,"Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)"),(0,i.kt)("h3",{id:"hoodiedatasourcereadincrfilters"},"hoodie.datasource.read.incr.filters"),(0,i.kt)("p",null,"For use-cases like DeltaStreamer which reads from Hoodie Incremental table and applies opaque map functions, filters appearing late in the sequence of transformations cannot be automatically pushed down. This option allows setting filters directly on Hoodie Source."),(0,i.kt)("h3",{id:"hoodiedatasourcemergetype"},"hoodie.datasource.merge.type"),(0,i.kt)("p",null,"For Snapshot query on merge on read table, control whether we invoke the record payload implementation to merge (payload_combine) or skip merging altogetherskip_merge"),(0,i.kt)("h3",{id:"hoodiedatasourcereadbegininstanttime"},"hoodie.datasource.read.begin.instanttime"),(0,i.kt)("p",null,"Instant time to start incrementally pulling data from. The instanttime here need not necessarily correspond to an instant on the timeline. New data written with an instant_time > BEGIN_INSTANTTIME are fetched out. For e.g: \u201820170901080000\u2019 will get all new data written after Sep 1, 2017 08:00AM."),(0,i.kt)("h3",{id:"hoodieenabledataskipping"},"hoodie.enable.data.skipping"),(0,i.kt)("p",null,"enable data skipping to boost query after doing z-order optimize for current table"),(0,i.kt)("h3",{id:"asofinstant"},"as.of.instant"),(0,i.kt)("p",null,"The query instant for time travel. Without specified this option, we query the latest snapshot."),(0,i.kt)("h3",{id:"hoodiedatasourcequerytype"},"hoodie.datasource.query.type"),(0,i.kt)("p",null,"Whether data needs to be read, in incremental mode (new data since an instantTime) (or) Read Optimized mode (obtain latest view, based on base files) (or) Snapshot mode (obtain latest view, by merging base and (if any) log files)"),(0,i.kt)("h3",{id:"hoodiedatasourcereadschemauseendinstanttime"},"hoodie.datasource.read.schema.use.end.instanttime"),(0,i.kt)("p",null,"Uses end instant schema when incrementally fetched data to. Default: users latest instant schema."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'hudi {\n    hoodie.datasource.read.paths = "hdfs://"\n}\n')))}m.isMDXComponent=!0}}]);