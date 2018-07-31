const database = require("./database-connection");

module.exports = {
  listAll(){
    return database('g90-server').select()
  },
  readOne(id){
    return database('g90-server').select().where('id', id)
  }
}
