import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from './ReactAdapter';

configure({ adapter: new Adapter() });
