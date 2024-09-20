# nodejs-cms

> That's right! I coded a new CMS (Content Management System) in JavaScript (NodeJS) that can compete with WordPress! (just kidding)

This project is a Full Stack NodeJS TypeScript MySQL (Sequelize) CMS application with the purpose of easy website pages management, creation and control of relationships between entities, attributes, and taxonomies, as well as configuration for best SEO. I created this project because I wanted a simple, lightweight, and easy-to-use CMS for my portfolio website.

Building this application helped me understand the behavior of CMS-like platforms, explore scalable project structures, gain skills in designing comprehensive database structures, and acquire experience in overcoming challenges of large-scale projects.

## Table of Contents

- [Description](#description)
- [Database Configuration](#database-configuration)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

This application simplifies the creation of SEO-focused websites by storing all the necessary metadata. The key advantage of `nodejs-cms` is its scalable architecture, which enables easy manipulation of entity types, entities, attributes, and taxonomies. You can effortlessly build a portfolio for projects, blog with posts, image gallery and wrap each one with complex taxonomy relationships and all within one application just using a user-friendly UI.

## Database Configuration

Most of the database configuration is handled by Sequelize. However, you need to ensure the correct access settings in the `.env` file and create the appropriate database in your MySQL client.

Let's take a look at the `nodejs-cms` database structure through its logical and physical models:

![](https://github.com/korichh/nodejs-cms/blob/main/images/db-drawio.png?raw=true)
> Logical representation of the `nodejs-cms` database.

![](https://github.com/korichh/nodejs-cms/blob/main/images/db-mysql.png?raw=true)
> Physical representation of the `nodejs-cms` database.

### Table Overview

- **`Pages`** - stores website pages.
- **`Settings`** - stores necessary configuration settings.
- **`EntityTypes`** - stores types of entities (e.g. `post`, `project`).
- **`Entities`** - stores instances of entity types (e.g. for `post`, it could be `How I Became a Programmer` or `My Grandma's Cookie Recipe`).
- **`Attributes`** - adds additional fields to entities (e.g. for `post`, you could add `post_author`).
- **`AttributeValues`** - stores values for each entity attribute (e.g. for `post_author`, it might be `korichh`).
- **`Taxonomy`** - stores classifications for each entity type (e.g. for `post`, you can add `category` and `tag`).
- **`TaxonomyTerm`** - stores terms for each taxonomy (e.g., for a `post`'s `category`, it could be `tech` or `recipes`).
- **`EntityTerms`** - a junction table storing relationships between terms and entities.

## Installation

Installation scripts for this project are managed with Gulp, using scenarios defined in the [gulpfile.js](https://github.com/korichh/nodejs-cms/blob/main/gulpfile.js) file. For convenience, I also added useful scripts to the [package.json](https://github.com/korichh/nodejs-cms/blob/main/package.json) file, which includes:

- `npm run clean`: Cleans the compiled folders.
- `npm run build`: Compiles SCSS and TypeScript.
- `npm run watch`: Watches files, runs `build` when needed, and restarts the application.
- `npm run compile`: Runs both `clean` and `build`.
- `npm run prod`: Runs `clean` and `build` in production mode (with minification).
- `npm run dev`: Runs `clean`, `build`, and `watch`.
- `npm start`: Starts the application.

## Usage

Let's review the application's functionality with screenshots and descriptions:

![](https://github.com/korichh/nodejs-cms/blob/main/images/1-register.png?raw=true)
> The first step is registering an admin password for `nodejs-cms`.

![](https://github.com/korichh/nodejs-cms/blob/main/images/2-login.png?raw=true)
> After registering, log in using the admin password.

![](https://github.com/korichh/nodejs-cms/blob/main/images/3-dashboard.png?raw=true)
> The dashboard page - nothing too exciting here (for now).

![](https://github.com/korichh/nodejs-cms/blob/main/images/4-pages.png?raw=true)
> The Pages tab, displaying all created pages.

![](https://github.com/korichh/nodejs-cms/blob/main/images/5-create-edit-page.png?raw=true)
> Form for creating or editing a page.

![](https://github.com/korichh/nodejs-cms/blob/main/images/6-pages-list.png?raw=true)
> Updated list of pages.

![](https://github.com/korichh/nodejs-cms/blob/main/images/7-settings.png?raw=true)
> The full settings tab.

![](https://github.com/korichh/nodejs-cms/blob/main/images/8-create-edit-entity-type.png?raw=true)
> Form for creating or editing an entity type (e.g. post).

![](https://github.com/korichh/nodejs-cms/blob/main/images/9-entity-types-list.png?raw=true)
> Updated list of entity types.

![](https://github.com/korichh/nodejs-cms/blob/main/images/10-post.png?raw=true)
> A newly created tab for post management.

![](https://github.com/korichh/nodejs-cms/blob/main/images/11-create-edit-post.png?raw=true)
> Form for creating or editing a post.

![](https://github.com/korichh/nodejs-cms/blob/main/images/12-posts-list.png?raw=true)
> Updated list of posts.

![](https://github.com/korichh/nodejs-cms/blob/main/images/13-create-edit-taxonomy.png?raw=true)
> Form for creating or editing a taxonomy (e.g. category).

![](https://github.com/korichh/nodejs-cms/blob/main/images/14-taxonomies-list.png?raw=true)
> Updated list of taxonomies.

![](https://github.com/korichh/nodejs-cms/blob/main/images/15-select-taxonomy-terms.png?raw=true)
> Selecting newly created terms in the post form.

## License

This project is licensed under the [MIT License](https://github.com/korichh/nodejs-cms/blob/main/LICENSE).
