const logSeparator = [
    `%c-------------------------------------`,
    'background-color: #ccc;color: #fff;font-weight:bold'
];

export default class Log {
    constructor() {
        this.version = '1.0.0'
    }

    static getStack() {
        console.log(`%c${new Error().stack.replace(/Error/, 'Stack trace')}`, 'font-size:11px');
    }

    static reduce(str, getStack = false) {
        if (getStack) Log.getStack();
        console.log(`%c${str}`, 'color: blue; font-weight: bold');
        console.log(...logSeparator);
    }

    static action(str, getStack = false) {
        if (getStack) Log.getStack();
        console.log(`%c${str}`, 'color: red; font-weight: bold');
        console.log(...logSeparator);
    }

    static render(str, getStack = false) {
        if (getStack) Log.getStack();
        console.log(`%c${str}`, 'color: green; font-weight: bold');
        console.log(...logSeparator);
    }
}
