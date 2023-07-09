"use strict";
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 3729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ query_string)
});

// NAMESPACE OBJECT: ./node_modules/query-string/base.js
var base_namespaceObject = {};
__webpack_require__.r(base_namespaceObject);
__webpack_require__.d(base_namespaceObject, {
  exclude: () => (exclude),
  extract: () => (extract),
  parse: () => (parse),
  parseUrl: () => (parseUrl),
  pick: () => (pick),
  stringify: () => (stringify),
  stringifyUrl: () => (stringifyUrl)
});

;// CONCATENATED MODULE: ./node_modules/decode-uri-component/index.js
const token = "%[a-f0-9]{2}";
const singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
const multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return [
            decodeURIComponent(components.join(""))
        ];
    } catch  {
    // Do nothing
    }
    if (components.length === 1) {
        return components;
    }
    split = split || 1;
    // Split the array in 2 parts
    const left = components.slice(0, split);
    const right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    } catch  {
        let tokens = input.match(singleMatcher) || [];
        for(let i = 1; i < tokens.length; i++){
            input = decodeComponents(tokens, i).join("");
            tokens = input.match(singleMatcher) || [];
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    const replaceMap = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    };
    let match = multiMatcher.exec(input);
    while(match){
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch  {
            const result = decode(match[0]);
            if (result !== match[0]) {
                replaceMap[match[0]] = result;
            }
        }
        match = multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap["%C2"] = "�";
    const entries = Object.keys(replaceMap);
    for (const key of entries){
        // Replace all decoded components
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
    }
    return input;
}
function decodeUriComponent(encodedURI) {
    if (typeof encodedURI !== "string") {
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
    }
    try {
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    } catch  {
        // Fallback to a more advanced decoder
        return customDecodeURIComponent(encodedURI);
    }
}

;// CONCATENATED MODULE: ./node_modules/split-on-first/index.js
function splitOnFirst(string, separator) {
    if (!(typeof string === "string" && typeof separator === "string")) {
        throw new TypeError("Expected the arguments to be of type `string`");
    }
    if (string === "" || separator === "") {
        return [];
    }
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) {
        return [];
    }
    return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
    ];
}

;// CONCATENATED MODULE: ./node_modules/filter-obj/index.js
function includeKeys(object, predicate) {
    const result = {};
    if (Array.isArray(predicate)) {
        for (const key of predicate){
            const descriptor = Object.getOwnPropertyDescriptor(object, key);
            if (descriptor?.enumerable) {
                Object.defineProperty(result, key, descriptor);
            }
        }
    } else {
        // `Reflect.ownKeys()` is required to retrieve symbol properties
        for (const key of Reflect.ownKeys(object)){
            const descriptor = Object.getOwnPropertyDescriptor(object, key);
            if (descriptor.enumerable) {
                const value = object[key];
                if (predicate(key, value, object)) {
                    Object.defineProperty(result, key, descriptor);
                }
            }
        }
    }
    return result;
}
function excludeKeys(object, predicate) {
    if (Array.isArray(predicate)) {
        const set = new Set(predicate);
        return includeKeys(object, (key)=>!set.has(key));
    }
    return includeKeys(object, (key, value, object)=>!predicate(key, value, object));
}

;// CONCATENATED MODULE: ./node_modules/query-string/base.js



