var profile = {
        'name': 'Daniel J. Montanez',
        'title': 'Software Engineer',
        'contact':
            {
                'phone': 6618694325,
                'email': 'dmontanez@alumni.psu.edu'
            },
        'address':
            {
                'city': 'San Diego',
                'state': 'CA'
            }
    };

var schools = [
        {
            name: 'Pennsylvania State University',
            degree: 'M.E.',
            major: 'Software Engineering',
            minor: '',
            start: 1346482800000,
            end: 1408086000000,
            courses: [
                'Requirements Engineering',
                'Software System Design (UML)',
                'Pattern Oriented Design',
                'Database Design',
                'Software System Architecture',
                'Enterprise Integration',
                'Applied Human Computer Interaction',
                'Program Understanding',
                'Web Security and Privacy',
                'Software Project Management',
                'Software Testing',
                'Advanced Software Engineering Studio'
            ],
            images: [
                "../images/ed_psu_logo.png",
                "../images/lgo_psu.png",
                "../images/sl_psu.png"
            ]
        },
        {
            name: 'California State University Bakersfield',
            degree: 'B.S.',
            major: 'Computer Science',
            minor: 'Philosophy',
            start: 1126594800000,
            end: 1308121200000,
            courses: [
                'Web Design',
                'Advanced Computer Networks',
                'Database Systems',
                'Software Engineering',
                'Beginning Artificial Intelligence',
                'Advanced Artificial Intelligence',
                'Programming Languages',
                'Advanced Computer Srchitecture',
                'Methods in Applied Statistics',
                'Data Analysis'
            ],
            images: [
                "../images/ed_csub_logo.png",
                "../images/lgo_csub.png",
                "../images/sl_csub.png"
            ]
        }
    ];

var companies = [
         {
            name: 'Leidos',
            title: 'Software Engineer',
            start: 1444057200000,
            end: 1444057200000,
            isCurrent: true,
            descr: '',
            images: [
                "../images/ex_logo_ldos.png"
            ]
        },{
            name: 'Computer Sciences Corporation',
            title: 'Logistics Engineer, Professional',
            start: 1309132800000,
            end: 1443225600000,
            isCurrent: false,
            descr: 'Provide key analysis necessary for demonstrating program success in the form of Operational Availability. ' +
                    'Developed unique Provisioning algorithm for generating spares procurement recommendations. ' +
                    'Generate recommendations to maximize return on investment of program assets. ' +
                    'Developed and utilize database for management and analysis of program trouble tickets',
            images: [
                "../images/ex_logo_csc.png"
            ]
        },
        {
            name: 'Occidental Petroleum',
            title: 'Assistant Regulatory Analyst',
            start: 1280646000000,
            end: 1306911600000,
            isCurrent: false,
            descr: 'Quality Assurance for new drill & existing well modification specifications. ' +
                    'As part of a self driven initiative; created an Access database to track leased land plot, incident reports.  Used to nominate leases' +
                    ' for a Clean Lease award with the Department of Gas & Geothermal Resources.',
            images: [
                "../images/ex_logo_oxy.png"
            ]
        }
    ];

var skills = [
        {
            level: 'Proficient',
            items: [
                {
                    name: 'AngularJS',
                    num: '-'
                },{
			     name: 'Bootstrap',
                    num: '-'
                },{
			     name: 'jQuery',
                    num: '-'
                },{
			     name: 'SQL',
                    num: 2
                },{
			        name: 'HTML',
                    num: '-'
                },{
			        name: 'CSS',
                    num: '-'
                },
		      ]
        },
        {
            level: 'Moderately Proficient',
            items: [
                {
                    name: 'Java',
                    num: 4
                },{
			     name: 'ADT',
                    num: 3
                },{
			     name: 'Eclipse',
                    num: 2
                },{
			        name: 'XML',
                    num: '-'
                }
            ]
        },
        {
            level: 'Prior Experience',
            items: [
                {
                    name: 'C++',
                    num: 2
                },{
			        name: 'C#',
                    num: '-'
                },{
			        name: 'PHP',
                    num: '-'
                },{
			        name: 'R',
                    num: '-'
                }
            ]
        },
        {
            level: 'Currently Learning',
            items: [
                {
			     name: 'Python',
                    num: '-'
                },{
			     name: 'Ruby on Rails',
                    num: '-'
                }
            ]
        },
        {
            level: 'Others',
            items: [
                {
                    name: 'Software Engineering',
                    num: 7
                },{
			        name: 'Software Development',
                    num: 6
                },{
			        name: 'Analysis',
                    num: 6
                },{
			        name: 'Program Management',
                    num: 3
                }
            ]
        },
        {
            // Place holder for the Open Badges window.
        }
    ];

var activities = [
        {
            name: 'Website',
            link: "https://github.com/dmontanez/myAngularSite",
            images: [
                "../images/blue_hex_1.png"
            ],
            uses: [
                'HTML',
                'CSS',
                'JavaScript',
                'jQuery',
                'Angular.JS',
                'Twitter Bootstrap'
            ],
            descr: 'This is the website you are currently viewing!  I developed this site using Angular.JS, and Twitter Bootstrap, to help organize some information about myself' +
                    ' and showcase what I am about.  You will find most (if not all) of this site is compiled of information that can be found on my resume and LinkedIn Profile.  ' +
                    'I will be working in available APIs periodically, such as the LinkedIn API to keep my Skills and associated merit badges up to date.  The Other and ' +
                    ' about me sections will provide some insight into me as an individual, and provides a better look at what isn\'t necessarily apparent from other sources.  ' +
                    'Feel free to reach out on social media or email if you\'d like to discuss anything referenced on the site, or just network a little bit!'
        },
        {
            name: 'Resume App',
            link: "https://github.com/dmontanez/MyResume",
            images: [
                "../images/ic_resume_app.png"
            ],
            uses: [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            descr: 'This App is my second attempt at building an Android Application.  I had a lot of fun working on the Budget Notebook App as part of a team while completing my ' +
                    'Masters Degree through Penn State, so I decided that another App would be fun too!  This App takes all the same information that is presented on my resume, and ' +
                    'presents it in a different medium.'
        },
        {
            name: 'Budget Notebook',
            link: "https://github.com/jzz128/BudgeNotes",
            images: [
                "../images/ic_budget_notebook.png"
            ],
            uses: [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            descr: 'My responsibilities included: Initial draft of System Requirements Specifications, Use Case Specifications, Database Model, UI Flow design, coding for major' +
                    ' functionality including future account balance prediction, transaction activity reporting, and recommendation generation.'
        },
        {
            name: 'Tournament Creator',
            link: "http://cs.csubak.edu/~dmontane/tournament/",
            images: [
                "../images/ic_tourn_create.png"
            ],
            uses: [
                'HTML',
                'PHP'
            ],
            descr: 'I created this web app to assist in running the summer team wrestling camp tournament that is run each year at CSUB. The application takes a list of teams, ' +
                    'and generates a tournament schedule to be run "Round Robin" style.'
        }
    ];