System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1;
    var AddImpressionComponent;
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
            }],
        execute: function() {
            AddImpressionComponent = (function () {
                function AddImpressionComponent(builder, http, router) {
                    this.select = 1;
                    this.http = http;
                    this.router = router;
                    this.busForm = builder.group({
                        ocena: ["", common_1.Validators.none],
                        komentar: ["", common_1.Validators.none],
                    });
                }
                AddImpressionComponent.prototype.onAddCom = function () {
                    var _this = this;
                    var data = "&ocena=" + this.busForm.value.ocena +
                        "&komentar=" + this.busForm.value.komentar;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/addcom.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno ste dodali utisak");
                            _this.router.parent.navigate(['./Home']);
                        }
                        else {
                            alert("Greska! Niste dodali utisak");
                        }
                    });
                };
                AddImpressionComponent = __decorate([
                    core_1.Component({
                        selector: 'AddImpression',
                        templateUrl: 'app/addimpression/addimpression.html',
                        styleUrls: ['css/styles.css'],
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], AddImpressionComponent);
                return AddImpressionComponent;
            }());
            exports_1("AddImpressionComponent", AddImpressionComponent);
        }
    }
});
//# sourceMappingURL=addimpression.component.js.map