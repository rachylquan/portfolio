// create project for each one added

function createProject() {
  const output = [];

  WORK.forEach((project) => {
    if (project.repoLink !== '') {
      output.push(`
        <div class="project-card">
          <div class="project-img">
            <img src="${project.imgSrc}" alt="${project.title + ' image'}">
          </div>
          <div class="project-copy">
            <h2>${project.title}</h2>
            <strong>tech used: </strong><i>${project.tech.join(', ')}</i>
            <div class="project-info">
              <p>${project.description}</p>
              <a class="project-link" href="${
                project.projectLink
              }" target="_blank">View Project</a>
              <a class="project-link repo-link" href="${
                project.repoLink
              }" target="_blank">View Code</a>
            </div>
          </div>
        </div>
      `);
    } else {
      output.push(`
        <div class="project-card">
          <div class="project-img">
            <img src="${project.imgSrc}" alt="${project.title + ' image'}">
          </div>
          <div class="project-copy">
            <h2>${project.title}</h2>
            <strong>tech used: </strong><i>${project.tech.join(', ')}</i>
            <div class="project-info">
              <p>${project.description}</p>
              <a class="project-link" href="${
                project.projectLink
              }" target="_blank">View Project</a>
            </div>
          </div>
        </div>
      `);
    }
  });

  $('.work-sec').append(output);
}

$(createProject);

// function createProject() {
//   const output = [];
//   // html for each project card
//   $.each(WORK, function (index, value) {
//     output.push(
//       `<div class="project-card">
//         <div class="project-img"><img src="${this.imgSrc}" alt="${
//         this.title + ' image'
//       }"></div>
//         <div class="project-copy">
//           <h2>${this.title}</h2>
//           <strong>tech used:</strong><i>${this.tech}</i>
//           <div class="project-info">
//             <p>${this.description}</p>
//             <a class="project-link" href="${
//               this.projectLink
//             }" target="_blank">View Project</a>
//             <a class="project-link" href="${
//               this.repoLink
//             }" target="_blank">View Code</a>
//           </div>
//         </div>
//       </div>`
//     );
//     if (this.tech !== '') {
//       output.push(
//         `<a class="project-link" href="${this.repoLink}" target="_blank">View Code</a>`
//       );
//     }
//   });
//   // add it to the end of the work section
//   $('.work-sec').append(output);
// }

// $(createProject);

//Sticky menu

var sticky = document.querySelector('.navbar');
var origOffsetY = sticky.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY
    ? sticky.classList.add('fixed')
    : sticky.classList.remove('fixed');
}
document.addEventListener('scroll', onScroll);

// Scroll active

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function (i) {
      if ($(this).position().top - 51 <= scrollDistance) {
        $('a[href*="#"]:not([href="#"]).active').removeClass('active');
        $('a').eq(i).addClass('active');
      }
    });
  })
  .scroll();

//Scroll to anchor

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    // scroll active

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    if (
      location.pathname.replace(/^\//, '') ===
        this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 50,
          },
          500
        );
        return false;
      }
    }
  });
});
