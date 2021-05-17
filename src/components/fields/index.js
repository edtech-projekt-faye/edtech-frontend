import './style.css';

const fields = () => {
    return (
        <>
            <form>
                <div class="group">
                    <input type="text" required="required" /><span class="highlight"></span><span class="bar"></span>
                    <label>Email</label>
                </div>
                <div class="group">
                    <input type="password" required="required" /><span class="highlight"></span><span class="bar"></span>
                    <label>Password</label>
                </div>
                <div class="btn-box">
                    <button class="btn-fields btn-submit" type="submit">submit</button>
                    <button class="btn-fields btn-cancel" type="button">cancel</button>
                </div>
            </form >

            <form>

                <div class="question">
                    <input type="text" required />
                    <label>First Name</label>
                </div>
                <div class="question">
                    <input type="text" required />
                    <label>Last Name</label>
                </div>

                <button>Submit</button>
            </form>

        </>
    );
}

export default fields;