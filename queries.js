const database = require("./database-connection");

module.exports = {
  listAll(){
    return database('cohort').select()
  },
  readOne(id){
    return database('cohort').select().where('id', id)
  },
  postOne(student){
    return database('cohort')
      .insert(student)
      .returning('*')
      .then(record => record[0])
  },
  deleteOne(id){
    return database('cohort')
      .delete()
      .where('id', id)
  },
  update(id, student){
    return database('cohort')
      .update(student)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  }
}
