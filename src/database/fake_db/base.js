const fake_customers = [
  {
    _id: '601482fd67e11a3834541bdd',
    name: 'José da Silva',
    cpf: '321.123.123-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'PE',
    },
    contact: {
      phone: '(11) 99999-0000',
      email: 'josedasilva@gmail.com',
    },
  },
  {
    _id: '334582fd67e11a3834541bdd',
    name: 'João de Souza',
    cpf: '855.321.123-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'PE',
    },
    contact: {
      phone: '(81) 99814-5662',
      email: 'joaodesouza@gmail.com',
    },
  },
  {
    _id: '554382fd67e11a3834541bdd',
    name: 'Felipe de Almeida',
    cpf: '345.123.321-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'SP',
    },
    contact: {
      phone: '(31) 99234-0062',
      email: 'felipedealmeida@gmail.com',
    },
  },
  {
    _id: '667882fd67e11a3834541bdd',
    name: 'Rodolfo Araújo',
    cpf: '677.123.154-32',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'RJ',
    },
    contact: {
      phone: '(21) 99822-4455',
      email: 'rodolfoaraujo@gmail.com',
    },
  },
  {
    _id: '887682fd67e11a3834541bdd',
    name: 'Marcelo Sampaio',
    cpf: '967.155.723-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'PR',
    },
    contact: {
      phone: '(46) 97865-4062',
      email: 'marcelosampaio@gmail.com',
    },
  },
  {
    _id: '41224d776a326fb40f000001',
    name: 'Maria da Silva',
    cpf: '457.144.323-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'SP',
    },
    contact: {
      phone: '(12) 91235-0062',
      email: 'mariadasilva@gmail.com',
    },
  },
  {
    _id: '778982fd67e11a3834541bdd',
    name: 'Joana Ferraz',
    cpf: '235.123.234-56',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'PB',
    },
    contact: {
      phone: '(83) 97894-0062',
      email: 'joanaferraz@gmail.com',
    },
  },
  {
    _id: '116682fd67e11a3834541bdd',
    name: 'Fernanda Pinheiro',
    cpf: '267.123.678-92',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'SP',
    },
    contact: {
      phone: '(11) 98467-3456',
      email: 'fernandapinheiro@gmail.com',
    },
  },
  {
    _id: '667182fd67e11a3834541bdd',
    name: 'Kátia Rodrigues',
    cpf: '976.567.123-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'PE',
    },
    contact: {
      phone: '(81) 97223-6692',
      email: 'katiarodrigues@gmail.com',
    },
  },
  {
    _id: '332582fd67e11a3834541bdd',
    name: 'Carla Paes',
    cpf: '742.339.923-12',
    address: {
      cep: '53.427-000',
      publicPlace: 'av. teste',
      number: '1123',
      district: 'Teste',
      city: 'teste',
      state: 'RJ',
    },
    contact: {
      phone: '(21) 99849-5578',
      email: 'carlapaes@gmail.com',
    },
  },
];

fake_dependents = [
  {
    _id: '4478843d67e11a3834541bde',
    maintainer: '601482fd67e11a3834541bdd',
    name: 'Lucas da Silva',
    cpf: '325.778.921-32',
    age: 13,
    type: 'Son',
  },
  {
    _id: '5567843d67e11a3834541bde',
    maintainer: '334582fd67e11a3834541bdd',
    name: 'Bruno de Souza',
    cpf: '326.668.921-32',
    age: 23,
    type: 'Brother',
  },
  {
    _id: '7890843d67e11a3834541bde',
    name: 'Cristina de Almeida',
    maintainer: '554382fd67e11a3834541bdd',
    cpf: '325.778.678-32',
    age: 53,
    type: 'Mother',
  },
  {
    _id: '6678843d67e11a3834541bde',
    name: 'Gertrudes Araújo',
    maintainer: '667882fd67e11a3834541bdd',
    cpf: '678.978.921-32',
    age: 73,
    type: 'Grandmother',
  },
  {
    _id: '4456743d67e11a3834541bde',
    name: 'Antônio Sampaio',
    maintainer: '887682fd67e11a3834541bdd',
    cpf: '689.089.521-32',
    age: 82,
    type: 'Grandfather',
  },
  {
    _id: '6643743d67e11a3834541bde',
    name: 'Valentina da Silva',
    maintainer: '41224d776a326fb40f000001',
    cpf: '686.789.261-32',
    age: 12,
    type: 'Grand Daughter',
  },
  {
    _id: '2345643d67e11a3834541bde',
    name: 'Marina Ferraz',
    maintainer: '778982fd67e11a3834541bdd',
    cpf: '789.489.213-52',
    age: 22,
    type: 'Sister',
  },
  {
    _id: '7894543d67e11a3834541bde',
    name: 'Natascha Pinheiro',
    maintainer: '116682fd67e11a3834541bdd',
    cpf: '578.089.213-72',
    age: 62,
    type: 'Mother',
  },
  {
    name: 'Enzo Rodrigues',
    _id: '5377543d67e11a3834541bde',
    maintainer: '667182fd67e11a3834541bdd',
    cpf: '367.939.213-32',
    age: 12,
    type: 'Son',
  },
  {
    _id: '6014843d67e11a3834541bde',
    maintainer: '332582fd67e11a3834541bdd',
    name: 'Zezinho Paes',
    cpf: '321.321.321-36',
    age: 12,
    type: 'Son',
  },
  {
    _id: '6789843d67e11a3834541bde',
    maintainer: '332582fd67e11a3834541bdd',
    name: 'Mariazinha Paes',
    cpf: '325.678.321-32',
    age: 6,
    type: 'Daughter',
  },
];

module.exports = { fake_customers, fake_dependents };