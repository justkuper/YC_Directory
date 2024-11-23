"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-sanity/dist/_chunks-es/VisualEditing.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next-sanity/dist/_chunks-es/VisualEditing.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VisualEditing)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var _sanity_visual_editing_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/visual-editing/react */ \"(ssr)/./node_modules/@sanity/visual-editing/dist/react/index.js\");\n/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation.js */ \"(ssr)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_sanity_visual_editing_server_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity/visual-editing/server-actions */ \"(ssr)/./node_modules/next-sanity/dist/visual-editing/server-actions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js\");\n\n\n\n\n\n\nfunction pathHasPrefix(path, prefix) {\n  if (typeof path != \"string\")\n    return !1;\n  const { pathname } = parsePath(path);\n  return pathname === prefix || pathname.startsWith(`${prefix}/`);\n}\nfunction parsePath(path) {\n  const hashIndex = path.indexOf(\"#\"), queryIndex = path.indexOf(\"?\"), hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);\n  return hasQuery || hashIndex > -1 ? {\n    pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),\n    query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : \"\",\n    hash: hashIndex > -1 ? path.slice(hashIndex) : \"\"\n  } : { pathname: path, query: \"\", hash: \"\" };\n}\nfunction addPathPrefix(path, prefix) {\n  if (!path.startsWith(\"/\") || !prefix)\n    return path;\n  if (path === \"/\" && prefix)\n    return prefix;\n  const { pathname, query, hash } = parsePath(path);\n  return `${prefix}${pathname}${query}${hash}`;\n}\nfunction removePathPrefix(path, prefix) {\n  if (!pathHasPrefix(path, prefix))\n    return path;\n  const withoutPrefix = path.slice(prefix.length);\n  return withoutPrefix.startsWith(\"/\") ? withoutPrefix : `/${withoutPrefix}`;\n}\nconst normalizePathTrailingSlash = (path, trailingSlash) => {\n  const { pathname, query, hash } = parsePath(path);\n  return trailingSlash ? pathname.endsWith(\"/\") ? `${pathname}${query}${hash}` : `${pathname}/${query}${hash}` : `${removeTrailingSlash(pathname)}${query}${hash}`;\n};\nfunction removeTrailingSlash(route) {\n  return route.replace(/\\/$/, \"\") || \"/\";\n}\nfunction VisualEditing(props) {\n  const { basePath = \"\", components, refresh, trailingSlash = !1, zIndex } = props, router = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)(), routerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(router), [navigate, setNavigate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    routerRef.current = router;\n  }, [router]);\n  const history = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(\n    () => ({\n      subscribe: (_navigate) => (setNavigate(() => _navigate), () => setNavigate(void 0)),\n      update: (update) => {\n        switch (update.type) {\n          case \"push\":\n            return routerRef.current.push(removePathPrefix(update.url, basePath));\n          case \"pop\":\n            return routerRef.current.back();\n          case \"replace\":\n            return routerRef.current.replace(removePathPrefix(update.url, basePath));\n          default:\n            throw new Error(`Unknown update type: ${update.type}`);\n        }\n      }\n    }),\n    [basePath]\n  ), pathname = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.usePathname)(), searchParams = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    navigate && navigate({\n      type: \"push\",\n      url: normalizePathTrailingSlash(\n        addPathPrefix(`${pathname}${searchParams?.size ? `?${searchParams}` : \"\"}`, basePath),\n        trailingSlash\n      )\n    });\n  }, [basePath, navigate, pathname, searchParams, trailingSlash]);\n  const handleRefresh = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(\n    (payload) => {\n      if (refresh) return refresh(payload);\n      const manualFastRefresh = () => (console.debug(\n        \"Live preview is setup, calling router.refresh() to refresh the server components without refetching cached data\"\n      ), routerRef.current.refresh(), Promise.resolve()), manualFallbackRefresh = () => (console.debug(\n        \"No loaders in live mode detected, or preview kit setup, revalidating root layout\"\n      ), (0,next_sanity_visual_editing_server_actions__WEBPACK_IMPORTED_MODULE_4__.revalidateRootLayout)()), mutationFastRefresh = () => (console.debug(\n        \"Live preview is setup, mutation is skipped assuming its handled by the live preview\"\n      ), !1), mutationFallbackRefresh = () => (console.debug(\n        \"No loaders in live mode detected, or preview kit setup, revalidating root layout\"\n      ), (0,next_sanity_visual_editing_server_actions__WEBPACK_IMPORTED_MODULE_4__.revalidateRootLayout)());\n      switch (payload.source) {\n        case \"manual\":\n          return payload.livePreviewEnabled ? manualFastRefresh() : manualFallbackRefresh();\n        case \"mutation\":\n          return payload.livePreviewEnabled ? mutationFastRefresh() : mutationFallbackRefresh();\n        default:\n          throw new Error(\"Unknown refresh source\", { cause: payload });\n      }\n    },\n    [refresh]\n  ), [node, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    const node2 = document.createElement(\"div\");\n    return node2.id = \"sanity-visual-editing\", document.documentElement.appendChild(node2), setNode(node2), () => {\n      setNode(null), document.documentElement.contains(node2) && document.documentElement.removeChild(node2);\n    };\n  }, []), node ? (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n      _sanity_visual_editing_react__WEBPACK_IMPORTED_MODULE_5__.VisualEditing,\n      {\n        components,\n        history,\n        refresh: handleRefresh,\n        zIndex\n      }\n    ),\n    node\n  ) : null;\n}\n\n//# sourceMappingURL=VisualEditing.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL1Zpc3VhbEVkaXRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUN3QztBQUNIO0FBQ0k7QUFDUDtBQUNqQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckIsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdCQUF3QjtBQUNsQyxZQUFZLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQSxVQUFVLHdCQUF3QjtBQUNsQyxxREFBcUQsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLE9BQU8sU0FBUyxHQUFHLE1BQU0sRUFBRSxLQUFLLE9BQU8sOEJBQThCLEVBQUUsTUFBTSxFQUFFLEtBQUs7QUFDaks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaUVBQWlFLGtCQUFrQiw2REFBUyxnQkFBZ0IsNkNBQU0sb0NBQW9DLCtDQUFRO0FBQ3hLLEVBQUUsZ0RBQVM7QUFDWDtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsOENBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxZQUFZO0FBQ2hFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnQkFBZ0IsK0RBQVcsbUJBQW1CLG1FQUFlO0FBQzdELEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxFQUFFLHlCQUF5QixhQUFhLE9BQU87QUFDakY7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsd0JBQXdCLGtEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0ZBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0ZBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsK0NBQVE7QUFDL0IsU0FBUyxnREFBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsY0FBYyx1REFBWTtBQUM3QixvQkFBb0Isc0RBQUc7QUFDdkIsTUFBTSx1RUFBZTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9LdXBlckJhbmsvRG9jdW1lbnRzL2NvZGUvWUNfRGlyZWN0b3J5L25vZGVfbW9kdWxlcy9uZXh0LXNhbml0eS9kaXN0L19jaHVua3MtZXMvVmlzdWFsRWRpdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFZpc3VhbEVkaXRpbmcgYXMgVmlzdWFsRWRpdGluZyQxIH0gZnJvbSBcIkBzYW5pdHkvdmlzdWFsLWVkaXRpbmcvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGF0aG5hbWUsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb24uanNcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVSb290TGF5b3V0IH0gZnJvbSBcIm5leHQtc2FuaXR5L3Zpc3VhbC1lZGl0aW5nL3NlcnZlci1hY3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5mdW5jdGlvbiBwYXRoSGFzUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIHBhdGggIT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm4gITE7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUGF0aChwYXRoKTtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSBwcmVmaXggfHwgcGF0aG5hbWUuc3RhcnRzV2l0aChgJHtwcmVmaXh9L2ApO1xufVxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKSwgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIiksIGhhc1F1ZXJ5ID0gcXVlcnlJbmRleCA+IC0xICYmIChoYXNoSW5kZXggPCAwIHx8IHF1ZXJ5SW5kZXggPCBoYXNoSW5kZXgpO1xuICByZXR1cm4gaGFzUXVlcnkgfHwgaGFzaEluZGV4ID4gLTEgPyB7XG4gICAgcGF0aG5hbWU6IHBhdGguc3Vic3RyaW5nKDAsIGhhc1F1ZXJ5ID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCksXG4gICAgcXVlcnk6IGhhc1F1ZXJ5ID8gcGF0aC5zdWJzdHJpbmcocXVlcnlJbmRleCwgaGFzaEluZGV4ID4gLTEgPyBoYXNoSW5kZXggOiB2b2lkIDApIDogXCJcIixcbiAgICBoYXNoOiBoYXNoSW5kZXggPiAtMSA/IHBhdGguc2xpY2UoaGFzaEluZGV4KSA6IFwiXCJcbiAgfSA6IHsgcGF0aG5hbWU6IHBhdGgsIHF1ZXJ5OiBcIlwiLCBoYXNoOiBcIlwiIH07XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICBpZiAoIXBhdGguc3RhcnRzV2l0aChcIi9cIikgfHwgIXByZWZpeClcbiAgICByZXR1cm4gcGF0aDtcbiAgaWYgKHBhdGggPT09IFwiL1wiICYmIHByZWZpeClcbiAgICByZXR1cm4gcHJlZml4O1xuICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgaGFzaCB9ID0gcGFyc2VQYXRoKHBhdGgpO1xuICByZXR1cm4gYCR7cHJlZml4fSR7cGF0aG5hbWV9JHtxdWVyeX0ke2hhc2h9YDtcbn1cbmZ1bmN0aW9uIHJlbW92ZVBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gIGlmICghcGF0aEhhc1ByZWZpeChwYXRoLCBwcmVmaXgpKVxuICAgIHJldHVybiBwYXRoO1xuICBjb25zdCB3aXRob3V0UHJlZml4ID0gcGF0aC5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgcmV0dXJuIHdpdGhvdXRQcmVmaXguc3RhcnRzV2l0aChcIi9cIikgPyB3aXRob3V0UHJlZml4IDogYC8ke3dpdGhvdXRQcmVmaXh9YDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gKHBhdGgsIHRyYWlsaW5nU2xhc2gpID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIGhhc2ggfSA9IHBhcnNlUGF0aChwYXRoKTtcbiAgcmV0dXJuIHRyYWlsaW5nU2xhc2ggPyBwYXRobmFtZS5lbmRzV2l0aChcIi9cIikgPyBgJHtwYXRobmFtZX0ke3F1ZXJ5fSR7aGFzaH1gIDogYCR7cGF0aG5hbWV9LyR7cXVlcnl9JHtoYXNofWAgOiBgJHtyZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKX0ke3F1ZXJ5fSR7aGFzaH1gO1xufTtcbmZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocm91dGUpIHtcbiAgcmV0dXJuIHJvdXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSB8fCBcIi9cIjtcbn1cbmZ1bmN0aW9uIFZpc3VhbEVkaXRpbmcocHJvcHMpIHtcbiAgY29uc3QgeyBiYXNlUGF0aCA9IFwiXCIsIGNvbXBvbmVudHMsIHJlZnJlc2gsIHRyYWlsaW5nU2xhc2ggPSAhMSwgekluZGV4IH0gPSBwcm9wcywgcm91dGVyID0gdXNlUm91dGVyKCksIHJvdXRlclJlZiA9IHVzZVJlZihyb3V0ZXIpLCBbbmF2aWdhdGUsIHNldE5hdmlnYXRlXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyUmVmLmN1cnJlbnQgPSByb3V0ZXI7XG4gIH0sIFtyb3V0ZXJdKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHN1YnNjcmliZTogKF9uYXZpZ2F0ZSkgPT4gKHNldE5hdmlnYXRlKCgpID0+IF9uYXZpZ2F0ZSksICgpID0+IHNldE5hdmlnYXRlKHZvaWQgMCkpLFxuICAgICAgdXBkYXRlOiAodXBkYXRlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodXBkYXRlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwicHVzaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlclJlZi5jdXJyZW50LnB1c2gocmVtb3ZlUGF0aFByZWZpeCh1cGRhdGUudXJsLCBiYXNlUGF0aCkpO1xuICAgICAgICAgIGNhc2UgXCJwb3BcIjpcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJSZWYuY3VycmVudC5iYWNrKCk7XG4gICAgICAgICAgY2FzZSBcInJlcGxhY2VcIjpcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJSZWYuY3VycmVudC5yZXBsYWNlKHJlbW92ZVBhdGhQcmVmaXgodXBkYXRlLnVybCwgYmFzZVBhdGgpKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHVwZGF0ZSB0eXBlOiAke3VwZGF0ZS50eXBlfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgW2Jhc2VQYXRoXVxuICApLCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCksIHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRlICYmIG5hdmlnYXRlKHtcbiAgICAgIHR5cGU6IFwicHVzaFwiLFxuICAgICAgdXJsOiBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgYWRkUGF0aFByZWZpeChgJHtwYXRobmFtZX0ke3NlYXJjaFBhcmFtcz8uc2l6ZSA/IGA/JHtzZWFyY2hQYXJhbXN9YCA6IFwiXCJ9YCwgYmFzZVBhdGgpLFxuICAgICAgICB0cmFpbGluZ1NsYXNoXG4gICAgICApXG4gICAgfSk7XG4gIH0sIFtiYXNlUGF0aCwgbmF2aWdhdGUsIHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHRyYWlsaW5nU2xhc2hdKTtcbiAgY29uc3QgaGFuZGxlUmVmcmVzaCA9IHVzZUNhbGxiYWNrKFxuICAgIChwYXlsb2FkKSA9PiB7XG4gICAgICBpZiAocmVmcmVzaCkgcmV0dXJuIHJlZnJlc2gocGF5bG9hZCk7XG4gICAgICBjb25zdCBtYW51YWxGYXN0UmVmcmVzaCA9ICgpID0+IChjb25zb2xlLmRlYnVnKFxuICAgICAgICBcIkxpdmUgcHJldmlldyBpcyBzZXR1cCwgY2FsbGluZyByb3V0ZXIucmVmcmVzaCgpIHRvIHJlZnJlc2ggdGhlIHNlcnZlciBjb21wb25lbnRzIHdpdGhvdXQgcmVmZXRjaGluZyBjYWNoZWQgZGF0YVwiXG4gICAgICApLCByb3V0ZXJSZWYuY3VycmVudC5yZWZyZXNoKCksIFByb21pc2UucmVzb2x2ZSgpKSwgbWFudWFsRmFsbGJhY2tSZWZyZXNoID0gKCkgPT4gKGNvbnNvbGUuZGVidWcoXG4gICAgICAgIFwiTm8gbG9hZGVycyBpbiBsaXZlIG1vZGUgZGV0ZWN0ZWQsIG9yIHByZXZpZXcga2l0IHNldHVwLCByZXZhbGlkYXRpbmcgcm9vdCBsYXlvdXRcIlxuICAgICAgKSwgcmV2YWxpZGF0ZVJvb3RMYXlvdXQoKSksIG11dGF0aW9uRmFzdFJlZnJlc2ggPSAoKSA9PiAoY29uc29sZS5kZWJ1ZyhcbiAgICAgICAgXCJMaXZlIHByZXZpZXcgaXMgc2V0dXAsIG11dGF0aW9uIGlzIHNraXBwZWQgYXNzdW1pbmcgaXRzIGhhbmRsZWQgYnkgdGhlIGxpdmUgcHJldmlld1wiXG4gICAgICApLCAhMSksIG11dGF0aW9uRmFsbGJhY2tSZWZyZXNoID0gKCkgPT4gKGNvbnNvbGUuZGVidWcoXG4gICAgICAgIFwiTm8gbG9hZGVycyBpbiBsaXZlIG1vZGUgZGV0ZWN0ZWQsIG9yIHByZXZpZXcga2l0IHNldHVwLCByZXZhbGlkYXRpbmcgcm9vdCBsYXlvdXRcIlxuICAgICAgKSwgcmV2YWxpZGF0ZVJvb3RMYXlvdXQoKSk7XG4gICAgICBzd2l0Y2ggKHBheWxvYWQuc291cmNlKSB7XG4gICAgICAgIGNhc2UgXCJtYW51YWxcIjpcbiAgICAgICAgICByZXR1cm4gcGF5bG9hZC5saXZlUHJldmlld0VuYWJsZWQgPyBtYW51YWxGYXN0UmVmcmVzaCgpIDogbWFudWFsRmFsbGJhY2tSZWZyZXNoKCk7XG4gICAgICAgIGNhc2UgXCJtdXRhdGlvblwiOlxuICAgICAgICAgIHJldHVybiBwYXlsb2FkLmxpdmVQcmV2aWV3RW5hYmxlZCA/IG11dGF0aW9uRmFzdFJlZnJlc2goKSA6IG11dGF0aW9uRmFsbGJhY2tSZWZyZXNoKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biByZWZyZXNoIHNvdXJjZVwiLCB7IGNhdXNlOiBwYXlsb2FkIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3JlZnJlc2hdXG4gICksIFtub2RlLCBzZXROb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuICByZXR1cm4gdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBub2RlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIG5vZGUyLmlkID0gXCJzYW5pdHktdmlzdWFsLWVkaXRpbmdcIiwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUyKSwgc2V0Tm9kZShub2RlMiksICgpID0+IHtcbiAgICAgIHNldE5vZGUobnVsbCksIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhub2RlMikgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUyKTtcbiAgICB9O1xuICB9LCBbXSksIG5vZGUgPyBjcmVhdGVQb3J0YWwoXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgIFZpc3VhbEVkaXRpbmckMSxcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50cyxcbiAgICAgICAgaGlzdG9yeSxcbiAgICAgICAgcmVmcmVzaDogaGFuZGxlUmVmcmVzaCxcbiAgICAgICAgekluZGV4XG4gICAgICB9XG4gICAgKSxcbiAgICBub2RlXG4gICkgOiBudWxsO1xufVxuZXhwb3J0IHtcbiAgVmlzdWFsRWRpdGluZyBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmlzdWFsRWRpdGluZy5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/_chunks-es/VisualEditing.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next-sanity/dist/visual-editing/client-component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/visual-editing/client-component.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VisualEditingLazyClientComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst VisualEditingClientComponent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@sanity\"), __webpack_require__.e(\"vendor-chunks/rxjs\"), __webpack_require__.e(\"vendor-chunks/xstate\"), __webpack_require__.e(\"vendor-chunks/next-sanity\"), __webpack_require__.e(\"vendor-chunks/uuid\"), __webpack_require__.e(\"vendor-chunks/lodash\"), __webpack_require__.e(\"vendor-chunks/valibot\"), __webpack_require__.e(\"vendor-chunks/scroll-into-view-if-needed\"), __webpack_require__.e(\"vendor-chunks/mendoza\"), __webpack_require__.e(\"vendor-chunks/get-random-values-esm\"), __webpack_require__.e(\"vendor-chunks/compute-scroll-into-view\"), __webpack_require__.e(\"vendor-chunks/@vercel\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_chunks-es/VisualEditing.js */ \"(ssr)/./node_modules/next-sanity/dist/_chunks-es/VisualEditing.js\")));\nfunction VisualEditingLazyClientComponent(props) {\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: null,\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VisualEditingClientComponent, {\n            ...props\n        })\n    });\n}\n //# sourceMappingURL=client-component.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC92aXN1YWwtZWRpdGluZy9jbGllbnQtY29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBWUEsTUFBTSw2Q0FBK0IsMkNBQUksQ0FBQyxJQUFNLHl5QkFBeUI7QUFFbEUsU0FBUyxpQ0FBaUMsT0FBNEM7SUFFekYsOEVBQUMsMkNBQVEsRUFBUjtRQUFTLFVBQVU7UUFDbEIsaUZBQUMsOEJBQThCO1lBQUEsR0FBRztRQUFBLENBQU87SUFDM0M7QUFFSiIsInNvdXJjZXMiOlsiL1VzZXJzL0t1cGVyQmFuay9Eb2N1bWVudHMvc3JjL3Zpc3VhbC1lZGl0aW5nL2NsaWVudC1jb21wb25lbnQvVmlzdWFsRWRpdGluZ0xhenkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIElmIHBhZ2VzIHJvdXRlciBzdXBwb3J0ZWQgYG5leHQvZHluYW1pY2AgaW1wb3J0cyAoaXQgd2FudHMgYG5leHQvZHluYW1pYy5qc2ApLFxuICogb3IgaWYgdHVyYm9wYWNrIGluIGFwcCByb3V0ZXIgYWxsb3dlZCBgbmV4dC9keW5hbWljLmpzYCAoaXQgZG9lc24ndCB5ZXQpXG4gKiB3ZSBjb3VsZCB1c2UgYGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi4pLCB7c3NyOiBmYWxzZX0pYCBoZXJlLlxuICogU2luY2Ugd2UgY2FuJ3QsIHdlIG5lZWQgdG8gdXNlIGEgbGF6eSBpbXBvcnQgYW5kIFN1c3BlbnNlIG91cnNlbGYuXG4gKi9cblxuaW1wb3J0IHtsYXp5LCBTdXNwZW5zZX0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHtWaXN1YWxFZGl0aW5nUHJvcHN9IGZyb20gJy4vVmlzdWFsRWRpdGluZydcblxuY29uc3QgVmlzdWFsRWRpdGluZ0NsaWVudENvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL1Zpc3VhbEVkaXRpbmcnKSlcblxuZXhwb3J0IGZ1bmN0aW9uIFZpc3VhbEVkaXRpbmdMYXp5Q2xpZW50Q29tcG9uZW50KHByb3BzOiBWaXN1YWxFZGl0aW5nUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICA8VmlzdWFsRWRpdGluZ0NsaWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/visual-editing/client-component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next-sanity/dist/visual-editing/server-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/visual-editing/server-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   revalidateRootLayout: () => (/* binding */ revalidateRootLayout)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");
/* __next_internal_action_entry_do_not_use__ {"7fd177fdf80980ba500cf43d230e2d68f38a49b9e7":"revalidateRootLayout"} */ 
var revalidateRootLayout = /*#__PURE__*/ (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7fd177fdf80980ba500cf43d230e2d68f38a49b9e7", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, void 0, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "revalidateRootLayout");
 //# sourceMappingURL=server-actions.js.map


/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/visual-editing/client-component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/visual-editing/client-component.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-server-dom-webpack/server.edge */ "(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-webpack-server-edge.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call the default export of \"/Users/KuperBank/Documents/code/YC_Directory/node_modules/next-sanity/dist/visual-editing/client-component.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/KuperBank/Documents/code/YC_Directory/node_modules/next-sanity/dist/visual-editing/client-component.js",
"default",
));


