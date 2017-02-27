webpackJsonp([1],{0:function(e,t,n){e.exports=n(246)},158:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.putAlbums=t.getAlbums=t.loadAlbumsFilter=t.putBands=t.getBands=t.resetLoader=t.fetchConfig=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(194),a=r(s),u=n(196),c=r(u),i=t.fetchConfig={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRF-TOKEN":c.default.load("XSRF-TOKEN")}},l=t.resetLoader=function(e){return{type:"RESET_LOADER",loading:e}},_=t.getBands=function(){return function(e){return(0,a.default)("/bands/all",o({method:"GET"},i)).then(function(e){return e.json()}).then(function(t){return e(d(t,!1))})}},d=t.putBands=function(e,t){return{type:"PUT_BANDS",bands:e,loading:t}},f=t.loadAlbumsFilter=function(e){return{type:"LOAD_ALBUMS_FILTER",loading:e}},p=t.getAlbums=function(e){return function(t){return t(f(!0)),(0,a.default)("/albums/all?band="+e,o({method:"GET"},i)).then(function(e){return e.json()}).then(function(e){return t(m(e,!1,!1))})}},m=t.putAlbums=function(e,t,n){return{type:"PUT_ALBUMS",albumsWithBands:e,loading:t,albumsFilterLoading:n}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"fetchConfig","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"),__REACT_HOT_LOADER__.register(l,"resetLoader","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"),__REACT_HOT_LOADER__.register(_,"getBands","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"),__REACT_HOT_LOADER__.register(d,"putBands","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"),__REACT_HOT_LOADER__.register(f,"loadAlbumsFilter","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"),__REACT_HOT_LOADER__.register(p,"getAlbums","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"),__REACT_HOT_LOADER__.register(m,"putAlbums","C:/Users/User/Documents/Codes/music-react/src/actions/index.js"))})()},239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),i=r(c),l=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.componentDidMount=function(){var e;return(e=r).__componentDidMount__REACT_HOT_LOADER__.apply(e,arguments)},r.componentWillUnmount=function(){var e;return(e=r).__componentWillUnmount__REACT_HOT_LOADER__.apply(e,arguments)},r.render=function(){var e;return(e=r).__render__REACT_HOT_LOADER__.apply(e,arguments)},a=n,s(r,a)}return a(t,e),u(t,[{key:"__componentDidMount__REACT_HOT_LOADER__",value:function(){this.props.getAlbums(0)}},{key:"__componentWillUnmount__REACT_HOT_LOADER__",value:function(){this.props.resetLoader(!0)}},{key:"__render__REACT_HOT_LOADER__",value:function(){var e=this;return this.props.loading.listLoading?i.default.createElement("div",{className:"ui active centered inline loader",style:{marginTop:"20px"}}):i.default.createElement("div",{style:{marginTop:"5px"}},i.default.createElement("form",{className:"ui form"},i.default.createElement("div",{className:"field"},i.default.createElement("select",{ref:function(t){return e.bandSelect=t},onChange:function(t){e.props.getAlbums(e.bandSelect.value)}},i.default.createElement("option",{value:"0"},"All Bands"),this.props.bands.map(function(e,t){return i.default.createElement("option",{value:e.id,key:t},e.name)})))),i.default.createElement("table",{className:this.props.loading.albumsFilterLoading?"ui loading segment table":"ui segment table",style:{marginTop:"5px"}},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"Name"),i.default.createElement("th",null,"Recorded Date"),i.default.createElement("th",null,"Release Date"),i.default.createElement("th",null,"No. of tracks"),i.default.createElement("th",null,"Label"),i.default.createElement("th",null,"Producer"),i.default.createElement("th",null,"Genre"),i.default.createElement("th",null,"Band"))),i.default.createElement("tbody",null,this.props.albums.map(function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",null,e.name),i.default.createElement("td",null,e.recorded_date),i.default.createElement("td",null,e.release_date),i.default.createElement("td",null,e.number_of_tracks),i.default.createElement("td",null,e.label),i.default.createElement("td",null,e.producer),i.default.createElement("td",null,e.genre),i.default.createElement("td",null,e.band.name))}))))}}]),t}(c.Component),_=l;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"AlbumList","C:/Users/User/Documents/Codes/music-react/src/components/AlbumList.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/User/Documents/Codes/music-react/src/components/AlbumList.js"))})()},240:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),i=r(c),l=n(242),_=r(l),d=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.render=function(){var e;return(e=r).__render__REACT_HOT_LOADER__.apply(e,arguments)},a=n,s(r,a)}return a(t,e),u(t,[{key:"__render__REACT_HOT_LOADER__",value:function(){var e=this.props.children;return i.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},i.default.createElement(_.default,null),i.default.createElement("div",{className:"ui container"},e))}}]),t}(c.Component),f=d;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"App","C:/Users/User/Documents/Codes/music-react/src/components/App.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/User/Documents/Codes/music-react/src/components/App.js"))})()},241:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),i=r(c),l=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.componentDidMount=function(){var e;return(e=r).__componentDidMount__REACT_HOT_LOADER__.apply(e,arguments)},r.componentWillUnmount=function(){var e;return(e=r).__componentWillUnmount__REACT_HOT_LOADER__.apply(e,arguments)},r.render=function(){var e;return(e=r).__render__REACT_HOT_LOADER__.apply(e,arguments)},a=n,s(r,a)}return a(t,e),u(t,[{key:"__componentDidMount__REACT_HOT_LOADER__",value:function(){this.props.getBands()}},{key:"__componentWillUnmount__REACT_HOT_LOADER__",value:function(){this.props.resetLoader(!0)}},{key:"__render__REACT_HOT_LOADER__",value:function(){return this.props.loading?i.default.createElement("div",{className:"ui active centered inline loader",style:{marginTop:"20px"}}):i.default.createElement("table",{className:"ui segment table",style:{marginTop:"5px"}},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"Name"),i.default.createElement("th",null,"Start Date"),i.default.createElement("th",null,"Website"),i.default.createElement("th",null,"Still Active"))),i.default.createElement("tbody",null,this.props.bands.map(function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",null,e.name),i.default.createElement("td",null,e.start_date),i.default.createElement("td",null,e.website),i.default.createElement("td",null,e.still_active?"Yes":"No"))})))}}]),t}(c.Component),_=l;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"BandList","C:/Users/User/Documents/Codes/music-react/src/components/BandList.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/User/Documents/Codes/music-react/src/components/BandList.js"))})()},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),i=r(c),l=n(101),_=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.render=function(){var e;return(e=r).__render__REACT_HOT_LOADER__.apply(e,arguments)},a=n,s(r,a)}return a(t,e),u(t,[{key:"__render__REACT_HOT_LOADER__",value:function(){return i.default.createElement("div",{className:"ui container"},i.default.createElement("h2",{className:"ui header"},i.default.createElement("i",{className:"music icon"}),i.default.createElement("div",{className:"content"},"Favorite Music")),i.default.createElement("div",{className:"ui secondary pointing menu"},i.default.createElement(l.Link,{to:"/bands",activeClassName:"active",className:"item"},"Bands"),i.default.createElement(l.Link,{to:"/albums",activeClassName:"active",className:"item"},"Albums")))}}]),t}(c.Component),d=_;t.default=d;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"Header","C:/Users/User/Documents/Codes/music-react/src/components/Header.js"),__REACT_HOT_LOADER__.register(d,"default","C:/Users/User/Documents/Codes/music-react/src/components/Header.js"))})()},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(100),s=n(239),a=r(s),u=n(158),c=function(e,t){return{albums:e.albums,bands:e.bands,loading:e.loading}},i=function(e,t){return{getAlbums:function(t){return e((0,u.getAlbums)(t))},resetLoader:function(t){return e((0,u.resetLoader)(t))}}},l=(0,o.connect)(c,i)(a.default),_=l;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"mapStateToProps","C:/Users/User/Documents/Codes/music-react/src/containers/AlbumList.js"),__REACT_HOT_LOADER__.register(i,"mapDispatchToProps","C:/Users/User/Documents/Codes/music-react/src/containers/AlbumList.js"),__REACT_HOT_LOADER__.register(l,"AlbumList","C:/Users/User/Documents/Codes/music-react/src/containers/AlbumList.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/User/Documents/Codes/music-react/src/containers/AlbumList.js"))})()},244:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(100),s=n(241),a=r(s),u=n(158),c=function(e,t){return{bands:e.bands,loading:e.loading.listLoading}},i=function(e,t){return{getBands:function(){return e((0,u.getBands)())},resetLoader:function(t){return e((0,u.resetLoader)(t))}}},l=(0,o.connect)(c,i)(a.default),_=l;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"mapStateToProps","C:/Users/User/Documents/Codes/music-react/src/containers/BandList.js"),__REACT_HOT_LOADER__.register(i,"mapDispatchToProps","C:/Users/User/Documents/Codes/music-react/src/containers/BandList.js"),__REACT_HOT_LOADER__.register(l,"BandList","C:/Users/User/Documents/Codes/music-react/src/containers/BandList.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/User/Documents/Codes/music-react/src/containers/BandList.js"))})()},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),i=r(c),l=n(100),_=n(101),d=n(240),f=r(d),p=n(244),m=r(p),E=n(243),b=r(E),O=i.default.createElement(_.Route,{path:"/",component:f.default},i.default.createElement(_.IndexRedirect,{to:"/bands"}),i.default.createElement(_.Route,{path:"bands",component:m.default}),i.default.createElement(_.Route,{path:"albums",component:b.default})),y=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.store,n=e.history;return i.default.createElement(l.Provider,{store:t},i.default.createElement(_.Router,{history:n,routes:O}))}}]),t}(c.Component),A=y;t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"routes","C:/Users/User/Documents/Codes/music-react/src/containers/Root.js"),__REACT_HOT_LOADER__.register(y,"Root","C:/Users/User/Documents/Codes/music-react/src/containers/Root.js"),__REACT_HOT_LOADER__.register(A,"default","C:/Users/User/Documents/Codes/music-react/src/containers/Root.js"))})()},246:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(523),s=n(9),a=r(s),u=n(197),c=n(101),i=n(151),l=n(248),_=r(l),d=n(245),f=r(d),p=(0,_.default)(),m=(0,i.syncHistoryWithStore)(c.browserHistory,p),E=document.getElementById("root");(0,u.render)(a.default.createElement(o.AppContainer,null,a.default.createElement(f.default,{store:p,history:m})),E);(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"store","C:/Users/User/Documents/Codes/music-react/src/index.js"),__REACT_HOT_LOADER__.register(m,"history","C:/Users/User/Documents/Codes/music-react/src/index.js"),__REACT_HOT_LOADER__.register(E,"rootEl","C:/Users/User/Documents/Codes/music-react/src/index.js"))})()},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.albums=t.bands=t.loading=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(102),s=n(151),a={listLoading:!0,albumsFilterLoading:!0},u=t.loading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"PUT_BANDS":case"PUT_ALBUMS":case"RESET_LOADER":return r({},e,{listLoading:t.loading,albumsFilterLoading:t.albumsFilterLoading});case"LOAD_ALBUMS_FILTER":return r({},e,{albumsFilterLoading:t.loading});default:return e}},c=t.bands=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"PUT_BANDS":return t.bands;case"PUT_ALBUMS":return t.albumsWithBands.bands;default:return e}},i=t.albums=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"PUT_ALBUMS":return t.albumsWithBands.albums;default:return e}},l=(0,o.combineReducers)({routing:s.routerReducer,bands:c,albums:i,loading:u}),_=l;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"initLoading","C:/Users/User/Documents/Codes/music-react/src/reducers/index.js"),__REACT_HOT_LOADER__.register(u,"loading","C:/Users/User/Documents/Codes/music-react/src/reducers/index.js"),__REACT_HOT_LOADER__.register(c,"bands","C:/Users/User/Documents/Codes/music-react/src/reducers/index.js"),__REACT_HOT_LOADER__.register(i,"albums","C:/Users/User/Documents/Codes/music-react/src/reducers/index.js"),__REACT_HOT_LOADER__.register(l,"App","C:/Users/User/Documents/Codes/music-react/src/reducers/index.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/User/Documents/Codes/music-react/src/reducers/index.js"))})()},248:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=null;return t=(0,i.createStore)(c.default,(0,i.applyMiddleware)(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var s=n(235),a=r(s),u=n(247),c=r(u),i=n(102);(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(o,"configureStore","C:/Users/User/Documents/Codes/music-react/src/stores/configureStore.js")})()},523:function(e,t,n){e.exports=n(526)},524:function(e,t,n){"use strict";e.exports=n(525)},525:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(9),c=u.Component,i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){return this.props.component?u.createElement(this.props.component,this.props.props):u.Children.only(this.props.children)}}]),t}(c);e.exports=i},526:function(e,t,n){"use strict";var r=n(524);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=r}});