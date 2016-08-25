module admin.order {
    'use strict';

    CvcChecklistDirective.$inject = [];

    function CvcChecklistDirective(): ng.IDirective {
        var testvar: string;
        return {
            restrict: 'E',
            templateUrl: '/app/core/directives/cvc-checklist/cvc-checklist.html',
            scope: {
                checklistValue: '=',
                checklistSelected: '='
            },
            link: ($scope: ng.IScope, elm: Element, attr: ng.IAttributes, ngModel: ng.INgModelController): void => {

                $scope['exists'] = (item: any, list: Array<any>): boolean => {
                    var result = list.filter(function (obj) {
                        return obj.id == item.id;
                    });
                    return result.length > 0;
                }

                $scope['toggle'] = (item: any, list: Array<any>): void => {
                    if ($scope['exists'](item, list)) {
                        $scope['checklistSelected'] = list.filter(function (obj) {
                            return obj.id != item.id;
                        });
                    }
                    else {
                        list.push(item);
                    }
                }
            }
        }
    }
    
    angular
        .module('app.core')
        .directive('cvcChecklist', CvcChecklistDirective);
}