import chalk from "chalk";
export const printMsgRight = () => {
  console.log(chalk.red("_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-"));
  console.log(chalk.red("                     RIGHT!"));
  console.log(chalk.red("_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-"));
};
export const printMsgWrong = () => {
  console.log(chalk.green("_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-"));
  console.log(chalk.green("                     WRONG!"));
  console.log(chalk.green("_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-_-°-"));
};
