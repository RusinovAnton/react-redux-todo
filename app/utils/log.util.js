const logSeparator = [
    `%c-------------------------------------`,
    'background-color: #ccc;color: #fff;font-weight:bold'
];

export default class Log {
    constructor() {
        this.version = '1.0.0'
    }

    static reduce(str) {
        console.log(`%c${str}`, 'color: blue; font-weight: bold');
        console.log(...logSeparator);
    }

    static action(str) {
        console.log(`%c${str}`, 'color: red; font-weight: bold');
        console.log(...logSeparator);
    }

    static render(str) {
        console.log(`%c${str}`, 'color: green; font-weight: bold');
        console.log(...logSeparator);
    }
}
