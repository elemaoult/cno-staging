import Head from "next/head";



export const Seo = ({title, description}) => {
  
  return(
      <Head>
          <html lang="en"/>
          <title>{title}</title>
          <meta name="description" content={description} />
      </Head>
  )
}