webpackJsonp([14],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvatarPage = /** @class */ (function () {
    function AvatarPage(navCtrl, navParams, http, platform, nativeAudio, httpClient, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.httpClient = httpClient;
        this.storage = storage;
        this.randQuestion = [];
        this.key = "username";
        this.disableButton = false;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundId1', 'src/assets/audio/avatar.wav').then(function (success) {
                console.log("success");
            }, function (error) {
                console.log(error);
            });
        });
        this.storage.get('cmuitaccount_name').then(function (val) {
            _this.cmuitaccount_name = val;
        });
    }
    AvatarPage.prototype.setAvatar = function (avatarID) {
        var _this = this;
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.disableButton = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            "content": {
                "cmuitaccount_name": this.cmuitaccount_name,
                "avatar": avatarID
            }
        };
        this.http.post("https://us-central1-frenchgame-228900.cloudfunctions.net/updateAvatar", postParams, requestOptions).map(function (res) { return res.json(); }).
            subscribe(function (response) {
            console.log(response);
        });
        this.storage.set('avatar', avatarID);
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
        }, 900);
    };
    AvatarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvatarPage');
    };
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatar',template:/*ion-inline-start:"D:\FrenchGame\src\pages\avatar\avatar.html"*/'<!--\n\n  Generated template for the AvatarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding class="bg">\n\n    <ion-grid>\n\n        <ion-row class="center style-head">\n\n            <h1 ion-text color="light">Choose Avatar</h1>\n\n        </ion-row>\n\n        <ion-grid class="bg-trans">\n\n            <ion-row>\n\n                <ion-col col-3 class="center">\n\n                    <button ion-button class="button1 btn-bg1" (click)="setAvatar(1)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic" width="64" height="64" src="assets/imgs/01.png"></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-3 class="center">\n\n                    <button ion-button class="button1 btn-bg2" (click)="setAvatar(2)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class=" circle-pic " width="64 " height="64 " src="assets/imgs/02.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-3 class="center ">\n\n                    <button ion-button class="button1 btn-bg3" (click)="setAvatar(3)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/03.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-3 class="center ">\n\n                    <button ion-button class="button1 btn-bg4" (click)="setAvatar(4)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/04.png "></ion-img> -->\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="three ">\n\n                <ion-col col-4 class="center ">\n\n                    <button ion-button class="button1 btn-bg5" (click)="setAvatar(5)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/05.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-4 class="center ">\n\n                    <button ion-button class="button1 btn-bg6" (click)="setAvatar(6)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/06.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-4 class="center ">\n\n                    <button ion-button class="button1 btn-bg7" (click)="setAvatar(7)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/07.png "></ion-img> -->\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-3 class="center ">\n\n                    <button ion-button class="button1 btn-bg8" (click)="setAvatar(8)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/08.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-3 class="center ">\n\n                    <button ion-button class="button1 btn-bg9" (click)="setAvatar(9)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/09.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-3 class="center ">\n\n                    <button ion-button class="button1 btn-bg10" (click)="setAvatar(10)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/10.png "></ion-img> -->\n\n                </ion-col>\n\n                <ion-col col-3 class="center ">\n\n                    <button ion-button class="button1 btn-bg11" (click)="setAvatar(11)" [disabled]="disableButton"></button>\n\n                    <!-- <ion-img class="circle-pic " width="64 " height="64 " src="assets/imgs/11.png "></ion-img> -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n\n\n\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\avatar\avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('name').then(function (val) {
            _this.name = val;
        });
        this.storage.get('cmuitaccount').then(function (val) {
            _this.mail = val;
        });
        this.storage.get('avatar').then(function (val) {
            _this.id_avatar = val;
            _this.avatar = "assets/imgs/" + _this.id_avatar + ".png";
        });
    }
    ProfilePage.prototype.test = function () {
        console.log("name = ", this.name);
        console.log("mail = ", this.mail);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\FrenchGame\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar color="white">\n\n        <ion-row no-padding>\n\n            <ion-col no-padding col-10 col-11-md col-11-lg>\n\n            <h2 text-center class="text-nav">Profile</h2>\n\n            </ion-col>\n\n            <ion-col no-padding col-2 col-1-md col-1-lg>\n\n\n\n            </ion-col>\n\n         </ion-row>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-grid col-12 class="row-bg1">\n\n    <ion-row padding col-12>\n\n      <ion-img class="circle-pic" width="180" height="180" src={{avatar}}></ion-img>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid col-12 class="row-bg2">\n\n    <ion-grid padding col-12 class="lable">\n\n      <ion-grid padding>\n\n        <h3 class="h3-text">Login With</h3>\n\n      </ion-grid>\n\n\n\n      <ion-grid> \n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-icon large name="mail"></ion-icon> \n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <h6>{{mail}}</h6>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-1>\n\n                <ion-icon large name="person"></ion-icon> \n\n            </ion-col>\n\n            <ion-col col-11>\n\n              <h6>{{name}}</h6>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n    </ion-grid>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RulesPage = /** @class */ (function () {
    function RulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    RulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rules',template:/*ion-inline-start:"D:\FrenchGame\src\pages\rules\rules.html"*/'<!--\n\n  Generated template for the RulesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar color="white">\n\n        <ion-row no-padding>\n\n            <ion-col no-padding col-10 col-11-md col-11-lg>\n\n            <h2 text-center class="text-nav">Rules</h2>\n\n            </ion-col>\n\n            <ion-col no-padding col-2 col-1-md col-1-lg>\n\n\n\n            </ion-col>\n\n         </ion-row>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="rule-content">\n\n  <ion-grid no-padding class="gird-topic">\n\n    <ion-row class="row-topic">\n\n      <ion-col no-padding class="col-topic" col-1>\n\n        <ion-icon large class="icon" name="game-controller-b"></ion-icon>\n\n      </ion-col>\n\n      <ion-col no-padding class="col-topic" col-10>\n\n        <h3 class="text-topic">กฎกติกาของเกม</h3>\n\n      </ion-col>\n\n      <ion-col no-padding col-1>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="bg-main">\n\n    <ion-row class="row-main">\n\n      <h6 class="text-main">- ตอบถูกจะได้ข้อละ 1 คะแนน หากตอบผิดจะได้ 0 คะแนน</h6>\n\n    </ion-row>\n\n    <ion-row class="row-main">\n\n      <h6 class="text-main">- เมื่อใช้ตัวช่วย ข้อนั้นจะถูกหักคะแนนครั้งละ 0.25 คะแนน</h6>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n      <ion-row class="row-topic">\n\n        <ion-col no-padding class="col-topic" col-1> \n\n          <ion-icon large class="icon" name="cut"></ion-icon>\n\n        </ion-col>\n\n        <ion-col no-padding class="col-topic" col-10>\n\n          <h3 class="text-topic">ตัวช่วย</h3>\n\n        </ion-col>\n\n        <ion-col no-padding col-1>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n\n\n    <ion-grid>\n\n      <ion-row class="row-main">\n\n        <h6 class="text-main">- เมื่อกดใช้ ตัวช่วยจะทำการตัดข้อที่ผิดออกไปครั้งละ 1 ตัวเลือก โดยในแต่ละข้อสามารถใช้ได้สูงสุด 2 ครั้ง</h6>\n\n      </ion-row>\n\n      <ion-row class="row-main">\n\n        <h6 class="text-main">- เมื่อใช้ตัวช่วย 1 ครั้ง จะถูกหัก 0.25 คะแนน</h6>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n        <ion-row class="row-topic">\n\n          <ion-col no-padding class="col-topic" col-1> \n\n            <ion-icon large class="icon" name="analytics"></ion-icon>\n\n          </ion-col>\n\n          <ion-col no-padding class="col-topic" col-10>\n\n            <h3 class="text-topic">การจัดลำดับคะแนน</h3>\n\n          </ion-col>\n\n          <ion-col no-padding col-1>\n\n  \n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n        <ion-row class="row-main">\n\n          <h6 class="text-main">- จะจัดลำดับโดยการนำคะแนนที่สูงที่สุดในหมวดการเล่นนั้น ๆ มาใช้ \n\n            หากเล่นแล้วได้น้อยกว่าคะแนนสูงสุดที่เคยทำ ลำดับจะไม่ถูกอัพเดต</h6>\n\n        </ion-row>\n\n        <ion-row class="row-main">\n\n          <h6 class="text-main">- ตารางจัดอันดับคะแนนจะแสดงแค่ตัว Avatar ของผู้เล่นแต่ละคนเท่านั้น</h6>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\rules\rules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RulesPage);
    return RulesPage;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayTopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mode_mode__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PlayTopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayTopicPage = /** @class */ (function () {
    function PlayTopicPage(navCtrl, navParams, platform, nativeAudio, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.storage = storage;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundId1', 'src/assets/audio/ding.mp3').then(function (success) {
                console.log("success");
            }, function (error) {
                console.log(error);
            });
        });
        this.storage.get('topic').then(function (val) {
            _this.topics = Object.values(val);
        });
        // this.topics.forEach(element => {
        //   for(let i = 0; i < element['id'].length; i++){
        //     console.log(element['id'][i])
        //     for(let j = 0; j < element['level'].length; j++){
        //       console.log(element['level'][j])
        //     }
        //   }
        //   });
    }
    PlayTopicPage.prototype.goToModePage = function (topic) {
        console.log(topic);
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__mode_mode__["a" /* ModePage */], {
            topic: topic
        });
    };
    PlayTopicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-play-topic',template:/*ion-inline-start:"D:\FrenchGame\src\pages\play-topic\play-topic.html"*/'<!--\n\n  Generated template for the PlayTopicPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar color="white">\n\n        <ion-row no-padding>\n\n            <ion-col no-padding col-10>\n\n            <h2 text-center class="text-nav">Select Topic</h2>\n\n            </ion-col>\n\n            <ion-col no-padding col-2>\n\n\n\n            </ion-col>\n\n         </ion-row>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg">\n\n    <ion-grid>\n\n        <ion-row padding class="bg-w">\n\n            <ion-col col-12 class="col-topic" *ngFor="let topic of topics">\n\n                <button ion-button item-start default class="btnTopic" color="info" (click)=\'goToModePage(topic.id)\'>{{topic.id}}</button>\n\n            </ion-col>\n\n            <!-- *ngFor="let topic of topics" -->\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\play-topic\play-topic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PlayTopicPage);
    return PlayTopicPage;
}());

