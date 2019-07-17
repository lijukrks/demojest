import React from 'react';
import Enzyme ,{shallow}from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter:new EnzymeAdapter() });

const setup = (props={},state=null)=>{
  const wrapper = shallow(<App/>)
  if(state) wrapper.setState(state)
  return wrapper;
}

const findByAttr =(wrapper,value)=>{
  return wrapper.find(`[data-test='${value}']`);
}

test('Renders without errors : ', () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);  
});

test('Render inrement button : ',()=>{
  const wrapper = setup();
  const button = findByAttr(wrapper,'increment-button');
  expect(button.length).toBe(1);  
})
test('Render counter display : ',()=>{
  const wrapper = setup();
  const conterDisplay = findByAttr(wrapper,'counter-display');
  expect(conterDisplay.length).toBe(1);  
})
test('Counter starts at 0 : ',()=>{
  const wrapper = setup();
  const initialCounterCommit = wrapper.state("counter");
  expect(initialCounterCommit).toBe(0);  
})
test('Clicking increment button increment counter display : ',()=>{

  const counter = 7
  const wrapper = setup(null,{counter})
  const button = findByAttr(wrapper,'increment-button');
  button.simulate("click")
  wrapper.update()
  const conterDisplay = wrapper.find("[data-test='counter-display']");
  expect(conterDisplay.text()).toContain(counter + 1)

})



