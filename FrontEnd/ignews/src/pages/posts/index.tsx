import Head from "next/head";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | Ignews </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>02 de abril de 2021</time>
            <strong>Creating by Miguel Lima</strong>
            <p>
              Umas das funcionalidades que está na moda em Blogs e Sites é o
              Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas
              escuros, tanto na IDE quanto em outros apps.
            </p>
          </a>
          <a>
            <time>02 de abril de 2021</time>
            <strong>Creating by Miguel Lima</strong>
            <p>
              Umas das funcionalidades que está na moda em Blogs e Sites é o
              Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas
              escuros, tanto na IDE quanto em outros apps.
            </p>
          </a>
          <a>
            <time>02 de abril de 2021</time>
            <strong>Creating by Miguel Lima</strong>
            <p>
              Umas das funcionalidades que está na moda em Blogs e Sites é o
              Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas
              escuros, tanto na IDE quanto em outros apps.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
