(function(window, angular, undefined) {
  'use strict';
  angular.module('addRemove', [])
    .run(['$templateCache',
      function($templateCache) {
        var addRemoveHtml =
          "<div class='ngAddRemove container'>" +
          "<div style='float:left; width:40%'>" +
          "<div ng-class='panelClass'>" +
          "<div class='panel-heading'><b>Available</b></div>" +
          "<select size='9' style='width: 100%;height: 144px; vertical-align: top;' ng-model='leftMouseSelectedItems' ng-options='{{leftSelectNgOption}}' ng-dblclick='addItemsToRight()' multiple></select>" +
          "</div>" +
          "</div>" +
          "<div style='display: inline-block; width: 20%; text-align: center'>" +
          "<br/>" +
          "<button ng-click='addItemsToRight()' ng-class='buttonClass' style='width:60px; height: 34px; line-height: 17px; vertical-align:middle;outline:none !important;margin-bottom:7px'><span style='font-size:25px;'>&#8594;</span>" +
          "</button>" +
          "<br/>" +
          "<button ng-click='addItemsToLeft()' ng-class='buttonClass' style='width:60px; height: 34px; line-height: 17px; vertical-align:middle;outline:none !important;margin-bottom:7px'><span style='font-size:25px;'>&#8592;</span>" +
          "</button>" +
          "<br/>" +
          "<button ng-click='addAllItemsToRight()' ng-class='buttonClass' style='width:60px; height: 34px; line-height: 17px; vertical-align:middle;outline:none !important;margin-bottom:7px'><span style='font-size:30px;'>&#8649;</span>" +
          "</button>" +
          "<br/>" +
          "<button ng-click='addAllItemsToLeft()' ng-class='buttonClass' style='width:60px; height: 34px; line-height: 17px; vertical-align:middle;outline:none !important;margin-bottom:7px'><span style='font-size:30px;'>&#8647;</span>" +
          "</button>" +
          "<br/>" +
          "</div>" +
          "<div style='float: right; width: 40%'>" +
          "<div ng-class='panelClass'>" +
          "<div class='panel-heading'><b>Selected</b></div>" +
          "<select size='9' style='width: 100%; height: 144px; vertical-align: top;' id='selectedlist' ng-model='rightMouseSelectedItems' ng-options='{{rightSelectNgOption}}' ng-dblclick='addItemsToLeft()' multiple></select>" +
          "</div>" +
          "<div style='float: right; width: 40%;'>" +
          "<button ng-click='addItemsToDown()' ng-class='buttonClass' style='width:60px; height: 34px; line-height: 17px; vertical-align:middle;outline:none !important;margin-bottom:7px'><span style='font-size:25px;'>&#8595;</span>" +
          "</button>" +
          "</div>" +
          "<div style='float: right; width: 40%;'>" +
          "<button ng-click='addItemsToTop()' ng-class='buttonClass' style='width:60px; height: 34px; line-height: 17px; vertical-align:middle;outline:none !important;margin-bottom:7px'><span style='font-size:25px;'>&#8593;</span>" +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>";
        $templateCache.put("addRemove.html", addRemoveHtml);
      }
    ])

  .directive('ngAddRemove', ['$filter',
    function($filter) {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          selectedListItems: "=selected",
          availableListItems: "=available",
          key: "@key",
          panelColor: "@panelColor",
          buttonColor: "@buttonColor",
          buttonStyle: "@buttonStyle",
          panelStyle: "@panelStyle"
        },
        templateUrl: 'addRemove.html',
        compile: function(tElem, tAttrs) {
          return {
            pre: function(scope, iElem, iAttrs) {

              scope.leftMouseSelectedItems = [];
              scope.rightMouseSelectedItems = [];

              if (scope.buttonStyle === undefined) {
                setButtonColor(scope.buttonColor);
              } else {
                scope.buttonClass = scope.buttonStyle;
              }

              if (scope.panelStyle === undefined) {
                setPanelColor(scope.panelColor);
              } else {
                scope.panelClass = scope.panelStyle;
              }

              if (scope.availableListItems[0] instanceof Object) {
                scope.leftSelectNgOption = "item as item." + scope.key + " for item in availableListItems | orderBy:'" + scope.key + "'";
                scope.rightSelectNgOption = "item as item." + scope.key + " for item  in selectedListItems";
                scope.availableListItems = getUnique(scope.availableListItems, scope.key);
              } else {
                scope.leftSelectNgOption = "item as item for item in availableListItems | orderBy:'toString()'";
                scope.rightSelectNgOption = "item as item for item in selectedListItems";
                scope.availableListItems = getUnique(scope.availableListItems);
              }

              function setButtonColor(color) {
                switch (color) {
                  case 'white':
                    scope.buttonClass = {
                      'btn btn-default': true
                    };
                    break;
                  case 'blue':
                    scope.buttonClass = {
                      'btn btn-primary': true
                    };
                    break;
                  case 'green':
                    scope.buttonClass = {
                      'btn btn-success': true
                    };
                    break;
                  case 'lightblue':
                    scope.buttonClass = {
                      'btn btn-info': true
                    };
                    break;
                  case 'orange':
                    scope.buttonClass = {
                      'btn btn-warning': true
                    };
                    break;
                  case 'red':
                    scope.buttonClass = {
                      'btn btn-danger': true
                    };
                    break;
                  default:
                    scope.buttonClass = {
                      'btn btn-primary': true
                    };
                }
              }

              function setPanelColor(color) {
                switch (color) {
                  case 'white':
                    scope.panelClass = {
                      'panel panel-default': true
                    };
                    break;
                  case 'blue':
                    scope.panelClass = {
                      'panel panel-primary': true
                    };
                    break;
                  case 'green':
                    scope.panelClass = {
                      'panel panel-success': true
                    };
                    break;
                  case 'lightblue':
                    scope.panelClass = {
                      'panel panel-info': true
                    };
                    break;
                  case 'orange':
                    scope.panelClass = {
                      'panel panel-warning': true
                    };
                    break;
                  case 'red':
                    scope.panelClass = {
                      'panel panel-danger': true
                    };
                    break;
                  default:
                    scope.panelClass = {
                      'panel panel-primary': true
                    };
                }
              }

              function getUnique(array, key) {
                if (array[0] instanceof Object) {
                  var object = {};
                  for (var i = 0; i < array.length; i++)
                    object[array[i][key]] = array[i];

                  array = [];
                  for (var objKey in object) {
                    array.push(object[objKey]);
                  }
                  return array;
                } else {
                  return array.sort().filter(function(item, pos, ary) {
                    return !pos || item != ary[pos - 1];
                  });
                }
              }

              function orderSelections() {
                if (scope.selectedListItems[0] instanceof Object) {
                  scope.selectedListItems = $filter('orderBy')(scope.selectedListItems, scope.key);
                } else {
                  scope.selectedListItems = $filter('orderBy')(scope.selectedListItems, 'toString()');
                }
              }

              scope.addItemsToRight = function() {
                angular.forEach(scope.leftMouseSelectedItems, function(value, key) {
                  this.push(value);
                }, scope.selectedListItems);
                angular.forEach(scope.leftMouseSelectedItems, function(value, key) {
                  for (var i = scope.availableListItems.length - 1; i >= 0; i--) {
                    if (scope.availableListItems[0] instanceof Object) {
                      if (scope.availableListItems[i][scope.key] == value[scope.key]) {
                        scope.availableListItems.splice(i, 1);
                      }
                    } else {
                      if (scope.availableListItems[i] == value) {
                        scope.availableListItems.splice(i, 1);
                      }
                    }
                  }
                });
                scope.leftMouseSelectedItems = [];
                orderSelections();
              };

              scope.addAllItemsToRight = function() {
                angular.forEach(scope.availableListItems, function(value, key) {
                  this.push(value);
                }, scope.selectedListItems);
                for (var i = scope.availableListItems.length - 1; i >= 0; i--) {
                  scope.availableListItems.splice(i, 1);
                }
                orderSelections();
              };

              scope.addItemsToLeft = function() {
                angular.forEach(scope.rightMouseSelectedItems, function(value, key) {
                  this.push(value);
                }, scope.availableListItems);
                angular.forEach(scope.rightMouseSelectedItems, function(value, key) {
                  for (var i = scope.selectedListItems.length - 1; i >= 0; i--) {
                    if (scope.availableListItems[0] instanceof Object) {
                      if (scope.selectedListItems[i][scope.key] == value[scope.key]) {
                        scope.selectedListItems.splice(i, 1);
                      }
                    } else {
                      if (scope.selectedListItems[i] == value) {
                        scope.selectedListItems.splice(i, 1);
                      }
                    }
                  }
                });
                scope.rightMouseSelectedItems = [];
              };

              scope.addAllItemsToLeft = function() {
                angular.forEach(scope.selectedListItems, function(value, key) {
                  this.push(value);
                }, scope.availableListItems);
                for (var i = scope.selectedListItems.length - 1; i >= 0; i--) {
                  scope.selectedListItems.splice(i, 1);
                }
                scope.rightMouseSelectedItems = [];
              };

              scope.addItemsToTop = function() {
                var prevIdx = -1;
                var person = scope.rightMouseSelectedItems.concat();
                for (var i = 0; i < scope.rightMouseSelectedItems.length; i++) {
                  var idx = scope.selectedListItems.indexOf(scope.rightMouseSelectedItems[i])
                  if (idx - 1 === prevIdx) {
                    prevIdx = idx
                  } else if (idx > 0) {
                    var itemToMove = scope.selectedListItems.splice(idx, 1)
                    scope.selectedListItems.splice(idx - 1, 0, itemToMove[0]);
                  }
                }
              };

              scope.addItemsToDown = function() {
                var prevIdx = scope.selectedListItems.length;
                var revPerson = scope.rightMouseSelectedItems.concat();
                revPerson.reverse();
                for (var i = 0; i < revPerson.length; i++) {
                  var idx = scope.selectedListItems.indexOf(revPerson[i])
                  if (idx + 1 === prevIdx) {
                    prevIdx = idx
                  } else if (idx < scope.selectedListItems.length - 1) {
                    var itemToMove = scope.selectedListItems.splice(idx, 1)
                    scope.selectedListItems.splice(idx + 1, 0, itemToMove[0]);
                  }
                }
              };

            }
          }
        }
      };
    }
  ]);
})(window, window.angular);
