import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{"Izzy's Imaginarium"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m <strong>Izzy</strong>. I’m a programmer and devops engineer.</p>
	<ul>
	 <li>
          <a href="https://www.linkedin.com/in/isabel-fisher-9374124b">Linkedin</a>
	 </li>
	 <li>
	  <a href="https://github.com/IzzyFisher">Github</a>
	 </li>
	</ul>
      </section>
    </Layout>
  );
}
