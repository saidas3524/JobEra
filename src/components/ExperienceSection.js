import React from 'react'
import { CommonSectionCard,Experience } from "../components";
import { sections } from "../services";

export const ExperienceSection = ({experiences}) => {
  return (
    <div>
      <CommonSectionCard sectionDetails={sections.Experience}>
        <div className="sectionData">
          {experiences && experiences.map((experience) => { return <div><Experience experience={experience} /> <hr/></div> })}
        </div>
      </CommonSectionCard>
    </div>
  )
}

export default ExperienceSection
