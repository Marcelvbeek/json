import md5 from 'md5'

class passwordEncrypter {
    constructor() {

    }

    encrypt(pass) {
        return md5(pass)
    }

    compare(pass, hash) {
        if(md5(pass) == hash) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default passwordEncrypter