/***/ }),

/***/ "(action-browser)/./node_modules/next-sanity/dist/visual-editing/server-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/visual-editing/server-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revalidateRootLayout: () => (/* binding */ revalidateRootLayout)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(action-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(action-browser)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var next_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache.js */ \"(action-browser)/./node_modules/next/cache.js\");\n/* harmony import */ var next_headers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers.js */ \"(action-browser)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(action-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"7fd177fdf80980ba500cf43d230e2d68f38a49b9e7\":\"revalidateRootLayout\"} */ \n\n\n\nasync function revalidateRootLayout() {\n    if (!(await (0,next_headers_js__WEBPACK_IMPORTED_MODULE_3__.draftMode)()).isEnabled) {\n        console.warn(\"Skipped revalidatePath request because draft mode is not enabled\");\n        return;\n    }\n    await (0,next_cache_js__WEBPACK_IMPORTED_MODULE_2__.revalidatePath)(\"/\", \"layout\");\n}\n //# sourceMappingURL=server-actions.js.map\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__.ensureServerEntryExports)([\n    revalidateRootLayout\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(revalidateRootLayout, \"7fd177fdf80980ba500cf43d230e2d68f38a49b9e7\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0LXNhbml0eS9kaXN0L3Zpc3VhbC1lZGl0aW5nL3NlcnZlci1hY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJQSxlQUFzQix1QkFBc0M7SUFDMUQsSUFBSSxFQUFFLE1BQU0sMERBQVMsRUFBQyxFQUFHLFdBQVc7UUFFbEMsUUFBUSxLQUFLLGtFQUFrRTtRQUMvRTtJQUFBO0lBRUksbUVBQWMsQ0FBQyxLQUFLLFFBQVE7QUFDcEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9LdXBlckJhbmsvRG9jdW1lbnRzL3NyYy92aXN1YWwtZWRpdGluZy9zZXJ2ZXItYWN0aW9ucy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcbmltcG9ydCB7cmV2YWxpZGF0ZVBhdGh9IGZyb20gJ25leHQvY2FjaGUuanMnXG5pbXBvcnQge2RyYWZ0TW9kZX0gZnJvbSAnbmV4dC9oZWFkZXJzLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV2YWxpZGF0ZVJvb3RMYXlvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghKGF3YWl0IGRyYWZ0TW9kZSgpKS5pc0VuYWJsZWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignU2tpcHBlZCByZXZhbGlkYXRlUGF0aCByZXF1ZXN0IGJlY2F1c2UgZHJhZnQgbW9kZSBpcyBub3QgZW5hYmxlZCcpXG4gICAgcmV0dXJuXG4gIH1cbiAgYXdhaXQgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jylcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/next-sanity/dist/visual-editing/server-actions.js\n");

/***/ })

};
;