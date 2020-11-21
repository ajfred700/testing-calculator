import { from } from 'rxjs';
import { division } from './division';
describe('division unit tests',()=>{
  it('Should 2 / 2 = 1',()=>{
    let result = 0;
    result = division(2,2);
    expect(result).toBe(1);
  });
  it('Should 0 / -2 = 0',()=>{
    let result = 0;
    result = division(0,-2);
    expect(result).toBe(0);
  });
  it('Should 3.0 / 0.1416 = 21.1864',()=>{
    let result = 0;
    result = division(3,.1416);
    expect(result).toBe(21.1864406779661);
  });
  it('Should 2.0 / 0.7 = 2.8571',()=>{
    let result = 0;
    result = division(2,.7);
    expect(result).toBe(2.857142857142857);
  });
})
