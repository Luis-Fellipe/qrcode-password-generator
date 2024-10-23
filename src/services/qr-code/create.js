import prompt from "prompt"
import promptSchemaQRCode from "../../prompts-schema/prompt-shcema-qrcode.js"
import { handler } from "./handle.js"

async function createQRCode() {
    prompt.get(promptSchemaQRCode, handler)

    prompt.start()
}

export default createQRCode