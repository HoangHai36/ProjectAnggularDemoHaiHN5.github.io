(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start header -->\n<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"index.html\">conduit</a>\n    <ul class=\"nav navbar-nav pull-xs-right\">\n      <li class=\"nav-item\">\n        <!-- Add \"active\" class when you're on that page\" -->\n        <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLogin;\">\n        <a class=\"nav-link\" routerLink=\"/new/editor\" routerLinkActive=\"active\" >\n          <i class=\"ion-compose\"></i>&nbsp;New Post\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLogin;\">\n        <a class=\"nav-link\" routerLink=\"setting\" routerLinkActive=\"active\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isLogin;\">\n        <a class=\"nav-link\" routerLink=\"login\" routerLinkActive=\"active\">Sign in</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isLogin;\">\n        <a class=\"nav-link\" routerLink=\"register\" routerLinkActive=\"active\">Sign up</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLogin;\">\n        <a class=\"nav-link\" [routerLink]=\"authService.name\" routerLinkActive=\"active\">{{authService.name}}</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLogin;\">\n        <a class=\"nav-link\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- End header -->\n\n<!-- Start content -->\n<router-outlet></router-outlet>\n<!-- End content -->\n\n<!-- Start footer -->\n<footer>\n  <div class=\"container\">\n    <a href=\"/\" class=\"logo-font\">conduit</a>\n    <span class=\"attribution\">\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design licensed\n      under MIT.\n    </span>\n  </div>\n</footer>\n<!-- End footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article-detail/article-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article-detail/article-detail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-page\">\n    <div class=\"banner\">\n        <div class=\"container\">\n            <h1>{{article?.title}}</h1>\n            <div class=\"article-meta\">\n                <a><img [src]=\"article?.author.image\" /></a>\n                <div class=\"info\">\n                    <a *ngIf=\"article?.author.username\" [routerLink]=\"['/',article?.author.username]\"\n                        class=\"author\">{{article?.author.username}}</a>\n                    <span class=\"date\">{{article?.createdAt | date:'fullDate'}}</span>\n                </div>\n\n                <button class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"!check\"\n                    (click)=\"clickFollowUser(article?.author.username,article?.author.following)\">\n                    <span *ngIf=\"!article?.author.following\"><i class=\"ion-plus-round\"></i></span>\n                    &nbsp;\n                    {{article?.author.following ? 'Unfollow' : 'Follow  '}} {{article?.author.username}}\n                </button>\n                &nbsp;&nbsp;\n                <button class=\"btn btn-sm\" *ngIf=\"!check\"\n                    [ngClass]=\"article?.favorited ? 'btn-primary' : 'btn-outline-primary'\"\n                    (click)=\"toggleFavorite(slug,article?.favorited)\">\n                    <i class=\"ion-heart\"></i>\n                    &nbsp;\n                    Favorite Post <span class=\"counter\">({{article?.favoritesCount}})</span>\n                </button>\n\n                <button class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"check\"\n                    [routerLink]=\"['/editor/',article?.slug]\">\n                    <i class=\"ion-edit\"></i>\n                    &nbsp;\n                    Edit Article\n                </button>\n                &nbsp;&nbsp;\n                <button class=\"btn btn-sm btn-outline-danger\" *ngIf=\"check\" (click)=\"deleteArticle()\">\n                    <i class=\"ion-trash-a\"></i>\n                    &nbsp;\n                    Delete Article\n                </button>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"container page\">\n        <div class=\"row article-content\">\n            <div class=\"col-md-12\">\n                <p>\n                    {{article?.body}}\n                </p>\n                <ul class=\"tag-list\">\n                    <li class=\"tag-default text-dark tag-pill tag-outline ng-binding ng-scope\" *ngFor=\"let item of article?.tagList\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n        <hr />\n        <div class=\"article-actions\">\n            <div class=\"article-meta\">\n                <a href=\"profile.html\"><img [src]=\"article?.author.image ? article?.author.image : img\" /></a>\n                <div class=\"info\">\n                    <a class=\"author\" *ngIf=\"article?.author.username\"\n                        [routerLink]=\"['/',article?.author.username]\">{{article?.author.username}}</a>\n                    <span class=\"date\">{{article?.createdAt | date:'fullDate'}}</span>\n                </div>\n\n                <button class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"!check\"\n                    (click)=\"clickFollowUser(article?.author.username,article?.author.following)\">\n                    <span *ngIf=\"!article?.author.following\"><i class=\"ion-plus-round\"></i></span>\n                    &nbsp;\n                    {{article?.author.following ? 'Unfollow' : 'Follow  '}} {{article?.author.username}}\n                </button>\n                &nbsp;\n                <button class=\"btn btn-sm\" *ngIf=\"!check\"\n                    [ngClass]=\"article?.favorited ? 'btn-primary' : 'btn-outline-primary'\"\n                    (click)=\"toggleFavorite(slug,article?.favorited)\">\n                    <i class=\"ion-heart\"></i>\n                    &nbsp;\n                    Favorite Post <span class=\"counter\">({{article?.favoritesCount}})</span>\n                </button>\n                <button class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"check\"\n                    [routerLink]=\"['/editor/',article?.slug]\">\n                    <i class=\"ion-edit\"></i>\n                    &nbsp;\n                    Edit Article\n                </button>\n                &nbsp;&nbsp;\n                <button class=\"btn btn-sm btn-outline-danger\" *ngIf=\"check\" (click)=\"deleteArticle()\">\n                    <i class=\"ion-trash-a\"></i>\n                    &nbsp;\n                    Delete Article\n                </button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-8 offset-md-2\">\n                <p *ngIf=\"!isLogin\"><a class=\"text-success\" [routerLink]=\"['/login']\">Sign in</a> or <a\n                        class=\"text-success\" [routerLink]=\"['/register']\">Sign up</a> to add comments on this article.\n                </p>\n                <form class=\"card comment-form\" *ngIf=\"isLogin\">\n                    <div class=\"card-block\">\n                        <textarea class=\"form-control\" placeholder=\"Write a comment...\" rows=\"3\"\n                            (keyup)=\"textBody = $event.target.value\" [value]=\"textBody\"></textarea>\n                    </div>\n                    <div class=\"card-footer\">\n                        <img [src]=\"img\" class=\"comment-author-img\" />\n                        <button class=\"btn btn-sm btn-primary\" (click)=\"postNewComment()\">\n                            Post Comment\n                        </button>\n                    </div>\n                </form>\n                <div class=\"card\" *ngFor=\"let comment of listComment; let j = index\">\n                    <div class=\"card-block\">\n                        <p class=\"card-text\">{{comment?.body}}</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <a href=\"\" class=\"comment-author\">\n                            <img [src]=\"comment?.author?.image\" class=\"comment-author-img\" />\n                        </a>\n                        &nbsp;\n                        <a [routerLink]=\"['/',comment?.author.username]\"\n                            class=\"comment-author\">{{comment?.author.username}}</a>\n                        <span class=\"mod-options\" *ngIf=\"nameUserIslogin == comment?.author.username\"\n                            (click)=\"deleteComment(comment?.id, j)\"><i class=\"ion-trash-a\"></i></span>\n                        <span class=\"date-posted\">{{comment?.createdAt | date:'fullDate'}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n\n            <div class=\"col-md-10 offset-md-1 col-xs-12\">\n                    <ul class=\"error-messages\" *ngIf=\"errNewArticle\">\n                            <li *ngFor=\"let item of errNewArticle\">{{item}}</li>\n                    </ul>\n                <form [formGroup]=\"formArticle\">\n                    <fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Article Title\"\n                                formControlName=\"title\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"What's this article about?\"\n                                formControlName=\"description\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <textarea class=\"form-control\" rows=\"8\" placeholder=\"Write your article (in markdown)\"\n                                formControlName=\"body\"></textarea>\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter tags\"\n                                (keyup.enter)=\"pushTab($event)\">\n                            <div class=\"tag-list\">\n                                <span *ngFor=\"let item of tagList; let i = index\"><a class=\"tag-pill tag-default\"><span\n                                            (click)=\"removetab(i)\"><i\n                                                class=\"ion-close-round\"></i></span>{{item}}</a></span>\n                            </div>\n                        </fieldset>\n                        <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\"  (click)=\"postArticle()\">\n                            Publish Article\n                        </button>\n                    </fieldset>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- [disabled]=\"!formArticle.valid\" -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-page\">\n    <div class=\"banner\" *ngIf=\"!authService.isLogin\">\n        <div class=\"container\">\n            <h1 class=\"logo-font\">conduit</h1>\n            <p>A place to share your knowledge.</p>\n        </div>\n    </div>\n    <div class=\"container page\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"feed-toggle\">\n                    <ul class=\"nav nav-pills outline-active\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" *ngIf=\"authService.isLogin\" [ngClass]=\"tab == 1 ? 'active' : ''\"\n                                (click)=\"clickYourFeed()\">Your Feed</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [ngClass]=\"tab == 2 ? 'active' : ''\" (click)=\"clickGlobalFeed()\">Global\n                                Feed</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" *ngIf=\"toggleTab\" [ngClass]=\"tab == 3 ? 'active' : ''\">#\n                                {{namePopularTag}}</a>\n                        </li>\n                    </ul>\n                </div>\n                <div *ngIf=\"listArticle\">\n                    <div class=\"article-preview\" *ngFor=\"let item of listArticle; let i = index\">\n                        <div class=\"article-meta\">\n                            <a href=\"profile.html\"><img [src]=\"item.author.image ? item.author.image : imgNull\" /></a>\n                            <div class=\"info\">\n                                <a [routerLink]=\"[item.author?.username]\" class=\"author\">{{item.author?.username}}</a>\n                                <span class=\"date\">{{item.updatedAt | date:'fullDate'}}</span>\n                            </div>\n                            <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"\n                                [ngClass]=\"listArticle[i].favorited ? 'bg-button': ''\"\n                                (click)=\"toggleFavorite(item.slug, listArticle[i].favorited, i)\">\n                                <i class=\"ion-heart\"></i> {{listArticle[i].favoritesCount}}\n                            </button>\n                        </div>\n                        <a [routerLink]=\"['article/',item.slug]\" class=\"preview-link\">\n                            <h1>{{item.title}}</h1>\n                            <p>{{item.description}}</p>\n                            <span>Read more...</span>\n                            <ul class=\"tag-list\">\n                                <li class=\"tag-default text-dark tag-pill tag-outline ng-binding ng-scope\"\n                                    *ngFor=\"let item of item.tagList\">{{item}}</li>\n                            </ul>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"article-preview\" *ngIf=\"listArticle?.length === 0\">No articles are here... yet.</div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"sidebar\">\n                    <p>Popular Tags</p>\n                    <div class=\"tag-list\">\n                        <a class=\"tag-pill tag-default\" *ngFor=\"let tag of listTabs\"\n                            (click)=\"clickPopularTags(tag)\">{{tag}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row justify-content-center\">\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination mt-3\">\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n                    <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n                </li>\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\n                    <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\n    <div class=\"user-info\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10 offset-md-1\">\n                    <img [src]=\"dataProfile?.image ? dataProfile.image : imgNull\" class=\"user-img\" />\n                    <h4>{{dataProfile?.username}}</h4>\n                    <p>\n                        {{dataProfile?.bio}}\n                    </p>\n                    <button class=\"btn btn-sm btn-outline-secondary action-btn\" *ngIf=\"!check\" (click)=\"clickFollowUser(dataProfile.username, dataProfile.following)\">\n                        <i class=\"ion-plus-round\" *ngIf=\"!dataProfile?.following\"></i>\n                        &nbsp;\n                        {{dataProfile?.following ? 'Unfollow' : 'Follow'}} {{dataProfile?.username}}\n                    </button>\n                    <button class=\"btn btn-sm btn-outline-secondary action-btn\" *ngIf=\"check\" routerLink=\"/setting\"\n                        routerLinkActive=\"router-link-active\">\n                        <i class=\"ion-gear-a\"></i>\n                        &nbsp;\n                        Edit Profile Settings\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-xs-12 col-md-10 offset-md-1\">\n                <div class=\"articles-toggle\">\n                    <ul class=\"nav nav-pills outline-active\">\n                        <li class=\"nav-item\" (click)=\"clickMyArticle()\">\n                            <a class=\"nav-link\" [ngClass]=\"tab == 1 ? 'active' : ''\">My Articles</a>\n                        </li>\n                        <li class=\"nav-item\" (click)=\"clickFavoritedArticle()\">\n                            <a class=\"nav-link\" [ngClass]=\"tab == 2 ? 'active' : ''\">Favorited Articles</a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div *ngIf=\"listArticle\">\n                    <div class=\"article-preview\" *ngFor=\"let item of listArticle; let i = index\">\n                        <div class=\"article-meta\">\n                            <a href=\"profile.html\"><img [src]=\"item.author.image ? item.author.image : imgNull\" /></a>\n                            <div class=\"info\">\n                                <a [routerLink]=\"['/',item.author?.username]\" routerLinkActive=\"router-link-active\" class=\"author\">{{item.author?.username}}</a>\n                                <span class=\"date\">{{item.updatedAt | date:'fullDate'}}</span>\n                            </div>\n                            <button class=\"btn btn-sm pull-xs-right\"\n                                [ngClass]=\"item.favorited ? 'btn-primary': 'btn-outline-primary'\"\n                                (click)=\"toggleFavorite(item.slug, listArticle[i].favorited, i)\">\n                                <i class=\"ion-heart\"></i> {{listArticle[i].favoritesCount}}\n                            </button>\n                        </div>\n                        <a [routerLink]=\"['/article/',item.slug]\"  class=\"preview-link\">\n                            <h1>{{item.title }}</h1>\n                            <p>{{item.description}}</p>\n                            <span>Read more...</span>\n                            <ul class=\"tag-list\">\n                                <li class=\"tag-default text-dark tag-pill tag-outline ng-binding ng-scope\"\n                                    *ngFor=\"let item of item.tagList\">{{item}}</li>\n                            </ul>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"article-preview\" *ngIf=\"listArticle?.length === 0\">No articles are here... yet.</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination mt-3 offset-md-1\">\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n                    <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n                </li>\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\n                    <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-xs-12\">\n                <h1 class=\"text-xs-center\">Sign up</h1>\n                <p class=\"text-xs-center\">\n                    <a [routerLink]=\"['login']\">Have an account?</a>\n                </p>\n                <ul class=\"error-messages\" *ngIf=\"errregister\">\n                    <li>{{errregister[0]}}</li>\n                </ul>\n                <form (ngSubmit)=\"singup()\" [formGroup]=\"formUser\">\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Your Name\"\n                            formControlName=\"username\">\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\"\n                            formControlName=\"email\">\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                            formControlName=\"password\">\n                    </fieldset>\n                    <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"formUser.invalid\">\n                        Sign up\n                    </button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n        <ul class=\"error-messages\" *ngIf=\"errSetting\">\n          <li *ngFor=\"let err of errSetting\">{{err}}</li>\n        </ul>\n        <form [formGroup]=\"formSetting\">\n          <fieldset>\n            <fieldset class=\"form-group\">\n              <img [src]=\"url? url : urlNull\" height=\"200\"> <br />\n              <input type='file' (change)=\"onSelectFile($event)\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Your Name\" formControlName=\"username\"\n                value=\"dataUser.username\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\" rows=\"8\" placeholder=\"Short bio about you\"\n                formControlName=\"bio\"></textarea>\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                formControlName=\"password\">\n            </fieldset>\n            <button class=\"btn btn-lg btn-primary pull-xs-right\" (click)=\"updateSetting()\">\n              Update Settings\n            </button>\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n\n            <div class=\"col-md-6 offset-md-3 col-xs-12\">\n                <h1 class=\"text-xs-center\">Sign in</h1>\n                <p class=\"text-xs-center\">\n                    <a [routerLink]=\"['register']\" routerLinkActive=\"router-link-active\" >Need an account?</a>\n                </p>\n                <ul class=\"error-messages\" *ngIf=\"errorResponse\">\n                    <li>{{ errorResponse }}</li>\n                </ul>\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\"\n                            formControlName=\"email\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"userForm.controls.email?.errors?.required && userForm.controls.email?.touched\">\n                        <li>Email is required</li>\n                    </ul>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"userForm.controls.email?.errors?.pattern && userForm.controls.email?.touched\">\n                        <li>Not type email</li>\n                    </ul>\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                            formControlName=\"password\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"userForm.controls.password?.errors?.required && userForm.controls.password?.touched\">\n                        <li>Password is required</li>\n                    </ul>\n                    <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"userForm.invalid\">\n                        Sign in\n                    </button>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-detail works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-detail/article-detail.component */ "./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _services_auth_guast_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guast.guard */ "./src/app/services/auth-guast.guard.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"] },
    {
        path: 'setting', canActivate: [_services_auth_guast_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuastGuard"]], children: [
            { path: '', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"] }
        ]
    },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: ':userName', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'article/:slug', component: _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_8__["ArticleDetailComponent"] },
    {
        path: 'new/editor', canActivate: [_services_auth_guast_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuastGuard"]], children: [
            { path: '', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"] }
        ]
    },
    {
        path: 'editor/:slug', canActivate: [_services_auth_guast_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuastGuard"]], children: [
            { path: '', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"] }
        ]
    },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.name = '';
    }
    logout() {
        this.authService.logOut();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article-detail/article-detail.component */ "./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"],
            _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"],
            _editor_editor_component__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailComponent"],
            _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_14__["ArticleDetailComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/article-detail/article-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtZGV0YWlsL2FydGljbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ArticleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function() { return ArticleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ArticleDetailComponent = class ArticleDetailComponent {
    constructor(articleService, route, router) {
        this.articleService = articleService;
        this.route = route;
        this.router = router;
        this.textBody = '';
        this.img = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        if (localStorage.getItem('token')) {
            this.img = localStorage.getItem('image');
            this.isLogin = true;
            this.nameUserIslogin = localStorage.getItem('name');
        }
        else {
            this.isLogin = false;
        }
        this.route.params.subscribe(param => {
            this.slug = param['slug'];
            this.articleService.getArticleDetail(param.slug).subscribe(article => {
                if (article['article'].author.username == localStorage.getItem('name')) {
                    this.check = true;
                }
                else {
                    this.check = false;
                }
                this.article = article['article'];
            });
        });
    }
    ngOnInit() {
        this.articleService.getCommentArticle(this.slug).subscribe(data => {
            this.listComment = data['comments'];
        });
    }
    deleteArticle() {
        if (this.check) {
            this.articleService.deleteArticle(this.slug).subscribe(data => {
            });
            this.router.navigate(['/', this.nameUserIslogin]);
        }
    }
    //FollowUser
    clickFollowUser(userName, following) {
        if (localStorage.getItem('token')) {
            if (!following) {
                this.articleService.postFollowUser(userName).subscribe(data => {
                    this.article.author = data['profile'];
                });
            }
            else {
                this.articleService.deleteFollowUser(userName).subscribe(data => {
                    this.article.author = data['profile'];
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
    //toggleFavorite
    toggleFavorite(slug, favorited) {
        if (localStorage.getItem('token')) {
            if (favorited == false) {
                this.articleService.postFavoriteArticle(slug).subscribe(data => {
                    this.article = data['article'];
                });
            }
            else if (favorited == true) {
                this.articleService.deleteFavoriteArticle(slug).subscribe(data => {
                    this.article = data['article'];
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
    //comment
    postNewComment() {
        if (localStorage.getItem('token')) {
            this.articleService.postCommentArticle(this.slug, { 'body': this.textBody }).subscribe(data => {
                this.listComment.unshift(data['comment']);
            });
        }
        else {
            this.isLogin = false;
        }
        this.textBody = "";
    }
    deleteComment(id, index) {
        if (this.isLogin) {
            this.articleService.deleteCommentArticle(this.slug, id).subscribe(data => {
                this.listComment.splice(index, 1);
            });
        }
    }
};
ArticleDetailComponent.ctorParameters = () => [
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ArticleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article-detail/article-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article-detail.component.css */ "./src/app/article-detail/article-detail.component.css")).default]
    })
], ArticleDetailComponent);



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditorComponent = class EditorComponent {
    constructor(articleService, registerService, route, router, fb) {
        this.articleService = articleService;
        this.registerService = registerService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.check = false;
        this.tagList = [];
        this.formArticle = fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.route.params.subscribe(param => {
            if (param['slug']) {
                this.check = true;
                this.slug = param['slug'];
                this.articleService.getArticleDetail(param['slug']).subscribe(data => {
                    this.formArticle = fb.group({
                        title: [data['article'].title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        description: [data['article'].description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        body: [data['article'].body, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                    this.tagList = data['article'].tagList;
                });
            }
        });
    }
    ngOnInit() {
    }
    pushTab(event) {
        event.stopPropagation();
        if (event.target['value'] !== '') {
            this.tagList.push(event.target['value']);
        }
        event.target['value'] = '';
    }
    postArticle() {
        // console.log(this.formArticle.value);
        this.newArticle = this.formArticle.value;
        if (this.tagList) {
            this.newArticle.tagList = this.tagList;
        }
        if (!this.check) {
            this.articleService.postNewArticle(this.newArticle).subscribe((data) => {
            }, err => {
                this.errNewArticle = this.registerService.getError(err);
            });
        }
        else {
            this.articleService.updateArticle(this.newArticle, this.slug).subscribe((data) => {
            }, err => {
                this.errNewArticle = this.registerService.getError(err);
            });
        }
        this.router.navigate(['/', localStorage.getItem('name')]);
    }
    removetab(index) {
        this.tagList.splice(index, 1);
    }
};
EditorComponent.ctorParameters = () => [
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")).default]
    })
], EditorComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-button {\r\n    background-color: #5CB85c;\r\n    color: white;\r\n}\r\n.tag-list {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCODVjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50YWctbGlzdCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_paper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/paper.service */ "./src/app/services/paper.service.ts");






let HomeComponent = class HomeComponent {
    constructor(articleService, authService, router, pagerService) {
        this.articleService = articleService;
        this.authService = authService;
        this.router = router;
        this.pagerService = pagerService;
        this.toggleTab = false;
        this.tab = 2;
        this.imgNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.namePopularTag = '';
        //pages
        this.pager = {};
    }
    ngOnInit() {
        this.articleService.getGlobalArticle(this.authService.isLogin, 0).subscribe(data => {
            this.listGlobalArticle = data['articles'];
            this.listArticle = data['articles'];
            this.total2 = data['articlesCount'];
            this.setPage(1);
        });
        this.articleService.getTabs().subscribe(data => {
            this.listTabs = data['tags'];
        });
    }
    clickYourFeed() {
        this.tab = 1;
        this.toggleTab = false;
        let name = localStorage.getItem('name');
        this.articleService.getHomeArticle(0).subscribe((data) => {
            this.listArticle = data['articles'];
            this.listYouFeed = data['articles'];
            this.total1 = data['articlesCount'];
            this.setPage(1);
        });
    }
    clickGlobalFeed() {
        this.tab = 2;
        this.toggleTab = false;
        this.articleService.getGlobalArticle(this.authService.isLogin, 0).subscribe(data => {
            this.listGlobalArticle = data['articles'];
            this.listArticle = data['articles'];
            this.total2 = data['articlesCount'];
            this.setPage(1);
        });
    }
    clickPopularTags(nameTab) {
        this.namePopularTag = nameTab;
        this.tab = 3;
        this.toggleTab = true;
        this.articleService.getTabArticle(nameTab, this.authService.isLogin, 0).subscribe((data) => {
            this.listArticle = data['articles'];
            this.listPopularTags = data['articles'];
            this.total3 = data['articlesCount'];
            this.setPage(1);
        });
    }
    toggleFavorite(slug, favorited, i) {
        if (this.authService.isLogin) {
            if (favorited == false) {
                this.articleService.postFavoriteArticle(slug).subscribe(data => {
                    this.listArticle[i] = data['article'];
                });
            }
            else if (favorited == true) {
                this.articleService.deleteFavoriteArticle(slug).subscribe(data => {
                    this.listArticle[i] = data['article'];
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
    // phan trang
    getDataPage(offset) {
        let offSetPage = offset * 10;
        switch (this.tab) {
            case 1:
                let name = localStorage.getItem('name');
                this.articleService.getHomeArticle(offSetPage).subscribe((data) => {
                    this.listArticle = data['articles'];
                });
                break;
            case 2:
                this.articleService.getGlobalArticle(this.authService.isLogin, offSetPage).subscribe(data => {
                    this.listArticle = data['articles'];
                });
                break;
            case 3:
                this.articleService.getTabArticle(this.namePopularTag, this.authService.isLogin, offSetPage).subscribe((data) => {
                    this.listArticle = data['articles'];
                });
                break;
        }
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        switch (this.tab) {
            case 1:
                this.pager = this.pagerService.getPager(this.total1, page, 10);
                this.getDataPage(page - 1);
                break;
            case 2:
                this.pager = this.pagerService.getPager(this.total2, page, 10);
                this.getDataPage(page - 1);
                break;
            case 3:
                this.pager = this.pagerService.getPager(this.total3, page, 10);
                this.getDataPage(page - 1);
                break;
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_paper_service__WEBPACK_IMPORTED_MODULE_5__["PaperService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-button {\r\n    background-color: #5CB85c;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCODVjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_paper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/paper.service */ "./src/app/services/paper.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");







let ProfileComponent = class ProfileComponent {
    constructor(route, articleService, pagerService, profileService, authService, router) {
        this.route = route;
        this.articleService = articleService;
        this.pagerService = pagerService;
        this.profileService = profileService;
        this.authService = authService;
        this.router = router;
        this.check = false;
        this.imgNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.tab = 1;
        this.page = 0;
        // phan trang
        this.pager = {};
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            if (param.userName == localStorage.getItem('name')) {
                this.check = true;
            }
            else {
                this.check = false;
            }
            this.name = param.userName;
            this.articleService.getYourArticle(this.name, this.check, 0, '5').subscribe(data => {
                this.listArticle = data['articles'];
                this.total1 = data['articlesCount'];
                this.setPage(1);
            });
            this.profileService.getProfile(this.name).subscribe(data => {
                this.dataProfile = data['profile'];
            });
        });
    }
    clickFavoritedArticle() {
        this.tab = 2;
        this.articleService.getYourArticlefavorite(this.name, this.check, 0).subscribe(data => {
            this.listArticle = data['articles'];
            this.total2 = data['articlesCount'];
            this.setPage(1);
        });
    }
    clickMyArticle() {
        this.tab = 1;
        this.articleService.getYourArticle(this.name, this.check, 0, '5').subscribe(data => {
            this.listArticle = data['articles'];
            this.total1 = data['articlesCount'];
            this.setPage(1);
        });
    }
    //Follow User
    clickFollowUser(userName, following) {
        if (localStorage.getItem('token')) {
            if (!following) {
                this.articleService.postFollowUser(userName).subscribe(data => {
                    this.dataProfile = data['profile'];
                });
            }
            else {
                this.articleService.deleteFollowUser(userName).subscribe(data => {
                    this.dataProfile = data['profile'];
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
    //phan trang
    getDataPage(offset) {
        let offSetPage = offset * 5;
        switch (this.tab) {
            case 1:
                this.articleService.getYourArticle(this.name, this.check, offSetPage, '5').subscribe(data => {
                    this.listArticle = data['articles'];
                    this.total1 = data['articlesCount'];
                });
                break;
            case 2:
                this.articleService.getYourArticlefavorite(this.name, this.check, offSetPage).subscribe(data => {
                    this.listArticle = data['articles'];
                    this.total2 = data['articlesCount'];
                });
                break;
        }
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.page = page;
        // get pager object from service
        switch (this.tab) {
            case 1:
                this.pager = this.pagerService.getPager(this.total1, page, 5);
                this.getDataPage(page - 1);
                break;
            case 2:
                this.pager = this.pagerService.getPager(this.total2, page, 5);
                this.getDataPage(page - 1);
                break;
        }
    }
    toggleFavorite(slug, favorited, i) {
        if (this.authService.isLogin) {
            if (favorited == false) {
                this.articleService.postFavoriteArticle(slug).subscribe(data => {
                    this.listArticle[i] = data['article'];
                });
            }
            else if (favorited == true) {
                this.articleService.deleteFavoriteArticle(slug).subscribe(data => {
                    this.listArticle[i] = data['article'];
                    this.setPage(this.page);
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
    { type: _services_paper_service__WEBPACK_IMPORTED_MODULE_5__["PaperService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(fb, registerService, authService) {
        this.fb = fb;
        this.registerService = registerService;
        this.authService = authService;
        this.formUser = fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    singup() {
        console.log(this.formUser.value);
        this.registerService.postUser(this.formUser.value).subscribe((data) => {
            this.authService.loginSuccess(data);
        }, err => {
            this.errregister = this.registerService.getError(err);
            console.log(this.errregister);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/article.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/article.service.ts ***!
  \*********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ArticleService = class ArticleService {
    constructor(http) {
        this.http = http;
    }
    setToken() {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Token ${localStorage.getItem("token")}`
        });
    }
    getGlobalArticle(isLogin, offset) {
        if (isLogin) {
            this.setToken();
            return this.http.get('https://conduit.productionready.io/api/articles', {
                params: {
                    limit: '10',
                    offset: offset,
                },
                headers: this.headers,
            });
        }
        return this.http.get('https://conduit.productionready.io/api/articles', {
            params: {
                limit: '10',
                offset: offset
            }
        });
    }
    getTabs() {
        return this.http.get('https://conduit.productionready.io/api/tags');
    }
    getYourArticle(name, isLogin, offset, limit = '10') {
        if (isLogin) {
            this.setToken();
            return this.http.get('https://conduit.productionready.io/api/articles', {
                params: {
                    limit: limit,
                    offset: offset,
                    author: name,
                },
                headers: this.headers
            });
        }
        return this.http.get('https://conduit.productionready.io/api/articles', {
            params: {
                limit: limit,
                offset: offset,
                author: name,
            }
        });
    }
    getHomeArticle(offset, limit = '10') {
        this.setToken();
        return this.http.get('https://conduit.productionready.io/api/articles/feed', {
            params: {
                limit: limit,
                offset: offset,
            },
            headers: this.headers
        });
    }
    getYourArticlefavorite(name, isLogin, offset) {
        if (isLogin) {
            this.setToken();
            return this.http.get('https://conduit.productionready.io/api/articles', {
                params: {
                    limit: '5',
                    offset: offset,
                    favorited: name
                },
                headers: this.headers
            });
        }
        return this.http.get('https://conduit.productionready.io/api/articles', {
            params: {
                limit: '5',
                offset: offset,
                favorited: name
            }
        });
    }
    getTabArticle(tab, isLogin, offset) {
        if (isLogin) {
            this.setToken();
            return this.http.get(`https://conduit.productionready.io/api/articles`, {
                params: {
                    limit: '10',
                    offset: offset,
                    tag: tab
                },
                headers: this.headers
            });
        }
        return this.http.get(`https://conduit.productionready.io/api/articles`, {
            params: {
                limit: '10',
                offset: '0',
                tag: tab
            }
        });
    }
    postFavoriteArticle(slug) {
        this.setToken();
        return this.http.post(`https://conduit.productionready.io/api/articles/${slug}/favorite`, { name: 'abc' }, {
            headers: this.headers
        });
    }
    deleteFavoriteArticle(slug) {
        this.setToken();
        return this.http.delete(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
            headers: this.headers
        });
    }
    // Follow user
    postFollowUser(userName) {
        this.setToken();
        return this.http.post(`https://conduit.productionready.io/api/profiles/${userName}/follow`, { name: 'abc' }, {
            headers: this.headers
        });
    }
    deleteFollowUser(userName) {
        this.setToken();
        return this.http.delete(`https://conduit.productionready.io/api/profiles/${userName}/follow`, {
            headers: this.headers
        });
    }
    // Article detail
    getArticleDetail(slug) {
        this.setToken();
        if (localStorage.getItem('token')) {
            return this.http.get(`https://conduit.productionready.io/api/articles/${slug}`, {
                headers: this.headers
            });
        }
        return this.http.get(`https://conduit.productionready.io/api/articles/${slug}`);
    }
    // Create Article
    postNewArticle(article) {
        this.setToken();
        return this.http.post('https://conduit.productionready.io/api/articles', { article: article }, {
            headers: this.headers
        });
    }
    updateArticle(article, slug) {
        this.setToken();
        return this.http.put(`https://conduit.productionready.io/api/articles/${slug}`, { article: article }, {
            headers: this.headers
        });
    }
    deleteArticle(slug) {
        this.setToken();
        return this.http.delete(`https://conduit.productionready.io/api/articles/${slug}`, {
            headers: this.headers
        });
    }
    // comment
    getCommentArticle(slug) {
        return this.http.get(`https://conduit.productionready.io/api/articles/${slug}/comments`);
    }
    postCommentArticle(slug, comment) {
        this.setToken();
        return this.http.post(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
            comment: comment
        }, {
            headers: this.headers
        });
    }
    deleteCommentArticle(slug, id) {
        this.setToken();
        if (localStorage.getItem('token')) {
            return this.http.delete(`https://conduit.productionready.io/api/articles/${slug}/comments/${id}`, {
                headers: this.headers
            });
        }
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArticleService);



/***/ }),

/***/ "./src/app/services/auth-guast.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-guast.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuastGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuastGuard", function() { return AuthGuastGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



let AuthGuastGuard = class AuthGuastGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.checkLoginNavigate();
    }
};
AuthGuastGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuastGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuastGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isLogin = false;
        this.name = '';
        if (localStorage.getItem('token')) {
            this.isLogin = true;
            this.name = localStorage.getItem('name');
        }
    }
    login(user) {
        return this.http.post('https://conduit.productionready.io/api/users/login', { user: user });
    }
    loginSuccess(userData) {
        this.isLogin = true;
        this.name = userData['user'].username;
        localStorage.setItem('token', userData['user'].token);
        localStorage.setItem('name', userData['user'].username);
        localStorage.setItem('image', userData['user'].image);
        localStorage.setItem('isLogin', JSON.stringify(this.isLogin));
        this.router.navigate(['']);
    }
    logOut() {
        this.isLogin = false;
        this.name = '';
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('isLogin');
        this.router.navigate(['login']);
    }
    checkLoginNavigate() {
        if (!this.isLogin) {
            this.router.navigateByUrl("/login");
        }
        return this.isLogin;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/paper.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/paper.service.ts ***!
  \*******************************************/
/*! exports provided: PaperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperService", function() { return PaperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaperService = class PaperService {
    range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;
        if (totalPages <= 9) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 5) {
                startPage = 1;
                endPage = 9;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 8;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 4;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = this.range(startPage, endPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PaperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaperService);



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfile(name) {
        if (localStorage.getItem('name')) {
            return this.http.get(`https://conduit.productionready.io/api/profiles/${name}`, {
                headers: {
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            });
        }
        return this.http.get(`https://conduit.productionready.io/api/profiles/${name}`);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    postUser(user) {
        return this.http.post('https://conduit.productionready.io/api/users', { user: user });
    }
    getError(err) {
        let error = err.error.errors;
        let key = Object.keys(error);
        let mes = [];
        key.forEach(ele => {
            mes.push(ele + ' ' + error[ele]);
        });
        return mes;
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "./src/app/services/setting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/setting.service.ts ***!
  \*********************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SettingService = class SettingService {
    constructor(http) {
        this.http = http;
    }
    getUser() {
        return this.http.get('https://conduit.productionready.io/api/user', {
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`
            }
        });
    }
    updateSetting(user) {
        return this.http.put('https://conduit.productionready.io/api/user', {
            user: user,
        }, {
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`
            }
        });
    }
};
SettingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingService);



/***/ }),

/***/ "./src/app/setting/setting.component.css":
/*!***********************************************!*\
  !*** ./src/app/setting/setting.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");





let SettingComponent = class SettingComponent {
    constructor(settingService, registerService, fb) {
        this.settingService = settingService;
        this.registerService = registerService;
        this.fb = fb;
        this.urlNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.errSetting = [];
        this.formSetting = this.fb.group({
            username: '',
            email: '',
            password: '',
            bio: ''
        });
    }
    ngOnInit() {
        this.settingService.getUser().subscribe(data => {
            this.dataUser = data['user'];
            this.urlNull = this.dataUser.image ? this.dataUser.image : '';
            console.log(data);
            this.formSetting = this.fb.group({
                username: this.dataUser.username,
                email: this.dataUser.email,
                password: '',
                bio: this.dataUser.bio
            });
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target['result'];
            };
        }
    }
    updateSetting() {
        this.dataSetting = this.formSetting.value;
        if (!this.formSetting.controls.password.value) {
            delete this.dataSetting.password;
        }
        this.dataSetting['image'] = this.url ? this.url : '';
        console.log(this.dataSetting);
        this.settingService.updateSetting(this.dataSetting).subscribe(data => {
            console.log(data);
        }, err => {
            this.errSetting = this.registerService.getError(err);
        });
    }
};
SettingComponent.ctorParameters = () => [
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.css */ "./src/app/setting/setting.component.css")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SignComponent = class SignComponent {
    constructor(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.userForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    }
    ngOnInit() {
    }
    login() {
        console.log(this.userForm.value);
        this.authService.login(this.userForm.value).subscribe((data) => {
            console.log(data);
            this.authService.loginSuccess(data);
        }, err => {
            this.errorResponse = "email or password is invalid";
        });
    }
};
SignComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")).default]
    })
], SignComponent);



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDetailComponent = class UserDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-detail/user-detail.component.css")).default]
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angularjs\Mock Project\projectApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map