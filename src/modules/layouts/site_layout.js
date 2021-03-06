/** @jsx jsx */
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";

import { Header, Footer } from "@modules/navigation";

const Layout = ({ children, pageContext, uri, ...props }) => {
  
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Header />
      <Flex
        as="main"
        sx={{
          flex: "1 0 auto",
          width: "100%",
          m: "0 auto",
          pr: 0,
          position: "relative",
        }}
        className="content-boundary"
      >
          {children}
      </Flex>
      <Footer />
    </Flex>
);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
