## Tech Stack
[NextJS 13.4.19](https://nextjs.org "NextJS")
[PocketBase 1.0](https://pocketbase.io "PocketBase")

## Setup
### System Requirements:
[Node.js 18.17](https://nodejs.org/en "Node") or later.
macOS, Windows (including WSL), and Linux are supported.

### Automatic Installation
Clone the repository:
`git clone https://github.com/kylefrazier/contract-management-app.git`

Open the newly downloaded project:
`cd contract-management-app`

Install dependencies:
`npm install`

Start pocketbase database:
`./pocketbase serve`

Now open a new termainal instance in the **contract-management-app** repo to allow the pocketbase database to run in parrel to NextJS:
`npm run dev`

🎉 You are now hosting the site 🎉

Pocketbase admin preview: http://127.0.0.1:8090/_/#/collections?collectionId=_pb_users_auth_&filter=&sort=-created
NextJS Site: http://localhost:3000

### Testing Data

Test User Information For Login:

Email: `test@email.com`

Password: `testtest`

