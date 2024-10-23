import { handlerPassword } from "./handle.js";

import chalk from "chalk";

async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handlerPassword()
    console.log(password);
    
    
}

export {
    createPassword
}