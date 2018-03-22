/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
const UsersSearch = __webpack_require__(3);

$(document).ready(function () {

  $('button.follow-toggle').each(function (idx) {
      new FollowToggle(this);
  });

  new UsersSearch($('.users-search'));
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json'
    });
  },

  searchUsers: (queryVal, success) => {
     $.ajax({
      url: `/users/search`,
      data: {query: queryVal},
      dataType: 'json',
      success: success
    });
  }
};

module.exports = APIUtil;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);


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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map