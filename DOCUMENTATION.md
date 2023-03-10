# Documentation

These is the guide and overview of the application. The application needs a refactor when possible. Some parts were coded in a rush so there wasn't time to optimize or enhance the code, or create custom reusable components. Other stuff was coded in collaboration with another developer.

## TLDR

- Update package.json, NextJS and react-hook-form have breaking changes
- Refactor code based on a folder structure of your choosing
- Duplicate SCSS, some code needs to be made into separate components.
- Overhaul the queries used in the frontend by swapping to a library or creating your own
- API refactor with the backend

## Update package

The package hasn't been updated in a while. This is due to the fact that we use S3 for image storing and that wasn't compatible with NextJS 11.0.0 but with newer updates, it looks like it is ready to work. React-hook-form also was upgraded to V7 which has breaking changes with V6. The creator of react-hook-form made a tool to convert v6 to v7.

## Folder structure

Originally, it was built such that every code was contained in `src/components` but the folder got too long and was split into `src/components/` and `src/pageComponents`. In the folders of the `pageComponents` there can be multiple subfolders of components only local to that page. Personally, I'd move the from `pageComponents` into `pages` where possible.

The `utils/` directory contains all of the helper functions, redux store, queries, constants, and interfaces.

## Styling

There is duplicate HTML and styling that due to crunch time, it wasn't possible to make into reusable components. Quickest way is to look at the global SCSS sheet and make the global classNames into a separate reusable component. Also form styling is repeated numerous times within the application and should be made into components.

The HTML font-size in global.scss should be % based rather than fixed px for usability.

## Queries

The queries are really sparse. In that we didn't build or use a proper fetch framework. I'd recommend swapping to `axios` or `react query`. Some queries return `data.json()` immediately, others do not as I check for status codes.

## API

The API needs a major overhaul in collaboration with the backend. A lot of these queries are over-fetching their data, and even for POST/PATCH they are returning a lot of unnecessary information.

Furthermore, the backend used the same schema for mutations and queries, and it's difficult for the frontend to distinguish what is the return values on things are or if they exist solely on a POST request or a GET request. For the time being, you need to add the `type | null` to a lot of the api interfaces as seen in `utils/interfaces/api`

## Other stuff

There are some stuff you should know/fix

- some images here are cached so I added some hacky code that has `?cache=Date.now()`, there is probably a better way to do it with `key=X` in the props.

- there is a cookie based redirect for hangouts. If you need to expand upon it, I'd recommend using next-auth callback url. It works a lot better, however, it wasn't implemented because I didn't have the time to incorporate it with onboarding. next-auth redirect doesn't take into account new users. Possible ways to fix it is storing the redirect url in the session token or serverside cookie. See this [link](https://simplernerd.com/next-auth-callbackurl/)
