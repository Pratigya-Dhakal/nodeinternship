import chalk from "chalk";
import validator from "validator";

const res = validator.isEmail("pratigyaamvak@gmail.com")
const rest = validator.isEmail("pratigyaamvak@gmail1234.12com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
console.log(rest ? chalk.green.inverse(rest) : chalk.red.inverse(rest));