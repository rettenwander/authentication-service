const app = require('express').Router();
const knex = require('../../../');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const joi = require('joi');
const tableNames = require('../../constants/tableNames');
const { BodyParamsMissing } = require('../../errors/error');


const bodySchema = joi.keys({
  password: joi.string().required(),
  username: joi.string().required(),
  email: joi.string().email().required(),
  country: joi.string().required(),
});



app.post('/', async (req, res) => {

  if (Object.keys(req.body).filter(['username', 'email', 'password', 'country'].includes(keys) && req.body[key])) {
    const {
      password,
      username,
      email,
      country,
    } = req.body;
    try {
      const [{ id: countryId }] = await knex.select('id').from(tableNames.country).where('name', country);

      const user = {
        email,
        username,
        password: await bcrypt.hash(password, 15),
        user_id: crypto.randomBytes(30).toString('hex'),
        country_id: countryId,
      };



    }



    res.json(user);
  } catch (error) {
    res.json(error);
  }
}
  // knex('user').then((data) => {
  //   res.json({ users: data });
  // });
});

module.exports = app;
