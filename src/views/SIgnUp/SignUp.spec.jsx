import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SignUp } from "./SignUp";

configure({ adapter: new Adapter() });

let props = {
  SignUpAction: jest.fn(),

};
let wrapper;

describe("test sign up container", () => {
  beforeEach(() => {
    wrapper = shallow(<SignUp {...props} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle submit', ()=>{
    wrapper.instance().handleSubmit({ preventDefault() {} });
    expect(props.SignUpAction).toBeCalled()
  })
  it('should handle onchange', ()=>{
    wrapper.instance().handleChange({ target: { name: "email", value: "josh@me.com" } });
  })
  it('should receive props', ()=>{
    wrapper.setProps({message:"user there"})
  })
});
