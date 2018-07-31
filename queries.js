const database = require("./database-connection");

module.exports = {
  listAll(){
    return database('g90server').select()
  },
  readOne(id){
    return database('g90server').select().where('id', id)
  }
}
