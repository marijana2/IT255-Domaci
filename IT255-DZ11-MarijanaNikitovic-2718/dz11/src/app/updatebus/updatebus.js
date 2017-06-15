System.register(['@angular/core', '@angular/forms', '@angular/http', 'rxjs/Rx', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, forms_1, http_1, router_1;
    var UpdateBusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UpdateBusComponent = (function () {
                function UpdateBusComponent(http, router) {
                    this.updatebusForm = new forms_1.FormGroup({
                        model_naziv: new ControlGroup(),
                        broj_sedista: new ControlGroup(),
                        id: new ControlGroup()
                    });
                    this.http = http;
                    this.router = router;
                }
                UpdateBusComponent.prototype.updateBus = function () {
                    var _this = this;
                    var data = "model_naziv=" + this.updatebusForm.value.model_naziv + "&broj_sedista=" + this.updatebusForm.value.broj_sedista + "&id=" + this.updatebusForm.value.id;
                    console.log(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/updatebus.php', data, { headers: headers }).subscribe(function (data) {
                        var obj = JSON.parse(data["_body"]);
                        if (obj.success) {
                            _this.router.navigate(['./']);
                        }
                    });
                };
                UpdateBusComponent = __decorate([
                    core_1.Component({
                        selector: 'UpdateBus',
                        templateUrl: 'updatebus.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], UpdateBusComponent);
                return UpdateBusComponent;
            }());
            exports_1("UpdateBusComponent", UpdateBusComponent);
        }
    }
});
//# sourceMappingURL=updatebus.js.map