import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return(
    <>
    <div className="mx-auto" style={{ width: "375px" }}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </div>
    
    </>
  );
}

export default MyApp;
