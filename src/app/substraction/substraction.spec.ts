
import {from} from 'rxjs';
import { substraction } from './substraction';
describe('substraction unit tests',() => {
  //AAA
  it('should 2 - 2 = 0',()=>{
    let result = 0;
    result = substraction(2,2);
    expect(result).toBe(0);
  })
  it(' should 0 - -2 = 2',()=>{
    let result = 0;
    result = substraction(0,-2);
    expect(result).toBe(2);
  })
  it('should 3.0 - 0.1416 = 2.8584',()=>{
    let result = 0;
    result = substraction(3.0,.1416);
    expect(result).toBe(2.8584);
  })
  it('should 2.0 - 0.7 = 1.3',()=>{
    let result = 0;
    result = substraction(2.0,0.7);
    expect(result).toBe(1.3);
  })
});