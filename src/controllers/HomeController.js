class HomeController {
  async index(req, res) {
    return res.json({ msg: 'Home Page' });
  }
}

module.exports = new HomeController();
