import crypto from "crypto"

function generateRandomString() {
    return crypto.randomBytes(20).toString("hex");
}

export default generateRandomString