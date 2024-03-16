import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "it-day",
      logo: {
        src: "./src/assets/logoIThub.png",
        replacesTitle: true,
      },
      sidebar: [
        { label: "Введение", link: "/" },
        {
          label: "Бэкенд",
          items: [
            { label: "Знакомство", link: "/guides/backend/01-introduction/" },
            {
              label: "Технологический стэк",
              link: "/guides/backend/02-techstack/",
            },
            {
              label: "Создание проекта",
              link: "/guides/backend/03-creating-project/",
            },
            {
              label: "Тестовые аккаунты",
              link: "/guides/backend/04-creating-accounts/",
            },
            {
              label: "Предоставление API",
              link: "/guides/backend/05-api/",
            },
            {
              label: "Документирование API",
              link: "/guides/backend/06-openapi/",
            },
          ],
        },

        {
          label: "Фронтенд",
          items: [{ label: "Знакомство", link: "/guides/example/" }],
        },
        {
          label: "Глоссарий",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/landing.css"],
    }),
  ],
});
