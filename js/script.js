var projectArr = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category', this.category);
  $newProject.find('h1').text(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.append('<hr>');
  $newProject.removeClass('template');

  return $newProject;
};

data.forEach(function(ele) {
  projectArr.push(new Project(ele));
});

projectArr.forEach(function(a){
  $('#projects').append(a.toHtml());
});
