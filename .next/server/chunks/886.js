exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 706:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2314));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3518))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 2314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4660);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8546);
/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9506);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const NavbarActions = ()=>{
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const cart = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ml-auto flex items-center gap-x-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            onClick: ()=>router.push("/cart"),
            className: "flex items-center rounded-full bg-black px-4 py-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .ShoppingBag */ .CKR, {
                    size: 20,
                    color: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-2 text-sm font-medium text-white",
                    children: cart.items.length
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarActions);


/***/ }),

/***/ 8546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7448);



const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, disabled, type = "button", ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(`
        w-auto 
        rounded-full 
        bg-black
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
      `, disabled && "opacity-75 cursor-not-allowed", className),
        disabled: disabled,
        ref: ref,
        ...props,
        children: children
    });
});
Button.displayName = "Button";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 6285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
const Currency = ({ value = 0 })=>{
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "font-semibold",
        children: formatter.format(Number(value))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Currency);


/***/ }),

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3998);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3518);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8658);



const useCart = (0,zustand__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__/* .persist */ .tJ)((set, get)=>({
        items: [],
        addItem: (data)=>{
            const currentItems = get().items;
            const existingItem = currentItems.find((item)=>item.id === data.id);
            if (existingItem) {
                return (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast)("Item already in cart.");
            }
            set({
                items: [
                    ...get().items,
                    data
                ]
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.success("Item added to cart.");
        },
        removeItem: (id)=>{
            set({
                items: [
                    ...get().items.filter((item)=>item.id !== id)
                ]
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.success("Item removed from cart.");
        },
        removeAll: ()=>set({
                items: []
            })
    }), {
    name: "cart-storage",
    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__/* .createJSONStorage */ .FL)(()=>localStorage)
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);


/***/ }),

/***/ 7448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   v5: () => (/* binding */ filterProductsByRating)
/* harmony export */ });
/* unused harmony exports toTitleCase, getProductsPriceRange */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4798);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt)=>txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}
function getProductsPriceRange(products) {
    if (!products.length) {
        return [
            0,
            0
        ];
    }
    return products.reduce((acc, cur)=>{
        return [
            cur.price < acc[0] ? cur.price : acc[0],
            cur.price > acc[1] ? cur.price : acc[1]
        ];
    }, [
        products[0].price,
        products[0].price
    ]);
}
function filterProductsByRating(products, minRating) {
    if (minRating < 1 || minRating > 5) {
        throw new Error("Invalid rating. Rating must be between 1 and 5.");
    }
    return products.filter((product)=>product.rating >= minRating && product.rating < minRating + 1);
}


/***/ }),

/***/ 4166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4835);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8899);



const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full h-full p-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "w-full aspect-square rounded-xl md:aspect-[2.4/1]"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "aspect-square rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "aspect-square rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "aspect-square rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "aspect-square rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "aspect-square rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "aspect-square rounded-xl"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 8861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Urbanist","arguments":[{"subsets":["latin"]}],"variableName":"font"}
var layout_tsx_import_Urbanist_arguments_subsets_latin_variableName_font_ = __webpack_require__(5724);
var layout_tsx_import_Urbanist_arguments_subsets_latin_variableName_font_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Urbanist_arguments_subsets_latin_variableName_font_);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs
var dist = __webpack_require__(9035);
;// CONCATENATED MODULE: ./providers/toast-provider.tsx


const ToastProvider = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {});
};
/* harmony default export */ const toast_provider = (ToastProvider);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ui/container.tsx
var container = __webpack_require__(4835);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./components/navbar-actions.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/thanhtut/Projects/other/vercel/components/navbar-actions.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar_actions = (__default__);
;// CONCATENATED MODULE: ./components/navbar.tsx




const Navbar = async ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "border-b",
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative px-4 sm:px-6 lg:px-8 flex h-16 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "ml-4 flex lg:ml-0 gap-x-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-bold text-xl",
                            children: "STORE"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar_actions, {})
                ]
            })
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-white border-t",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto py-10",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center text-xs text-black",
                children: "\xa9 2023 Store, Inc. All rights reserved."
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "Store",
    description: "Store - The place for all your purchases."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Urbanist_arguments_subsets_latin_variableName_font_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(toast_provider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 4835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto max-w-7xl",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 8899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7725);


const Skeleton = ({ className, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("animate-pulse rounded-md bg-neutral-200", className),
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);


/***/ }),

/***/ 7725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getProductsPriceRange),
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony exports toTitleCase, filterProductsByRating */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8922);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt)=>txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}
function getProductsPriceRange(products) {
    if (!products.length) {
        return [
            0,
            0
        ];
    }
    return products.reduce((acc, cur)=>{
        return [
            cur.price < acc[0] ? cur.price : acc[0],
            cur.price > acc[1] ? cur.price : acc[1]
        ];
    }, [
        products[0].price,
        products[0].price
    ]);
}
function filterProductsByRating(products, minRating) {
    if (minRating < 1 || minRating > 5) {
        throw new Error("Invalid rating. Rating must be between 1 and 5.");
    }
    return products.filter((product)=>product.rating >= minRating && product.rating < minRating + 1);
}


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;