System.register(['angular2/core', 'angular2/router', './home/home.component', './login/login.component', './findbus/findbus.component', './registration/registration.component', './addimpression/addimpression.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, login_component_1, findbus_component_1, registration_component_1, addimpression_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (findbus_component_1_1) {
                findbus_component_1 = findbus_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (addimpression_component_1_1) {
                addimpression_component_1 = addimpression_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.token = JSON.parse(localStorage.getItem('token'));
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('token');
                    location.reload();
                    // this.router.navigate[''];
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: './', name: 'Home', component: home_component_1.MainPageComponent, useAsDefault: true },
                        { path: './login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: './register', name: 'Register', component: registration_component_1.RegistrationComponent },
                        { path: './findbus', name: 'FindBus', component: findbus_component_1.FindBusComponent },
                        { path: './addimrepssion', name: 'AddImpression', component: addimpression_component_1.AddImpressionComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map