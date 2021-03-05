"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRepositoryException = void 0;
class DbRepositoryException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.DbRepositoryException = DbRepositoryException;
//# sourceMappingURL=DbRepositoryException.js.map