const db = require('../db')
const { v4: uuidv4 } = require('uuid');

module.exports.create = async (req, res) => {
  const requestId = uuidv4()
  const dataToSave = {
    ...req.body,
    id: requestId,
  }
  const programs = dataToSave.programs
  delete dataToSave.programs

  await db('request').insert(dataToSave)
    .then(_ => {
      programs.map(async programId => {
        await db('request_programs').insert({
          id: uuidv4(),
          request_id: requestId,
          program_id: programId
        })
      })
    })
    .finally(() => {
      res.status(200).json('ok')
    })
}

module.exports.get = async (req, res) => {
  const requestType = req.query.type;
  const requestAuthorId = req.query.id;

  await db('request')
    .where({
      type: requestType,
      [requestType === 'university' ? 'university_id' : 'enterprise_id']: requestAuthorId,
    })
    .then(result => res.status(200).json(result))
}

module.exports.changeStatus = async (req, res) => {
  const status = req.query;
  return status
}