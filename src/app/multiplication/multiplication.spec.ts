import { from } from 'rxjs';
import { multiplication } from './multiplication';
describe('multiplication unit tests',()=>{
  it('Should 2 * 2 = 4',()=>{
    let result = 0;
    result = multiplication(2,2);
    expect(result).toBe(4);
  });
  it('Should 0 * -2 = 0',()=>{
    let result = 0;
    result = multiplication(0,-2);
    expect(result).toBe(0);
  });
  it('Should 3.0 * 0.1416 = 0.4248',()=>{
    let result = 0;
    result = multiplication(3,.1416);
    expect(result).toBe(.4248);
  });
  it('Should 2.0 * 0.7 = 1.4',()=>{
    let result = 0;
    result = multiplication(2,.7);
    expect(result).toBe(1.4);
  });
})