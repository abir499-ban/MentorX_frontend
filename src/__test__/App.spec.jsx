import {render} from '@testing-library/react'
import '../App'
test('demo', ()=>{
    expect(true).toBe(true)
})

test('test the main page', ()=>{
    render(<App/>)
    expect(true).toBeTruthy()
})