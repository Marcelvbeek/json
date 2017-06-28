import models from '../database/index'

// create a sample user

const users = [
    {
        name: 'Nick Cerminara', 
        username: 'Nick',
        password: 'password',
        role: 1 
    },
    {
        name: 'Marcel van Beek', 
        username: 'Marcel',
        password: 'am77ar85',
        role: 1 
    }
]

const userSetter = {
    setUsers() {
        users.forEach(user => {
            const newUser = new models.userModel(user)
            newUser.save()

            console.log('User saved successfully');
        })
    }
}

export default userSetter
