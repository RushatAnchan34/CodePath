console.log("CodePath Coding Practice Loaded!");

const codeEditor = document.getElementById("code-editor");
const resetButton = document.getElementById("reset-btn");
const starterCode = `#include <stdio.h>

int main(){
    int a, b, sum;
    //Write your code here

    return 0;
}
`;

resetButton.addEventListener("click", () => {
    codeEditor.value = starterCode;
});