export default function Header() {
    return (
        <header className="mainHeader btClear ">
            <div className="main-header-inner">
                <div className="topBar bt-clear">
                    <div className="topBarPort port bt-clear">
                        <div className="topTools btTopToolsLeft">
                            <div className="btIconWidget  btAccentIconWidget btWidgetWithText">
                                <div className="btIconWidgetIcon"><span data-ico-fontawesome5solid="&#xf3c5;"
                                    className="bt_bb_icon_holder"></span></div>
                                <div className="btIconWidgetContent"><span className="btIconWidgetTitle">9560850036 Lorem Ipsum, Amarpali Silicon City, Sector 76, Noida - 201301</span>
                                </div>
                            </div>
                            <div className="btIconWidget  btAccentIconWidget btWidgetWithText">
                                <div className="btIconWidgetIcon"><span data-ico-fontawesome5regular="&#xf017;"
                                    className="bt_bb_icon_holder"></span></div>
                                <div className="btIconWidgetContent"><span className="btIconWidgetTitle">Mon-Sun: 8:00 - 22:00</span></div>
                            </div>
                        </div>
                        {/* /ttLeft */}
                        <div className="topTools btTopToolsRight">
                            <a href="https://twitter.com/bold_themes" target="_blank" className="btIconWidget  btAccentIconWidget">
                                <div className="btIconWidgetIcon"><span data-ico-fontawesome="&#xf099;" className="bt_bb_icon_holder"></span>
                                </div>
                            </a><a href="https://www.facebook.com/boldthemes/" target="_blank"
                                className="btIconWidget  btAccentIconWidget">
                                <div className="btIconWidgetIcon"><span data-ico-fontawesome="&#xf09a;" className="bt_bb_icon_holder"></span>
                                </div>
                            </a><a href="https://www.youtube.com/channel/UCPL5LgX32KsbQ1i9nV-xiKA" target="_blank"
                                className="btIconWidget  btAccentIconWidget">
                                <div className="btIconWidgetIcon"><span data-ico-fontawesome="&#xf16a;" className="bt_bb_icon_holder"></span>
                                </div>
                            </a><a href="https://www.instagram.com/" target="_blank" className="btIconWidget  btAccentIconWidget">
                                <div className="btIconWidgetIcon"><span data-ico-fontawesome="&#xf16d;" className="bt_bb_icon_holder"></span>
                                </div>
                            </a>
                        </div>
                        {/* /ttRight */}
                    </div>
                    {/* /topBarPort */}
                </div>
                {/* /topBar */}
                <div className="bt-logo-area menu-holder btClear">
                    <div className="port">
                        <div className="bt-horizontal-menu-trigger">&nbsp;<div className="bt_bb_icon">
                            <div className="bt_bb_icon_holder"></div>
                        </div>
                        </div>

                        <div className="logo">
                            <div className='btCrest'></div>
                            <span>
                                <a href="./">
                                    <img className="btMainLogo" data-hw="2.0083333333333" src="./assets/images/logo_white_03.png" alt="Rough" /><img className="btAltLogo" src="./assets/images/crest-workout.png" alt="Rough" />
                                </a>
                            </span>
                        </div>
                        {/* Crest & Logo */}



                        <div className="menuPort">
                            <div className="topBarInMenu">
                                <div className="topBarInMenuCell">
                                    <div className="btTopBox woocommerce widget_shopping_cart">
                                        <h2 className="widgettitle">Cart</h2>
                                        <div className="widget_shopping_cart_content"></div>
                                    </div>
                                </div>
                                {/* /topBarInMenu */}
                            </div>
                            {/* /topBarInMenuCell */}
                            <nav>
                                <ul id="menu-primary-menu" className="menu">
                                    <li id="menu-item-44"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-page-ancestor current-menu-ancestor current-menu-parent current-page-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-44">
                                        <a href="./">Home</a>
                                    </li>
                                    <li id="menu-item-43"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-43">
                                        <a href="#">About</a>
                                    </li>
                                    <li id="menu-item-2006"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2006">
                                        <a href="#">Programs</a>
                                    </li>
                                    <li id="menu-item-2006"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2006">
                                        <a href="#">Fitness Centers</a>
                                    </li>
                                    <li id="menu-item-40"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-40">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li id="menu-item-41"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41">
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                        {/* .menuPort */}
                    </div>
                    {/* /port */}
                </div>
                {/* /menu-holder / bt-below-logo-area */}
            </div>
            {/* / inner header for scrolling */}
        </header>
        // /.mainHeader
    )
}