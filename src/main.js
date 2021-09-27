import sayHello from './modules/Mymoduls';
import _ from 'lodash';

const arr = _.concat([1, 2, 3], 4);
sayHello('hello world & lodash:' + arr);