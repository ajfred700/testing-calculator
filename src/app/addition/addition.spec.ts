import { from } from 'rxjs';
import { addition } from "./addition";
describe('addition unit tests',() =>{
  //Using AAA (Arrange-Act-Assert);
  it('Should add 2 + 2 = 4',()=>{
    //Arrange
    let result  = 0;

    //Act
    result = addition(2,2);

    //Assert
    expect(result).toBe(4);
  })
  xit('Should add 0 + -2 = -2',()=>{
    //Arrange

    //Act

    //Assert
  })
  xit('Should add 3.0 + 0.1416 = 6.1416',()=>{
    //Arrange

    //Act

    //Assert
  })
  xit('Should add 2.0 + 0.7 = 2.7',()=>{
    //Arrange

    //Act

    //Assert
  })
})
