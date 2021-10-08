import sayHello from './modules/Mymoduls';
import _ from 'lodash';
import Greeter from './modules/Greeter';

const a = new Greeter();
a.greet();

const arr = _.concat([1, 2, 3], 4);
sayHello('hello world & lodash:' + arr);