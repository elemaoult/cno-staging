import { Footer } from "../blocks/Footer";
import { Header } from "../blocks/Header";
import { HeaderExt } from "../blocks/HeaderExt";
import { AskForDemo } from "../blocks/AskForDemo";
import { AskQuestion } from "../blocks/AskQuestion";
import { Seo } from "./Seo";


export const Layout = ({children, seo, extHeader, askDemo, askQuestion}) => {
  return (
    <>
      <Seo {...seo} />
      {extHeader ? <HeaderExt/> : null}
      
      <Header/>
      {children}
      <Footer/>

      {askDemo ? <AskForDemo/> : null}
      {askQuestion ? <AskQuestion/> : null}
    </>
  )
}