'use strict';
function init() {
  renderProj();
}

function renderProj() {
  const projs = getProjs();
  var strHtmls = '<section class="bg-light" id="portfolio"> <div class="row">';
  strHtmls += projs
    .map(
      (proj) => `<div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" onclick="openModal('${proj.id}')" href="#portfolioModal1">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="card-img img-fluid" src="img/portfolio/${proj.name}.jpeg" alt=""/>
  </a>
  <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
  </div>
</div>`
    )
    .join('');

  strHtmls += '</div> </section>';
  document.querySelector('.Portfolio').innerHTML = strHtmls;
}

function openModal(projId) {
  var projToModal = getProjById(projId);
  var protHtml = ` <h2>${projToModal.name}</h2>
  <p class="item-intro text-muted">${projToModal.title}</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${projToModal.name}.jpeg" alt="" />
  <p> ${projToModal.desc}</p>
  <ul class="list-inline">
    <li>Date: ${projToModal.publishedAt}</li>
    <li>Client: Threads</li>
    <li>Category: Illustration</li>
  </ul> <button class="btn btn-primary" onclick="window.open('${projToModal.url}');" type="button">Check it out! </button>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project
  </button>`;
  document.querySelector('.modal-body').innerHTML = protHtml;
}

function sendForm(ev) {
  ev.preventDefault();
  var mail = document.querySelector('.email').value;
  var subject = document.querySelector('.subject').value;
  var text = document.querySelector('.text').value;

  window.open(`//mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=${subject}&body=${text},${mail}`);
}
