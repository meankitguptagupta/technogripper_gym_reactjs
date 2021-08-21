import Header from './components/layout/header';
import Footer from './components/layout/footer';
import VerticleHeader from './components/layout/verticle-header';
import Section1 from './components/home/section1';
import Section2 from './components/home/section2';
import Section3 from './components/home/section3';
import Section4 from './components/home/section4';
import Section5 from './components/home/section5';
import Section6 from './components/home/section6';
import Section7 from './components/home/section7';
import Section8 from './components/home/section8';
import Section9 from './components/home/section9';
import Section10 from './components/home/section10';

function App() {
  return (
    <div className="page-template-default page page-id-1686 page-child parent-pageid-3211 theme-zele bt_bb_plugin_active bt_bb_fe_preview_toggle woocommerce-no-js btHeadingWeight_default btBodyWeight_default btHeadingStyle_default btSupertitleWeight_default btSupertitleDash_default btSubtitleWeight_default btMenuWeight_default btButtonWeight_default btCapitalizeMainMenuItems btCapitalizeHeadlines btHasCrest btHasLogo btHasAltLogo btMenuRightEnabled btHideHeadline btLightSkin btBelowMenu btNoDashInSidebar noBodyPreloader btSquareButtons btDarkTransparentLightHeader btNoSidebar">
      <div className="bt-page-wrap" id="top">

        <VerticleHeader />
        <Header />

        <div className="bt-content-wrap btClear">
          <div className="bt-content-holder">
            <div className="bt-content">
              <div className="bt_bb_wrapper">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;