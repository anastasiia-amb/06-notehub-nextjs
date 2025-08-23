(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/06-notehub-nextjs/components/Modal/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__pdccVq__backdrop",
  "modal": "Modal-module__pdccVq__modal",
});
}),
"[project]/06-notehub-nextjs/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/Modal/Modal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Modal(param) {
    let { children, onClose } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handleKeyDown = {
                "Modal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["Modal.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "";
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onClose
    ]);
    const handleBackdropClose = (e)=>{
        if (e.target === e.currentTarget) onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
        role: "dialog",
        "aria-modal": "true",
        onClick: handleBackdropClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: children
        }, void 0, false, {
            fileName: "[project]/06-notehub-nextjs/components/Modal/Modal.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/components/Modal/Modal.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this), document.body);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/06-notehub-nextjs/components/NoteForm/NoteForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "NoteForm-module__hqEMza__actions",
  "cancelButton": "NoteForm-module__hqEMza__cancelButton",
  "error": "NoteForm-module__hqEMza__error",
  "form": "NoteForm-module__hqEMza__form",
  "formGroup": "NoteForm-module__hqEMza__formGroup",
  "input": "NoteForm-module__hqEMza__input",
  "select": "NoteForm-module__hqEMza__select",
  "submitButton": "NoteForm-module__hqEMza__submitButton",
  "textarea": "NoteForm-module__hqEMza__textarea",
});
}),
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
"[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/NoteForm/NoteForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const NoteSchema = __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().max(500, "Too Long!"),
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().oneOf([
        "Todo",
        "Work",
        "Personal",
        "Meeting",
        "Shopping"
    ]).required("Required")
});
const initialValues = {
    title: "",
    content: "",
    tag: "Todo"
};
function NoteForm(param) {
    let { onClose } = param;
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const createNoteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNote"],
        onSuccess: {
            "NoteForm.useMutation[createNoteMutation]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "notes"
                    ]
                });
                onClose();
            }
        }["NoteForm.useMutation[createNoteMutation]"]
    });
    const createNewNote = (values, actions)=>{
        const newNote = {
            title: values.title,
            content: values.content,
            tag: values.tag
        };
        createNoteMutation.mutate(newNote);
        actions.resetForm();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
        initialValues: initialValues,
        validationSchema: NoteSchema,
        onSubmit: createNewNote,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "title",
                            children: "Title"
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            id: "title",
                            type: "text",
                            name: "title",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            name: "title",
                            component: "span",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "content",
                            children: "Content"
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            id: "content",
                            as: "textarea",
                            name: "content",
                            rows: 8,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            name: "content",
                            component: "span",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "tag",
                            children: "Tag"
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            as: "select",
                            id: "tag",
                            name: "tag",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Todo",
                                    children: "Todo"
                                }, void 0, false, {
                                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Work",
                                    children: "Work"
                                }, void 0, false, {
                                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Personal",
                                    children: "Personal"
                                }, void 0, false, {
                                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Meeting",
                                    children: "Meeting"
                                }, void 0, false, {
                                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Shopping",
                                    children: "Shopping"
                                }, void 0, false, {
                                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            name: "tag",
                            component: "span",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            disabled: false,
                            children: "Create note"
                        }, void 0, false, {
                            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(NoteForm, "SWcgb/4V5OsFERttGio0DfMv8e8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteForm;
var _c;
__turbopack_context__.k.register(_c, "NoteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/06-notehub-nextjs/components/NoteList/NoteList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "NoteList-module__Au0uuW__button",
  "content": "NoteList-module__Au0uuW__content",
  "footer": "NoteList-module__Au0uuW__footer",
  "link": "NoteList-module__Au0uuW__link",
  "list": "NoteList-module__Au0uuW__list",
  "listItem": "NoteList-module__Au0uuW__listItem",
  "tag": "NoteList-module__Au0uuW__tag",
  "title": "NoteList-module__Au0uuW__title",
});
}),
"[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/NoteList/NoteList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function NoteList(param) {
    let { notes } = param;
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const deleteNoteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNote"],
        onSuccess: {
            "NoteList.useMutation[deleteNoteMutation]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "notes"
                    ]
                });
            }
        }["NoteList.useMutation[deleteNoteMutation]"]
    });
    const handleDeleteNote = (id)=>{
        deleteNoteMutation.mutate(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
        children: notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: note.title
                    }, void 0, false, {
                        fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: note.content
                    }, void 0, false, {
                        fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                children: note.tag
                            }, void 0, false, {
                                fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/notes/".concat(note.id),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                children: "View details"
                            }, void 0, false, {
                                fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                onClick: ()=>handleDeleteNote(note.id),
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, note.id, true, {
                fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(NoteList, "fp9X78GrHdYtRbjep6SlYOKhTvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteList;
var _c;
__turbopack_context__.k.register(_c, "NoteList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/06-notehub-nextjs/components/Pagination/Pagination.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Pagination-module__wfgTjW__active",
  "pagination": "Pagination-module__wfgTjW__pagination",
});
}),
"[project]/06-notehub-nextjs/components/Pagination/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/Pagination/Pagination.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)");
;
;
;
function Pagination(param) {
    let { totalPages, setPage, page } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        pageCount: totalPages,
        pageRangeDisplayed: 4,
        marginPagesDisplayed: 1,
        onPageChange: (param)=>{
            let { selected } = param;
            return setPage(selected + 1);
        },
        forcePage: page - 1,
        containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
        activeClassName: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active,
        nextLabel: "→",
        previousLabel: "←"
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/components/Pagination/Pagination.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/06-notehub-nextjs/components/SearchBox/SearchBox.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "SearchBox-module__Dxa5Xq__input",
});
}),
"[project]/06-notehub-nextjs/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/SearchBox/SearchBox.module.css [app-client] (css module)");
;
;
const SearchBox = (param)=>{
    let { value, onChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
        type: "text",
        value: value,
        onChange: (e)=>onChange(e.target.value),
        placeholder: "Search notes"
    }, void 0, false, {
        fileName: "[project]/06-notehub-nextjs/components/SearchBox/SearchBox.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SearchBox;
const __TURBOPACK__default__export__ = SearchBox;
var _c;
__turbopack_context__.k.register(_c, "SearchBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/06-notehub-nextjs/app/notes/NotesPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "app": "NotesPage-module__VRP3MW__app",
  "button": "NotesPage-module__VRP3MW__button",
  "toolbar": "NotesPage-module__VRP3MW__toolbar",
});
}),
"[project]/06-notehub-nextjs/app/notes/Notes.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/NoteList/NoteList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/Pagination/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/app/notes/NotesPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/06-notehub-nextjs/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function NotesClient() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openModal = ()=>setIsOpen(true);
    const closeModal = ()=>setIsOpen(false);
    const [debouncedQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(query, 300);
    const handleChange = (value)=>{
        setQuery(value);
        setPage(1);
    };
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "notes",
            debouncedQuery,
            page
        ],
        queryFn: {
            "NotesClient.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNotes"])(page, debouncedQuery)
        }["NotesClient.useQuery"],
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
    const totalPages = (data === null || data === void 0 ? void 0 : data.totalPages) || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: query,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        totalPages: totalPages,
                        page: page,
                        setPage: setPage
                    }, void 0, false, {
                        fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$app$2f$notes$2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                        onClick: openModal,
                        children: "Create note"
                    }, void 0, false, {
                        fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteForm$2f$NoteForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClose: closeModal
                }, void 0, false, {
                    fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            (data === null || data === void 0 ? void 0 : data.notes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                notes: data === null || data === void 0 ? void 0 : data.notes
            }, void 0, false, {
                fileName: "[project]/06-notehub-nextjs/app/notes/Notes.client.tsx",
                lineNumber: 55,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true);
}
_s(NotesClient, "5X2ZJ9P2dbEkOeGR4+uX9/Px4m4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NotesClient;
var _c;
__turbopack_context__.k.register(_c, "NotesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=06-notehub-nextjs_f690f12b._.js.map