import Carosual from "../components/Carosual"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RecentExams from "../components/RecentExams"
import RecommendedExams from "../components/RecommendedExams"


const Home = () => {
  return (
    <>
     <Header />
     <div className="ml-48 mb-11">
      <Carosual />
      <RecommendedExams />
      <RecentExams />
     </div>
     <Footer />
    </>
  )
}

export default Home
