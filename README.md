# ngListSelect - An Awesome AngularJS Bootstrap supported directive for add/remove functionality  

## Features

* ngListSelect Component allows users to select items from a group of available list.
* Supported both Array of String and Array of Objects.
* Selection of Items can be either through buttons or item double click.
* Supports Ordering of Items under the Selection Block.
* Supported five Built-In Color.
* Bootstrap supported.
* Options for Styling Buttons and Panels.
* Options for changing component width, height and labels of Available & Selection Box. 
* Works in all modern browsers (IE9+, Chrome, Firefox, Safari etc.)

## Requirements

* AngularJS v1.2.0+
* Bootstrap v3.0+ (For Styling, but not mandatory)

##How do I add this to my project?

You can download the minified and unminified version manually from CDN
```
<script type="text/javascript" src="https://cdn.rawgit.com/nidhishkrishnan/ngListSelect/master/ngListSelect.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/nidhishkrishnan/ngListSelect/master/ngListSelect.js"></script>
```
Adding `ngListSelect` Dependency to your app
```
// Add ngListSelect as a dependency to your app
angular.module('your-app', ['ngListSelect']);
```
Use the below syntax in your templates:
```
 <ng-list-select selected-list="selectedList" width="700px" key="name" available-list="availableList" button-style="olive" panel-style="olive"></ng-list-select>
```

## Five Built-In Flavours

