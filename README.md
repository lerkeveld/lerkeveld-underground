# lerkeveld-underground
Frontend of the Lerkies-only part of the Lerkeveld website. For a live demo, see https://lerkies.simonbos.me/underground/.

## Development
Installation requirements:
- npm

Installation instructions:

```bash
git clone 'https://github.com/lerkeveld/lerkeveld-underground' .
cd lerkeveld-underground
npm install
touch .env.local
```

Add following **development** configuration options to `.env.local`:
```node
REACT_APP_API_URL="http://localhost:8888/api"
REACT_APP_CREDENTIALS="include"
```
Some optional configuration changes:
- Change `REACT_APP_API_URL` to your private IP address to allow devices on your LAN using the development version of the Lerkeveld Underground to connect to the backend.

Run the development server with `npm start` and be sure to run the backend (see https://github.com/lerkeveld/lerkeveld-backend).

## Production
Use the development installation instructions to create the JavaScript bundle, but change the environment variables:
- API and frontend on the **same origin**: change `REACT_APP_API_URL` and `REACT_APP_CREDENTIALS` to respectively `"/api"` and `"same-origin"`
- API and frontend on the **an other origin**: change `REACT_APP_API_URL` and `REACT_APP_CREDENTIALS` to respectively the API url and `"include"`

Place the JavaScript bundle at `/underground` of the webroot.
(Note: it is not necessary to create the JavaScript bundle on the remote machine on which the bundle is deployed.)
