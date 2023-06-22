const user_con = document.querySelector('.user-container')
    const regi_btn = document.querySelector('.registration-btn')
    const login_btn = document.querySelector('.login-btn')
    const explore_btn = document.querySelector('.explore-btn')
    
    regi_btn.addEventListener('click', () => {
        user_con.classList.add('login-section--display')
    })
    
    login_btn.addEventListener('click', () => {
        user_con.classList.remove('login-section--display')
    })