import { Seo } from "./Seo";


export const Layout = ({children, seo}) => {
  return(
      <>
          <Seo {...seo} />

          {children}
      </>
  )
}