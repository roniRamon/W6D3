const APIUtil = require('./api_util');

class FollowToggle{
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", e => this.handleClick(e));
  }

  render() {
    if (this.followState) {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
    this.$el.prop("disabled", false);
  }

  async handleClick(e) {
    e.preventDefault();

    this.$el.prop("disabled", true);
    if (this.followState) {
      await APIUtil.unfollowUser(this.userId);
    } else {
      await APIUtil.followUser(this.userId);
    }

    this.followState = !this.followState;
    this.render();
  }
}

module.exports = FollowToggle;
