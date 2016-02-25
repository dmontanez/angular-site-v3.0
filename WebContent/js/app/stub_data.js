var test_stub =
    {
        "item1": 1,
        "item2": 2,
        "item3": 3
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