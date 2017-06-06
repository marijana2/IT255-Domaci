System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router', '../registration/user.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, router_1, user_model_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(builder, http, router) {
                    this.model = {};
                    this.curentUser = user_model_1.User;
                    this.http = http;
                    this.router = router;
                    this.signupForm = builder.group({
                        username: ["", common_1.Validators],
                        password: ["", common_1.Validators],
                        firstName: ["", common_1.Validators],
                        lastName: ["", common_1.Validators],
                    });
                    if (localStorage.getItem('token') != null) {
                        this.router.parent.navigate(['./Home']);
                    }
                }
                RegistrationComponent.prototype.onSignUp = function () {
                    var _this = this;
                    var data = "username=" + this.model.username + "&password=" + this.model.password + "&firstName=" + this.model.firstName + "&lastName=" + this.model.lastName;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/signup.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (user) { _this.model = user; }, function (err) {
                        var obj = JSON.parse(err._body);
                        // document.getElementsByClassName("alert")[0].style.display = "block";
                        // document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                    }, function () {
                        var obj = JSON.parse(_this.model._body);
                        console.log(obj);
                        localStorage.setItem('token', JSON.stringify(obj));
                        _this.router.parent.navigate(['/Home']);
                        location.reload();
                    });
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration',
                        templateUrl: 'app/registration/registration.html',
                        styleUrls: ['css/styles.css'],
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map