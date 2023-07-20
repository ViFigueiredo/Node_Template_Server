class HomeController {
  async index(req, res) {
    return res.json('Bem-vindo a página inicial da API.');
  }
}

module.exports = new HomeController();
