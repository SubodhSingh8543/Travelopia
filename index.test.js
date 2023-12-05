// Import the functions or elements you want to test
const { test, expect } = require('@jest/globals');
const { JSDOM } = require('jsdom');

// Include your HTML content
const htmlContent = `
<body>
<header>
    <nav>
        <ul>
            <li class="logo"><img width="110px" height="45px" src="./Images/logo.png" alt="logo"></li>
            <li class="nav_options"><a href="#">Destnations</a></li>
            <li class="nav_options"><a href="#">Activities</a></li>
            <li class="nav_options"><a href="#">Ways to Travel</a></li>
            <li class="nav_options"><a href="#">Offers</a></li>
            <li class="nav_options"><a href="#">Late Gateways</a></li>
            <li class="nav_options"><a href="#">Sustainable Travle</a></li>
            <li>
                <div class="right_half_div">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i style="color: #009ea6;" class="phoneno">020 3627 8575</i>
                    <i style="color: #009ea6;" class="fa-solid fa-phone"></i>
                    <button class="navbtn small_display">Contact</button>
                    <button class="navbtn small_display">🇮🇳</button>
                    <button class="navbtn btn_humberger"><i class="fa-solid fa-bars"></i></button>
                </div>
            </li>
        </ul>
    </nav>
</header>
<main>
    <section class="destination">
        <div class="navbar">
            <div>
                <img src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2022/05/trustpilot_brandmark_teal-rgb.png"
                    alt="star">
                <div>
                    <p>TRUSTPILOT</p>
                    <p>RATED EXCELLENT</p>
                </div>
            </div>
            <div>
                <img src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2023/05/MicrosoftTeams-image-179.png"
                    alt="refund gurantee">
                <div>
                    <p>REFUND</p>
                    <p>GUARANTEE</p>
                </div>
            </div>
            <div>
                <img src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2023/05/MicrosoftTeams-image-180.png"
                    alt="flexible bookings">
                <div>
                    <p>FLEXIBLE</p>
                    <p>BOOKINGS</p>
                </div>
            </div>
            <div>
                <img src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2023/02/leader-icon-usp.png"
                    alt="star">
                <div>
                    <p>EXPERT LOCAL</p>
                    <p>GUIDES</p>
                </div>
            </div>
        </div>
        <div class="welcome_view">
            <div>
                <h1>Armenia Tours</h1>
                <p>Where Asia and Europe meet in a symphony of mountains, history and tradition.</p>
            </div>
        </div>
        <div class="form_main_div">
            <div>
                <h1>Armenia</h1>
                <p>
                    Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first
                    Christian nations, embracing Christianity in the fourth century. This rich cultural and natural
                    environment makes it an exciting destination for a wide range of adventure, activity and walking
                    holidays.
                </p>
                <p class="show_more_para">
                    There are many pagan sites to visit as well as UNESCO World Heritage-listed churches, which are
                    –
                    almost
                    without exception – built in stunning locations. Surrounded by forests, perched on the top of
                    dramatic
                    gorges or silhouetted before snow-capped mountains, they draw us to magnificent open spaces
                    filled
                    with
                    a huge variety of trees and wild flowers. On Armenia tours we see wonderful mountains, lakes and
                    waterfalls in the countryside – and relish cooling breezes – while the cafés and restaurants of
                    the
                    country’s capital, Yerevan, are proof of an emerging economy. Mount Ararat towers majestically
                    over
                    the
                    city, and beautiful scenery is plentiful.
                </p>
                <p class="show_more_p">Show More <span><i class="fa-solid fa-arrow-down"></i></span></p>
                <p class="show_less_p">Show Less <span><i class="fa-solid fa-arrow-up"></i></span></p>
            </div>
            <div >
                <div>
                    <p>Call for general departures:</p>
                    <h3>020 8131 5465</h3>
                </div>
                <div class="form_div">
                    <form id="inquiry-form">
                        <h1>Make an enquiry</h1>
                        <p>step 1 of 2</p>
                        <label for="destination">DESTINATION</label>
                        <input type="text" id="destination" name="destination" placeholder="Armenia" required>

                        <label for="departure-date">DEPARTURE DATE</label>
                        <input type="date" id="departure-date" name="departure-date" required>

                        <label for="passengers">NUMBER OF PASSENGERS</label>
                        <select id="passengers" name="passengers" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <label for="message">MESSAGE</label>
                        <textarea id="message" name="message" rows="6" cols="50" placeholder="How can we help you" required></textarea>

                        <button class="submit" type="submit">Submit</button>

                        <div>
                            <p>Find out more about how we use your data</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
<footer>
    <p>&copy; 2023 Exodus Armenia Tours. All rights reserved.</p>
</footer>
</body>
`;

// Set up a simple DOM for testing
const dom = new JSDOM(htmlContent);
global.document = dom.window.document;

// Include your index.js file
const { ptag, ptagless } = require('./index');

// Start writing test cases
test('Show More button click should display hidden content', () => {
    // Simulate a click on the Show More button
    ptag.dispatchEvent(new dom.window.Event('click'));

    // Check if the content is displayed
    const showmoreParagrah = dom.window.document.querySelector('.show_more_para');
    // console.log(showmoreParagrah.style.display);
    expect(showmoreParagrah.style.display).toBe('block');
    expect(ptag.style.display).toBe('none');
    expect(ptagless.style.display).toBe('block');
});

test('Show Less button click should hide content', () => {
    // Simulate a click on the Show Less button
    ptagless.dispatchEvent(new dom.window.Event('click'));

    // Check if the content is hidden
    const showmoreParagrah = dom.window.document.querySelector('.show_more_para');
    expect(showmoreParagrah.style.display).toBe('none');
    expect(ptag.style.display).toBe('block');
    expect(ptagless.style.display).toBe('none');
});
