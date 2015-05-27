# DareDev README
Challenges for DareDev May 28th, 2015

# Getting Started

1. Install [Google Chrome](https://www.google.com/chrome).
2. Install Node.js, either from [its website](https://nodejs.org/) or using [Homebrew](http://brew.sh/).
3. From the root of this project, run `npm install`.
4. Disable the OS X firewall (so that the emcee can load your local webserver, to see your site in progress).
5. Run `npm start`.
6. Put the webpage that just opened on the external monitor.
7. So that you won't accidentally switch the external monitor away from that page:
    1. Make the Mission Control page of your OS X settings look like [this](readme_images/spaces_settings.png).
    2. Disable Hot Corners on the Mission Control page.
    3. Remove Chrome from the Dock to prevent you accidentally clicking on it.

# Rules

NO browser previews. Anything else is fair game. Use syntax checkers and linters to avoid simple mistakes.
Javascript is not permitted (it wouldn't help you very much anyway). Our local
development will provide a bit of help (see below).

# Development

Each challenge's HTML is defined in `/challenges/CHALLENGE_NUMBER/index.html`
and its CSS is defined in `/challenges/CHALLENGE_NUMBER/styles.css`.

You may use SCSS, LESS, etc. so long as you compile to CSS within the challenge
directory. The result must be able to be viewed by loading `index.html`.

Please save regularly, so that the attendees will be able to view your submission
as it evolves (livereload monitors HTML and CSS within the challenge directories).

Basic HTML and CSS linters will also run on HTML and CSS files within the
challenge directories every time you save, so check the terminal for errors if
something isn't rendering the way you think it ought to be.

Please flag competition staff (in the Mixmax t-shirts) if you need help.

# Judging

Each index.html file will be loaded by an up-to-date Chrome web browser. Your submission will only
be judged on the final rendered output of the index.html file. Your submission will not be judged on
code quality or any other HTML/CSS 'best practices'. The only factor is how the final rendered
index.html looks compared to the referrence design.

# Challenge 1
# Challenge 2
# Challenge 3
# Challenge 4
# Challenge 5
