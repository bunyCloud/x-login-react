import React from "react";
import { Layout } from "antd";
import HomePage from "./Homepage";

const { Header, Content, Footer } = Layout;

const LandingPage = () => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        {/* Place your navigation or brand logo here */}
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, marginTop: 16, background: "#fff", minHeight: 380 }}>
          {/* Main content of the landing page goes here */}
          <h1>Welcome to Our Website</h1>
          <p>This is a simple landing page using Ant Design components.</p>
        <HomePage />
        </div>

      </Content>
      <Footer style={{ textAlign: "center" }}>
        Buny.Cloud ©{new Date().getFullYear()} Created by BUNY
      </Footer>
    </Layout>
  );
};

export default LandingPage;
