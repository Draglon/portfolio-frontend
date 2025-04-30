import home from "./home";
import localeSwitcher from "./localeSwitcher";
import navigation from "./navigation";
import shared from "./shared";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...home,
  ...localeSwitcher,
  ...navigation,
  ...shared,
};
