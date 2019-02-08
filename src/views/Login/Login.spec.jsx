import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "./Login";

configure({ adapter: new Adapter() });

let props = {
  LoginAction: jest.fn(),

};
let wrapper;

describe("test sign up container", () => {
  beforeEach(() => {
    wrapper = shallow(<Login {...props} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle submit', ()=>{
    wrapper.instance().handleSubmit({ preventDefault() {} });
    expect(props.LoginAction).toBeCalled()
  })
  it('should handle onchange', ()=>{
    wrapper.instance().handleChange({ target: { name: "email", value: "josh@me.com" } });
  })
  it('should receive props', ()=>{
    wrapper.setProps({message:"user there"})
  })
});
