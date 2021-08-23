export default function VerticalHeaderTop() {
    return (
        <div className="bt-vertical-header-top">
            <div className="bt-vertical-menu-trigger">&nbsp;
                <div className="bt_bb_icon">
                    <div className="bt_bb_icon_holder"></div>
                </div>
            </div>
            <div className="bt-logo-area">
                <div className="logo">
                    <div className='btCrest'>
                        <a href='https://zele.bold-themes.com/rough/'>
                            <img src='./assets/images/crest-workout.png' className='btCrestImg' alt='Rough' />
                        </a>
                    </div>
                    <span>
                        <a href="https://zele.bold-themes.com/rough/">
                            <img className="btMainLogo" data-hw="2.0083333333333" src="./assets/images/logo_white_03.png" alt="Rough" />
                            <img className="btAltLogo" src="https://zele.bold-themes.com/rough/wp-content/uploads/sites/2/2021/07/logo_dark_gym.png" alt="Rough" />
                        </a>
                    </span>
                </div>
                {/* Crest & Logo */}
            </div>
            {/* /btLogoArea */}
        </div>
        // /btVerticalHeaderTop
    )
}