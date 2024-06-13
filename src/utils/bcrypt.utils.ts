import bcrypt from "bcrypt"

interface passwordHash {
    saltRounds: number
    password: string
}

class Bcrypt {
    public async hashPassword({saltRounds, password}: passwordHash) {
        const salt = await bcrypt.genSalt(saltRounds)
        return await bcrypt.hash(password, salt)
    }

    public async comparePassword(password: string, passwordHash: any) {
        return await bcrypt.compare(password, passwordHash)
    }
}


export default Bcrypt;