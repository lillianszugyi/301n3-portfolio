(function(module) {
  var projectsController = {};

  // Project.createTable();

  // Project.fetchAll(projectView.initIndexPage);

  projectsController.index = function() {
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.projectsController = projectsController;
})(window);
