import Carosual from "../components/Carosual"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RecommendedExams from "../components/RecommendedExams"


const Home = () => {
  return (
    <>
     <Header />
     <div className="ml-48 mr-11">
      <Carosual />
      <RecommendedExams />
     </div>
     <Footer />
    </>
  )
}

export default Home
