// HOME

function Home() {
    // TEMPLATE
    return <div className="home-view">
 
    <header className="home-header">
        <h1><a href="" id="home-link">Home</a></h1>

        <div>
            <button id="new-post-button">+</button>
            <a href="" className="profile-link">NanoPucela</a>
            <button>Logout</button>
        </div>
    </header>

    <div className="view">
        <h2>Changes credentials</h2>

        <form className="form">
            <h3>Change your email: </h3>

            <label htmlFor="new_email">New email</label>
            <input id="new_email" type="text" />

            <label htmlFor="confirm-new-email">Confirm new email</label>
            <input id="confirm-new-email" type="text" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" />

            <button type="submit">Change Email</button>
        </form>

        <form className="form">
            <h3>Change your password: </h3>

            <label htmlFor="current_password">Actual password</label>
            <input id="current_password" type="text" />

            <label htmlFor="new_password">New password</label>
            <input id="new_password" type="password" />

            <label htmlFor="again_new_password">Repeat new password</label>
            <input id="again_new_password" type="password" />

            <button type="submit">Change Password</button>
        </form>

    </div>

    <div className="view">
        <h2>New Post</h2>

        <form className="form">
            <label htmlFor="image-input">Image</label>
            <input id="image-input" type="url" />

            <label htmlFor="text-input">Text</label>
            <input id="text-input" type="text" />

            <button type="submit">Post</button>
            <button>Cancel</button>
        </form>
    </div>

    <div className="view">
        <article className="post">
            <h2>wendy@darling.com</h2>
            <img className="post-img" src="https://i.etsystatic.com/27087751/r/il/45a140/3041590242/il_fullxfull.3041590242_o4qq.jpg" />
            <p>my sweety!</p>
            
            <button>🤍</button>
        </article>
        <article className="post">
            <h2>peter@pan.com</h2>
            <img className="post-img" src="https://www.semana.com/resizer/U2dYNVlzGiHK5T-EV_jhACYU-Ow=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JO53UT7DKVGVBNXQ5F37YJJZ3A.jpg" />
            <p>my granpa!</p>
            <button>🤍</button>
        </article>
    </div>
</div>
}