# passwordsafe v4.9 -> 1Password converter

## Purpose

To convert passwords if moving from PasswordSafe to 1Password.

Note: I have only tested this with version 4.9 of PasswordSafe.

Note: This requires you to insecurely export all your passwords from passwordsafe in a text file. Be very careful about securely deleting these files swiftly after importing them into 1Password.

## Prerequisites

 * node
 * git
 * a terminal

## Instructions

 1. Export passwords from passwordsafe: `File | Export` into this directory and call it `export.txt`
 2. Install dependencies by running: `yarn` (or `npm install`)
 3. Run this script in a terminal: `yarn start` (or `npm start` of course, but I have nor provided a package.lock file)
 4. If this worked it will create an `import.csv` which you can now import into 1Password `File | Import | Other... | Import a csv file`
 5. securely delete both `export.txt` and `import.csv`
