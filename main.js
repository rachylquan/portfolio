function createProject() { 
  const output = [];
  $.each(WORK, function(index, value) {
    output.push(
      `<div class="project-card">
        <div class="project-img"><img src="${this.imgSrc}" alt="${this.title + ' image'}"></div>
        <div class="project-copy">
          <h2>${this.title}</h2>
          <strong>tech used:</strong><i>${this.tech}</i>
          <div class="project-info">
            <p>${this.description}</p>
            <a class="project-link" href="${this.projectLink}" target="_blank">View Project</a>
            <a class="project-link" href="${this.repoLink}" target="_blank">View Code</a>
          </div>
        </div>
      </div>`
    )
  });
  $('.work-sec').append(output);
}


$(createProject);