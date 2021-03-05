"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk = require("chalk");
const Table = require("cli-table3");
class Logger {
    static info(msg, color) {
        color = color || 'cyan';
        console.log(chalk[color](msg));
    }
    static error(msg) {
        console.log(chalk.bgRed.bold(msg));
    }
    static line() {
        console.log(chalk.bgGray('-'.repeat(process.stdout.columns / 2)));
    }
    static success(msg) {
        this.print(msg, 'green');
    }
    static table(rows) {
        let columns = [];
        for (const row of rows) {
            columns = columns.concat(Object.keys(row));
        }
        columns = [...new Set(columns)];
        const uniqueCols = [];
        for (const col of columns) {
            uniqueCols.push(chalk.cyan.bold(col.charAt(0).toUpperCase() + col.slice(1)));
        }
        const pRows = [];
        rows.forEach(r => pRows.push(Object.values(r)));
        const p = new Table({ head: uniqueCols });
        p.push(...pRows);
        console.log(p.toString());
    }
    static print(msg, color) {
        console.log(chalk[color](msg));
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map