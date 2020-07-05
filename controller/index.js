const { Billing } = require('../models');

const addData = (req, res) => {
  let [KD_BILLING, NTPN] = JSON.parse(req.body.data);
  try {
    Billing.findAll({ where: { KD_BILLING, NTPN } }).then((result) => {
      if (result) {
        res.status(409).json({
          simponi_result: {
            method: 'activeinquiry_minerba',
            data: [KD_BILLING, NTPN],
            response_code: '2',
          },
        });
      } else {
        Billing.create({ KD_BILLING, NTPN }).then(() => {
          res.status(201).json({
            simponi_result: {
              method: 'activeinquiry_minerba',
              data: [KD_BILLING, NTPN],
              response_code: '3',
            },
          });
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllData = async (req, res) => {
  try {
    const data = await Billing.findAll();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteData = async (req, res) => {
  try {
    const user = await Billing.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'User Deleted!' });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addData,
  getAllData,
  deleteData,
};
