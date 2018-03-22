const FollowToggle = require("./follow_toggle");
const UsersSearch = require('./users_search');

$(document).ready(function () {

  $('button.follow-toggle').each(function (idx) {
      new FollowToggle(this);
  });

  new UsersSearch($('.users-search'));
});
