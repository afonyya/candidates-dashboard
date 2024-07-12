Main task:
  Create a simple Nuxt 3 project based on TypeScript for managing candidates.
  Tech stack: Nuxt 3, typescript, pinia, vee-validate, Node.js (h3), Quasar.

Logic:
  The app should provide an ability to view and manage candidates.
  It would consist of three pages: home (candidates list), add candidate and edit candidate pages.

interface Candidate {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  skills: string[];
  resume_file: File | string;
  github_url: string;
}

1. Home page
  ● Page title
  ● Search input to search candidates by first_name, last_name, email and skills.
  ● Add candidate button (to open add candidate page)
  ● Candidates table with the following columns: full name, email, skills, actions (edit
  button - to open edit candidate page). Candidates list data can be mocked in pinia store.

2. Add candidate page
  ● Page title
  ● Candidate form
  ● Back and save buttons (back - redirects a user back to home page; save - adds a
  new user to candidate list in pinia store)

3. Edit candidate page (same behavior as Add candidate page)
  ● Page title
  ● Candidate form
  ● Back and save buttons (back - redirects a user back to home page; save -
  updates the user in pinia store)

Candidate form fields:
  ● First name (string, required)
  ● Last name (string, required)
  ● Email (string, required, validation for valid email)
  ● Bio (textarea, string, optional)
  ● Skills (list of text input elements with delete button; add button at the bottom on
  the list to add more skills; at least one skill is required; a skill input itself cannot
  be empty)
  ● Resume file (file input; required; validation for max size of 2MB)
  ● Github URL (string, optional, validation for valid url)

Validation triggers: blur and input events, click on save button

Additional task:
Create Node.js apis within the same Nuxt app (via h3 framework) which are needed to store and manage candidates list. Candidates data can be stored in a simple json file or Firebase. No validation and authentication required. After that consume the apis on client side.
1. GET/candidates(toreturnlistofcandidates)
2. GET/candidate/:id(toreturnasinglecandidateonEditcandidatepage) 3. POST/candidate(toaddanewcandidate)
4. PUT/candidate/:id(toupdateanexistingcandidate)

