# ITWS2110 WebSys (Group 1) Lab 1, Part 1: Group Portfolio

### General Group Progress
- Made basic html skeleton with header and 2 horizontal boxes for our projects and people sections respectively
  - https://www.w3schools.com/css/css3_flexbox.asp
  - Implemented horizontal box containers using flexbox CSS
  - https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
  - also added containers which allow their children to overflow and enable scroll

- Added some of our previous projects to the page, along with bullet point descriptions

- Met as a group to come up with name, slogan, logo and finish up site:
  - each member added their own image and a link to their resume page (part 2)

- Made sure to use semantic tags like header, section, and h tags
  - used div instead for most of the special CSS containers implemented (e.g. for horizontal containers and scrolling)

- Established readable file structure for ease of future use
  - understandable folder stacking makes for clean and accessible resources
 
### Personal Reflections

- Keira
  - This assignment was a good exercise of my ITWS-1100 muscles I didn't exercise over the summer. It was a good re-acclimation to the web development workflow.
  - Some issues I hit along the way were HTML validation -- I always forget you can't put linebreaks within a list! -- and getting my local GitHub environment set up with our repo. These were both issues that were good to hit now to refresh my HTML memory, test my development environment, and make sure my workflow was at a good starting point for this semester.
  - I referenced some outside sources throughout this assignment. These were [W3Schools](https://www.w3schools.com/cssref/atrule_font-face.php) for implementing a local font on the site, and my own work on [WRPI.org](https://wrpi.org) and my personal site for ITWS-1100 (private repo, site not up). 

- Carli
  - Creating this basic site and linking in the resumes that we each worked on was a good way to practice what was learned last semester and get back into the swing of things.
  - I ran into a few validation issues but was able to get those cleared up (using divs in uls, etc.)
  - Working together makes it very easy for each of us to check each other and make suggestions on how to make the overall site better, as well as what to do for the sake of uniformity.

- Nick
  - pasted some basics from my resume into HTML
  - did some research about hCard formatting to format my contact information in an accessible way
    - https://microformats.org/wiki/hcard
    - useful documentation explaining hCard
  - did some basic CSS styling to prioritize resume clarity and readability
    - I decided not to share CSS between the group page and my resume because I already have a more stylized resume and would like a simpler one for online applications that can be easily read by resume scanners
    - also the CSS on the group page is much more complicated than is necessary for this page and uses different classes and tags that would have bloated by resume's CSS
  - realized I put some sensitive information on the resume that I do not want the entire internet to associate with me if I make my repo public (e.g. personal phone number, personal email, home address) so I learned how to delete files from git commit history!
    - https://tsitsiflora.medium.com/how-to-remove-sensitive-files-from-github-history-without-crying-too-much-a6245dd168d8
    - TA Juniper sent me this tutorial about using the filter repo tool, which made the process very easy to understand
  - validated the site's HTML and CSS (everything looks good)
  - made sure I used semantic tags as much as possible (h tags, sections, ul and li)
    - decided not to use a header tag since all of the header information is already displayed as part of the .vcard div, and the only thing I would put in the header is my name

- Sherlyn
 - I worked on the graphics (photo standardization, logo) and some CSS styling.
 - This assignment was a good warm-up to get back to frontend web development.
 - Working together in person allowed us to resolve issues and discuss ideas very quickly.

- Jacob
  - I reworked my resume to include all new information from last semester and partial information from this semester.
  - Also applied various edits and improvements to the styling to improve the readability.
  - For this first project/lab, seeing as there was no private information that we wanted to keep, we wanted this to be semi-temporarily publicly hosted. For this I knew cloudflare would allow us to tunnel our hosted website from a private webserver to a public domain. Knowing this we were able to set up a private server and host it on the subdomain: https://itws-project.w2sz.org
  - Meeting on a semi regular basis definately helped us to make good progress on the lab.
