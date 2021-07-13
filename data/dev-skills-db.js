export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}

const devSkills = [
  {text: 'HTML', _id: 125223},
  {text: 'CSS', _id: 127904},
  {text: 'Javascript', _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the devSkills
    if (Object.keys(conditions).length === 0) return callback(null, devSkills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const devSkill = devSkills.find(devSkill => devSkill._id === parseInt(id))
    if (!devSkill) throw new Error ('No devSkill was found')
    return callback(null, devSkill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the devSkill object
    const idx = devSkills.findIndex(devSkill => devSkill._id == parseInt(id))
    const deletedDevSkill = devSkills.splice(idx, 1)
    if (!deletedDevSkill.length ) throw new Error ('No devSkill was deleted')
    return callback(null, deletedDevSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

function create(devSkill, callback) {
  // Add the id
  devSkill._id = Date.now() % 1000000
  // New devSkills wouldn't be done
  devSkills.push(devSkill)
  return callback(null, devSkill)
}