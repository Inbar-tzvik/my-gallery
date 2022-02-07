'use strict';
var gProjs = [
  {
    id: makeId(),
    name: 'Minesweeper',
    title: 'Better watch out from the mines ',
    desc: 'lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum',
    url: 'https://inbar-tzvik.github.io/Minesweeper/',
    publishedAt: 'Jan 2022',
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: makeId(),
    name: 'BookShop',
    title: 'Helps you organize',
    desc: 'lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum',
    url: 'https://inbar-tzvik.github.io/book-shop/',
    publishedAt: 'Jan 2022',
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: makeId(),
    name: 'Pacman',
    title: 'Run from the ghosts',
    desc: 'lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum',
    url: 'https://inbar-tzvik.github.io/Pacman/',
    publishedAt: 'Feb 2022',
    labels: ['Matrixes', 'keyboard events'],
  },
];

function getProjs() {
  return gProjs;
}

function getProjById(projId) {
  const proj = gProjs.find((proj) => projId === proj.id);
  console.log(proj);
  return proj;
}
{
  /* <div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
  </a>
  <div class="portfolio-caption">
    <h4>Threads</h4>
    <p class="text-muted">Illustration</p>
  </div>
</div>; */
}
