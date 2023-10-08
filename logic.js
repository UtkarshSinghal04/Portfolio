function educations() {
  let education = document.getElementById('education');
  let education_content = document.getElementById('education_content');

  if (education_content.style.display != 'none') {
    education_content.style.display = 'none';
  }
  else {
    education_content.style.display = 'block';
    achivement_content.style.display = 'none';
    project_content.style.display = 'none';
  }
}

function achivements() {
  let achivement = document.getElementById('achivement');
  let achivement_content = document.getElementById('achivement_content');

  if (achivement_content.style.display != 'none') {
    achivement_content.style.display = 'none';
  }
  else {
    achivement_content.style.display = 'block';
    education_content.style.display = 'none';
    project_content.style.display = 'none';

  }
}

function projects() {
  let project = document.getElementById('project');
  let project_content = document.getElementById('project_content');

  if (project_content.style.display != 'none') {
    project_content.style.display = 'none';
  }
  else {
    project_content.style.display = 'block';
    education_content.style.display = 'none';
    achivement_content.style.display = 'none';
  }
}
