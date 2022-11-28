import React from "react";
import {StatSection} from "./Section.styled"

const Section = ({title, children}) => 
<StatSection>
    <h1>{title}</h1>
    <div>
        {children}
    </div>
</StatSection> ;

export default Section;
