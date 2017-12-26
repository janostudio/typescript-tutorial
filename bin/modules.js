"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defineclass_1 = require("./defineclass");
class Task extends defineclass_1.Entity {
    get completed() {
        return this._completed;
    }
    set completed(value) {
        this._completed = value;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
}
exports.Task = Task;
