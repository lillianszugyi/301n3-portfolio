(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax(
      {url: 'https://api.github.com/users/lillianszugyi/repos',
      type: 'GET',
      header: {'authorization': 'token' + token},
      success: function(data) {
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
