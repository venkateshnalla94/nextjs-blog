import Head from 'next/head'
import Layout, { siteTitle } from '../component/layout'
import utilStyles from '../styles/utils.module.css'
import React from "react";
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../component/date'
export async function getStaticProps() {
     const allPostsData = getSortedPostsData()
     return {
          props: {
               allPostsData
          }
     }
}
export default function Home({ allPostsData }) {
  
  return (
       <Layout home>
         <Head>
           <title>{siteTitle}</title>
         </Head>
         <section className={utilStyles.headingMd}>
           <p>
                I am working as an application developer in React native to build an app that follows Micro Services architecture which involves NodeJS and Java for backend. Actively participated in creating the module from scratch to implementation that decentralizing the service layer from design layer which gave us more flexibility in front end
           </p>
           <p>
             (This is a sample website - you’ll be building a site like this on{' '}
             <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
           </p>
         </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                 <h2 className={utilStyles.headingLg}>Blog</h2>
                 <ul className={utilStyles.list}>
                      {allPostsData.map(({ id, date, title }) => (
                           <li className={utilStyles.listItem} key={id}>
                                <Link href="/posts/[id]" as={`/posts/${id}`}>
                                     <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                     <Date dateString={date} />
                                </small>
                           </li>
                      ))}
                 </ul>
            </section>
       </Layout>
  )
}
