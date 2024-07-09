//test cases for our unit fun sum
const sum =require('./test/sum')

//jest test cases
//test function to test
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    // toBe()->exactly equal
    //expect to execute unit fun
})
//run 'npm test' under server folder
test('object in array',()=>{
    const data ={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})

//toBeNull -> if the recived value is NULL
test('value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})

//toBeDefined -> if a value/variable is defined or not
test('value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})

//toBetruthy ->recived value should be truthy
test('value is True',()=>{
    const bool =true
    expect(bool).toBeTruthy
})

//toBeFalsy ->recived value should be Falsy
test('value is False',()=>{
    const bool =false
    expect(bool).toBeFalsy
})

