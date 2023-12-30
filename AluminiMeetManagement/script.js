let alumniList = [];

function displayAlumni() {
  const alumniListSection = document.querySelector("#alumni-list");
  alumniListSection.innerHTML = '';

  alumniList.forEach(alumni => {
    const alumniElement = document.createElement('div');
    alumniElement.classList.add('alumni');

    const nameElement = document.createElement('h3');
    nameElement.textContent = alumni.name;

    const yearElement = document.createElement('p');
    yearElement.textContent = `Graduation Year: ${alumni.graduationYear}`;

    const jobElement = document.createElement('p');
    jobElement.textContent = `Current Job: ${alumni.currentJob}`;

    alumniElement.appendChild(nameElement);
    alumniElement.appendChild(yearElement);
    alumniElement.appendChild(jobElement);

    alumniListSection.appendChild(alumniElement);
  });
}

function addAlumni(name, year, job) {
  const newAlumni = {
    id: alumniList.length + 1,
    name,
    graduationYear: year,
    currentJob: job
  };

  alumniList.push(newAlumni);
  displayAlumni();
}

document.addEventListener('DOMContentLoaded', () => {
  displayAlumni();

  const addAlumniForm = document.querySelector("#add-alumni-form-fields");
  addAlumniForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = addAlumniForm.querySelector("#alumni-name").value;
    const year = addAlumniForm.querySelector("#alumni-year").value;
    const job = addAlumniForm.querySelector("#alumni-job").value;
    addAlumni(name, year, job);
    addAlumniForm.reset();
  });
});
