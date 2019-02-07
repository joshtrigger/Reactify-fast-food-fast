import React from "react";
import { shallow, configure } from "enzyme";
import { SignUpView } from "./SignUpView";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
let props = { onChange: jest.fn(), onSubmit: jest.fn(), message: "" };

describe("test sign up views", () => {
  beforeEach(() => {
    wrapper = shallow(<SignUpView {...props} />);
  });
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
