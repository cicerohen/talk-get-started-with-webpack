import 'jquery';

import Module1 from 'modules/module1';
import Module2 from 'modules/module2';
import Module3 from 'modules/module3';

import webpackImg from 'images/webpack.png';
require('styles/main.scss');

console.log(webpackImg);

console.log(VARIABLE);

console.log(jQuery);

new Module1().method();
new Module2().method();
new Module3().method();


