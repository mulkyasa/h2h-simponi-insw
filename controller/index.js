const { Billing } = require('../models');

module.exports = {
  addData: async (req, res) => {
    let [
      KD_BILLING,
      NTPN,
      // NPWP,
      // TRX_TGL_KONTRAK,
      // TRX_KMDT_JUAL,
      // TRX_MTD_BYR,
      // TRX_TGL_KAPAL,
      // TRX_KURS_BI,
      // KN_TONASE,
      // KN_ASAL,
      // KN_UNIT_MASS,
      // KL_KALORI,
      // KL_MOIS_TOT,
      // KL_MOIS_INH,
      // KL_SULF_TOT,
      // KL_ASH,
      // BP_TTK_JUAL,
      // BPBG_UKR_TGK,
      // BPBG_JT_TGK,
      // BPBG_BIAYA_TOT,
      // BPTR_BIAYA_TR,
      // BPTR_BIAYA_TOT,
      // BPTR_BIAYA_TOTHIT,
      // DP_STATUS,
      // DP_PEMBELI,
      // DPLK_PLB_ASL,
      // DPLK_PLB_AKH,
      // DPKV_NAMA,
      // DPKT_BENDERA,
      // DPKT_NAMA,
      // DPTB_BENDERA,
      // DPTB_NAMA,
      // DRHA_KMDT_JUAL,
      // DRHA_ACUAN,
      // DRHA_NILAI,
      // DRPR_HRG_ACU,
      // DRPR_BP_TOT,
      // DRPR_HD_RYL,
      // DRPR_HJ_PERUSH,
      // DRPR_TARIF,
      // DRPR_RYL_TOT,
      // DRPR_RP_BYR,
      // DRPR_PHT_BYR,
      // DRPR_RYLFIN_HIT,
      // DRPR_PHTFIN_HIT,
      // DRPR_DENDA,
      // DRPR_DENDA_PHT,
      // DRPR_RYLFIN_TOT,
      // DRPR_PHTFIN_TOT,
      // DRPR_KET,
      // DRPR_KURLEB,
      // DRPR_TGLSUBMIT,
      // DRPR_NMPERUSH,
    ] = req.body.simponi_req.data;
    try {
      const result = await Billing.findAll({ where: { KD_BILLING, NTPN } });
      if (result.length > 0) {
        res.status(409).json({
          simponi_result: {
            method: 'activeinquiry_minerba',
            data: [KD_BILLING, NTPN],
            response_code: '2',
          },
        });
      } else {
        await Billing.create({
          KD_BILLING,
          NTPN,
          // NPWP,
          // TRX_TGL_KONTRAK,
          // TRX_KMDT_JUAL,
          // TRX_MTD_BYR,
          // TRX_TGL_KAPAL,
          // TRX_KURS_BI,
          // KN_TONASE,
          // KN_ASAL,
          // KN_UNIT_MASS,
          // KL_KALORI,
          // KL_MOIS_TOT,
          // KL_MOIS_INH,
          // KL_SULF_TOT,
          // KL_ASH,
          // BP_TTK_JUAL,
          // BPBG_UKR_TGK,
          // BPBG_JT_TGK,
          // BPBG_BIAYA_TOT,
          // BPTR_BIAYA_TR,
          // BPTR_BIAYA_TOT,
          // BPTR_BIAYA_TOTHIT,
          // DP_STATUS,
          // DP_PEMBELI,
          // DPLK_PLB_ASL,
          // DPLK_PLB_AKH,
          // DPKV_NAMA,
          // DPKT_BENDERA,
          // DPKT_NAMA,
          // DPTB_BENDERA,
          // DPTB_NAMA,
          // DRHA_KMDT_JUAL,
          // DRHA_ACUAN,
          // DRHA_NILAI,
          // DRPR_HRG_ACU,
          // DRPR_BP_TOT,
          // DRPR_HD_RYL,
          // DRPR_HJ_PERUSH,
          // DRPR_TARIF,
          // DRPR_RYL_TOT,
          // DRPR_RP_BYR,
          // DRPR_PHT_BYR,
          // DRPR_RYLFIN_HIT,
          // DRPR_PHTFIN_HIT,
          // DRPR_DENDA,
          // DRPR_DENDA_PHT,
          // DRPR_RYLFIN_TOT,
          // DRPR_PHTFIN_TOT,
          // DRPR_KET,
          // DRPR_KURLEB,
          // DRPR_TGLSUBMIT,
          // DRPR_NMPERUSH,
        });
        res.status(201).json({
          simponi_result: {
            method: 'activeinquiry_minerba',
            data: [KD_BILLING, NTPN],
            response_code: '3',
          },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  getAllData: async (req, res) => {
    try {
      const data = await Billing.findAll();
      res.status(201).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteData: async (req, res) => {
    try {
      const user = await Billing.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: 'User Deleted!' });
    } catch (error) {
      console.log(error.message);
    }
  },
};
