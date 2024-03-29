const bcryptjs = require('bcryptjs')

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz',
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Luiz2',
          email: 'luiz2@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Luiz3',
          email: 'luiz3@gmail.com',
          password_hash: await bcryptjs.hash('111111', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down () {}
}
