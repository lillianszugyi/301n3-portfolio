var projectArr = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var templateScript = $('#projectTemplate').html();
  var template = Handlebars.compile(templateScript);
  var compiled = template(this);
  return compiled;
};

data.forEach(function(ele) {
  projectArr.push(new Project(ele));
});

projectArr.forEach(function(a){
  $('#projects').append(a.toHtml());
});
