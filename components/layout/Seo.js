import Head from "next/head";



export const Seo = ({title, description}) => {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}