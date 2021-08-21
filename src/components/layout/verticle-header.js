export default function VerticleHeader() {
    return (
        <div className="bt-vertical-header-top">
            <div className="bt-vertical-menu-trigger">
                &nbsp;
                <div className="bt_bb_icon">
                    <div className="bt_bb_icon_holder"></div>
                </div>
            </div>
            <div className="bt-logo-area">
                <div className="logo">
                    <div className='btCrest'>
                        <a href='#'>
                            <img src='./assets/images/crest-workout.png' className='btCrestImg' alt='Rough' />
                        </a>
                    </div>
                    <span>
                        <a href="#">
                            <img className="btMainLogo" data-hw="2.0083333333333" src="./assets/images/logo_white_03.png" alt="Rough" />
                            <img className="btAltLogo" src="./assets/images/logo_dark_gym.png" alt="Rough" />
                        </a>
                    </span>
                </div>
                {/* Crest & Logo */}
            </div>
            {/* /btLogoArea */}
        </div>
    )
}