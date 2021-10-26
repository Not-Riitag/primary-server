const User = require('./src/TagEngine/Classes/User')
const UserManager = require('./data-controller/index').UserManager

async function run () {
    const admin = await UserManager.getAdminUser();
    console.log(admin)

    const user = User.createUser(admin)
      
    console.log(user)
    console.log(user.toJSON())
    console.log(user.toString())
    console.log(user.toString(true))
}

run()