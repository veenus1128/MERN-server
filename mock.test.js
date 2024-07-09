//mock getData and process mockedData

//const getData = require("./test/utils")

//mock module
jest.mock('./test/utils',()=>(
    { getData:jest.fn(),
      getRaw:jest.fn()
    } 
         
 ));
 const {getData, getRaw}=require('./test/utils');
 const {processData,processRaw}=require('./test/processData');
 //mock the return value 
 test('Mocked the process data',()=>{
     getData.mockReturnValue('Mocked Data');
     expect(processData()).toBe('processed:Mocked Data')
 });
 test('Mocked Raw Data',()=>{
     getRaw.mockReturnValue(true);
     expect(processRaw()).toBe(true)
 })