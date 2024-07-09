const mongoose=require('mongoose')
describe('MONGODB CONNECTED',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv:sharmilaveenus123:p6y1ndp0hEg8ZZKR@cluster0.ibi3e4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

        await mongoose.connect(url)
    })
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1);
    })
})