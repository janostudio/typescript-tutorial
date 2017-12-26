"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
function sendCompletionEmail(completable) {
    if (!completable.completed) {
        console.error(`Please, complete '${completable.title}' before sending email.`);
        return;
    }
    console.log(`Sending email about '${completable.title}'`);
}
let bugFix = new modules_1.Task(1, 'Weirdo flying bug');
sendCompletionEmail(bugFix);
bugFix.completed = true;
sendCompletionEmail(bugFix);
