import ExamIcons from '../assets/examIcons/ExamIcons';

const RecommendedExamsData = [
    {
     id:1,
     icon: ExamIcons.nta,
     exam_name:'JEE Mains 2024',
     board:'National Testing Agency',
     applied_people:'20 Lakhs',
     exam_fee:1200,
     tags:['Engineering','IIT','PCM']
    },
    {
      id:2,
      icon:ExamIcons.ssc,
      exam_name:'Civil Services 2024',
      board:'Union Public Service Commission',
      applied_people:'15 Lakhs',
      exam_fee:1500,
      tags:['Engineering','PCM']
    },
    {
      id:3,
      icon:ExamIcons.upsc,
      exam_name:'SSC CGL 2024',
      board:'Staff Selection Commission',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      tags:['Engineering','PCM']
    },
    {
      id:4,
      icon:ExamIcons.rrb,
      exam_name:'IBPS RRB 2024',
      board:'Railway Recruitment Board',
      applied_people:'7 Lakhs',
      exam_fee:850,
      tags:['Engineering','Degree','PCM']
    },
    {
      id:5,
      icon:ExamIcons.nta,
      exam_name:'NEET 2023',
      board:'National Testing Agency',
      applied_people:'16 Lakhs',
      exam_fee:1700,
      tags:['MBBS','AIMS']
    }
  ];

  const RecentExamsData = [
    {
     id:1,
     icon: ExamIcons.vit,
     exam_name:'VITEEE 2024',
     board:'Vellore Institute of Technology',
     applied_people:'10 Lakhs',
     exam_fee:1500,
     tags:['Engineering','PCM']
    },
    {
      id:2,
      icon:ExamIcons.srm,
      exam_name:'SRMJEE 2024',
      board:'SRMIST',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      tags:['Engineering','PCM']
    },
    {
      id:3,
      icon:ExamIcons.tsemacet,
      exam_name:'TS EAMCT 2024',
      board:'TSCHE',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      tags:['Engineering','PCM']
    },
    {
      id:4,
      icon:ExamIcons.osmania,
      exam_name:'OUCET',
      board:'Osmania University',
      applied_people:'7 Lakhs',
      exam_fee:800,
      tags:['Engineering','Degree','PCM']
    },
    {
      id:5,
      icon:ExamIcons.au,
      exam_name:'AUEET 2024',
      board:'Andhra University',
      applied_people:'5 Lakhs',
      exam_fee:600,
      tags:['Engineering','Degree','PCM']
    }
  ];

  const RecentExamTags =['ALL', 'GATE', 'AP EAPCET', 'BITSAT', 'JEE MAINS', 'JEE Advanced', 'TS EAMCET', 'Amity JEE', 'NEET', 'VITEEE', 'WBJEE', 'KCET', 'SRMJEEE', 'COMEDK', 'MHT CET', 'UPSEE', 'TANCET', 'KIITEE', 'GUJCET', 'Karnataka PGCET', 'OJEE', 'BVP CET', 'LPUNEST', 'SAAT', 'KIIT Entrance Exam', 'CUCET', 'AIIMS', 'AFMC', 'JIPMER', 'CMC Vellore', 'MANIPAL MET', 'IISER', 'NATA', 'CEED'];

export {RecommendedExamsData , RecentExamsData ,RecentExamTags} 