const isNullOrUndefined = (value)=>value === null || value === undefined;
// eslint-disable-next-line unicorn/prefer-code-point
const strictUriEncode = (string)=>encodeURIComponent(string).replace(/[!'()*]/g, (x)=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`);
const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case "index":
            {
                return (key)=>(result, value)=>{
                        const index = result.length;
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") {
                            return result;
                        }
                        if (value === null) {
                            return [
                                ...result,
                                [
                                    encode(key, options),
                                    "[",
                                    index,
                                    "]"
                                ].join("")
                            ];
                        }
                        return [
                            ...result,
                            [
                                encode(key, options),
                                "[",
                                encode(index, options),
                                "]=",
                                encode(value, options)
                            ].join("")
                        ];
                    };
            }
        case "bracket":
            {
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") {
                            return result;
                        }
                        if (value === null) {
                            return [
                                ...result,
                                [
                                    encode(key, options),
                                    "[]"
                                ].join("")
                            ];
                        }
                        return [
                            ...result,
                            [
                                encode(key, options),
                                "[]=",
                                encode(value, options)
                            ].join("")
                        ];
                    };
            }
        case "colon-list-separator":
            {
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") {
                            return result;
                        }
                        if (value === null) {
                            return [
                                ...result,
                                [
                                    encode(key, options),
                                    ":list="
                                ].join("")
                            ];
                        }
                        return [
                            ...result,
                            [
                                encode(key, options),
                                ":list=",
                                encode(value, options)
                            ].join("")
                        ];
                    };
            }
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") {
                            return result;
                        }
                        // Translate null to an empty string so that it doesn't serialize as 'null'
                        value = value === null ? "" : value;
                        if (result.length === 0) {
                            return [
                                [
                                    encode(key, options),
                                    keyValueSep,
                                    encode(value, options)
                                ].join("")
                            ];
                        }
                        return [
                            [
                                result,
                                encode(value, options)
                            ].join(options.arrayFormatSeparator)
                        ];
                    };
            }
        default:
            {
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") {
                            return result;
                        }
                        if (value === null) {
                            return [
                                ...result,
                                encode(key, options)
                            ];
                        }
                        return [
                            ...result,
                            [
                                encode(key, options),
                                "=",
                                encode(value, options)
                            ].join("")
                        ];
                    };
            }
    }
}
function parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case "index":
            {
                return (key, value, accumulator)=>{
                    result = /\[(\d*)]$/.exec(key);
                    key = key.replace(/\[\d*]$/, "");
                    if (!result) {
                        accumulator[key] = value;
                        return;
                    }
                    if (accumulator[key] === undefined) {
                        accumulator[key] = {};
                    }
                    accumulator[key][result[1]] = value;
                };
            }
        case "bracket":
            {
                return (key, value, accumulator)=>{
                    result = /(\[])$/.exec(key);
                    key = key.replace(/\[]$/, "");
                    if (!result) {
                        accumulator[key] = value;
                        return;
                    }
                    if (accumulator[key] === undefined) {
                        accumulator[key] = [
                            value
                        ];
                        return;
                    }
                    accumulator[key] = [
                        ...accumulator[key],
                        value
                    ];
                };
            }
        case "colon-list-separator":
            {
                return (key, value, accumulator)=>{
                    result = /(:list)$/.exec(key);
                    key = key.replace(/:list$/, "");
                    if (!result) {
                        accumulator[key] = value;
                        return;
                    }
                    if (accumulator[key] === undefined) {
                        accumulator[key] = [
                            value
                        ];
                        return;
                    }
                    accumulator[key] = [
                        ...accumulator[key],
                        value
                    ];
                };
            }
        case "comma":
        case "separator":
            {
                return (key, value, accumulator)=>{
                    const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                    const isEncodedArray = typeof value === "string" && !isArray && base_decode(value, options).includes(options.arrayFormatSeparator);
                    value = isEncodedArray ? base_decode(value, options) : value;
                    const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item)=>base_decode(item, options)) : value === null ? value : base_decode(value, options);
                    accumulator[key] = newValue;
                };
            }
        case "bracket-separator":
            {
                return (key, value, accumulator)=>{
                    const isArray = /(\[])$/.test(key);
                    key = key.replace(/\[]$/, "");
                    if (!isArray) {
                        accumulator[key] = value ? base_decode(value, options) : value;
                        return;
                    }
                    const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item)=>base_decode(item, options));
                    if (accumulator[key] === undefined) {
                        accumulator[key] = arrayValue;
                        return;
                    }
                    accumulator[key] = [
                        ...accumulator[key],
                        ...arrayValue
                    ];
                };
            }
        default:
            {
                return (key, value, accumulator)=>{
                    if (accumulator[key] === undefined) {
                        accumulator[key] = value;
                        return;
                    }
                    accumulator[key] = [
                        ...[
                            accumulator[key]
                        ].flat(),
                        value
                    ];
                };
            }
    }
}
function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
        throw new TypeError("arrayFormatSeparator must be single character string");
    }
}
function encode(value, options) {
    if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }
    return value;
}
function base_decode(value, options) {
    if (options.decode) {
        return decodeUriComponent(value);
    }
    return value;
}
function keysSorter(input) {
    if (Array.isArray(input)) {
        return input.sort();
    }
    if (typeof input === "object") {
        return keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    }
    return input;
}
function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
        input = input.slice(0, hashStart);
    }
    return input;
}
function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
        hash = url.slice(hashStart);
    }
    return hash;
}
function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") {
        value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
        value = value.toLowerCase() === "true";
    }
    return value;
}
function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
        return "";
    }
    return input.slice(queryStart + 1);
}
function parse(query, options) {
    options = {
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false,
        ...options
    };
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    // Create an object with no prototype
    const returnValue = Object.create(null);
    if (typeof query !== "string") {
        return returnValue;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
        return returnValue;
    }
    for (const parameter of query.split("&")){
        if (parameter === "") {
            continue;
        }
        const parameter_ = options.decode ? parameter.replace(/\+/g, " ") : parameter;
        let [key, value] = splitOnFirst(parameter_, "=");
        if (key === undefined) {
            key = parameter_;
        }
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            "comma",
            "separator",
            "bracket-separator"
        ].includes(options.arrayFormat) ? value : base_decode(value, options);
        formatter(base_decode(key, options), value, returnValue);
    }
    for (const [key, value] of Object.entries(returnValue)){
        if (typeof value === "object" && value !== null) {
            for (const [key2, value2] of Object.entries(value)){
                value[key2] = parseValue(value2, options);
            }
        } else {
            returnValue[key] = parseValue(value, options);
        }
    }
    if (options.sort === false) {
        return returnValue;
    }
    // TODO: Remove the use of `reduce`.
    // eslint-disable-next-line unicorn/no-array-reduce
    return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key)=>{
        const value = returnValue[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
            // Sort object keys, not values
            result[key] = keysSorter(value);
        } else {
            result[key] = value;
        }
        return result;
    }, Object.create(null));
}
function stringify(object, options) {
    if (!object) {
        return "";
    }
    options = {
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        ...options
    };
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const [key, value] of Object.entries(object)){
        if (!shouldFilter(key)) {
            objectCopy[key] = value;
        }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
        keys.sort(options.sort);
    }
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) {
            return "";
        }
        if (value === null) {
            return encode(key, options);
        }
        if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") {
                return encode(key, options) + "[]";
            }
            return value.reduce(formatter(key), []).join("&");
        }
        return encode(key, options) + "=" + encode(value, options);
    }).filter((x)=>x.length > 0).join("&");
}
function parseUrl(url, options) {
    options = {
        decode: true,
        ...options
    };
    let [url_, hash] = splitOnFirst(url, "#");
    if (url_ === undefined) {
        url_ = url;
    }
    return {
        url: url_?.split("?")?.[0] ?? "",
        query: parse(extract(url), options),
        ...options && options.parseFragmentIdentifier && hash ? {
            fragmentIdentifier: base_decode(hash, options)
        } : {}
    };
}
function stringifyUrl(object, options) {
    options = {
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true,
        ...options
    };
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = extract(object.url);
    const query = {
        ...parse(queryFromUrl, {
            sort: false
        }),
        ...object.query
    };
    let queryString = stringify(query, options);
    if (queryString) {
        queryString = `?${queryString}`;
    }
    let hash = getHash(object.url);
    if (object.fragmentIdentifier) {
        const urlObjectForFragmentEncode = new URL(url);
        urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
        hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
    }
    return `${url}${queryString}${hash}`;
}
function pick(input, filter, options) {
    options = {
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false,
        ...options
    };
    const { url, query, fragmentIdentifier } = parseUrl(input, options);
    return stringifyUrl({
        url,
        query: includeKeys(query, filter),
        fragmentIdentifier
    }, options);
}
function exclude(input, filter, options) {
    const exclusionFilter = Array.isArray(filter) ? (key)=>!filter.includes(key) : (key, value)=>!filter(key, value);
    return pick(input, exclusionFilter, options);
}

