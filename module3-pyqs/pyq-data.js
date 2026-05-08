/**
 * PYQ Data Layer — EduExam Hub
 * Manages all paper metadata in localStorage.
 * No backend required — works fully in-browser.
 */

const PYQ_STORAGE_KEY = 'eduexam_pyq_data';
const PYQ_DOWNLOADS_KEY = 'eduexam_pyq_downloads';

// ── Seed Data ────────────────────────────────────────────────
// Pre-loaded demo papers. Only inserted once on first load.
const SEED_DATA = [

  // ── SEMESTER 1 ──────────────────────────────────────────────
  { id: 's1-math1-1', sem: '1', subject: 'Mathematics-I',
    title: 'Mathematics-I — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-10', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-math1-2', sem: '1', subject: 'Mathematics-I',
    title: 'Mathematics-I — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-15', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-math1-3', sem: '1', subject: 'Mathematics-I',
    title: 'Mathematics-I — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-09-20', size: '780 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's1-eng1-1', sem: '1', subject: 'Applied-English',
    title: 'Applied English — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-12', size: '900 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-eng1-2', sem: '1', subject: 'Applied-English',
    title: 'Applied English — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-18', size: '850 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's1-cf1-1', sem: '1', subject: 'Computer-Fundamentals',
    title: 'Computer Fundamentals — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-01-08', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-cf1-2', sem: '1', subject: 'Computer-Fundamentals',
    title: 'Computer Fundamentals — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-05', size: '640 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's1-cp1-1', sem: '1', subject: 'C-Programming',
    title: 'C Programming — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-01-10', size: '1.3 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-cp1-2', sem: '1', subject: 'C-Programming',
    title: 'C Programming — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-14', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-cp1-3', sem: '1', subject: 'C-Programming',
    title: 'C Programming — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-09-25', size: '720 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's1-oat1-1', sem: '1', subject: 'Office-Automation-Tools',
    title: 'Office Automation — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-16', size: '950 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's1-oat1-2', sem: '1', subject: 'Office-Automation-Tools',
    title: 'Office Automation — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-20', size: '880 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  // ── SEMESTER 2 ──────────────────────────────────────────────
  { id: 's2-math2-1', sem: '2', subject: 'Mathematics-II',
    title: 'Mathematics-II — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-10', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's2-math2-2', sem: '2', subject: 'Mathematics-II',
    title: 'Mathematics-II — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-06-14', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's2-eng2-1', sem: '2', subject: 'Communicative-English',
    title: 'Communicative English — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-12', size: '860 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's2-de2-1', sem: '2', subject: 'Digital-Electronics',
    title: 'Digital Electronics — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-08', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's2-de2-2', sem: '2', subject: 'Digital-Electronics',
    title: 'Digital Electronics — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-10', size: '700 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's2-ds2-1', sem: '2', subject: 'Data-Structures',
    title: 'Data Structures — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-10', size: '1.3 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's2-ds2-2', sem: '2', subject: 'Data-Structures',
    title: 'Data Structures — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-14', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's2-dbms2-1', sem: '2', subject: 'DBMS',
    title: 'DBMS — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-12', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's2-dbms2-2', sem: '2', subject: 'DBMS',
    title: 'DBMS — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-18', size: '760 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  // ── SEMESTER 3 ──────────────────────────────────────────────
  { id: 's3-math3-1', sem: '3', subject: 'Mathematics-III',
    title: 'Mathematics-III — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-10', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's3-math3-2', sem: '3', subject: 'Mathematics-III',
    title: 'Mathematics-III — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-14', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's3-bp3-1', sem: '3', subject: 'Business-Practices',
    title: 'Business Practices — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-12', size: '900 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's3-co3-1', sem: '3', subject: 'Computer-Organization',
    title: 'Computer Organization — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-01-08', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's3-co3-2', sem: '3', subject: 'Computer-Organization',
    title: 'Computer Organization — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-05', size: '640 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's3-oops3-1', sem: '3', subject: 'OOPs-with-C++',
    title: 'OOPs with C++ — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-01-10', size: '1.3 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's3-oops3-2', sem: '3', subject: 'OOPs-with-C++',
    title: 'OOPs with C++ — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-14', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's3-oops3-3', sem: '3', subject: 'OOPs-with-C++',
    title: 'OOPs with C++ — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-09-25', size: '720 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's3-dtp3-1', sem: '3', subject: 'Desktop-Publishing',
    title: 'Desktop Publishing — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-16', size: '950 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  // ── SEMESTER 4 ──────────────────────────────────────────────
  { id: 's4-pm4-1', sem: '4', subject: 'Personnel-Management',
    title: 'Personnel Management — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-10', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's4-pm4-2', sem: '4', subject: 'Personnel-Management',
    title: 'Personnel Management — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-06-14', size: '920 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's4-acc4-1', sem: '4', subject: 'Accounting',
    title: 'Accounting — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-08', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's4-acc4-2', sem: '4', subject: 'Accounting',
    title: 'Accounting — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-10', size: '750 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's4-sad4-1', sem: '4', subject: 'System-Analysis-and-Design',
    title: 'System Analysis & Design — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-10', size: '1.3 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's4-sad4-2', sem: '4', subject: 'System-Analysis-and-Design',
    title: 'System Analysis & Design — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-14', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's4-web4-1', sem: '4', subject: 'Internet-Tech-and-Web-Design',
    title: 'Internet Tech & Web Design — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-12', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's4-web4-2', sem: '4', subject: 'Internet-Tech-and-Web-Design',
    title: 'Internet Tech & Web Design — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-18', size: '760 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's4-vb4-1', sem: '4', subject: 'Visual-Basic',
    title: 'Visual Basic — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-16', size: '980 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's4-vb4-2', sem: '4', subject: 'Visual-Basic',
    title: 'Visual Basic — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-06-20', size: '900 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  // ── SEMESTER 5 ──────────────────────────────────────────────
  { id: 's5-os5-1', sem: '5', subject: 'Operating-System',
    title: 'Operating System — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-10', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-os5-2', sem: '5', subject: 'Operating-System',
    title: 'Operating System — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-14', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-os5-3', sem: '5', subject: 'Operating-System',
    title: 'Operating System — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-09-20', size: '780 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's5-ec5-1', sem: '5', subject: 'E-Commerce',
    title: 'E-Commerce — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-12', size: '900 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-ec5-2', sem: '5', subject: 'E-Commerce',
    title: 'E-Commerce — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-18', size: '850 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's5-mis5-1', sem: '5', subject: 'Management-Information-System',
    title: 'MIS — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-01-08', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-mis5-2', sem: '5', subject: 'Management-Information-System',
    title: 'MIS — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-05', size: '640 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's5-asp5-1', sem: '5', subject: 'ASP.net-Technologies',
    title: 'ASP.net Technologies — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-01-10', size: '1.3 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-asp5-2', sem: '5', subject: 'ASP.net-Technologies',
    title: 'ASP.net Technologies — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-14', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-asp5-3', sem: '5', subject: 'ASP.net-Technologies',
    title: 'ASP.net Technologies — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-09-25', size: '720 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's5-stat5-1', sem: '5', subject: 'Statistical-Methods',
    title: 'Statistical Methods — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-01-16', size: '950 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's5-stat5-2', sem: '5', subject: 'Statistical-Methods',
    title: 'Statistical Methods — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-01-20', size: '880 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  // ── SEMESTER 6 ──────────────────────────────────────────────
  { id: 's6-cn6-1', sem: '6', subject: 'Computer-Networks',
    title: 'Computer Networks — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-10', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-cn6-2', sem: '6', subject: 'Computer-Networks',
    title: 'Computer Networks — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-06-14', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-cn6-3', sem: '6', subject: 'Computer-Networks',
    title: 'Computer Networks — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-08', size: '700 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's6-nm6-1', sem: '6', subject: 'Numerical-Methods',
    title: 'Numerical Methods — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-12', size: '1.0 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-nm6-2', sem: '6', subject: 'Numerical-Methods',
    title: 'Numerical Methods — 2022 Final Exam', year: '2022', type: 'Final Exam',
    date: '2023-06-16', size: '940 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's6-mm6-1', sem: '6', subject: 'Multimedia-Technology',
    title: 'Multimedia Technology — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-08', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-mm6-2', sem: '6', subject: 'Multimedia-Technology',
    title: 'Multimedia Technology — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-10', size: '680 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's6-cg6-1', sem: '6', subject: 'Computer-Graphics',
    title: 'Computer Graphics — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-10', size: '1.3 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-cg6-2', sem: '6', subject: 'Computer-Graphics',
    title: 'Computer Graphics — 2023 Final Exam', year: '2023', type: 'Final Exam',
    date: '2024-06-14', size: '1.1 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-cg6-3', sem: '6', subject: 'Computer-Graphics',
    title: 'Computer Graphics — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-18', size: '760 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },

  { id: 's6-se6-1', sem: '6', subject: 'Software-Engineering',
    title: 'Software Engineering — 2024 Final Exam', year: '2024', type: 'Final Exam',
    date: '2025-06-12', size: '1.2 MB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
  { id: 's6-se6-2', sem: '6', subject: 'Software-Engineering',
    title: 'Software Engineering — 2023 Mid Term', year: '2023', type: 'Mid Term',
    date: '2023-10-20', size: '740 KB',
    url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFqL8S5LnFqjmBl6kjHo7f/view' },
];

// ── Subject map per semester (for admin dropdowns) ───────────
const SUBJECTS_BY_SEM = {
  '1': ['Mathematics-I','Applied-English','Computer-Fundamentals','C-Programming','Office-Automation-Tools'],
  '2': ['Mathematics-II','Communicative-English','Digital-Electronics','Data-Structures','DBMS'],
  '3': ['Mathematics-III','Business-Practices','Computer-Organization','OOPs-with-C++','Desktop-Publishing'],
  '4': ['Personnel-Management','Accounting','System-Analysis-and-Design','Internet-Tech-and-Web-Design','Visual-Basic'],
  '5': ['Operating-System','E-Commerce','Management-Information-System','ASP.net-Technologies','Statistical-Methods'],
  '6': ['Computer-Networks','Numerical-Methods','Multimedia-Technology','Computer-Graphics','Software-Engineering'],
};

// ── Init: load or seed localStorage ─────────────────────────
function initPYQData() {
  if (!localStorage.getItem(PYQ_STORAGE_KEY)) {
    localStorage.setItem(PYQ_STORAGE_KEY, JSON.stringify(SEED_DATA));
  }
  if (!localStorage.getItem(PYQ_DOWNLOADS_KEY)) {
    localStorage.setItem(PYQ_DOWNLOADS_KEY, JSON.stringify({}));
  }
}

// ── CRUD helpers ─────────────────────────────────────────────
function getAllPapers() {
  initPYQData();
  return JSON.parse(localStorage.getItem(PYQ_STORAGE_KEY)) || [];
}

function getPapers(sem, subject) {
  return getAllPapers().filter(p => p.sem === String(sem) && p.subject === subject);
}

function savePaper(paper) {
  const all = getAllPapers();
  paper.id = paper.id || ('p-' + Date.now());
  all.push(paper);
  localStorage.setItem(PYQ_STORAGE_KEY, JSON.stringify(all));
  return paper;
}

function deletePaper(id) {
  const all = getAllPapers().filter(p => p.id !== id);
  localStorage.setItem(PYQ_STORAGE_KEY, JSON.stringify(all));
}

// ── Download counter ─────────────────────────────────────────
function getDownloadCount(id) {
  const counts = JSON.parse(localStorage.getItem(PYQ_DOWNLOADS_KEY)) || {};
  return counts[id] || 0;
}

function incrementDownload(id) {
  const counts = JSON.parse(localStorage.getItem(PYQ_DOWNLOADS_KEY)) || {};
  counts[id] = (counts[id] || 0) + 1;
  localStorage.setItem(PYQ_DOWNLOADS_KEY, JSON.stringify(counts));
  return counts[id];
}

// ── Type badge colours ───────────────────────────────────────
function getTypeBadgeClass(type) {
  switch (type) {
    case 'Final Exam':    return 'badge-final';
    case 'Mid Term':      return 'badge-mid';
    case 'Supplementary': return 'badge-supp';
    default:              return 'badge-other';
  }
}

// ── Expose globally ──────────────────────────────────────────
window.PYQ = {
  getAllPapers, getPapers, savePaper, deletePaper,
  getDownloadCount, incrementDownload,
  getTypeBadgeClass, SUBJECTS_BY_SEM, initPYQData
};

// Auto-init
initPYQData();
