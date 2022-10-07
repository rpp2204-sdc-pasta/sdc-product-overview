const models = require('../models/index');

module.exports = async (req, res) => {
  console.log(req.query);
  const count = Number(req.query.count) || 5;
  const page = Number(req.query.page) || 1;

  if (typeof count !== 'number' || typeof page !== 'number') {
    res.status(400).end();
    return;
  }

  const data = await models.products(count, page);
  res.status(200).send(data.rows);
};
