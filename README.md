# ngAddRemove - An AngularJS Bootstrap supported directive for add/remove functionality  

## Features

* ngAddRemove Component allows users to select items from a group of available list.
* Supported both Array of String and Array of Objects.
* Selection of Items can be either through buttons or item double click.
* Supports Order of Items under the Selection Block.
* Supported six In-Built Color.
* Bootstrap supported.
* Options for Styling Buttons and Panels.
* Works in all modern browsers (IE9+, Chrome, Firefox, Safari etc.)

## Requirements

* AngularJS v1.2.0+
* Bootstrap v3.0+ (For Styling, but not mandatory)

##How do I add this to my project?

You can download the minified and unminified version manually from CDN
```
<script type="text/javascript" src="https://cdn.rawgit.com/nidhishkrishnan/ngAddRemove/master/ngAddRemove.js"></script>
```
Adding `ngAddRemove` Dependency to your app
```
// Add ngAddRemove as a dependency to your app
angular.module('your-app', ['addRemove']);
```
Use the below syntax in your templates:
```
<ng-add-remove selected="selectedList" available="availableList"></ng-add-remove>
```

## Attributes

#### selected 
* Accepts Array of String as well as Array of Objects, eg. ```["Apple, Orange"], [{name: "Apple"}, {name: "Orange"}]```
* For displaying the text for option and option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup label="- - Select your choice - -">``` and for
 option ```<ng-option label="Cat">```

#### value 
* Accepts String value, eg. "cat"
* For assigning value for option and option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup value="0" ...``` and for
 option ```<ng-option value="cat" ...```

#### width (optional)
* Accepts String value, eg. 150px
* For increasing the width of the select box
* Applicable for ```<ng-select-box>``` only
* Example: ```<ng-select-box width="150px"...```

#### selected (optional) 
* Accepts bollean value, eg. true or false
* For selecting a particular option or option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup selected="true" ...``` and for
 option ```<ng-option selected="true" ...```

#### image (optional) 
* Accepts String value, eg. "cat.png"
* For adding images for a particular option or option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup image="cat.png" ...``` and for
 option ```<ng-option image="cat.png" ...```

#### text-color (optional) 
* Accepts String value, eg. "red"
* For applying colors for a particular option text or option-group text
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup text-color="red" ...``` and for
 option ```<ng-option text-color="red" ...```

## Working Demo

Try out the demo :
[Demo](http://plnkr.co/edit/kjsK8kIS1cTWrlCOEclZ?p=preview)  


