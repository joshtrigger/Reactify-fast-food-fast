import React from "react";
import { shallow, configure } from "enzyme";
import { NavbarPage } from "./NavBar";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
let props = {};

describe('test navbar', () => {
  beforeEach(()=>{
    wrapper=shallow(<NavbarPage />)
  })
  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot()
  })
})

