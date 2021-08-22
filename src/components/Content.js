import Section1 from './content/section1';
import Section2 from './content/section2';
import Section3 from './content/section3';
import Section4 from './content/Section4';
import Section5 from './content/Section5';
import Section6 from './content/Section6';
import Section7 from './content/Section7';
import Section8 from './content/Section8';
import Section9 from './content/Section9';
import Section10 from './content/Section10';

export default function Content() {
    return (
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
    )
}