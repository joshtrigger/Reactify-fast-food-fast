import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LandingPage  from "./landingPage";

configure({ adapter: new Adapter() });

let wrapper;

describe("test ladning page", () => {
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
