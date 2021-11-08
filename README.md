    <link
      href="https://sajadghawami.github.io/recscout-homepage/public/main.css"
      rel="stylesheet"
    />

    <script src="https://sajadghawami.github.io/recscout-homepage/public/main.js></script>

---

images need to be in public folder so we get them without hashes

to build :

yarn build
yarn build:clean

will move .css and js to public folder, which we reference

---

https://sajadghawami.github.io/recscout-homepage/public/assets/images/cta-illustration.svg



yarn build && yarn build:clean && git add . && git commit -m "wip" && git push