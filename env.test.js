let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets=['raja','rani'];
})
beforeEach(()=>{
    console.log('Before each setup is called')
})
afterEach(()=>{
    console.log('After each set up is called')
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case',()=>{
    expect (dataSets.length).toBe(2);
})
test('Data set contains',()=>{
    expect(dataSets).toContain('raja');
})
test('Data set contains',()=>{
    expect(dataSets).toContain('rani');
})