//# sourceMappingURL=play-topic.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_play__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModePage = /** @class */ (function () {
    function ModePage(navCtrl, navParams, platform, nativeAudio, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.http = http;
        this.storage = storage;
        this.disableButton = [];
        this.disableButton = [false, false, false];
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundId1', 'src/assets/audio/ding.mp3').then(function (success) {
                console.log("success");
            }, function (error) {
                console.log(error);
            });
        });
        this.topic = navParams.get('topic');
        var _loop_1 = function (i) {
            this_1.key = this_1.topic + "_" + (i + 1);
            this_1.storage.get(this_1.key).then(function (val) {
                _this.check_Q = Object.keys(val);
                if (_this.check_Q[0] == null) {
                    _this.disableButton[i] = true;
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    }
    ModePage.prototype.goToPlayPage = function (mode) {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__play_play__["a" /* PlayPage */], {
            topic: this.topic,
            mode: mode
        });
    };
    ModePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mode',template:/*ion-inline-start:"D:\FrenchGame\src\pages\mode\mode.html"*/'<!--\n\n  Generated template for the ModePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar color="white">\n\n        <ion-row no-padding>\n\n            <ion-col no-padding col-10>\n\n            <h2 text-center class="text-nav">Select Mode</h2>\n\n            </ion-col>\n\n            <ion-col no-padding ccol-2>\n\n\n\n            </ion-col>\n\n         </ion-row>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="bg">\n\n    <ion-row class="pad-row">\n\n        <ion-col class="pad-col" col-12 >\n\n            <button ion-button block round large color="info" id="1" (click)=\'goToPlayPage(1)\' [disabled]="disableButton[0]"> EASY </button>\n\n        </ion-col>\n\n        <ion-col class="pad-col" col-12 >\n\n            <button ion-button block round large color="info" id="2" (click)=\'goToPlayPage(2)\' [disabled]="disableButton[1]"> NORMAL </button>\n\n        </ion-col>\n\n        <ion-col class="pad-col" col-12 >\n\n            <button ion-button block round large color="info" id="3" (click)=\'goToPlayPage(3)\' [disabled]="disableButton[2]"> HARD </button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\mode\mode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ModePage);
    return ModePage;
}());

