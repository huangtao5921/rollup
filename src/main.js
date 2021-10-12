import sayHello from '@/modules/Mymoduls';
import _ from 'lodash';
import Greeter from '@/modules/Greeter';
import '@/style.css';

const a = new Greeter('hi');
a.greet();

const arr = _.concat([1, 2, 3], 4);
sayHello('hello world & lodash:' + arr);