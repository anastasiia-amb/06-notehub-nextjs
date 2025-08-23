(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const fetchNotes = async (page, query)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://notehub-public.goit.study/api/notes", {
        params: {
            page: page,
            perPage: 12,
            search: query
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q"))
        }
    });
    return response.data;
};
const fetchNoteById = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://notehub-public.goit.study/api/notes/".concat(id), {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q"))
        }
    });
    return response.data;
};
const createNote = async (newNote)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://notehub-public.goit.study/api/notes", newNote, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q"))
        }
    });
    return response.data;
};
const deleteNote = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("https://notehub-public.goit.study/api/notes/".concat(id), {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q"))
        }
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "NoteDetails-module__Oyq34q__container",
  "content": "NoteDetails-module__Oyq34q__content",
  "date": "NoteDetails-module__Oyq34q__date",
  "header": "NoteDetails-module__Oyq34q__header",
  "item": "NoteDetails-module__Oyq34q__item",
  "tag": "NoteDetails-module__Oyq34q__tag",
});
}),
"[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteDetailsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NoteDetailsClient() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { data: note, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "note",
            id
        ],
        queryFn: {
            "NoteDetailsClient.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNoteById"])(id)
        }["NoteDetailsClient.useQuery"],
        refetchOnMount: false
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading, please wait..."
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
        lineNumber: 20,
        columnNumber: 25
    }, this);
    if (error || !note) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Something went wrong."
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
        lineNumber: 21,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: note.title
                    }, void 0, false, {
                        fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: note.content
                }, void 0, false, {
                    fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                    children: note.createdAt
                }, void 0, false, {
                    fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(NoteDetailsClient, "oW+E8R3ntTx/FzYGmY2sRZ/+z/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NoteDetailsClient;
var _c;
__turbopack_context__.k.register(_c, "NoteDetailsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=06-notehub-nextjs_487b7c98._.js.map