### Alpha (Default)
![alpha](https://cloud.githubusercontent.com/assets/6831336/7219787/3eba05c0-e6ce-11e4-876b-b296c17694f5.png)
### Sand
![sand](https://cloud.githubusercontent.com/assets/6831336/7219776/e68dac58-e6cd-11e4-9435-bfdf4e6c5691.png)
### Olive
![olive](https://cloud.githubusercontent.com/assets/6831336/7219778/fe47cb58-e6cd-11e4-8929-81b483b52c28.png)
### Pearl
![pearl](https://cloud.githubusercontent.com/assets/6831336/7219780/12a4e8f6-e6ce-11e4-86e0-18e4d6b42946.png)
### Blue
![blue](https://cloud.githubusercontent.com/assets/6831336/7219781/2b318974-e6ce-11e4-9e7c-81ad3a691c83.png)

Take a look at this [Demo](http://plnkr.co/edit/n3s0ThH5ucTpNkFBwepW?p=preview) 

## Thinking how to Customize, It's Easy!!!

You can customize the styles of ngListSelect component very easily like as follows:

* Since we are using Bootstrap v3.0+ css for styling purpose, for customising simply go to  [http://charliepark.org/](http://charliepark.org/bootstrap_buttons/)
* Generate your suitable style.
* Give a suitable named for the class , let say ```"ghost"```.
* A sample example is shown below which I have created.

```
.ghost {
  background-color: hsl(205, 28%, 26%) !important;
  background-repeat: repeat-x;
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#7c9db5", endColorstr="#2f4554");
  background-image: -khtml-gradient(linear, left top, left bottom, from(#7c9db5), to(#2f4554));
  background-image: -moz-linear-gradient(top, #7c9db5, #2f4554);
  background-image: -ms-linear-gradient(top, #7c9db5, #2f4554);
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #7c9db5), color-stop(100%, #2f4554));
  background-image: -webkit-linear-gradient(top, #7c9db5, #2f4554);
  background-image: -o-linear-gradient(top, #7c9db5, #2f4554);
  background-image: linear-gradient(#7c9db5, #2f4554);
  border-color: #2f4554 #2f4554 hsl(205, 28%, 17.5%);
  color: #fff !important;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.56);
  -webkit-font-smoothing: antialiased;
}
.ghost .panel-heading {
  color: #fff !important;
}
```
* Use the ```ghost``` theme in template like as shown below
 
```<ng-list-select button-style="ghost" panel-style="ghost" selected-list="selectedList" width="700px" key="name" available-list="availableList"></ng-list-select>``` 

### Ghost
![ghost](https://cloud.githubusercontent.com/assets/6831336/7219916/9659948a-e6d3-11e4-8647-2b19ced07cf4.png)

Take a look at this [Working Demo](http://plnkr.co/edit/cU1efOxfqmJ26TOrye1A?p=preview)

## Want to use it inside a modal popup

* Take a look this [Demo](http://embed.plnkr.co/Lw8lAS2NwQMDQgHjYBEo/preview)

## Attributes

#### availableList (required)
* Accepts **Array of String** as well as **Array of Objects**, but supports either one, which should be matched to ```selectedList```, eg. ```["Apple, Orange"]``` or ```[{name: "Apple"...}, {name: "Orange"...}]```.
*  Used for displaying available detail list under the left Available box which is used for selection.
* Should not be empty.
* Supports two way binding.
* Should be detoted as ```available-list```.
* Example for availableList : ```<ng-list-select available-list="yourAvailableList"... ```.

#### selectedList (required)
* Accepts **Array of String** as well as **Array of Objects**, but supports either one, which should be matched to ```availableList```, eg. ```["Apple, Orange"]``` or ```[{name: "Apple"...}, {name: "Orange"...}]```.
* Used for displaying selection list under the right Selection box.
* Can be empty.
* Supports two way binding.
* Should be detoted as ```selected-list```.
* Example for selectedList : ```<ng-list-select selected-list="yourSelectedList"... ```.


#### key (optional)
* Accepts String value, eg. ```name```.
* In the case if user is using **Array of Objects** in ```selectedList```, then the appropriate key should be mentioned to display its values. eg. if it is ```[{name: "Apple"...}, {name: "Orange"...}]``` then if ```"name"``` is given as key value, then it will shows ```Apple```, ```Orange``` within the box.
* Example for key : ```<ng-list-select selected-list="yourSelectedList" key="yourKey"... ```.

#### buttonStyle (optional)
* Accepts string value, eg. ```"olive"```, ```"red"```.
* Used for customizing the styles of buttons, user can pass the customized css class or in-built style values for ```buttonStyle``` to style the buttons.
* Should be detoted as ```button-style```.
* Has five built-in styles (```pearl, blue, alpha, sand, olive```), ```alpha``` is the default style.
* Example for buttonStyle : ```<ng-list-select button-style="alpha"... ```.

#### panelStyle (optional)
* Accepts string value, eg. ```"olive"```, ```"red"```.
* Used for customizing the styles of panel boxes (**Available** and **Selected**), user can pass the customized css class or in-built style values for ```panelStyle``` to style the panels.
* Should be detoted as ```panel-style```.
* Has five built-in styles (```pearl, blue, alpha, sand, olive```), ```alpha``` is the default style.
* Example for panelStyle : ```<ng-list-select panel-style="alpha"... ```.

#### width (optional)
* Accepts string value, eg. ```"700px"```.
* Used for changing the width of the ```add-remove``` component.
* Default width is ```"144px"```.
* Example for width : ```<ng-list-select width="800px"... ```.

#### height (optional)
* Accepts string value, eg. ```"700px"```.
* Used for changing the height of the ```add-remove``` component.
* Default height is ```"80%"```.
* Example for height : ```<ng-list-select height="800px"... ```.

#### availableLabel (optional)
* Accepts string value, eg. ```"Available Peoples"```.
* Used for changing the label of the **Available Box**.
* Default label is ```"Available"```.
* Should be detoted as ```available-label```.
* Example for availableLabel : ```<ng-list-select available-label="Available Peoples"... ```.

#### selectedLabel (optional)
* Accepts string value, eg. ```"Selected Peoples"```.
* Used for changing the label of the **Selected Box**.
* Default label is ```"Selected"```.
* Should be detoted as ```selected-label```.
* Example for selectedLabel : ```<ng-list-select selected-label="Selected Peoples"... ```.

## Working Demo

* ngListSelect Demo :[Demo](http://embed.plnkr.co/EowRjzQgceIQMYUEs87M/) 
* ngListSelect Five Flavours - [Demo](http://embed.plnkr.co/n3s0ThH5ucTpNkFBwepW/)
* ngListSelect Custom ```ghost``` Theme - [Demo](http://embed.plnkr.co/cU1efOxfqmJ26TOrye1A/)
* ngListSelect in modal popup - [Demo](http://embed.plnkr.co/Lw8lAS2NwQMDQgHjYBEo/preview)

## License

MIT

## Contributions

Contributions are very welcome! Please contact me to discuss: nidhishkrishnan@gmail.com
