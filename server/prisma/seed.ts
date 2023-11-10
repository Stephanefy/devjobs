import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const jobsData: Prisma.JobPostCreateInput[] = [
    {   
        company: "Scoot",
        logo: "/assets/logos/scoot.svg",
        logoBackground: "hsl(36, 87%, 49%)",
        position: "Senior Software Engineer",
        contract: "Full Time",
        location: "United Kingdom",
        website: "https://example.com/scoot",
        apply: "https://example.com/scoot/apply",
        description: "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
        requirements: 
                {   
                    "content": "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
                    "items": [
                      "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
                      "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
                      "Extremely data-driven.",
                      "Ability to debug complex systems."
                    ]
                },
        
        role: {
          "content": "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
          "items": [
            "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
            "Translate the product roadmap into engineering requirements and own the engineering roadmap",
            "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
            "Collaborate with product, design, and external engineering teammates as needed."
          ]
      }
            
        },
      {
        company: "Blogr",
        logo: "/assets/logos/blogr.svg",
        logoBackground: "hsl(12, 79%, 52%)",
        position: "Haskell and PureScript Dev",
        contract: "Part Time",
        location: "United States",
        website: "https://example.com/blogr",
        apply: "https://example.com/blogr/apply",
        description: "Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.",
        requirements: {
          content: "We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).",
          items: [
            "You have a knack for UI design",
            "Have Haskell or Purescript knowledge/hacking under your belt.",
            "An experienced engineer familiar with automated testing and deployment.",
            "Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job."
          ]
        },
        role: {
          content: "The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.",
          items: [
            "Build up our tech stack around Haskell and introduce best practices",
            "Contribute to the design of our conversational engine and the architecture supporting it",
            "Design new UIs, working closely with users, stakeholders and the backend team.",
            "Maximize robustness, performance, and scalability of solutions"
          ]
        }
      },
      {
        company: "Vector",
        logo: "/assets/logos/vector.svg",
        logoBackground: "hsl(235, 10%, 23%)",
        position: "Midlevel Back End Engineer",
        contract: "Part Time",
        location: "Russia",
        website: "https://example.com/vector",
        apply: "https://example.com/vector/apply",
        description: "We are looking for a Mid-level Back End Engineer to join our growing software engineering organization. The right person will help move our platform to the next level. You’ll be working as part of a skilled, collaborative team to jointly design and implement high visibility applications.",
        requirements: {
          content: "As our ideal candidate, you have previous experience in Ruby on Rails and are eager to continue to develop professionally. You work well in an agile environment, and collaborate well with other Software Engineers, Test Automation Engineers, Product Managers, and Designers. You thrive in a fast-paced environment, and are able to adapt when needed.",
          items: [
            "Active participation on a software development team designing, coding, testing, and releasing functionality to our customers",
            "Close collaboration with other engineers and product managers to become a valued member of an autonomous, cross-functional team",
            "Operational responsibility for the services that are owned by your team, potentially including taking part in an on-call rotation"
          ]
        },
        role: {
          content: "This is an IDEAL job if you already have a few years of software engineering experience under your belt, and you want to be part of a small, intensely skilled team, who feel total ownership of their work, and can’t imagine a day without learning & coding. You will play a crucial role in the Vector platform and everything you do will matter.",
          items: [
            "Design, code, deploy, and test applications according to the user stories/requirements and industry best practices.",
            "Follow industry standard software lifecycle process when developing software",
            "Conduct code-review with other developers",
            "Assist in development and peer review of plans, technical solutions, and related documentation."
          ]
        }
      },
      {
        company: "Office Lite",
        logo: "/assets/logos/officelite.svg",
        logoBackground: "hsl(227, 62%, 48%)",
        position: "Senior Application Engineer",
        contract: "Full Time",
        location: "Japan",
        website: "https://example.com/officelite",
        apply: "https://example.com/officelite/apply",
        description: "Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).",
        requirements: {
          content: "As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.​",
          items: [
            "Expert Node.js proficiency in a production environment", 
            "Proficiency in developing REST APIs", 
            "Expert proficiency with relational databases (MySQL) and optimizing SQL queries", 
            "Extensive experience with microservices-based architecture in production", 
            "Experience with CircleCI, Jenkins or similar CI/CD applications"
          ]
        },
        role: {
          content: "You'll work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You'll be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.",
          items: [
            "Administering and configuring software", 
            "Identify opportunity and help to implement a monitoring solution for proactive and predictable operations.", 
            "Triaging problems with applications - identifying known errors and problem trends and finding permanent solutions through root cause analysis.",
            "Providing level 2 and 3 application support."
          ]
        }
      },
      {
        company: "Pod",
        logo: "/assets/logos/pod.svg",
        logoBackground: "hsl(216, 46%, 14%)",
        position: "Remote DevOps Engineer",
        contract: "Part Time",
        location: "Japan",
        website: "https://example.com/pod",
        apply: "https://example.com/pod/apply",
        description: "Join our dynamic team in developing Pod’s core products and supporting infrastructure. Our software is currently written in Java, VB.Net, React Native, React JS and others. You will help lead new initiatives to build and improve the testing, staging and deployment solutions. You will interact with all development teams, development leadership and our hosting/IT staff to define requirements and goals for the Dev Ops Platform.",
        requirements: {
          content: "We are looking for talented and motivated engineers who can hit the ground running and take our products to the next level. The engineers who are building our platform across the stack are always willing to go the extra mile to deliver the highest quality software and client experiences. Ideally, you would have:",
          items: [
            "Bachelor's degree preferred, strong preference for Computer Science field of study", 
            "Minimum of 5 years of relevant work experience", 
            "Hands-on experience with configuring and maintaining resources on AWS",
            "Experience and solid understanding to deploy and maintain container orchestration platforms such as ECS or Kubernetes",
            "Knowledge of networking fundamentals",
            "Expertise with cloud security, understand the principle of least privilege",
            "Strong written and verbal communication skills"
          ]
        },
        role: {
          content: "You will work closely with development teams to implement automation solutions using technologies like Amazon Web Services (AWS), Ansible, Jenkins, and Kubernetes to automatically build, test, integrate, and deploy complex, modern systems. You will leverage the full power of the cloud to configure highly resilient and scalable applications that support zero downtime. This position is open to a mid-level to senior professional depending on experience and background.",
          items: [
            "Configure and maintain resources on AWS", 
            "Maintain infrastructure as code using Terraform, CloudFormation, and/or Ansible", 
            "Responsible for production deployments using Jenkins, CodeDeploy, GitHub Actions", 
            "Manage security groups and access controls", 
            "Use ticket management system such as Jira and Confluence to manage work priorities", 
            "Ability to clearly articulate and communicate complex technical ideas to non-DevOps colleagues"
          ]
        }
      },
      {
        company: "Creative",
        logo: "/assets/logos/creative.svg",
        logoBackground: "hsl(295, 55%, 21%)",
        position: "Desktop Support Manager",
        contract: "Part Time",
        location: "Germany",
        website: "https://example.com/creative",
        apply: "https://example.com/creative/apply",
        description: "Creative is seeking a Desktop Support Manager responsible for managing and leading a high-performance team in a dynamic environment. The ideal candidate should have management experience, a strong technical skillset, exceptional client service skills and enjoy mentoring a team.",
        requirements: {
          content: "You are likely someone with a solid background in end-user support and troubleshooting, as this position involves dealing with a large, and often changing, number of day-to-day issues which arise in supporting the information technology requirements of our applications.",
          items: [
            "Bachelor’s degree in IT or related field",
            "5+ years demonstrating strong technical skills supporting end users",
            "3+ years in a leadership capacity (Team Lead, Supervisor, or Manager)",
            "Experience using Professional Services Automation (PSA) tools or ticketing platforms such as ConnectWise, Autotask, ServiceNow, etc.",
            "Possess and demonstrate excellent interpersonal/communication skills"
          ]
        },
        role: {
          content: "This is an 80% management and 20% hands-on supervisory role where you will be responsible for the support of automation technologies and managing a team of support engineers in a 24x7 high-volume environment.",
          items: [
            "Lead, coach and manage service desk teams on a daily basis to improve customer service and efficiency",
            "Implement best practices and standardize service desk processes to provide exceptional “white glove” service and deliverable",
            "Oversee the work performed by the team to help prioritize open tickets and tasks",
            "Provide guidance and direction on technical issues",
            "Develop and maintain KPIs for measuring team performance and improving customer experience",
            "Provide status reports to management and collaborate on new initiatives and technical planning"
          ]
        }
      },
      {
        company: "Pomodoro",
        logo: "/assets/logos/pomodoro.svg",
        logoBackground: "hsl(254, 71%, 45%)",
        position: "iOS Engineer",
        contract: "Full Time",
        location: "United States",
        website: "https://example.com/pomodoro",
        apply: "https://example.com/pomodoro/apply",
        description: "We are looking for thoughtful, well-rounded iOS engineer to join our team. We’re looking for someone to help build out the foundation of the app and infrastructure. If you are interested in taking part in building an application that millions of people use every day to increase their productivity, this is the perfect opportunity. You will play an important part in our mobile engineering practice, implementing new features, improving performance, and building beautiful user interfaces.",
        requirements: {
          content: "You are an experienced mobile engineer looking to make Pomodoro one of the best mobile experiences out there. You are someone who excels at customer-centric product development and has a passion for working on application architecture and design, and making smooth, delightful experiences. You care deeply about quality, are energized by partnership and collaboration, and you strive to enable others around you to excel.",
          items: [
            "Strong programming skills in Objective-C and/or Swift",
            "Previous experience developing mobile applications on iOS",
            "Experience working closely across a variety of teams, including product management, design, and engineering",
            "Knowledge of core CS concepts such as common data structures and algorithms, profiling, and optimization"
          ]
        },
        role: {
          content: "You will be responsible for building infrastructure and abstractions to help us double our engineering velocity.  You will work at all layers of the stack and closely with partners across engineering, data science, research, product, and design. You will help our codebase stay ahead of the curve of the constantly evolving development ecosystem.",
          items: [
            "Design and develop UI components that make feature development faster, baking in consistency and accessibility to the designs",
            "Build frameworks and infrastructure to make product development faster, safer, and more consistent",
            "Improve the performance and stability of the mobile app",
            "Strive to keep the mobile codebase secure"
          ]
        }
      },
    ]

    async function main() {
      const jobs = await prisma.jobPost.createMany({
        data: jobsData
      })

      console.log('seeding', jobs)
    }

    main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