//# sourceMappingURL=mode.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RankingPage = /** @class */ (function () {
    function RankingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.persons = navParams.get('person');
        this.score = navParams.get('score');
        this.rank = navParams.get('rank');
        this.cmuacc = navParams.get('cmuitaccount_name');
        this.size = navParams.get('size_choice');
        this.avatar = navParams.get('avatar');
    }
    RankingPage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
    };
    RankingPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], RankingPage.prototype, "navBar", void 0);
    RankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ranking',template:/*ion-inline-start:"D:\FrenchGame\src\pages\ranking\ranking.html"*/'<!--\n\n  Generated template for the RankingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar color="white">\n\n      <ion-row no-padding>\n\n          <ion-col no-padding col-10>\n\n          <h2 text-center class="text-nav">Ranking</h2>\n\n          </ion-col>\n\n          <ion-col no-padding ccol-2>\n\n\n\n          </ion-col>\n\n       </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    \n\n      <ion-grid no-padding col-12 class="grid-bg1">\n\n\n\n        <ion-row no-padding col-12 class="row-top"  style="box-shadow: 2px 3px 10px #888888;">\n\n            <ion-col >\n\n              <ion-grid class="avatar custom-Avatar-grid">\n\n                <ion-grid no-padding class="sub-grid1"> \n\n                  <ion-img class="circle-pic"  src={{avatar}}></ion-img>  \n\n                </ion-grid>\n\n                <ion-grid class="sub-grid2">\n\n                    <h6 style="text-align:center">{{cmuacc}}</h6>\n\n                </ion-grid>\n\n              </ion-grid>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-grid >\n\n                <h5 style="color: #ffffff" class="score">Score</h5>\n\n              </ion-grid>\n\n              <ion-grid>\n\n                <h2 style="color: #ffffff" class="score">{{score}}/{{size}}</h2>\n\n              </ion-grid>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-grid>\n\n                <h5 style="color: #ffffff">Ranking</h5>\n\n              </ion-grid>\n\n              <ion-grid>\n\n                <h2 style="color: #ffffff">{{rank}}</h2>\n\n              </ion-grid>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n\n\n      <ion-grid  no-padding col-12 class="grid-bg2">\n\n\n\n        <ion-row padding col-12>\n\n          \n\n          <ion-grid>\n\n            <ion-row class="table-head">\n\n               <ion-col col-4>\n\n                <h6 class="text-table">Rank</h6>\n\n                </ion-col>\n\n               <ion-col col-5>\n\n                <h6 class="text-table">Avatar</h6>\n\n              </ion-col>\n\n               <ion-col col-3>\n\n                <h6 class="text-table">Score</h6>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row class="table" *ngFor="let person of persons">\n\n                <ion-col col-4>\n\n                  <ion-col *ngIf="person.rank == 1">\n\n                      <img src="https://img.icons8.com/color/48/000000/medal2.png">\n\n                  </ion-col>\n\n                  <ion-col *ngIf="person.rank == 2">\n\n                      <img src="https://img.icons8.com/color/48/000000/medal-second-place.png">\n\n                  </ion-col>\n\n                  <ion-col *ngIf="person.rank == 3">\n\n                      <img src="https://img.icons8.com/color/48/000000/medal2-third-place.png">\n\n                  </ion-col>\n\n                  <ion-col *ngIf="person.rank > 3">\n\n                      <h6 class="h6-main" style ="font-weight: bold;">{{person.rank}}</h6>\n\n                  </ion-col>\n\n                  <!-- <ion-row no-padding>\n\n                    <ion-col col-2 no-padding *ngIf="person.rank == 1">\n\n                      <img class="img-1" src="https://img.icons8.com/color/48/000000/fairytale.png">\n\n                    </ion-col>\n\n                    <ion-col class="col-rank" no-padding >\n\n                      <h6 class="h6-main" style ="font-weight: bold;">{{person.rank}}</h6>\n\n                    </ion-col>\n\n                  </ion-row> -->\n\n                </ion-col>\n\n\n\n                <ion-col col-5>\n\n                    <ion-img class="pic-table" src={{person.avatar}}></ion-img>  \n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <h6 style ="font-weight: bold;">{{person.score}}</h6>\n\n                </ion-col>\n\n\n\n              </ion-row>\n\n            </ion-grid>\n\n   \n\n           </ion-row>\n\n         </ion-grid>\n\n        \n\n   </ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\ranking\ranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RankingPage);
    return RankingPage;
}());

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyTopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demonstratifs_demonstratifs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interrogatif_interrogatif__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__possessive_possessive__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the StudyTopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyTopicPage = /** @class */ (function () {
    function StudyTopicPage(navCtrl, navParams, platform, nativeAudio, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.storage = storage;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundId1', 'src/assets/audio/ding.mp3').then(function (success) {
                console.log("success");
            }, function (error) {
                console.log(error);
            });
        });
        this.storage.get('topic').then(function (val) {
            _this.topics = Object.values(val);
        });
    }
    StudyTopicPage.prototype.goToPage = function (topic) {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        if (topic == 'demonstratifs') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__demonstratifs_demonstratifs__["a" /* DemonstratifsPage */]);
        }
        else if (topic == 'interrogatifs') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__interrogatif_interrogatif__["a" /* InterrogatifPage */]);
        }
        else if (topic == 'possessive') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__possessive_possessive__["a" /* PossessivePage */]);
        }
        console.log(topic);
    };
    StudyTopicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-study-topic',template:/*ion-inline-start:"D:\FrenchGame\src\pages\study-topic\study-topic.html"*/'<!--\n\n  Generated template for the StudyTopicPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar color="white">\n\n        <ion-row no-padding>\n\n            <ion-col no-padding col-10>\n\n            <h2 text-center class="text-nav">Select Topic</h2>\n\n            </ion-col>\n\n            <ion-col no-padding col-2>\n\n\n\n            </ion-col>\n\n         </ion-row>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg">\n\n    <ion-grid>\n\n        <ion-row padding class="bg-w">\n\n            <ion-col col-12 class="col-topic" *ngFor="let topic of topics">\n\n                <button ion-button item-start default class="btnTopic" color="info" (click)=\'goToPage(topic.id)\' >{{topic.id}}</button>\n\n            </ion-col>\n\n            <!-- *ngFor="let topic of topics" -->\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\study-topic\study-topic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], StudyTopicPage);
    return StudyTopicPage;
}());

//# sourceMappingURL=study-topic.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemonstratifsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DemonstratifsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DemonstratifsPage = /** @class */ (function () {
    function DemonstratifsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DemonstratifsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemonstratifsPage');
    };
    DemonstratifsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demonstratifs',template:/*ion-inline-start:"D:\FrenchGame\src\pages\demonstratifs\demonstratifs.html"*/'<!--\n\n  Generated template for the DemonstratifsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar color="white">\n\n      <ion-row no-padding>\n\n          <ion-col no-padding col-10>\n\n          <h2 text-center class="text-nav">Demonstratifs</h2>\n\n          </ion-col>\n\n          <ion-col no-padding col-2>\n\n\n\n          </ion-col>\n\n       </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg">\n\n  <ion-grid  no-padding col-12 class="grid-bg2">\n\n\n\n    <ion-row no-padding col-12 class="bg-table">\n\n      \n\n      <ion-grid no-padding>\n\n          <ion-row class="table">\n\n            <ion-col col-5>\n\n              <h5 class="detail-top">celui</h5><br>\n\n              <h5 class="detail">แทนคำนามเพศชายเอกพจน์</h5>\n\n            </ion-col>\n\n            <ion-col col-7 class="col-table">\n\n              <h6 class="detail-top">• de + คำนาม/ชื่อคน/pronom tonique</h6>\n\n              <h6 class="detail">• หรือ de + adverbe บอกสถานที่ (d\'ici, de là-bas, etc.)</h6>\n\n              <h6 class="detail-last">• หรือ d\'entre + pronom tonique (d\'entre nous, d\'entre eux)</h6>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="table">\n\n            <ion-col col-5>\n\n              <h5 class="detail-top">celle</h5><br>\n\n              <h5 class="detail-last">แทนคำนามเพศหญิงเอกพจน์</h5>\n\n            </ion-col>\n\n            <ion-col col-7 class="col-table">\n\n              <h6 class="detail-top">• qui + verbe + (objet)</h6>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="table">\n\n            <ion-col col-5>\n\n              <h5 class="detail-top">ceux</h5><br>\n\n              <h5 class="detail">แทนคำนามเพศชายพหูพจน์</h5>\n\n            </ion-col>\n\n            <ion-col col-7 class="col-table">\n\n              <h6 class="detail-top">• que + sujet + verbe (คำกริยาที่ต้องการกรรมตรง)</h6>\n\n              <h6 class="detail-last">• หรือ que + verbe + sujet ในกรณีที่ประธานยาวกว่าคำกริยาสามารถนำประธานมาไว้หลังคำกริยาได้</h6>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="table">\n\n            <ion-col col-5>\n\n              <h5 class="detail-top">celles</h5><br>\n\n              <h5 class="detail-last">แทนคำนามเพศหญิงพหูพจน์</h5>\n\n            </ion-col>\n\n            <ion-col col-7 class="col-table">\n\n              <h6 class="detail-top">• dont + sujet+ verbe (คำกริยาที่มีโครงสร้างที่ต้องตามด้วยบุพบท de) </h6>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="table">\n\n            <ion-col col-5>\n\n              <h5 class="detail-top">ce</h5><br>\n\n              <h5 class="detail-last">แทนสิ่งที่ไม่มีชีวิต เช่น การกระทำ</h5>\n\n            </ion-col>\n\n            <ion-col col-7 class="col-table">\n\n              <h6 class="detail-top">• où + sujet + verbe + (objet) </h6>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n       </ion-row>\n\n     </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\demonstratifs\demonstratifs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DemonstratifsPage);
    return DemonstratifsPage;
}());

