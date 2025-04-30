import home from "./home";
import navigation from "./navigation";
import localeSwitcher from "./localeSwitcher";
import shared from "./shared";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...home,
  ...navigation,
  ...localeSwitcher,
  ...shared,
};
