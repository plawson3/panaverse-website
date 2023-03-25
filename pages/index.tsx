import Courses from "../components/Courses";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";


const IndexPage = () => (
  <Layout title="Home">
    <Hero />
    <Info />
    <Jumbotron />
    <Courses /> 
    <Newsletter/>
    <Footer/>
  </Layout>
);

export default IndexPage;
