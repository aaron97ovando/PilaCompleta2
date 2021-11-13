const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
  });
};
-
  function greeting(req, res) {
    res.status(200).json({
      message: 'Hola Campeon de la Fullstack Web',
    });
  }
-
 function about(req, res) {
    res.render('home/about', { title: 'Acerca de projnotes' });
  }
-
  export default {
  index,
  greeting,
  about,
}