//# sourceMappingURL=demonstratifs.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterrogatifPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InterrogatifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterrogatifPage = /** @class */ (function () {
    function InterrogatifPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InterrogatifPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterrogatifPage');
    };
    InterrogatifPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interrogatif',template:/*ion-inline-start:"D:\FrenchGame\src\pages\interrogatif\interrogatif.html"*/'<!--\n\n  Generated template for the InterrogatifPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar color="white">\n\n      <ion-row no-padding>\n\n          <ion-col no-padding col-10>\n\n          <h2 text-center class="text-nav">Interrogatif</h2>\n\n          </ion-col>\n\n          <ion-col no-padding col-2>\n\n\n\n          </ion-col>\n\n       </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid  no-padding col-12 class="grid-bg2">\n\n    <ion-row no-padding col-12 class="bg-table">\n\n      \n\n      <ion-grid no-padding>\n\n          <ion-row class="table">\n\n            <ion-col col-4 class="col-head1">\n\n              <h6 class="detail-top">Masculin-singulier</h6>\n\n            </ion-col>\n\n            <ion-col col-3 class="col-table">\n\n              <h6 class="detail-top">lequel</h6>\n\n              </ion-col>\n\n            <ion-col col-5 class="col-table1">\n\n              <h6 class="detail-top">lequel แทนคำนามเพศชายเอกพจน์ในประโยคคำถาม</h6>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="table">\n\n              <ion-col col-4 class="col-head2">\n\n                <h6 class="detail-top">Féminin-singulier</h6>\n\n              </ion-col>\n\n              <ion-col col-3 class="col-table">\n\n                <h6 class="detail-top">laquelle</h6>\n\n                </ion-col>\n\n              <ion-col col-5 class="col-table1">\n\n                <h6 class="detail-top">laquelle แทนคำนามเพศหญิงเอกพจน์ในประโยคคำถาม</h6>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row class="table">\n\n                <ion-col col-4 class="col-head3">\n\n                  <h6 class="detail-top">Masculin-pluriel</h6>\n\n                </ion-col>\n\n                <ion-col col-3 class="col-table">\n\n                  <h6 class="detail-top">lesquels</h6>\n\n                  </ion-col>\n\n                <ion-col col-5 class="col-table1">\n\n                  <h6 class="detail-top">lesquels แทนคำนามเพศชายพหูพจน์ในประโยคคำนาม</h6>\n\n                </ion-col>\n\n              </ion-row> \n\n              <ion-row class="table">\n\n                  <ion-col col-4 class="col-head4">\n\n                    <h6 class="detail-top">Masculin-pluriel</h6>\n\n                  </ion-col>\n\n                  <ion-col col-3 class="col-table">\n\n                    <h6 class="detail-top">lesquelles</h6>\n\n                    </ion-col>\n\n                  <ion-col col-5 class="col-table1">\n\n                    <h6 class="detail-top">lesquelles แทนคำเพศหญิงพหูพจน์ในประโยคคำถาม</h6>\n\n                  </ion-col>\n\n              </ion-row> \n\n      </ion-grid>\n\n\n\n       </ion-row>\n\n     </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\interrogatif\interrogatif.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InterrogatifPage);
    return InterrogatifPage;
}());

//# sourceMappingURL=interrogatif.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PossessivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PossessivePage = /** @class */ (function () {
    function PossessivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PossessivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PossessivePage');
    };
    PossessivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-possessive',template:/*ion-inline-start:"D:\FrenchGame\src\pages\possessive\possessive.html"*/'<!--\n\n  Generated template for the PossessivePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar color="white">\n\n      <ion-row no-padding>\n\n          <ion-col no-padding col-10>\n\n          <h2 text-center class="text-nav">Possessive</h2>\n\n          </ion-col>\n\n          <ion-col no-padding col-2>\n\n\n\n          </ion-col>\n\n       </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding class="top">\n\n  <ion-grid  no-padding col-12 class="grid-bg2">\n\n    <ion-row no-padding col-12 class="bg-table">\n\n      \n\n      <ion-grid no-padding>\n\n\n\n          <ion-row class="table-head">\n\n            <ion-col col-2 class="col0-main">\n\n              <p class="detail-top">Sujet</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">MASCULIN Singulier</p>\n\n              <!-- <p class="detail">Singulier</p> -->\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">MASCULIN Pluriel</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">FEMININ Singulier</p>\n\n              </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">FEMININ Pluriel</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="table-main">\n\n            <ion-col col-2 class="col0-main">\n\n              <p class="detail-top">Je</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">le mien</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">les miens</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">la mienne</p>\n\n              </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top" style="font-size: 1.15rem;">les miennes</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="table-main">\n\n            <ion-col col-2 class="col0-main">\n\n              <p class="detail-top">Tu</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">le tien</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">les tiens</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">la tienne</p>\n\n              </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top" style="font-size: 1.15rem;">les tiennes</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="table-main">\n\n            <ion-col col-2 class="col0-main">\n\n              <p class="detail-top">Il/Elle</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">le sien</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">le sien</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">la sienne</p>\n\n              </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top" style="font-size: 1.15rem;">les siennes</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="table-main">\n\n            <ion-col col-2 class="col0-main">\n\n              <p class="detail-top">Nous</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">le nôtre</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">les nôtres</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">la nôtre</p>\n\n              </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">les nôtres</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="table-main">\n\n            <ion-col col-2 class="col0-main">\n\n              <p class="detail-top">Vous</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">le vôtre</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">les vôtres</p>\n\n            </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">la vôtre</p>\n\n              </ion-col>\n\n            <ion-col col-2.5 class="col1-main">\n\n              <p class="detail-top">les vôtres</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="table-main">\n\n              <ion-col col-2 class="col0-main">\n\n                <p class="detail-top">Ils/Elles</p>\n\n              </ion-col>\n\n              <ion-col col-2.5 class="col1-main">\n\n                <p class="detail-top">le leur</p>\n\n              </ion-col>\n\n              <ion-col col-2.5 class="col1-main">\n\n                <p class="detail-top">les leurs</p>\n\n              </ion-col>\n\n              <ion-col col-2.5 class="col1-main">\n\n                <p class="detail-top">la leur</p>\n\n                </ion-col>\n\n              <ion-col col-2.5 class="col1-main">\n\n                <p class="detail-top">les leurs</p>\n\n            </ion-col>\n\n          </ion-row>\n\n          \n\n      </ion-grid>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\possessive\possessive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PossessivePage);
    return PossessivePage;
}());

