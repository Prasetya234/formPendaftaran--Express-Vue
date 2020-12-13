module.exports = (sequelize, Sequelize) => {
    const Pendaftaran = sequelize.define("pendaftaran", {
      nama_murid: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      ttl: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      jumlah_saudara: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      no_telpon: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      
    });
  
    return Pendaftaran;
  };

