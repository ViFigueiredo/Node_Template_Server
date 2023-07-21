class HomeController {
  async index(req, res) {
    res.send({ msg: 'Bem-vindo a página inicial da API.' });
  }
}

module.exports = new HomeController();
