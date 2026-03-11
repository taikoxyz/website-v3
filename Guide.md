# Taiko Website — Guide for Non-Technical Contributors

This is the source code for [taiko.xyz](https://taiko.xyz). It's a Next.js website deployed on Vercel. You don't need to understand how the code works — Claude Code will handle that for you. This guide teaches you the workflow: how to get set up, make changes, preview them, and publish them.

## How the website gets updated

Think of it like a Google Doc with version history:

- The **main** branch is the "published" version — whatever is in `main` is live on taiko.xyz.
- To make a change, you work on a **branch** (your own draft copy).
- When you're ready, you open a **pull request** (PR) — this is like asking someone to review your draft before it goes live.
- Vercel automatically builds a **preview link** for every PR so you (and reviewers) can see exactly how the site will look before publishing.
- Once the PR is approved and **merged**, Vercel automatically deploys it to production. The site is updated within minutes.

## One-time setup

You need four things installed on your computer. Open **Terminal** (on Mac: search for "Terminal" in Spotlight) and run each command.

### 1. Install Homebrew (Mac package manager)

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the on-screen instructions. If it says "already installed", you're good.

### 2. Install Node.js 20 and pnpm

```sh
brew install node@20
brew install pnpm
```

### 3. Install Claude Code

```sh
npm install -g @anthropic-ai/claude-code
```

**You can also use [claude code desktop](https://code.claude.com/docs/en/desktop) if you feel more confortable with that interface**

### 4. Clone the repository

"Cloning" downloads a copy of the website code to your computer.

```sh
cd ~/Desktop
git clone https://github.com/taikoxyz/website-v3.git
cd website-v3
```

### 5. Install project dependencies

This downloads the libraries the website needs to run. You only do this once (and again if dependencies change).

```sh
pnpm install
```

You're all set. The `website-v3` folder on your Desktop is your workspace.

## Making changes

Every time you want to make a change, follow this flow:

### Step 1 — Open the project and start Claude Code

```sh
cd ~/Desktop/website-v3
claude --dangerously-skip-permissions
```

This opens Claude Code, your AI assistant that can read and edit the code for you.

### Step 2 — Make sure you're up to date

Before starting any work, tell Claude:

> "Pull the latest changes from main"

This ensures you're working with the most recent version of the site.

### Step 3 — Create a branch

Tell Claude:

> "Create a new branch called update-hero-text" (use a short name that describes your change)

This creates your own draft copy so your work doesn't affect the live site.

### Step 4 — Describe what you want to change

Just tell Claude what you want in plain language. Examples:

- "Change the hero title on the homepage to 'Building Ethereum's Future'"
- "Replace the partner logo grid with these new logos: ..."
- "Update the careers page to say we're hiring a Marketing Lead"
- "Change the background color of the navigation bar to dark blue"

Claude will find the right files, make the edits, and show you what changed.

### Step 5 — Preview locally

Tell Claude:

> "Run the site locally so I can preview it"

Claude will run `pnpm dev` and give you a local URL (usually http://localhost:3000). Open it in your browser to see your changes live on your machine. Only you can see this — it's not public.

When you're done previewing, you can tell Claude to stop the server or press `Ctrl + C` in the terminal.

### Step 6 — Create a pull request

Once you're happy with the changes, tell Claude:

> "Commit my changes and create a pull request"

Claude will:
1. Save (commit) your changes
2. Push them to GitHub
3. Create a PR with a summary of what changed

Claude will give you a **PR link**. Open it in your browser.

### Step 7 — Review the Vercel preview

Within a minute or two, Vercel will post a comment on your PR with a **preview link**. This is a temporary version of the site with your changes — share this link with anyone who needs to review.

### Step 8 — Merge when ready

Once the changes look good:
1. Go to your PR on GitHub
2. Click the green **"Merge pull request"** button
3. Click **"Confirm merge"**

The site will automatically update on taiko.xyz within a few minutes.

## Quick reference

| What you want to do                | What to tell Claude                                                    |
| ---------------------------------- | ---------------------------------------------------------------------- |
| Start fresh                        | "Pull the latest changes from main"                                    |
| Create a branch                    | "Create a new branch called [name]"                                    |
| Edit text/content                  | "Change [what] to [new value] on [which page]"                         |
| Preview locally                    | "Run the site locally"                                                 |
| Save and push                      | "Commit my changes and create a pull request"                          |
| Go back to main after merging      | "Switch back to the main branch and pull the latest"                   |

## Troubleshooting

If something goes wrong, tell Claude what happened — paste the error message or describe the issue. Common fixes:

- **"Module not found" errors**: Tell Claude to run `pnpm install`
- **Can't push / permission denied**: Make sure you have write access to the GitHub repo
- **Preview link not showing on PR**: Wait a couple of minutes — Vercel takes a moment to build
