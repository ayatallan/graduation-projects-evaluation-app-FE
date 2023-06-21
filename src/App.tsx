import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MyNavbar from './components/common/nav-bar/nav';
import SignInPage from './pages/sign-in/sign-in.page';
import GroupsPage from './pages/Groups/Groups.pages';
import EvaluationPage from './pages/Evaluation/Evaluation.page';
import StudentEvaluationPage from './pages/Student-Evaluation/student-evaluation.page';
import SoftwareReport from './components/common/questions/question';
import QuestionsForm from './components/common/questions/questions-form';

import { Question } from './interface';

import './App.css';
import Student from './components/common/students/students';
import CreateInstructorPage from './pages/add-instructor/instructor.page';
import CreateStudentPage from './pages/add-student/student.page';

function App() {

  // const navigate = useNavigate();
  const [initialLocation, setInitialLocation] = useState('');

  useEffect(() => {
    setInitialLocation(window.location.pathname);
  }, []);
  const Path: String = `${initialLocation}`;

  const [questions, setQuestions] = useState<Question[]>(() => {
    const savedQuestions = localStorage.getItem('questions');
    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  const handleSubmit = (question: string, options: string[], type: string, Class: string, weight: number) => {
    const newQuestion: Question = {
      id: Date.now(),
      question: question,
      options: options,
      type: type,
      Class: Class,
      weight: weight,
    };

    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);

    // Save the updated questions to local storage
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    console.log('Updated Questions:', updatedQuestions);
    // navigate('/Questions');


  };

  return (
    <div className="App">
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/add-questions" element={<QuestionsForm onSubmit={handleSubmit} />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/Groups" element={<GroupsPage path={Path} />} />
          <Route path="/Questions" element={<SoftwareReport quizData={questions} path="/Questions" />} />
          <Route path="/Evaluation" element={<EvaluationPage />} />
          <Route path="/StudentEvaluation" element={<StudentEvaluationPage />} />
          <Route path="/add-instructor" element={<CreateInstructorPage />} />
          <Route path="/add-student" element={<CreateStudentPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;