import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/work.css'
import "../styles/resume.css"

export default function ResumeContent(){
    return (
        <div className="WorkCompWrapper">
        
          <h1 className="bigTitle">
                    {"Resume".split("").map((letter, index) => (
                        <span
                            className="letterAnimation"
                            key={`shadman-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
          </h1>


        <VerticalTimeline>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(113, 123, 138, 0.43)' }}
            date="April 2025 - Present"
            iconStyle={{ background: 'rgba(63, 89, 127, 0.32)', color: '#fff' }}
            icon={<img src="/opg.png" alt="opg icon" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
            >
            <h3 className="vertical-timeline-element-title">Professional Engineering Year Intern </h3>
            <h4 className="vertical-timeline-element-subtitle">Ontario Power Generation</h4>
            {/* <ul>
                <li> Leverage software tools such as  One-Eighty, CDK  and  MS Office (Excel)  to manage customer and vehicle information 
                    databases, ensuring accuracy and enhancing data visualization for insights and process optimization. </li>
                <li>Process 50 customer inquiries daily and manage financial transactions as a team member, using manufacturing system 
                    knowledge to stock vehicles and assist with licensing trade dockets, ensuring timely service and customer satisfaction. </li>
            </ul> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(113, 123, 138, 0.43)' }}
            date="June 2024 - March 2025"
            iconStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            icon={<img src="/newroads.png" alt="newroads icon" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
            >
            <h3 className="vertical-timeline-element-title">Administrative Receptionist</h3>
            <h4 className="vertical-timeline-element-subtitle">NewRoads Honda</h4>
            <ul>
                <li> Leverage software tools such as  One-Eighty, CDK  and  MS Office (Excel)  to manage customer and vehicle information 
                    databases, ensuring accuracy and enhancing data visualization for insights and process optimization. </li>
                <li>Process 50 customer inquiries daily and manage financial transactions as a team member, using manufacturing system 
                    knowledge to stock vehicles and assist with licensing trade dockets, ensuring timely service and customer satisfaction. </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(113, 123, 138, 0.43) ' }}
            date="September 2024- December 2024"
            iconStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            icon={<img src="/feas.png" alt="feas icon" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />} // Replace with your own icon or SVG
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Faculty of Engineering and Architectural Sciences at TMU</h4>
            <ul>
                <li>Supervise 90 first-year engineering students, managing assignments and facilitating communication through emails and 
                    effective weekly meetings, resulting in improved student engagement and a 20% improvement in project performance</li>
                <li>Graded assignments and supported students in engineering principles and  MATLAB  through  Zoom  meetings, enhancing 
                problem-solving skills while organizing resources for timely feedback and meeting commitments</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(113, 123, 138, 0.43)' }}
            date="May 2021 - May 2024"
            iconStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            icon={<img src="/AHR.png" alt="andy icon" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />} // Replace with your own icon or SVG
          >
            <h3 className="vertical-timeline-element-title">Project Planning Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Andy's Home Renovation</h4>
            <ul>
            <li> Created customer-centric renovation designs, balancing specifications and budget constraints ensuring client satisfaction</li>
            <li>Automated meeting scheduling and financial management for over 40 clients using  Python  and the  Excel API</li>
            <li>Coordinated with suppliers and managed inventory to ensure timely availability of materials, optimizing resource allocation and supporting seamless project execution</li>
            </ul>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(113, 123, 138, 0.43)' }}
            date="Jan 2022 - Mar 2022"
            iconStyle={{ background: 'rgba(113, 123, 138, 0.43)', color: '#fff' }}
            icon={<img src="/sunnybrook.png" alt="nweroads icon" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />} // Replace with your own icon or SVG
          >
            <h3 className="vertical-timeline-element-title">Nursing Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sunnybrook Health Sciences Center</h4>
            <ul>
                <li>Collected information about patient vitals and documented them on Electronic Health Records while maintaining confidentiality. </li>
                <li>Collaborated with members of the healthcare team to deliver patient-centered care.</li>
                <li>Improved client health and safety by fall risk assessment tools, maintaining skin integrity, and monitoring vital signs. Deescalated difficult situations by non-threatening body language and debriefing techniques.</li>    
            </ul>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    )
}