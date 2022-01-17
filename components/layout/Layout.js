import { Footer } from "../blocks/Footer";
import { Header } from "../blocks/Header";
import { HeaderExt } from "../blocks/HeaderExt";
import { Seo } from "./Seo";


export const Layout = ({children, seo, extHeader}) => {
  return (
    <>
      <Seo {...seo} />
      {extHeader ? <HeaderExt/> : null}
      <Header/>
      {children}
      <Footer/>
    </>
  )
}