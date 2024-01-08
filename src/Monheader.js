export function Monheader({Logo, cart}) {
    return (
    <header>
        <div className='container'>
            <div className='header'>
                <div className='headerlogo'>
                    <img
                        className='logi'
                        src={Logo}
                        alt='Image du menu'
                    />
                </div>
                <div className='header--address'>
                    <input
                        type='text'
                        name=''
                        id=''
                        placeholder='*****'
                    />
                    <p>to</p>
                    <input
                        type='text'
                        name=''
                        id=''
                        placeholder='******'
                    />
                </div>
                <div className='header--buttons'>
                    <div>
                        <a href='#'>Sign In</a>
                        <a href='#'>Register</a>
                    </div>
                    <div class='cart-icon'>
                        <div>
                            <iconify-icon
                                icon='ion:cart'
                                width='30'
                                height='30'></iconify-icon>
                        </div>
                        <div id='cart' class='bubble'>
                            {cart}
                        </div>
                    </div>
                    <div className='header--cart'>
                        <svg
                            viewBox='0 0 40 72'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'></svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
