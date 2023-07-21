class HomeController {
  async index(req, res) {
    res.send('Bem-vindo a página inicial da API.');
  }
}

module.exports = new HomeController();
