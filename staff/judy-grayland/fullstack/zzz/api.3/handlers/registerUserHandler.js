const logic = require('../logic')
const { ContentError, DuplicityError } = require('../logic/errors')

module.exports = (req, res) => {
  try {
    const { name, email, password } = req.body

    logic.registerUser(name, email, password, (error) => {
      //ponemos por defecto que el status es un system error
      if (error) {
        let status = 500

        if (error instanceof DuplicityError) {
          status = 409
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })

        return
      }

      res.status(201).send()
    })
  } catch (error) {
    let status = 500

    if (error instanceof ContentError || error instanceof TypeError) {
      status = 406
    }
    res
      .status(status)
      .json({ error: error.constructor.name, message: error.message })
  }
}
