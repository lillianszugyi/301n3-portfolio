function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var templateScript = $('#projectTemplate').html();
  var template = Handlebars.compile(templateScript);
  var compiled = template(this);
  return compiled;
};

Project.prepProjects = function(data) {
  data.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

// Project.fetchProjects = function() {
//   if(localStorage.data) {
//
//   } else {
