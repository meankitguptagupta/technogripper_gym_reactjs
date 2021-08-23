import Column1 from "./footer/Column1"
import Column2 from "./footer/Column2"
import Column3 from "./footer/Column3"
import Column4 from "./footer/Column4"

export default function Footer() {
    return (
        <div className="bt-site-footer">

            <div className="bt_bb_wrapper">
                <section id="bt_bb_section612274208827c"
                    className="bt_bb_section bt_bb_top_spacing_large bt_bb_bottom_spacing_medium bt_bb_color_scheme_10 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_section_allow_content_outside_no">
                    <div className="bt_bb_port">
                        <div className="bt_bb_cell">
                            <div className="bt_bb_cell_inner">
                                <div className="bt_bb_row_wrapper">
                                    <div className="bt_bb_row">
                                        <Column1 />
                                        <Column2 />
                                        <Column3 />
                                        <Column4 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="btLightSkin"></footer>
        </div>
        // /bt-site-footer
    )
}