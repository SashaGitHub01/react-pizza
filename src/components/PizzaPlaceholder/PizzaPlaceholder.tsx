import React from "react"
import ContentLoader from "react-content-loader"

const PizzaPlaceholder = () => (
   <ContentLoader
      speed={2}
      width={264}
      height={449}
      viewBox="0 0 264 449"
      backgroundColor="#f7f7f7"
      foregroundColor="#ecebeb"
   >
      <circle cx="131" cy="135" r="120" />
      <rect x="-2" y="314" rx="9" ry="9" width="264" height="79" />
      <rect x="26" y="281" rx="0" ry="0" width="208" height="23" />
      <rect x="1" y="408" rx="0" ry="0" width="81" height="31" />
      <rect x="139" y="400" rx="25" ry="25" width="125" height="43" />
   </ContentLoader>
)

export default PizzaPlaceholder;