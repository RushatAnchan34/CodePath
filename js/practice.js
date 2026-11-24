import * as monaco from "monaco-editor";

// Import Monaco workers using the updated package paths
import EditorWorker from "monaco-editor/editor/editor.worker?worker";
import JsonWorker from  "monaco-editor/language/json/json.worker?worker";
import CssWorker from "monaco-editor/language/css/css.worker?worker";
import HtmlWorker from "monaco-editor/language/html/html.worker?worker";
import TsWorker from "monaco-editor/language/typescript/ts.worker?worker";

// Configure Monaco workers
self.MonacoEnvironment = {
    getWorker: function (workerId, label){
        switch(label) {
            case "json":
                return new JsonWorker();

            case "css":
            case "scss":
            case "less":
                return new CssWorker();

            case "html":
            case "handlebars":
            case "razor":
                return new HtmlWorker();

            case "typescript":
            case "javascript":
                return new TsWorker();

            default: return new EditorWorker();
        }
    }
};

// Starter C program
const starterCode = `#include <stdio.h>
int main() {
    int a, b, sum;
    // Write your code here

    return 0;
}`;

// Create Monaco Editor
const editor = monaco.editor.create(
    document.getElementById("editor-container"),
    {
        value: starterCode,
        language: "c",
        theme: "vs-dark",

        automaticLayout: true,

        fontSize: 15,
        fontFamily: "Consolas, 'Courier New', monospace",

        lineNumbers: "on",

        minimap: {
            enabled: true
        },

        tabSize: 4,
        insertSpaces: true,

        wordWrap: "on",
        scrollBeyondLastLine: false,

        cursorBlinking: "smooth",
        renderLineHighlight: "all",

        suggestOnTriggerCharacters: true,
        quickSuggestions: true,

        padding: {
            top: 16,
            bottom: 16
        }
    }
);

// Reset Code Button
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener('click', () => {
    editor.setValue(starterCode);
});

console.log("CodePath Monaco Editor Loaded!");

// Theme Selector
const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener('click', () => {
    monaco.editor.setTheme(themeSelect.value);
});

// Fullscreen Mode
const fullscreenButton = document.getElementById("fullscreen-btn");
const editorPanel = document.querySelector(".editor-panel");

fullscreenButton.addEventListener('click', () => {
    editorPanel.classList.toggle("fullscreen-mode");
    const isFullscreen = editorPanel.classList.contains("fullscreen-mode");
    fullscreenButton.textContent = isFullscreen ? "Exit Fullscreen" : "Fullscreen";
    editor.layout();
});

// Adjust editor when window resizes
window.addEventListener("resize", () => {
    editor.layout();
});