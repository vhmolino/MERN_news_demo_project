├── README.md
├── backend
    ├── .env
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── controllers
    │   │   ├── add-new.ts
    │   │   ├── archive-new.ts
    │   │   ├── delete-new.ts
    │   │   ├── get-archived-news.ts
    │   │   └── get-news.ts
    │   ├── db.ts
    │   ├── routes
    │   │   └── newsRoutes.ts
    │   └── types
    │   │   └── types.ts
    └── tsconfig.json
└── frontend
    ├── .env
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
        ├── App.tsx
        ├── assets
        │   ├── express.svg
        │   ├── mongodb.svg
        │   ├── node.svg
        │   ├── react.svg
        │   └── vite.svg
        ├── components
        │   ├── alertDialog.tsx
        │   ├── footer.tsx
        │   ├── loader.tsx
        │   └── nabvar.tsx
        ├── domains
        │   └── news
        │   │   ├── components
        │   │       ├── add_new_component.tsx
        │   │       └── new_card_component.tsx
        │   │   ├── interfaces
        │   │       ├── add_new.ts
        │   │       ├── archive_news.ts
        │   │       ├── delete_new.ts
        │   │       ├── get_archived_news.ts
        │   │       └── get_news.ts
        │   │   └── types
        │   │       └── types.ts
        ├── hooks
        │   └── validateAddNewForm.ts
        ├── layout.tsx
        ├── main.tsx
        ├── pages
        │   ├── archived_news_component.tsx
        │   ├── home.tsx
        │   ├── new_internal_component.tsx
        │   └── news_component.tsx
        ├── theme.tsx
        └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts