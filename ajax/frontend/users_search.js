const APIUtil = require('./api_util');


class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input');
    this.$usersUl = this.$el.find('.users');
    this.$input.on('input', e => this.handleInput(e));
  }

  handleInput(e) {
    console.log(this.$input.val());
    APIUtil.searchUsers(this.$input.val(), this.renderResults);
  }

  renderResults(result) {
    // this.$usersUl.empty();
    console.log(result);
    // for (let i = 0; i < userList.length; i++) {
    //   userList[i]
    // }
  }
}

module.exports = UsersSearch;

// $.ajax({
//   url: "/feed.html",
//   method: "GET",
//   success: (result) => { console.log(result) },
// });
