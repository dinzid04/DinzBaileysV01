"use strict";

const chalk = require("chalk");
const { version } = require("../package.json");

const asciiArt = `
██████╗ ██╗███╗   ██╗███████╗    ██╗██████╗ 
██╔══██╗██║████╗  ██║╚══███╔╝    ██║██╔══██╗
██║  ██║██║██╔██╗ ██║  ███╔╝     ██║██║  ██║
██║  ██║██║██║╚██╗██║ ███╔╝      ██║██║  ██║
██████╔╝██║██║ ╚████║███████╗    ██║██████╔╝
╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝    ╚═╝╚═════╝ 
`;

const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
let i = 0;
let step = 0;

const stages = [
    "Booting up system core...",
    "Establishing connection to WhatsApp...",
    "Syncing modules and database...",
    "Finalizing setup..."
];

const spinnerInterval = setInterval(() => {
    const frame = chalk.cyanBright(frames[i = ++i % frames.length]);
    const text = chalk.whiteBright(stages[step]);
    
    console.clear();
    console.log(chalk.cyanBright(asciiArt));
    console.log(chalk.gray(`[ System Version: ${version} ]\n`));
    console.log(`  ${frame}  ${text}`);
}, 80);

setTimeout(() => step = 1, 1200);
setTimeout(() => step = 2, 2500);
setTimeout(() => step = 3, 3800);

setTimeout(() => {
    clearInterval(spinnerInterval);
    
    console.clear();
    console.log(chalk.cyanBright(asciiArt));
    console.log(chalk.gray(`[ System Version: ${version} ]\n`));
    
    console.log(chalk.greenBright("  [✓] SYSTEM ONLINE\n"));
    
    console.log(chalk.cyan("  ┌──────────────────────────────────────────┐"));
    console.log(chalk.cyan("  │  ") + chalk.whiteBright("Author    :") + chalk.cyanBright(" DinzID                      ") + chalk.cyan("│"));
    console.log(chalk.cyan("  │  ") + chalk.whiteBright("Status    :") + chalk.greenBright(" Connected & Running         ") + chalk.cyan("│"));
    console.log(chalk.cyan("  │  ") + chalk.whiteBright("Workspace :") + chalk.cyanBright(" DinzSite / WhatsApp Bot     ") + chalk.cyan("│"));
    console.log(chalk.cyan("  └──────────────────────────────────────────┘\n"));
}, 5000);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;