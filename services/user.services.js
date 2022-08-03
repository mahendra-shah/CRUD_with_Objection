const User = require("../models/user")

class UserServices {

    // Create
    async create(data) {
        try {
            const isData = await User.query().where({ email: data.email })
            if (isData.length == 0) {
                await User.query().insert(data);
                return 'data inserted'
            }
            return
        } catch (error) {
            return { error: error.message }
        }
    }

    // Read
    async read(id){
        try {
            const Data = await User.query().where({ id })
            return Data 
        } catch (error) {
            return { error: error.message }
        }
    }

    // Update
    async update(id, data){
        try {
            const isData = await User.query().where({ id })
            if (isData.length == 0) {
                return 'nothing to update'
            }
            await User.query().update(data).where({id})
            return 'update success'
        } catch (error) {
            return { error: error.message }
        }
    }

    // Delete
    async remove(id){
        try {
            const isData = await User.query().where({ id })
            if (isData.length == 0) {
                return 'nothing to delete'
            }
            await User.query().deleteById(id)
            return 'delete success'
        } catch (error) {
            return { error: error.message }
        }
    }
}

module.exports = UserServices