import Head from "next/head";



export const Seo = ({title, description}) => {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
    </Head>
  )
}