//# sourceMappingURL=possessive.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams, storage, httpClient, http, Alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpClient = httpClient;
        this.http = http;
        this.Alert = Alert;
        this.cheackS = false;
        this.cheackQ = false;
        this.loading = false;
        this.storage.get('id').then(function (id) {
            if (id != null) {
                _this.cheackS = true;
                _this.cheackQ = true;
            }
        });
    }
    IntroPage_1 = IntroPage;
    IntroPage.prototype.ionViewWillEnter = function () {
        this.loading = true;
        this.getTopic();
    };
    IntroPage.prototype.getTopic = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.httpClient.get('https://us-central1-frenchgame-228900.cloudfunctions.net/getTopics')
            .subscribe(function (data) {
            _this.data = data;
            _this.storage.set('topic', _this.data);
            var _loop_1 = function (i) {
                var _loop_2 = function (level) {
                    var _level = level.toString();
                    var postParams = {
                        "content": {
                            "Topic": i,
                            "level": _level
                        }
                    };
                    _this.http.post("https://us-central1-frenchgame-228900.cloudfunctions.net/getQuestions", postParams, requestOptions).map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.data = res;
                        _this.storage.set(i + "_" + level, _this.data);
                    }), function (err) {
                        var alert = _this.Alert.create({
                            title: 'Oops! Sorry :(',
                            message: 'An error occurred. Please try again later',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('OK');
                                    }
                                }
                            ]
                        });
                        alert.present(alert);
                    };
                };
                for (var level = 1; level <= IntroPage_1.MAX_LEVEL; level++) {
                    _loop_2(level);
                }
            };
            // this.size = Object.keys(this.data).length;
            for (var i in data) {
                _loop_1(i);
            }
            setTimeout(function () {
                _this.loading = false;
                document.getElementById('btn-login').hidden = false;
            }, 1000);
        });
    };
    IntroPage.prototype.openlogin = function () {
        var _this = this;
        if (!this.cheackQ) {
            this.storage.get('cmuitaccount_name').then(function (id) {
                _this.navCtrl.push(id == null ? 'LoginPage' : 'MenuPage');
            });
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    IntroPage.prototype.getParam = function (name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.MAX_LEVEL = 3;
    IntroPage = IntroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"D:\FrenchGame\src\pages\intro\intro.html"*/'<!--\n\n  Generated template for the IntroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding class="bg">\n\n\n\n \n\n    <!-- <ion-grid no-padding col-12>     --> \n\n      <!-- <ion-row no-padding> -->\n\n          <img class="img-2" src="assets/imgs/title.png">\n\n      <!-- </ion-row>  -->\n\n          \n\n      <ion-row class="loading">\n\n        <ion-spinner color="circles" spinner="bubbles" *ngIf="loading" ></ion-spinner>\n\n        <button ion-button large button button-balanced color="info" (click)="openlogin()" hidden id="btn-login" hidden>Login with CMU mail</button>\n\n\n\n      </ion-row>\n\n      <ion-row >\n\n          <img class="img-1" src="assets/imgs/img-intro2.png">\n\n      </ion-row>\n\n    <!-- </ion-grid> -->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IntroPage);
    return IntroPage;
    var IntroPage_1;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avatar/avatar.module": [
		308,
		13
	],
	"../pages/demonstratifs/demonstratifs.module": [
		309,
		12
	],
	"../pages/interrogatif/interrogatif.module": [
		310,
		11
	],
	"../pages/intro/intro.module": [
		311,
		10
	],
	"../pages/login/login.module": [
		176
	],
	"../pages/menu/menu.module": [
		179
	],
	"../pages/mode/mode.module": [
		312,
		9
	],
	"../pages/play-topic/play-topic.module": [
		313,
		8
	],
	"../pages/play/play.module": [
		321,
		7
	],
	"../pages/possessive/possessive.module": [
		314,
		6
	],
	"../pages/profile/profile.module": [
		315,
		5
	],
	"../pages/ranking/ranking.module": [
		316,
		4
	],
	"../pages/rules/rules.module": [
		317,
		3
	],
	"../pages/study-topic/study-topic.module": [
		318,
		2
	],
	"../pages/study/study.module": [
		319,
		1
	],
	"../pages/type/type.module": [
		320,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_config__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__avatar_avatar__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, storage, http, navCtrl, loadingCtrl, iab, Alert) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.Alert = Alert;
        this.qp = [];
        this.loginerr = false;
        this.typeS = "begin";
        this.loading = false;
        this.loading = true;
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]
        });
        if (localStorage.getItem('id') && localStorage.getItem('fullname')) {
            var afterLoginData = {
                student_id: this.storage.get('id'),
                firstname_TH: this.storage.get('firstname'),
                lastname_TH: this.storage.get('lastname')
            };
            this.doAfterLogin(afterLoginData);
        }
        else {
            if (this.GetParam('access_token')) {
                this.getUserWithAccessToken(this.GetParam('access_token'));
            }
            else {
                this.login();
            }
        }
    }
    LoginPage.prototype.GetParam = function (name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    };
    // presentLoadingCustom() {
    //   this.loading = this.loadingCtrl.create({
    //     spinner: 'hide',
    //     content: `
    //      <img src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">     
    //    `
    //   });
    //   this.loading.present();
    // }
    LoginPage.prototype.postCall = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        // let options = new RequestOptions({ headers: headers });
        var postParams = {
            params: {
                UserName: this.todo.value.title,
                Password: this.todo.value.password
            }
        };
        //same but too long
        return new Promise(function (resolve, reject) {
            _this.http.post('https://sis.cmu.ac.th/cmusis/API/User/checkUser', postParams, { headers: headers })
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response);
                // this.data2 = response.json();
                _this.login();
                // resolve(response.json());
                console.log(_this.data2);
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                var alert = _this.Alert.create({
                    title: 'Oops! Sorry :(',
                    message: 'An error occurred. Please try again later',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                console.log('OK');
                            }
                        }
                    ]
                });
                alert.present(alert);
                _this.postCall();
                reject(error.json());
            });
        });
    };
    ;
    LoginPage.prototype.login = function () {
        var _this = this;
        var authenUrl = Object(__WEBPACK_IMPORTED_MODULE_10__app_app_config__["b" /* getOAuthAuthenUrl */])();
        return new Promise(function (resolve, reject) {
            var isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
            if (isApp) {
                authenUrl = Object(__WEBPACK_IMPORTED_MODULE_10__app_app_config__["c" /* getOAuthAuthenUrlMobile */])();
                console.log('isApp: ', isApp, authenUrl);
                var browser_1 = _this.iab.create(authenUrl, '_blank');
                var listener_1 = browser_1.on('loadstart').subscribe(function (event) {
                    //Check the redirect uri
                    if (event.url.indexOf('oauth-success') > -1) {
                        listener_1.unsubscribe();
                        browser_1.close();
                        var access_token = event.url.split('=')[1].split('&')[0];
                        _this.getUserWithAccessToken(access_token);
                    }
                    else {
                        console.log("Could not authenticate");
                    }
                });
            }
            else {
                window.open(authenUrl, '_self');
            }
        });
    };
    LoginPage.prototype.getUserWithAccessToken = function (access_token) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_10__app_app_config__["a" /* OAUTH_URI */] + '/getUser?access_token=' + access_token)
            .subscribe(function (data) {
            _this.doAfterLogin(data);
        }, function (err) {
            var alert = _this.Alert.create({
                title: 'Oops! Sorry :(',
                message: 'An error occurred. Please try again later',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            console.log("OK");
                        }
                    }
                ]
            });
            alert.present(alert);
        });
    };
    LoginPage.prototype.doAfterLogin = function (responseData) {
        var _this = this;
        if (responseData) {
            this.data = responseData;
        }
        setTimeout(function () {
            _this.setData();
        }, 1700);
        setTimeout(function () {
            _this.loading = false;
            if (_this.data['avatar'] == null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__avatar_avatar__["a" /* AvatarPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
            }
        }, 2100);
    };
    LoginPage.prototype.setData = function () {
        var name;
        name = this.data['firstname_EN'].concat(' ', this.data['lastname_EN']);
        this.storage.set('name', name);
        this.storage.set('cmuitaccount_name', this.data['cmuitaccount_name']);
        this.storage.set('cmuitaccount', this.data['cmuitaccount']);
        this.storage.set('avatar', this.data['avatar']);
    };
    ;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\FrenchGame\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding class="bg">\n\n    <ion-row class="loading1">\n\n    </ion-row>\n\n  <ion-row class="loading2">\n\n    <img class="img-1" src="assets/imgs/loading1.gif">\n\n  </ion-row>\n\n  <ion-row class="loading2">\n\n      <ion-spinner color="circles" spinner="bubbles" *ngIf="loading" ></ion-spinner>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\FrenchGame\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\FrenchGame\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl, http) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
        this.cheackS = false;
        this.cheackQ = false;
        this.storage.get('id').then(function (id) {
            if (id != null) {
                _this.cheackS = true;
                _this.cheackQ = true;
            }
        });
        // this.storage.get('name').then((name) => {
        //   if(name != null){   
        //     this.cheackQ = true; 
        //   }
        // });
    }
    HomePage.prototype.openMenu = function () {
        var _this = this;
        if (!this.cheackS) {
            this.storage.get('id').then(function (id) {
                if (id == null) {
                    console.log('Your name is', id);
                    _this.navCtrl.push('LoginGuestPage');
                }
                else {
                    console.log('Your name is', id);
                    _this.navCtrl.push('MenuPage');
                }
            });
        }
        else {
            this.navCtrl.push('MenuPage');
        }
        // this.navCtrl.setRoot(LoginGuestPage);
    };
    //
    HomePage.prototype.openlogin = function () {
        var _this = this;
        if (!this.cheackQ) {
            this.storage.get('id').then(function (id) {
                console.log('Your name is', id);
                if (id == null) {
                    console.log('Your name is', id);
                    _this.navCtrl.push('LoginPage');
                }
                else {
                    console.log('Your name is', id);
                    _this.navCtrl.push('MenuPage');
                }
            });
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    HomePage.prototype.getParam = function (name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\FrenchGame\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-lg-1 col-xl-3>\n\n  \n\n        </ion-col>\n\n        <ion-col col-12 col-lg-10 col-xl-6>\n\n        <div class="fixheight">\n\n          <img class="logoone" src="assets/imgs/logomake.png">\n\n          <div class="title">Japanese-Thai\n\n            <br /> Vocabulary\n\n            <br /> Matching\n\n            <br /> Game </div>\n\n          <div class="homeB" (click)="openMenu()">Touch to Start</div>\n\n          <div class="or"> or </div>\n\n          <img class="homelogoCMU" src="assets/imgs/chiangmai-university-logo-english-w.png">\n\n          <div class="homeB2" (click)="openlogin()">Login with CMU mail</div>\n\n          <img class="onepic" src="assets/imgs/homepic.jpg">\n\n          <img class="twopic" src="assets/imgs/0557d23fcc27c3b.jpg">\n\n          <img class="logotwo" src="assets/imgs/logow.jpg">\n\n          </div>\n\n        </ion-col>\n\n  \n\n        <ion-col col-lg-1 col-xl-3>\n\n  \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyPage = /** @class */ (function () {
    function StudyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyPage');
    };
    StudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-study',template:/*ion-inline-start:"D:\FrenchGame\src\pages\study\study.html"*/'<!--\n\n  Generated template for the StudyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar color="white">\n\n        <ion-row no-padding>\n\n            <ion-col no-padding col-10 col-11-md col-11-lg>\n\n            <h2 text-center class="text-nav">Study</h2>\n\n            </ion-col>\n\n            <ion-col no-padding col-2 col-1-md col-1-lg>\n\n\n\n            </ion-col>\n\n         </ion-row>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid class="grid-main">\n\n      <img class="img-2" src="assets/imgs/study.png">     \n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\study\study.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StudyPage);
    return StudyPage;
}());

//# sourceMappingURL=study.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_play__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TypePage = /** @class */ (function () {
    function TypePage(navCtrl, http, navParams, platform, nativeAudio, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.storage = storage;
        this.questions = [];
        this.randQuestion = [];
        this.key = "question";
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundId1', 'src/assets/audio/avatar.wav').then(function (success) {
                console.log("success");
            }, function (error) {
                console.log(error);
            });
            _this.setQuestion();
        });
    }
    TypePage.prototype.setQuestion = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            "content": {
                "Topic": "possessive",
                "level": "1"
            }
        };
        this.http.post("https://us-central1-frenchgame-228900.cloudfunctions.net/getQuestions", postParams, requestOptions).map(function (res) { return res.json(); }).
            subscribe(function (data) {
            _this.data = data;
            _this.storage.set(_this.key, _this.data);
        });
    };
    TypePage.prototype.getData = function (sex) {
        var _this = this;
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.storage.get(this.key).then(function (val) {
            _this.data = val;
            console.log(_this.data);
            var _size = Object.keys(_this.data).length;
            var mark = new Array(_size);
            var condition;
            for (var i = 0; i < 20; i++) {
                var rand;
                do {
                    rand = Math.floor(Math.random() * _size);
                    var selected = (mark[rand] != null);
                    var match_sex = (_this.data[rand]['sex'] == sex);
                    condition = (sex == 'WM') ? (selected) : (selected || !match_sex);
                } while (condition);
                mark[rand] = true;
                _this.randQuestion[i] = rand;
                _this.questions[i] = _this.data[_this.randQuestion[i]];
            }
        });
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__play_play__["a" /* PlayPage */], {
                noQuestions: _this.randQuestion,
                listOfQuestion: _this.questions
            });
        }, 1700);
    };
    TypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypePage');
    };
    TypePage.prototype.goToPlayPage = function () {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__play_play__["a" /* PlayPage */], {
            noQuestions: this.randQuestion,
            listOfQuestion: this.questions
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__play_play__["a" /* PlayPage */]);
    };
    TypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-type',template:/*ion-inline-start:"D:\FrenchGame\src\pages\type\type.html"*/'<!--\n\n  Generated template for the TypePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-title text-center>Select Mode</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg">\n\n  <ion-row class="pad-row">\n\n      <ion-col class="pad-col" col-12>\n\n          <button ion-button button button-balanced block round large color="info" (click)=\'getData("WM")\'>All</button>\n\n      </ion-col>\n\n      <ion-col class="pad-col" col-12>\n\n          <button ion-button button button-balanced block round large color="info" (click)=\'getData("M")\'> Man Only </button>\n\n      </ion-col>\n\n      <ion-col class="pad-col" col-12>\n\n          <button ion-button button button-balanced block round large color="info" (click)=\'getData("W")\'> Woman Only </button>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\type\type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], TypePage);
    return TypePage;
}());

