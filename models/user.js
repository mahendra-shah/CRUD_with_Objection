const db = require("../config/db.connection");
const { Model } = require("objection");

const KnexConfig = require('../knexfile');

Model.knex(db);

class UserModel extends Model {
    static get tableName() {
        return 'user1'
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
                id: 'integer',
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                password: {
                    type: 'string',
                },
                age: {
                    type: 'string'
                }

            }
        }
    }
}


module.exports = UserModel