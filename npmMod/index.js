import chalk from "chalk";
import validator from "validator";

const res = validator.isEmail("pratigyaamvak@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));