//# sourceMappingURL=type.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_play_play__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mode_mode__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_play_topic_play_topic__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_study_study__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_rules_rules__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_data_data__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_intro_intro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_type_type__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_menu_menu_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_ranking_ranking__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_study_topic_study_topic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_demonstratifs_demonstratifs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_interrogatif_interrogatif__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_possessive_possessive__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_play_topic_play_topic__["a" /* PlayTopicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_study_study__["a" /* StudyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mode_mode__["a" /* ModePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_play_play__["a" /* PlayPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_type_type__["a" /* TypePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_study_topic_study_topic__["a" /* StudyTopicPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_demonstratifs_demonstratifs__["a" /* DemonstratifsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_interrogatif_interrogatif__["a" /* InterrogatifPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_possessive_possessive__["a" /* PossessivePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avatar/avatar.module#AvatarPageModule', name: 'AvatarPage', segment: 'avatar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demonstratifs/demonstratifs.module#DemonstratifsPageModule', name: 'DemonstratifsPage', segment: 'demonstratifs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interrogatif/interrogatif.module#InterrogatifPageModule', name: 'InterrogatifPage', segment: 'interrogatif', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mode/mode.module#ModePageModule', name: 'ModePage', segment: 'mode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play-topic/play-topic.module#PlayTopicPageModule', name: 'PlayTopicPage', segment: 'play-topic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/possessive/possessive.module#PossessivePageModule', name: 'PossessivePage', segment: 'possessive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ranking/ranking.module#RankingPageModule', name: 'RankingPage', segment: 'ranking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study-topic/study-topic.module#StudyTopicPageModule', name: 'StudyTopicPage', segment: 'study-topic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/study.module#StudyPageModule', name: 'StudyPage', segment: 'study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/type/type.module#TypePageModule', name: 'TypePage', segment: 'type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play/play.module#PlayPageModule', name: 'PlayPage', segment: 'play', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_play_topic_play_topic__["a" /* PlayTopicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_study_study__["a" /* StudyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mode_mode__["a" /* ModePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_play_play__["a" /* PlayPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_type_type__["a" /* TypePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_study_topic_study_topic__["a" /* StudyTopicPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_demonstratifs_demonstratifs__["a" /* DemonstratifsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_interrogatif_interrogatif__["a" /* InterrogatifPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_possessive_possessive__["a" /* PossessivePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                Storage,
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_21__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OAUTH_LOGIN_URL */
/* unused harmony export OAUTH_TOKEN_URL */
/* unused harmony export OAUTH_CLIENT_ID */
/* unused harmony export OAUTH_CLIENT_SECRET */
/* unused harmony export OAUTH_REDIRECT_URI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAUTH_URI; });
/* unused harmony export OAUTH_SCOPE */
/* unused harmony export SERVER */
/* harmony export (immutable) */ __webpack_exports__["b"] = getOAuthAuthenUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = getOAuthAuthenUrlMobile;
var OAUTH_LOGIN_URL = 'https://oauth.cmu.ac.th/v1/Authorize.aspx';
var OAUTH_TOKEN_URL = 'https://oauth.cmu.ac.th/v1/GetToken.aspx';
var OAUTH_CLIENT_ID = 'RkgQJX53W2a00NbyeQcpbHj2uKAYJ61U2PCX30dM';
var OAUTH_CLIENT_SECRET = 'MaZaV7NvFKDQEAphbqw9whuZbt8njrErMBPaUhhx';
var OAUTH_REDIRECT_URI = 'https://us-central1-frenchgame-228900.cloudfunctions.net/oauth-login';
var OAUTH_URI = 'https://us-central1-frenchgame-228900.cloudfunctions.net';
var OAUTH_SCOPE = 'cmuitaccount.basicinfo';
var CRYPTO_KEY = 'A5178B6A965AACF3CD60B07A15061719';
var SERVER = 'https://www.ljcmu.com';
function getOAuthAuthenUrl() {
    var backUrl = window.location.origin + '%2F%23%2Flogin';
    return OAUTH_LOGIN_URL + "?response_type=code&client_id=" + OAUTH_CLIENT_ID + "&redirect_uri=" + OAUTH_REDIRECT_URI + "&scope=" + OAUTH_SCOPE + "&state=" + backUrl;
}
function getOAuthAuthenUrlMobile() {
    var mobileBackUrl = 'mobile';
    return OAUTH_LOGIN_URL + "?response_type=code&client_id=" + OAUTH_CLIENT_ID + "&redirect_uri=" + OAUTH_REDIRECT_URI + "&scope=" + OAUTH_SCOPE + "&state=" + mobileBackUrl;
}
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FrenchGame\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\FrenchGame\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FrenchGame\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\FrenchGame\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.items = [];
        this.key = 'items';
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    DataProvider.prototype.getData = function () {
        // let data:Observable<any> = this.http.get(this.url);
        var _this = this;
        // data.subscribe(result => {
        //   this.items = result;
        // })
        return new Promise(function (resolve, reject) {
            return _this.http.get(_this.url).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DataProvider.prototype.saveData = function () {
        this.storage.set(this.key, JSON.stringify(this.items))
            .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
    };
    DataProvider.prototype.loadData = function () {
        var _this = this;
        this.storage.get(this.key).then(function (val) {
            if (val != null && val != undefined) {
                _this.items = JSON.parse(val);
                console.log(_this.items);
            }
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules_rules__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_topic_play_topic__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__study_topic_study_topic__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, platform, nativeAudio, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.storage = storage;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundId1', 'src/assets/audio/ding.mp3').then(function (success) {
                console.log("success");
            }, function (error) {
                console.log(error);
            });
        });
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.goToPlayTopicPage = function () {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__play_topic_play_topic__["a" /* PlayTopicPage */]);
    };
    MenuPage.prototype.goToStudyPage = function () {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__study_topic_study_topic__["a" /* StudyTopicPage */]);
    };
    MenuPage.prototype.goToRulesPage = function () {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rules_rules__["a" /* RulesPage */]);
    };
    MenuPage.prototype.goToProfilePage = function () {
        this.nativeAudio.play('btnSoundId1').then(function (success) {
            console.log("success playing");
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\FrenchGame\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding class="bg">\n\n\n\n    <ion-grid class="grid-topic">\n\n        <ion-row class="try">\n\n            <img class="img-2" src="assets/imgs/menu.png">\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid class="grid-main">\n\n        <ion-row padding class="row-main">\n\n            <ion-col col-12>\n\n                <button ion-button  block round large color="secondary" style="color:black" (click)="goToPlayTopicPage()">Play Game</button>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <button ion-button  block round large color="light" (click)="goToStudyPage()"> Study </button>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <button ion-button  block round large color="info" (click)="goToRulesPage()"> Rules and Manual </button>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <button ion-button  block round large class="btn-profile" style="color:black" (click)="goToProfilePage()"> Profile </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ranking_ranking__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayPage = /** @class */ (function () {
    function PlayPage(navCtrl, navParams, Alert, nav, storage, http, nativeAudio, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Alert = Alert;
        this.nav = nav;
        this.storage = storage;
        this.http = http;
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        //--------------------------------send to UpdataScore and RankingPage
        this.person = [];
        this._correct = [];
        this._wrong = [];
        this._hint = 0;
        this.score = 0;
        this.No = 0;
        //--------------------------------Color
        this.Color = [];
        this.curr_hint = 0;
        this.curr_score = 1;
        this.countHint = 2;
        //--------------------------------Use in Page
        this.list_num = [];
        this.dis_btn = 0;
        this.count = 0;
        this.q_no = 0;
        this.size_choice = 0;
        this.loading = false;
        this.showAlertMessage = true;
        this.nav = nav;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundCorrect', 'src/assets/audio/correct.wav').then(function (success) {
                console.log("Loading Sound Success 1");
            }, function (error) {
                console.log(error);
            });
        });
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadSimple('btnSoundInCorrect', 'src/assets/audio/incorrect.mp3').then(function (success) {
                console.log("Loading Sound Success 2");
            }, function (error) {
                console.log(error);
            });
        });
        this.Color = [];
        for (var i = 0; i < this.size_choice; i++) {
            this.Color.push('#48508e');
        }
        //-----------------------------------------get Value from PlayPage and Storage
        this.score = 0;
        this.count = navParams.get('newCount');
        this.score = navParams.get('score');
        this.topic = navParams.get('topic');
        this.key = navParams.get('key');
        this.mode = navParams.get('mode');
        this.No = navParams.get('No');
        this.storage.get('cmuitaccount_name').then(function (val) {
            _this.cmuitaccount_name = val;
        });
        this.storage.get('avatar').then(function (val) {
            _this.avatar = "assets/imgs/" + val + ".png";
        });
        if (this.count == null) {
            this.key = this.topic + "_" + this.mode;
        }
        this.storage.get(this.key).then(function (val) {
            _this.keepQuestions = val;
            Object.keys(_this.keepQuestions).forEach(function (element) {
                _this.list_num.push(element);
            });
            if (_this.count == null) {
                _this.No = _this.list_num.length;
            }
            else {
                _this.q_no = navParams.get('newNo');
                _this._correct = navParams.get('_correct');
                _this._wrong = navParams.get('_wrong');
                _this._hint = navParams.get('_hint');
            }
            _this.choices = Object.values(_this.keepQuestions[_this.list_num[_this.q_no]]['Choices']);
            _this.size_choice = Object.values(_this.keepQuestions[_this.list_num[_this.q_no]]['Choices']).length;
            _this.rand_choices = Array(_this.size_choice);
            _this.disableButton = new Array(_this.size_choice); //hint
            for (var i = 0; i < _this.size_choice; i++) {
                _this.rand_choices[i] = i;
                _this.disableButton[i] = false;
            }
            _this.rand_choices = _this.shuffle(_this.rand_choices);
            _this.question = _this.keepQuestions[_this.list_num[_this.q_no]]['Question'];
            _this.answer = _this.keepQuestions[_this.list_num[_this.q_no]]['Answer'];
        });
    }
    PlayPage_1 = PlayPage;
    PlayPage.prototype.verifyAnswer = function (q_no, _choice) {
        var _this = this;
        var _score = 0;
        this.dis_btn += 1;
        if (this.dis_btn == 1) {
            for (var i = 0; i < this.size_choice; i++) {
                if (i != _choice) {
                    this.disableButton[i] = true;
                }
            }
        }
        if (this.count != null) {
            _score = this.navParams.get('score');
        }
        //-----------------------------------------------------
        if (_choice == 0) {
            this.Color = [];
            for (var i = 0; i < this.size_choice; i++) {
                if (i == 0) {
                    this.Color.push('#00b300');
                }
                else {
                    this.Color.push('#48508e');
                }
            }
            this.nativeAudio.play('btnSoundCorrect').then(function (success) {
                console.log("success playing");
            }, function (error) {
                console.log(error);
            });
            _score += this.curr_score;
            this._correct.push(q_no);
            console.log("correct");
        }
        else {
            this.Color = [];
            for (var i = 0; i < this.size_choice; i++) {
                if (i == _choice) {
                    this.Color.push('#ff3333');
                }
                else {
                    this.Color.push('#48508e');
                }
            }
            this.nativeAudio.play('btnSoundInCorrect').then(function (success) {
                console.log("success playing");
            }, function (error) {
                console.log(error);
            });
            this._wrong.push(q_no);
        }
        if (this.q_no + 1 < this.No) {
            this.count += 1;
            setTimeout(function () {
                _this.q_no += 1;
                _this.navCtrl.push(PlayPage_1, {
                    score: _score,
                    newNo: _this.q_no,
                    newCount: _this.count,
                    key: _this.key,
                    No: _this.No,
                    _correct: _this._correct,
                    _wrong: _this._wrong,
                    _hint: _this._hint,
                    topic: _this.topic,
                    mode: _this.mode
                });
            }, 800);
        }
        else {
            this.loading = true;
            this.score = _score;
            this.updateScore();
        }
    };
    PlayPage.prototype.updateScore = function () {
        var _this = this;
        this.mode = this.mode.toString();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            "content": {
                "cmuitaccount_name": this.cmuitaccount_name,
                "Topic": this.topic,
                "level": this.mode,
                "correct": this._correct,
                "incorrect": this._wrong,
                "score": this.score,
                "helper": this._hint
            }
        };
        this.http.post("https://us-central1-frenchgame-228900.cloudfunctions.net/updateScore", postParams, requestOptions).map(function (res) { return res.json(); }).
            subscribe(function (data) {
            var score = "lv" + _this.mode + "_score";
            _this.others_score = data;
            Object.keys(_this.others_score[_this.topic]).forEach(function (element) {
                var newPerson = {
                    name: element,
                    avatar: "assets/imgs/" + _this.others_score[_this.topic][element]["avatar"] + ".png",
                    score: _this.others_score[_this.topic][element][score],
                    rank: 0
                };
                _this.person.push(newPerson);
            });
            _this.person = _this.bubbleSort(_this.person);
            for (var i = 0; i < _this.person.length; i++) {
                if (_this.person[i].name == _this.cmuitaccount_name) {
                    _this.rank = i + 1;
                }
                _this.person[i].rank = i + 1;
            }
            _this.loading = false;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ranking_ranking__["a" /* RankingPage */], {
                score: _this.score,
                rank: _this.rank,
                person: _this.person,
                cmuitaccount_name: _this.cmuitaccount_name,
                size_choice: _this.No,
                avatar: _this.avatar
            });
        }, function (err) {
            _this.status = err.status;
            var alert = _this.Alert.create({
                title: 'Oops! Sorry :(',
                message: 'An error occurred. Please try again later',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuPage */]);
                        }
                    }
                ]
            });
            alert.present(alert);
        });
    };
    PlayPage.prototype.hint = function () {
        if (this.curr_hint < 2) {
            this.curr_hint += 1;
            while (true) {
                var rand = Math.floor(Math.random() * this.size_choice);
                if (this.disableButton[rand] == false && rand != 0) {
                    this.disableButton[rand] = true;
                    break;
                }
            }
            this.countHint -= 1;
            if (this.curr_hint == 2) {
                this.disableHint = true;
            }
            this._hint += 1;
            this.curr_score -= 0.25;
        }
    };
    PlayPage.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    PlayPage.prototype.bubbleSort = function (array) {
        array = array.slice(); // creates a copy of array
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - 1; j++) {
                if (array[j].score < array[j + 1].score) {
                    var swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        return array;
    };
    PlayPage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
    };
    PlayPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuPage */]);
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Navbar */])
    ], PlayPage.prototype, "navBar", void 0);
    PlayPage = PlayPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-play',template:/*ion-inline-start:"D:\FrenchGame\src\pages\play\play.html"*/'<!--\n\n  Generated template for the PlayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n        <ion-navbar color="primary">\n\n            <ion-row no-padding>\n\n                <ion-col no-padding col-10>\n\n                <h2 text-center class="text-nav">Question</h2>\n\n                </ion-col>\n\n                <ion-col no-padding ccol-2>\n\n    \n\n                </ion-col>\n\n             </ion-row>\n\n        </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12 >\n\n                <h5 ion-text class="right">{{ q_no+1 }}/{{No}}</h5>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row padding>\n\n            <ion-col col-12>\n\n                <h2 ion-text>{{question}}</h2>\n\n            </ion-col>\n\n            <ion-col col-12 >\n\n                <h2 ion-text>{{answer}}</h2>\n\n            </ion-col>\n\n            <ion-col col-12 class="loading" >\n\n            <ion-spinner color="circles" name="circles" *ngIf="loading" >Loading</ion-spinner>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="pad-row">\n\n            <ion-col col-12 *ngFor="let _choice of rand_choices">\n\n                <button ion-button block item-start default  color="primary" id="{{_choice}}" [disabled]="disableButton[_choice]" \n\n                (click)=\'verifyAnswer(q_no,_choice)\' [ngStyle]="{\'background-color\': Color[_choice] }">{{choices[_choice]}}</button>\n\n            </ion-col> \n\n        </ion-row>\n\n        <ion-row>\n\n            <!-- <button small ion-button clear id="notification-button" [disabled]="disableHint" (click) ="hint()">\n\n                <ion-icon large name="eye">\n\n                    <ion-badge id="notifications-badge" color="danger">{{countHint}}</ion-badge>\n\n                </ion-icon>\n\n            </button> -->\n\n            <button ion-button clear id="notification-button" [disabled]="disableHint" (click) ="hint()">\n\n                <ion-icon name="cut">\n\n                  <ion-badge id="notifications-badge" color="danger">{{countHint}}</ion-badge>\n\n                </ion-icon>              \n\n            </button>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\FrenchGame\src\pages\play\play.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */]])
    ], PlayPage);
    return PlayPage;
    var PlayPage_1;
}());

(function (PlayPage) {
    var RankScore = /** @class */ (function () {
        function RankScore() {
        }
        return RankScore;
    }());
    PlayPage.RankScore = RankScore;
})(PlayPage || (PlayPage = {}));
//# sourceMappingURL=play.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map