;// CONCATENATED MODULE: ./node_modules/query-string/index.js

/* harmony default export */ const query_string = (base_namespaceObject);


/***/ }),

/***/ 6477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ query_string)
});

// NAMESPACE OBJECT: ./node_modules/query-string/base.js
var base_namespaceObject = {};
__webpack_require__.r(base_namespaceObject);
__webpack_require__.d(base_namespaceObject, {
  exclude: () => (exclude),
  extract: () => (extract),
  parse: () => (parse),
  parseUrl: () => (parseUrl),
  pick: () => (pick),
  stringify: () => (stringify),
  stringifyUrl: () => (stringifyUrl)
});

;// CONCATENATED MODULE: ./node_modules/decode-uri-component/index.js
const token = '%[a-f0-9]{2}';
const singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
const multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	const left = components.slice(0, split);
	const right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch {
		let tokens = input.match(singleMatcher) || [];

		for (let i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	const replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD',
	};

	let match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch {
			const result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	const entries = Object.keys(replaceMap);

	for (const key of entries) {
		// Replace all decoded components
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

function decodeUriComponent(encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
}

;// CONCATENATED MODULE: ./node_modules/split-on-first/index.js
function splitOnFirst(string, separator) {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (string === '' || separator === '') {
		return [];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
}

;// CONCATENATED MODULE: ./node_modules/filter-obj/index.js
function includeKeys(object, predicate) {
	const result = {};

	if (Array.isArray(predicate)) {
		for (const key of predicate) {
			const descriptor = Object.getOwnPropertyDescriptor(object, key);
			if (descriptor?.enumerable) {
				Object.defineProperty(result, key, descriptor);
			}
		}
	} else {
		// `Reflect.ownKeys()` is required to retrieve symbol properties
		for (const key of Reflect.ownKeys(object)) {
			const descriptor = Object.getOwnPropertyDescriptor(object, key);
			if (descriptor.enumerable) {
				const value = object[key];
				if (predicate(key, value, object)) {
					Object.defineProperty(result, key, descriptor);
				}
			}
		}
	}

	return result;
}

function excludeKeys(object, predicate) {
	if (Array.isArray(predicate)) {
		const set = new Set(predicate);
		return includeKeys(object, key => !set.has(key));
	}

	return includeKeys(object, (key, value, object) => !predicate(key, value, object));
}

;// CONCATENATED MODULE: ./node_modules/query-string/base.js




const isNullOrUndefined = value => value === null || value === undefined;

// eslint-disable-next-line unicorn/prefer-code-point
const strictUriEncode = string => encodeURIComponent(string).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index': {
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result, [encode(key, options), '[', index, ']'].join(''),
					];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join(''),
				];
			};
		}

		case 'bracket': {
			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result,
						[encode(key, options), '[]'].join(''),
					];
				}

				return [
					...result,
					[encode(key, options), '[]=', encode(value, options)].join(''),
				];
			};
		}

		case 'colon-list-separator': {
			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result,
						[encode(key, options), ':list='].join(''),
					];
				}

				return [
					...result,
					[encode(key, options), ':list=', encode(value, options)].join(''),
				];
			};
		}

		case 'comma':
		case 'separator':
		case 'bracket-separator': {
			const keyValueSep = options.arrayFormat === 'bracket-separator'
				? '[]='
				: '=';

			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				// Translate null to an empty string so that it doesn't serialize as 'null'
				value = value === null ? '' : value;

				if (result.length === 0) {
					return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};
		}

		default: {
			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result,
						encode(key, options),
					];
				}

				return [
					...result,
					[encode(key, options), '=', encode(value, options)].join(''),
				];
			};
		}
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index': {
			return (key, value, accumulator) => {
				result = /\[(\d*)]$/.exec(key);

				key = key.replace(/\[\d*]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		}

		case 'bracket': {
			return (key, value, accumulator) => {
				result = /(\[])$/.exec(key);
				key = key.replace(/\[]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [...accumulator[key], value];
			};
		}

		case 'colon-list-separator': {
			return (key, value, accumulator) => {
				result = /(:list)$/.exec(key);
				key = key.replace(/:list$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [...accumulator[key], value];
			};
		}

		case 'comma':
		case 'separator': {
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && base_decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? base_decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => base_decode(item, options)) : (value === null ? value : base_decode(value, options));
				accumulator[key] = newValue;
			};
		}

		case 'bracket-separator': {
			return (key, value, accumulator) => {
				const isArray = /(\[])$/.test(key);
				key = key.replace(/\[]$/, '');

				if (!isArray) {
					accumulator[key] = value ? base_decode(value, options) : value;
					return;
				}

				const arrayValue = value === null
					? []
					: value.split(options.arrayFormatSeparator).map(item => base_decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [...accumulator[key], ...arrayValue];
			};
		}

		default: {
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [...[accumulator[key]].flat(), value];
			};
		}
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function base_decode(value, options) {
	if (options.decode) {
		return decodeUriComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parse(query, options) {
	options = {
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false,
		...options,
	};

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const returnValue = Object.create(null);

	if (typeof query !== 'string') {
		return returnValue;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return returnValue;
	}

	for (const parameter of query.split('&')) {
		if (parameter === '') {
			continue;
		}

		const parameter_ = options.decode ? parameter.replace(/\+/g, ' ') : parameter;

		let [key, value] = splitOnFirst(parameter_, '=');

		if (key === undefined) {
			key = parameter_;
		}

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : (['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : base_decode(value, options));
		formatter(base_decode(key, options), value, returnValue);
	}

	for (const [key, value] of Object.entries(returnValue)) {
		if (typeof value === 'object' && value !== null) {
			for (const [key2, value2] of Object.entries(value)) {
				value[key2] = parseValue(value2, options);
			}
		} else {
			returnValue[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return returnValue;
	}

	// TODO: Remove the use of `reduce`.
	// eslint-disable-next-line unicorn/no-array-reduce
	return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
		const value = returnValue[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

function stringify(object, options) {
	if (!object) {
		return '';
	}

	options = {encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',', ...options};

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key]))
		|| (options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const [key, value] of Object.entries(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = value;
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
				return encode(key, options) + '[]';
			}

			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
}

function parseUrl(url, options) {
	options = {
		decode: true,
		...options,
	};

	let [url_, hash] = splitOnFirst(url, '#');

	if (url_ === undefined) {
		url_ = url;
	}

	return {
		url: url_?.split('?')?.[0] ?? '',
		query: parse(extract(url), options),
		...(options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: base_decode(hash, options)} : {}),
	};
}

function stringifyUrl(object, options) {
	options = {
		encode: true,
		strict: true,
		[encodeFragmentIdentifier]: true,
		...options,
	};

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = extract(object.url);

	const query = {
		...parse(queryFromUrl, {sort: false}),
		...object.query,
	};

	let queryString = stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		const urlObjectForFragmentEncode = new URL(url);
		urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
		hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
	}

	return `${url}${queryString}${hash}`;
}

function pick(input, filter, options) {
	options = {
		parseFragmentIdentifier: true,
		[encodeFragmentIdentifier]: false,
		...options,
	};

	const {url, query, fragmentIdentifier} = parseUrl(input, options);

	return stringifyUrl({
		url,
		query: includeKeys(query, filter),
		fragmentIdentifier,
	}, options);
}

function exclude(input, filter, options) {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return pick(input, exclusionFilter, options);
}

;// CONCATENATED MODULE: ./node_modules/query-string/index.js


/* harmony default export */ const query_string = (base_namespaceObject);


/***/ })

};
;