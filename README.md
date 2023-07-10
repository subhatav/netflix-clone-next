# Netflix Clone (Basic)

This is a **full-stack** website for *streaming* your **entertainment**.

The *project* is end-to-end **developed** in **TypeScript** using:

* **NodeJS** with **NPM** as the *foundation*;
* **ReactJS** library with **NextJS** for *framework*;
* **NextAuth** with **Bcrypt** for *authorization*;
* **Prisma** with **Adapter** for *data abstraction*;
* **SWR** for *reactive data fetching* purposes;
* **Zustand** for *reactive state management*;
* **Axios** and **Lodash** for *utility* functions;
* **Tailwind** CSS with **HeroIcons** for *styling*.

<hr />

## Requirements

The **stable** releases of the following *technologies* are used:

| Technology | Version | Technology     | Version |
| ---------- | ------- | -------------- | ------- |
| Node       | 18.6+   | NPM            | 9.8+    |
| TypeScript | 5.1+    | React & DOM    | 18.2+   |
| Next       | 13.4+   | NextAuth       | 4.22+   |
| Prisma     | 4.16+   | Prisma Adapter | 1.0+    |
| SWR        | 2.2+    | Zustand        | 4.3+    |
| Axios      | 1.4+    | Lodash         | 4.17+   |
| Bcrypt     | 5.1+    | Autoprefixer   | 10.4+   |
| PostCSS    | 8.4+    | Tailwind CSS   | 3.3+    |
| ReactIcons | 4.10+   | HeroIcons      | 2.0+    |

P.S. For *hosted* usage, only **Vercel** deployment with **variables** is *sufficient*.

<hr />

## Variables

The **environment** *variables* to be **used**, are:

### Mongo Database URL

   1. **Go** to the [Mongo Atlas Console](https://cloud.mongodb.com) and **select** the `Netflix Clone` *project*.
   2. **Select** the `DataCluster` *deployment* and **click** on `Connect` *button*.
   3. **Choose** the `MongoDB for VS Code` *option* and **copy** the *URL*.
   4. **Append** the *name* of the **Database** [`/prisma_netflix`] at the *end*.
   5. **Replace** the **Credential** *phrases* with their actual *values*.
   6. **Enter** the entire **Database** *URL* in the `DATABASE_URL` *field*.

### NextAuth Secrets

   1. For the `NEXTAUTH_SECRET` *field*, **enter** the *value* [`NEXTAUTH-SECRET`].
   2. For the `NEXTAUTH_JWT_SECRET` *field*, **enter** the *value* [`NEXTAUTH-JWT-SECRET`].

### GitHub API Client ID and Secret

   1. For the *local* deployment, **go** to this [GitHub OAuth App](https://github.com/settings/applications/2254045) for **development** purposes.
   2. For the *remote* deployment, **go** to this [GitHub OAuth App](https://github.com/settings/applications/2256288) for **production** purposes.
   3. **Copy** the `Client ID` and `Client Secret` *variables*.
   4. **Enter** them in the `GITHUB_ID` and `GITHUB_SECRET` *fields*.

### Google API Client ID and Secret

   1. **Browse** to the *projects* in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=netflix-clone-392113).
   2. **Select** the `Website Client` *client* and **copy** the *variables*.
   3. **Enter** them in the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` *fields*.


<hr />

## Development

For **development** purposes, *follow* these **steps**:

1. **Run** this *command* to **install** all the *dependencies*:

    `npm install`

2. **Run** this *command* to keep **watch** and **start** the *local* server:

    `npm run dev`

3. **Go** to this *URL* to **use** the application:

    `http://localhost:3000`

<hr />

## Production

For **production** purposes, *follow* these **steps**:

1. **Run** this *command* to **install** the required *dependencies*:

    `npm install`

2. **Run** this *command* to **minify** and **build** the *React* project:

    `npm run build`

3. **Run** this *command* to **host** the optimized *React* project:

    `npm start`

4. **Go** to this *URL* to **use** the application:

    `http://localhost:3000`

<hr />

**Thank** you for *using* it!

<hr />