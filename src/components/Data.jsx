import ExamIcons from '../assets/examIcons/ExamIcons';

const RecommendedExamsData = [
    {
     id:1,
     icon: ExamIcons.nta,
     exam_name:'JEE Mains 2024',
     board:'National Testing Agency',
     applied_people:'20 Lakhs',
     exam_fee:1200,
     exam_date:'23 March,2024',
     tags:['Engineering','IIT','PCM']
    },
    {
      id:2,
      icon:ExamIcons.ssc,
      exam_name:'Civil Services 2024',
      board:'Union Public Service Commission',
      applied_people:'15 Lakhs',
      exam_fee:1500,
      exam_date:'23 March,2024',
      tags:['Engineering','PCM']
    },
    {
      id:3,
      icon:ExamIcons.upsc,
      exam_name:'SSC CGL 2024',
      board:'Staff Selection Commission',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      exam_date:'23 March,2024',
      tags:['Engineering','PCM']
    },
    {
      id:4,
      icon:ExamIcons.rrb,
      exam_name:'IBPS RRB 2024',
      board:'Railway Recruitment Board',
      applied_people:'7 Lakhs',
      exam_fee:850,
      exam_date:'23 March,2024',
      tags:['Engineering','Degree','PCM']
    },
    {
      id:5,
      icon:ExamIcons.nta,
      exam_name:'NEET 2023',
      board:'National Testing Agency',
      applied_people:'16 Lakhs',
      exam_fee:1700,
      exam_date:'23 March,2024',
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
     exam_date:'23 March,2024',
     tags:['Engineering','PCM']
    },
    {
      id:2,
      icon:ExamIcons.srm,
      exam_name:'SRMJEE 2024',
      board:'SRMIST',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      exam_date:'23 March,2024',
      tags:['Engineering','PCM']
    },
    {
      id:3,
      icon:ExamIcons.tsemacet,
      exam_name:'TS EAMCT 2024',
      board:'TSCHE',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      exam_date:'23 March,2024',
      tags:['Engineering','PCM']
    },
    {
      id:4,
      icon:ExamIcons.osmania,
      exam_name:'OUCET',
      board:'Osmania University',
      applied_people:'7 Lakhs',
      exam_fee:800,
      exam_date:'23 March,2024',
      tags:['Engineering','Degree','PCM']
    },
    {
      id:5,
      icon:ExamIcons.au,
      exam_name:'AUEET 2024',
      board:'Andhra University',
      applied_people:'5 Lakhs',
      exam_fee:600,
      exam_date:'23 March,2024',
      tags:['Engineering','Degree','PCM']
    }
  ];

  const RecentExamTags =['ALL', 'GATE', 'AP EAPCET', 'BITSAT', 'JEE MAINS', 'JEE Advanced', 'TS EAMCET', 'Amity JEE', 'NEET', 'VITEEE', 'WBJEE', 'KCET', 'SRMJEEE', 'COMEDK', 'MHT CET', 'UPSEE', 'TANCET', 'KIITEE', 'GUJCET', 'Karnataka PGCET', 'OJEE', 'BVP CET', 'LPUNEST', 'SAAT', 'KIIT Entrance Exam', 'CUCET', 'AIIMS', 'AFMC', 'JIPMER', 'CMC Vellore', 'MANIPAL MET', 'IISER', 'NATA', 'CEED'];
//   {
//     
// JEE Main is a standardized test conducted across different states in India
// The exam is held at an undergraduate level to offer admissions to some of the best engineering and technical institutions that are Government funded or privately-owned.
// -The exam conducting authority considers the best NTA score in preparing the ranks/merit list
// Eligibility:
// Age Limit-No age limit
// Qualifying Exam-Class 12/Equivalent Exam
// Percentage At least 75% in class 12/equivalent exam
// Year of Passing-2021,2022 or appearing in 2023
// Number of attempts Candidate can appear in JEE Main for 3 consecutive years after passing their class 12/equivalent exam
// Important Details:
// JEE Main 2023 January Session: NTA released the JEE Main 2023 session 1 will be conducted between 24th January and Ist February, 2023.
// JEE Main 2023 April Session: NTA released the JEE Main 2023 session I will be conducted between Ist April, 2023 and 15th April. 2023
//   }
const DetailedDescription =[{
  descType:'Exam Description',
  ExamDescription: [
  'This Exam is a standardized test conducted across different states in India',
  'This exam is held at an undergraduate level to offer admissions to some of the best engineering and technical institutions that are Government funded or privately-owned.',
  'This exam conducting authority considers the best NTA score in preparing the ranks/merit list'
  ]
},
   {
    descType:'Eligibility',
    Eligibility:[
    'Age Limit-No age limit',
    'Qualifying Exam-Class 12/Equivalent Exam',
    'Percentage At least 75% in class 12/equivalent exam',
    'Year of Passing-2021,2022 or appearing in 2023',
    'Number of attempts Candidate can appear in JEE Main for 3 consecutive years after passing their class 12/equivalent exam'
  ]
},{
  descType: 'Important Details',
  ImportantDetails:[
    'Exam 2023 January Session: NTA released the Exam 2023 session 1 will be conducted between 24th January and Ist February, 2023.',
    'Exam 2023 April Session: NTA released the Exam 2023 session I will be conducted between Ist April, 2023 and 15th April. 2023'
  ]
}]


export {RecommendedExamsData , RecentExamsData ,RecentExamTags,DetailedDescription} 