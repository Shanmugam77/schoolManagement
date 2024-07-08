const bcryptjs = require("bcryptjs");

const hashPassword = async(saltRounds,password) => {
    try {
        const salt = await bcryptjs.genSalt(saltRounds);
        const hashPassword = await bcryptjs.hash(password,salt);
        return hashPassword;
    } catch (error) {
        console.log("Error hashing password",error);
        throw new Error("Error hashing password");
    }
};

const comparePassword = async(password, hashPassword) => {
    try {
        const isMatch = await bcryptjs.compare(password,hashPassword);
        return isMatch;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw new Error('Failed to compare passwords');
    }
}

module.exports = {hashPassword, comparePassword};