import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LoginView } from "./LoginView";

configure({adapter: new Adapter()})

let wrapper;
let props = { onChange: jest.fn(), onSubmit: jest.fn(), message: "" };

describe('test login component', () => {
  beforeEach(()=>{
    wrapper = shallow(<LoginView {...props}/>)
  })
  it('match snapshots', ()=>{
    expect(wrapper).toMatchSnapshot()
  })
})

